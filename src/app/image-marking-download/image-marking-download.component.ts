import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-image-marking-download',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './image-marking-download.component.html',
    styleUrl: './image-marking-download.component.css'
})
export class ImageMarkingDownloadComponent {

    @ViewChild('imageContainer') imageContainer!: ElementRef;

    shoeParts = [
        {
            number: 1,
            x: 267, // Example x-coordinate (pixels)
            y: 142  // Example y-coordinate (pixels)
        },
        {
            number: 2,
            x: 350,
            y: 480
        },
        {
            number: 3,
            x: 250,
            y: 400
        },
    ];


    downloadImage(): void {
        // Get the base image
        const baseImage = document.getElementById('baseImage') as HTMLImageElement;

        // Create a canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas dimensions to match the image
        canvas.width = baseImage.width;
        canvas.height = baseImage.height;

        if (context) {
            // Draw the base image onto the canvas
            context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height);

            // Add markers
            const markers = [
                { x: 267, y: 142, color: 'red', radius: 5 }, // Example marker
                { x: 350, y: 480, color: 'blue', radius: 5 },
            ];

            this.shoeParts.forEach(marker => {
                // Draw the circle
                context.beginPath();
                context.arc(marker.x, marker.y, 15, 0, 2 * Math.PI);
                context.fillStyle = 'white';
                context.fill();

                // Draw the number inside the circle
                context.fillStyle = 'black'; // Text color
                context.font = '12px Arial'; // Set font size and style
                context.textAlign = 'center'; // Align text horizontally
                context.textBaseline = 'middle'; // Align text vertically
                context.fillText(marker.number.toString(), marker.x, marker.y); // Draw the number (starting from 1)
            });

            // Convert canvas to a downloadable image
            const link = document.createElement('a');
            link.download = 'image-with-markers.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    }

    public fn_GetImageMarkerBase64(imageUrl: string, markerPoints: { X: number; Y: number; Name: string }[]): Promise<string> {
        return new Promise((resolve, reject) => {
            const baseImage = new Image();
            baseImage.crossOrigin = 'anonymous'; // Enables CORS
            baseImage.src = imageUrl;
    
            baseImage.onload = () => {
                // Create a canvas
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
    
                // Set canvas dimensions to match the image
                canvas.width = baseImage.width;
                canvas.height = baseImage.height;
    
                if (context) {
                    // Draw the base image onto the canvas
                    context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height);
    
                    // Draw the marker points
                    markerPoints.forEach(marker => {
                        // If the value is in percent
                        // const startX = marker.X;
                        // const startY = marker.Y;
    
                        // Calculate absolute value of coordinates (X, Y)
                        const startX = (marker.X * canvas.width) / 100;
                        const startY = (marker.Y * canvas.height) / 100;

                        // Draw the circle
                        context.beginPath();
                        context.arc(startX, startY, 15, 0, 2 * Math.PI);
                        context.fillStyle = 'white';
                        context.fill();
    
                        // Draw the text inside the circle
                        context.fillStyle = 'black'; // Text color
                        context.font = '12px Arial'; // Set font size and style
                        context.textAlign = 'center'; // Align text horizontally
                        context.textBaseline = 'middle'; // Align text vertically
                        context.fillText(marker.Name, startX, startY); // Marker Name
                    });
    
                    // Convert canvas to Base64 and resolve the promise
                    const base64 = canvas.toDataURL('image/png');
                    resolve(base64); // Return Base64 string
                } else {
                    reject('Canvas context is not available.');
                }
            };
    
            baseImage.onerror = () => {
                reject('Failed to load image.');
            };
        });
    }
}
