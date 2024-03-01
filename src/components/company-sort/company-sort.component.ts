import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-company-sort',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.css'
})
export class CompanySortComponent {
  @Output() sortOptionChange = new EventEmitter<string>();
  sortOption = 'title'

  onSortOptionChange() {
    this.sortOptionChange.emit(this.sortOption);
  }
}
