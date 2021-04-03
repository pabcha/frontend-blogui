import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent {
  @Input() categories: Category[];
  @Output() onSelect = new EventEmitter<string>();
  default = 'all'; // como figura en backend category='all' trae todo
  selectedCategory = this.default;

  setCategory(category) {
    this.selectedCategory = category;
    this.onSelect.emit(this.selectedCategory);
  }

  isSelected(category) {
    return this.selectedCategory === category;
  }
}
