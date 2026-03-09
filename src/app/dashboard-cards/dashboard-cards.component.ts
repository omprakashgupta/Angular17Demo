import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './dashboard-cards.component.html',
  styleUrl: './dashboard-cards.component.css'
})
export class DashboardCardsComponent {
  card1 = { header: 'Total Users', caption: 'Active Users', count: 1248 };

  card2 = {
    header: 'Revenue Overview',
    sections: [
      { caption: 'Monthly Revenue', count: 48520 },
      { caption: 'Annual Revenue', count: 582240 }
    ]
  };

  card3 = {
    header: 'Request Summary',
    sections: [
      { caption: 'Total', count: 1250, color: '#5046e5' },
      { caption: 'Approved', count: 980, color: '#10b981' },
      { caption: 'Pending', count: 270, color: '#f59e0b' }
    ]
  };
}
