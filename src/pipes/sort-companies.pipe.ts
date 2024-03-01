import {Pipe, PipeTransform} from '@angular/core';
import {ICompany} from "../interfaces/ICompany";

@Pipe({
  name: 'sortCompanies',
  standalone: true
})
export class SortCompaniesPipe implements PipeTransform {

  transform(companies: ICompany[], sortOption: string): ICompany[] {
    switch (sortOption) {
      case 'title':
        return this.sortCompaniesByName(companies);
      case 'type':
        return this.sortCompaniesByType(companies);
      case 'industry':
        return this.sortCompaniesByIndustry(companies);
      default:
        return companies;
    }

  }

  private sortCompaniesByName(companies: ICompany[]): ICompany[] {
    return companies.sort((a, b) => a.business_name.localeCompare(b.business_name));
  }

  private sortCompaniesByType(companies: ICompany[]): ICompany[] {
    return companies.sort((a, b) => a.type.localeCompare(b.type));
  }

  private sortCompaniesByIndustry(companies: ICompany[]): ICompany[] {
    return companies.sort((a, b) => a.industry.localeCompare(b.industry));
  }

}
