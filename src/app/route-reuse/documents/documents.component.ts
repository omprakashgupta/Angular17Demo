import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Document {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'Financial' | 'Technical' | 'Management';
}

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit {
  documents: Document[] = [];
  allDocuments: Document[] = [];
  selectedCategories: Set<string> = new Set(['Financial', 'Technical', 'Management']);
  searchText: string = '';

  ngOnInit() {
    // Sample data - This will be cached when navigating away
    this.allDocuments = [
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

    this.applyFilters();
    console.log('Documents component initialized - this view will be cached!');
    console.log('Try filtering documents, navigate to details, then return to see the filters preserved!');
  }

  toggleCategory(category: string): void {
    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category);
    } else {
      this.selectedCategories.add(category);
    }
    this.applyFilters();
  }

  onSearchChange(text: string): void {
    this.searchText = text.toLowerCase();
    this.applyFilters();
  }

  applyFilters(): void {
    this.documents = this.allDocuments.filter(doc => {
      const matchesCategory = this.selectedCategories.has(doc.category);
      const matchesSearch = this.searchText === '' || 
                           doc.title.toLowerCase().includes(this.searchText) ||
                           doc.description.toLowerCase().includes(this.searchText);
      return matchesCategory && matchesSearch;
    });

    console.log(`Filtered documents: ${this.documents.length} of ${this.allDocuments.length}`);
  }

  isCategorySelected(category: string): boolean {
    return this.selectedCategories.has(category);
  }

  clearFilters(): void {
    this.selectedCategories = new Set(['Financial', 'Technical', 'Management']);
    this.searchText = '';
    this.applyFilters();
  }

  getDocumentDetail(id: number) {
    return this.documents.find(doc => doc.id === id);
  }
}
