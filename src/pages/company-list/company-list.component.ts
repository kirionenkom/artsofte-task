import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {NgForOf} from "@angular/common";
import {CompanyItemComponent} from "../../components/company-item/company-item.component";
import {CompanySortComponent} from "../../components/company-sort/company-sort.component";
import {SortCompaniesPipe} from "../../pipes/sort-companies.pipe";
import {CompanyFilterComponent} from "../../components/company-filter/company-filter.component";
import {ICompany} from "../../interfaces/ICompany";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    NgForOf,
    CompanyItemComponent,
    CompanySortComponent,
    SortCompaniesPipe,
    CompanyFilterComponent
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: ICompany[] = []
  sortOption = 'title';
  constructor(public companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  onSortOptionChange(sortOption: string) {
    this.sortOption = sortOption;
  }
}
