import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CompanyService} from "../../services/company.service";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-company-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TitleCasePipe
  ],
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.css'
})
export class CompanyFilterComponent implements OnInit {
  filterForm = new FormGroup({
    search: new FormControl(''),
    type: new FormControl(''),
    industry: new FormControl(''),
  });

  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this.filterForm.valueChanges.subscribe(filterValues => {
      this.companyService.filterCompanies(filterValues);
    });
  }
}
