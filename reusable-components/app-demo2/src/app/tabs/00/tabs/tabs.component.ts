import { Component, QueryList, ContentChildren, TemplateRef, Input, Output,
  EventEmitter, SimpleChanges, OnChanges, AfterContentInit, ViewChild} from '@angular/core';
import { Tab0Component as TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs0',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class Tabs0Component implements OnChanges, AfterContentInit {
  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

  @Output() selectionChanged = new EventEmitter<TabComponent>();
  @Input() selectedTab: TabComponent;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTab) {
      this.selectTab(this.selectedTab);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.filter(t => t !== tab).forEach(t => t.selected = false);

    tab.selected = true;

    if (this.selectedTab !== tab) {
      this.selectedTab = tab;
      this.selectionChanged.emit(this.selectedTab);
    }
  }

  ngAfterContentInit(): void {
    if (this.selectedTab == null) {
      const selectedTabs = this.tabs.filter(t => t.selected);
      if (selectedTabs.length > 0) {
        this.selectTab(selectedTabs[0]);
      }
    }
  }
}
