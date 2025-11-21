import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpEventType } from '@angular/common/http';

@Component({
    selector: 'app-file-upload',
    standalone: true,
    imports: [CommonModule, HttpClientModule],
    templateUrl: './file-upload.component.html',
    styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
    selectedFile: File | null = null;
    uploadProgress: number = 0;
    uploadStatus: string = '';
    isUploading: boolean = false;

    constructor(private http: HttpClient) { }

    onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
            this.selectedFile = file;
            this.uploadStatus = `File "${file.name}" selected (${this.formatFileSize(file.size)})`;
            this.uploadProgress = 0;
        }
    }

    uploadFile(): void {
        if (!this.selectedFile) {
            this.uploadStatus = 'Please select a file first!';
            return;
        }

        const formData = new FormData();
        formData.append('file', this.selectedFile, this.selectedFile.name);

        this.isUploading = true;
        this.uploadStatus = 'Uploading...';

        // Replace with your actual server endpoint
        const uploadUrl = 'http://localhost:23888/api/upload/file';

        this.http.post(uploadUrl, formData, {
            reportProgress: true,
            observe: 'events'
        }).subscribe({
            next: (event: any) => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.uploadProgress = Math.round((100 * event.loaded) / event.total);
                } else if (event.type === HttpEventType.Response) {
                    this.uploadStatus = 'Upload successful!';
                    this.isUploading = false;
                    console.log('Server response:', event.body);
                }
            },
            error: (error) => {
                console.error('Upload error:', error);
                this.uploadStatus = `Upload failed: ${error.message}`;
                this.isUploading = false;
                this.uploadProgress = 0;
            }
        });
    }

    uploadLargeFile(): void {
        const chunkSize = 1024 * 50; // 0.05MB
        const totalChunks = Math.ceil(this.selectedFile.size / chunkSize);
        let offset = 0;
        let chunkNumber = 0;

        // Precompute checksum (optional, SHA-256)
        const reader = new FileReader();
        reader.onload = async () => {
            const buffer = reader.result as ArrayBuffer;
            const digest = await crypto.subtle.digest("SHA-256", buffer);
            const checksum = Array.from(new Uint8Array(digest))
                .map(b => b.toString(16).padStart(2, "0"))
                .join("");

            while (offset < this.selectedFile.size) {
                const chunk = this.selectedFile.slice(offset, offset + chunkSize);
                const formData = new FormData();
                formData.append('chunk', chunk, this.selectedFile.name);
                formData.append('fileName', this.selectedFile.name);
                formData.append('chunkNumber', chunkNumber.toString());
                formData.append('totalChunks', totalChunks.toString());
                formData.append('checksum', checksum);

                this.http.post('http://localhost:23888/api/upload/chunk', formData)
                    .subscribe({
                        next: res => console.log('Chunk uploaded:', res),
                        error: err => console.error('Error uploading chunk:', err)
                    });

                offset += chunkSize;
                chunkNumber++;
            }
        };

        reader.readAsArrayBuffer(this.selectedFile);
    }

    clearFile(): void {
        this.selectedFile = null;
        this.uploadProgress = 0;
        this.uploadStatus = '';
        this.isUploading = false;
    }

    private formatFileSize(bytes: number): string {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
}
