import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EaCliente } from '../interfaces/ea-cliente';
import { EaClienteService } from '../services/ea-cliente-service';
import { ColumnField } from 'eal-toolbox/lib/interfaces/column-field';

@Component({
  templateUrl: './ea-cliente-list.component.html',
  styleUrls: ['./ea-cliente-list.component.css']
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
