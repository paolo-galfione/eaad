import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdottoService } from '../services/prodotto-service';

const ADD_TITLE = 'Aggiornamento di un prodotto';
const UPDATE_TITLE = 'Inserimento di un nuovo prodotto';

@Component({
  templateUrl: './prodotto-edit.component.html'
})
export class ProdottoEditComponent implements OnInit {
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private prodottoService: ProdottoService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.title = id ? UPDATE_TITLE : ADD_TITLE;
    this.prodottoService.getById(id).subscribe(item => {
      this.form = this.fb.group(item);
    });
  }

  onSubmit() {
    this.prodottoService
      .save(this.form.value).subscribe(() => {}, err => alert(err));
    this.backToList();
  }

  backToList() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
