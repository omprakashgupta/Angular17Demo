import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-image-marking',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './image-marking.component.html',
    styleUrl: './image-marking.component.css'
})
export class ImageMarkingComponent {
    selectedPart: any;
    buttonNumber: number = 0;
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

    selectPart(part) {
        this.selectedPart = part;
    }

    // @HostListener('document:click', ['$event'])
    // getPosition(event: MouseEvent): void {
    //     this.buttonNumber++;
    //     this.shoeParts.push({
    //         number: this.buttonNumber,
    //         name: 'Vamp',
    //         description: 'The front part of the upper that covers the toes and instep.',
    //         imageUrl: 'assets/images/vamp.jpg',
    //         x: event.clientX,
    //         y: event.clientY
    //     })
    // }

    protected imageClick(event: MouseEvent): void {
        this.buttonNumber++;
        this.shoeParts.push({
            number: this.buttonNumber,
            name: 'Vamp',
            description: 'The front part of the upper that covers the toes and instep.',
            imageUrl: 'assets/images/vamp.jpg',
            x: event.clientX,
            y: event.clientY
        })
    }
}
