import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EaClienteService } from '../services/ea-cliente-service';

const ADD_TITLE = 'Inserimento di un nuovo cliente';
const UPDATE_TITLE = 'Aggiornamento di un cliente';

@Component({
  templateUrl: './ea-cliente-edit.component.html'
})
export class EaClienteEditComponent implements OnInit {
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private eaClienteService: EaClienteService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.title = id ? UPDATE_TITLE : ADD_TITLE;
    this.eaClienteService.getById(id).subscribe(item => {
      this.form = this.fb.group(item);
    });
  }

  onSubmit() {
    this.eaClienteService
      .save(this.form.value).subscribe(() => {}, err => alert(err));
    this.backToList();
  }

  backToList() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
