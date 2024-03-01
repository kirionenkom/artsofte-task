import {Component, Input} from '@angular/core';
import {ICompany} from "../../interfaces/ICompany";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CompanyItemComponent {
  @Input() company: ICompany = {} as ICompany
}
