import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export interface Filter {
  name: string;
  from: number,
  to: number,
  active: boolean
}

const filter: Filter[] = [
  {name: 'Sub1',   from: 10, to: 50, active: true},
  {name: 'Title2', from: 0, to: 100, active: false},
  {name: 'Title3', from: 0, to: 100, active: false},
  {name: 'Title4', from: 0, to: 100, active: false},
  {name: 'Title5', from: 0, to: 100, active: false}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  dataSource = new TableDataSource(filter);
  displayedColumns: string[] = ['name', 'from', 'range', 'to'];
  filters: Filter[];
  slidersRefresh: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<TableComponent>
  ) {
    this.dataSource.data$.subscribe(data => this.filters = data);
    this.dialogRef.afterOpen().subscribe(() => this.slidersRefresh.emit());
  }

  close(): void {
    this.dialogRef.close();
  }

  reset(): void {
    this.dataSource = new TableDataSource(this.filters.map(f => {
      f.active = true;
      f.from = 0;
      f.to = 100;
      return f;
    }));
  }


}

export class TableDataSource extends DataSource<any> {
  data$: Observable<Filter[]>;
  constructor(data: Filter[]) {
    super();
    this.data$ = of(data);
  }
  connect(): Observable<Filter[]> {
    return this.data$;
  }

  disconnect() {}
}