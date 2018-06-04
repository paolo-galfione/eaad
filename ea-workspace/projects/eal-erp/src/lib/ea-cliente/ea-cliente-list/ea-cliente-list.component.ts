import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ColumnField } from 'eal-toolbox';

import { EaCliente } from '../interfaces/ea-cliente';
import { EaClienteService } from '../services/ea-cliente-service';

@Component({
  templateUrl: './ea-cliente-list.component.html'
})
export class EaClienteListComponent implements OnInit {
  fields: ColumnField[] = [
    {name: 'id', title: 'Id'},
    {name: 'ragioneSociale', title: 'Ragione sociale'},
    {name: 'contatto', title: 'Contatto'},
    {name: 'citta', title: 'Città'}
  ];
  eaClienteList: Observable<EaCliente[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private eaClienteService: EaClienteService) { }

  ngOnInit() {
    this.loadEaClienteList();
  }

  loadEaClienteList() {
    this.eaClienteList = this.eaClienteService.get();
  }

  addEaCliente() {
    this.editEaCliente(0);
  }

  editEaCliente(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  deleteEaCliente(id: number) {
    this.eaClienteService.delete(id).subscribe(() => {}, err => alert(err));
    this.loadEaClienteList();
  }

}
