import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ColumnField } from 'eal-toolbox';

import { Prodotto } from '../interfaces/prodotto';
import { ProdottoService } from '../services/prodotto-service';

@Component({
  templateUrl: './prodotto-list.component.html'
})
export class ProdottoListComponent implements OnInit {
  fields: ColumnField[] = [
     {name: 'id', title: 'Id'},
     {name: 'descrizione', title: 'Descrizione'},
     {name: 'tipologia', title: 'Tipo prodotto'},
     {name: 'prezzo', title: 'Prezzo'}

  ];
  prodottoList: Observable<Prodotto[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private prodottoService: ProdottoService) { }

  ngOnInit() {
    this.loadProdottoList();
  }

  loadProdottoList() {
    this.prodottoList = this.prodottoService.get();
  }

  addProdotto() {
    this.editProdotto(0);
  }

  editProdotto(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  deleteProdotto(id: number) {
    this.prodottoService.delete(id).subscribe(() => {}, err => alert(err));
    this.loadProdottoList();
  }

}
