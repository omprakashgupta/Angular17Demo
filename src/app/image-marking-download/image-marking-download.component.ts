import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

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
            name: 'Toe Box',
            description: 'The front part of the shoe that surrounds the toes.',
            imageUrl: 'assets/images/toe-box.jpg',
            x: 267, // Example x-coordinate (pixels)
            y: 142  // Example y-coordinate (pixels)
        },
        {
            number: 2,
            name: 'Vamp',
            description: 'The front part of the upper that covers the toes and instep.',
            imageUrl: 'assets/images/vamp.jpg',
            x: 350,
            y: 480
        },
        {
            number: 3,
            name: 'Vamp',
            description: 'The front part of the upper that covers the toes and instep.',
            imageUrl: 'assets/images/vamp.jpg',
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
                context.beginPath();
                context.arc(marker.x, marker.y, 5, 0, 2 * Math.PI);
                context.fillStyle = 'white';
                context.fill();
            });

            // Convert canvas to a downloadable image
            const link = document.createElement('a');
            link.download = 'image-with-markers.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    }
}
