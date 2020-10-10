import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Enrollee } from '../../models/enrollee';
import { EnrolleeService } from '../../services/enrollee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-update-enrollee-form',
  templateUrl: './create-update-enrollee-form.component.html',
  styleUrls: ['./create-update-enrollee-form.component.scss']
})
export class CreateUpdateEnrolleeFormComponent implements OnInit {
  enrolleeForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUpdateEnrolleeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Enrollee,
    private fb: FormBuilder,
    private enrolleeService: EnrolleeService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm(this.data);
  }

  // Enrollee Form to create or update
  initForm(data: Enrollee) {
    this.enrolleeForm = this.fb.group({
      id: [data.id],
      name: [data.name],
      active: [data.active],
      dateOfBirth: [data.dateOfBirth]
    });
  }

  onSubmit() {
    this.enrolleeService.updateEnrollee(this.enrolleeForm.value).subscribe(
      () => {
        this.notifyMessage('Updated Successfully!!', 'success');
      },
      () => {
        this.notifyMessage('Update failed!!', 'failure');
      }
    );
  }

  // notify user about update status using material snack bar
  notifyMessage(message, messageColor) {
    this._snackBar.open(message, '', {
      duration: 1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: messageColor
    });
  }
}
