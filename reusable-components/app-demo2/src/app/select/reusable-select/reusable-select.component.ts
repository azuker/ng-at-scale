import { Component, Input, ViewChild, TemplateRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-reusable-select',
  templateUrl: './reusable-select.component.html',
  styleUrls: ['./reusable-select.component.css']
})
export class ReusableSelectComponent implements OnChanges {
  // Can consider supporting NgModel via ControlValueAccessor too
  @Input() items: any[];
  @Input() selectedItem: any;
  @Input() customTemplate: TemplateRef<any>;
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;

  get selectTemplate(): TemplateRef<any> {
    return this.customTemplate == null ? this.defaultTemplate : this.customTemplate;
  }

  ngOnChanges() {
    if (this.items != null && this.selectedItem == null) {
      this.selectedItem = this.items[0];
    }
  }
}
