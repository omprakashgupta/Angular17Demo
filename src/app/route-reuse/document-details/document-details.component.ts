import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Document } from '../documents/documents.component';

@Component({
  selector: 'app-document-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './document-details.component.html',
  styleUrl: './document-details.component.css'
})
export class DocumentDetailsComponent implements OnInit {
  document: Document | null = null;
  documentId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.documentId = +params['id'];
      this.loadDocument(this.documentId);
    });
  }

  loadDocument(id: number) {
    // Sample data - In a real app, you would fetch from a service
    const documents: Document[] = [
      {
        id: 1,
        title: 'Annual Report 2024',
        description: 'Comprehensive annual report for fiscal year 2024',
        date: '2024-12-01',
        category: 'Financial'
      },
      {
        id: 2,
        title: 'Q4 Financial Summary',
        description: 'Financial summary for Q4 2024',
        date: '2024-12-15',
        category: 'Financial'
      },
      {
        id: 3,
        title: 'Product Roadmap',
        description: 'Product development roadmap for 2025',
        date: '2025-01-10',
        category: 'Management'
      },
      {
        id: 4,
        title: 'User Guide v2.0',
        description: 'Updated user guide documentation',
        date: '2025-01-05',
        category: 'Technical'
      },
      {
        id: 5,
        title: 'Security Protocol',
        description: 'Security and compliance protocols',
        date: '2025-01-08',
        category: 'Technical'
      }
    ];

    this.document = documents.find(doc => doc.id === id) || null;

    if (this.document) {
      console.log(`Loaded document: ${this.document.title}`);
    } else {
      console.log(`Document with id ${id} not found`);
    }
  }
}
