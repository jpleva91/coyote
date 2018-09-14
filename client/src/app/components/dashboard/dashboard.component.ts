import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            imgSrc: 'https://images.unsplash.com/photo-1536756373419-2a0041e192d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f9e91370ef7f20b55fa8972204f7a19&auto=format&fit=crop&w=934&q=80',
            cols: 2,
            rows: 2
          },
          { cols: 2, rows: 2 },
          { cols: 2, rows: 2 },
          { cols: 2, rows: 2 },
        ];
      }

      return [
        {
          imgSrc: 'https://images.unsplash.com/photo-1536824185185-601fb513c9c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=435da801dcef75690399da6d24d69ebd&auto=format&fit=crop&w=1950&q=80',
          cols: 2,
          rows: 2
        },
        { cols: 2, rows: 2 },
        { cols: 2, rows: 2 },
        { cols: 2, rows: 2 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
