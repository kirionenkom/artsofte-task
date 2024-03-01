import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICompany} from "../interfaces/ICompany";
import {BehaviorSubject, map, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private api_url = 'https://random-data-api.com/api/company/random_company?size=100';
  private companies: ICompany[] = [];
  private filteredCompanies = new BehaviorSubject(this.companies);
  types: ICompany['type'][] = []
  industries: ICompany['industry'][] = []

  constructor(private http: HttpClient) {
    this.fetchCompanies().subscribe(companies => {
        this.companies = companies;
        this.filteredCompanies.next(companies);
        this.types = this.getTypes(companies);
        this.industries = this.getIndustries(companies);
      }
    );
  }

  getCompanies() {
    return this.filteredCompanies
  }

  getCompanyById(id: ICompany['id']) {
    return this.fetchCompanies().pipe(
      map(companies => companies.find(company => company.id === id))
    );
  }

  filterCompanies(filterForm: Partial<{ search: string | null, type: string | null, industry: string | null }>) {
    let filtered = this.companies;

    if (filterForm.search !== null && filterForm.search !== undefined) {
      const search = filterForm.search.trim().toLowerCase();
      filtered = filtered.filter(company => company.business_name.toLowerCase().includes(search));
    }
    if (filterForm.type) {
      filtered = filtered.filter(company => company.type === filterForm.type);
    }
    if (filterForm.industry) {
      filtered = filtered.filter(company => company.industry === filterForm.industry);
    }

    this.filteredCompanies.next(filtered);
  }

  private fetchCompanies() {
    if (this.companies.length > 0) {
      return of(this.companies);
    }
    return this.http.get<ICompany[]>(this.api_url)
      .pipe(tap(companies => {
        this.companies = companies;
      }));
  }

  private getTypes(companies: ICompany[]) {
    return Array.from(new Set(companies.map(company => company.type)));
  }

  private getIndustries(companies: ICompany[]) {
    return Array.from(new Set(companies.map(company => company.industry)));
  }
}
