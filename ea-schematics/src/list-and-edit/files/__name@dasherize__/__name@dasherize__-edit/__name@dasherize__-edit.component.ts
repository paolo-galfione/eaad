import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { <%=classify(name)%>Service } from '../services/<%=dasherize(name)%>-service';

const ADD_TITLE = '<%=updateTitle%>';
const UPDATE_TITLE = '<%=addTitle%>';

@Component({
  templateUrl: './<%=dasherize(name)%>-edit.component.html'
})
export class <%=classify(name)%>EditComponent implements OnInit {
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private <%=camelize(name)%>Service: <%=classify(name)%>Service
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.title = id ? UPDATE_TITLE : ADD_TITLE;
    this.<%=camelize(name)%>Service.getById(id).subscribe(item => {
      this.form = this.fb.group(item);
    });
  }

  onSubmit() {
    this.<%=camelize(name)%>Service
      .save(this.form.value).subscribe(() => {}, err => alert(err));
    this.backToList();
  }

  backToList() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
