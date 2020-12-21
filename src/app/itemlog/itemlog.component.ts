import { Component, OnInit, EventEmitter } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs";
import { of } from "rxjs";


import { DbconnectionService } from "../services/dbconnection.service";
import { Project, mainItem } from "../services/myInterfaces";

export interface Filter {
  name: string;
  from: number;
  to: number;
  active: boolean;
}

const filter: Filter[] = [
  { name: "اعمدة ميزانين الارضي", from: 10, to: 50, active: true },
  { name: "بياض الواجهه الجانبيه 1", from: 0, to: 12, active: true },
  { name: "Title3", from: 40, to: 70, active: true },
  { name: "Title4", from: 15, to: 55, active: true },
  { name: "subsub", from: 15, to: 55, active: true },
  { name: "Title5", from: 80, to: 90, active: true }
];

@Component({
  selector: "app-itemlog",
  templateUrl: "./itemlog.component.html",
  styleUrls: ["./itemlog.component.css"]
})
export class ItemlogComponent implements OnInit {
  //constructor() { }
  currentValue = 0;
  //range slider options
  // source: https://github.com/angular-slider/ngx-slider/blob/HEAD/STYLING.md

  items: Filter[] = [
    { name: "اعمدة ميزانين الارضي", from: 10, to: 50, active: true },
    { name: "بياض الواجهه الجانبيه 1", from: 0, to: 12, active: true },
    { name: "Title3", from: 40, to: 70, active: true },
    { name: "Title4", from: 15, to: 55, active: true },
    { name: "subsub", from: 15, to: 55, active: true },
    { name: "Title5", from: 80, to: 90, active: true }
  ];

  dataSource = new TableDataSource(filter);
  displayedColumns: string[] = ["name", "from", "range", "to"];
  filters: Filter[];
  slidersRefresh: EventEmitter<void> = new EventEmitter<void>();

  currentProject: Project;
  myMainItems: mainItem[];

  constructor(public dbData: DbconnectionService) {
    this.dataSource.data$.subscribe(data => (this.filters = data));
  }

  ngOnInit() {
    this.currentProject = this.dbData.getProject();
    this.myMainItems = this.dbData.getAllItems();
    console.log(this.myMainItems[0]);
  }

  reset(): void {
    this.dataSource = new TableDataSource(
      this.filters.map(f => {
        f.active = false;
        f.from = 0;
        f.to = 100;
        return f;
      })
    );
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
