import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ColumnField } from 'eal-toolbox';

import { <%=classify(name)%> } from '../interfaces/<%=dasherize(name)%>';
import { <%=classify(name)%>Service } from '../services/<%=dasherize(name)%>-service';

@Component({
  templateUrl: './<%=dasherize(name)%>-list.component.html'
})
export class <%=classify(name)%>ListComponent implements OnInit {
  fields: ColumnField[] = [
<% for(let i=0; i<tableColumns.length; i++) { %>     {name: <%=tableColumns[i]%>, title: '<%=fields[tableColumns[i]].label%>'}<%=(i+1 === tableColumns.length)?'':','%>
<% } %>
  ];
  <%=camelize(name)%>List: Observable<<%=classify(name)%>[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private <%=camelize(name)%>Service: <%=classify(name)%>Service) { }

  ngOnInit() {
    this.load<%=classify(name)%>List();
  }

  load<%=classify(name)%>List() {
    this.<%=camelize(name)%>List = this.<%=camelize(name)%>Service.get();
  }

  add<%=classify(name)%>() {
    this.edit<%=classify(name)%>(0);
  }

  edit<%=classify(name)%>(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  delete<%=classify(name)%>(id: number) {
    this.<%=camelize(name)%>Service.delete(id).subscribe(() => {}, err => alert(err));
    this.load<%=classify(name)%>List();
  }

}
