import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActionType } from '../../enums/actionType';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  public _dataSource = new MatTableDataSource();

  @Input() ShowFilter: any = false;
  @Input() companyRole: any = false;

  @Output() isNameClicked = new EventEmitter();

  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }

  @Input() displayedColumns: string[] | undefined;
  @Input() columnsSchema: any[] | undefined;

  @Output() isActionClicked = new EventEmitter();

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.displayedColumns = this.columnsSchema?.map((col) => col.label);
  }
  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<any>(data);

    this._dataSource.paginator = this.paginator;
  }

  public doFilter = (data: any) => {
    // this._dataSource.filterPredicate  = function(data:any, filter): boolean {
    //   debugger
    //   return String(data?.active).includes(filter);
    // };

    this._dataSource.filter = data?.target.value.trim().toLocaleLowerCase();
  };

  actionClick(type: ActionType, dataItem: any) {
    this.isActionClicked.emit({ type, dataItem });
  }

  handleNameClick(dataItem: any) {
    dataItem.id && this.isNameClicked.emit(dataItem.id);
  }
}
