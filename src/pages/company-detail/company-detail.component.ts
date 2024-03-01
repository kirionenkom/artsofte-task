import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../../services/company.service";
import {ICompany} from "../../interfaces/ICompany";

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit {
  company: null | ICompany = null;

  constructor(private companyService: CompanyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.companyService.getCompanyById(parseInt(params['id'])).subscribe((company) => {
        if (company) {
          this.company = company;
        }
      });
    });
  }
}
