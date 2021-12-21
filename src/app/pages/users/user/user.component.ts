import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  currentUser!: User | undefined;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      id: [null],
      phoneNumbers: this.fb.array([this.getPhoneNumberGroup()])
    });

    this.route.params.subscribe(params => {
      this.currentUser = this.usersService.getUserById(+params['id']);

      this.form.patchValue({
          name: this.currentUser.name
        }
      );

      this.cdr.markForCheck();
    });

    this.form.valueChanges.subscribe(res => {
      console.log(this.form);
    });
  }

  getPhoneNumberGroup(): FormGroup {
    return this.fb.group({
      number: [null, [Validators.required]],
      numberId: [null]
    });
  }

  getPhoneNumberControls(): Array<FormGroup> {
    return ((this.form.get('phoneNumbers') as FormArray).controls as Array<FormGroup>);
  }

  addPhone() {
    (this.form.get('phoneNumbers') as FormArray).push(this.getPhoneNumberGroup());
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }

  removeElement(inx: number): void {
    (this.form.get('phoneNumbers') as FormArray).removeAt(inx);
  }

}
