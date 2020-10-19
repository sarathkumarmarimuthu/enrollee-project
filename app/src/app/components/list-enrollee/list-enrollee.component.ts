import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Enrollee } from '../../models/enrollee';
import { EnrolleeService } from '../../services/enrollee.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateEnrolleeFormComponent } from '../create-update-enrollee-form/create-update-enrollee-form.component';

@Component({
  selector: 'app-list-enrollee',
  templateUrl: './list-enrollee.component.html',
  styleUrls: ['./list-enrollee.component.scss'],
})
export class ListEnrolleeComponent implements OnInit {
  // Material table config's
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Enrollee> = new MatTableDataSource();

  // Define columns to material table
  displayedColumns: string[] = [
    'actions',
    'id',
    'name',
    'active',
    'dateOfBirth',
  ];

  constructor(
    public dialog: MatDialog,
    private enrolleeService: EnrolleeService
  ) {}

  async ngOnInit() {
    await this.refresh();
  }

  refresh() {
    this.enrolleeService.getAllEnrollees().subscribe((enrollees) => {
      this.dataSource.data = enrollees;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onEnrolleeUpdate(id) {
    this.enrolleeService.getEnrolleeById(id).subscribe((enrollee) => {
      return this.openDialog(enrollee);
    });
  }

  async openDialog(data) {
    await this.dialog
      .open(CreateUpdateEnrolleeFormComponent, {
        width: '800px',
        data,
      })
      .afterClosed()
      .subscribe((result) => {
        this.onDialogClosed(result);
      });
  }

  onDialogClosed(reason: string) {
    if (reason !== 'cancelled') {
      this.refresh();
    }
  }
}
