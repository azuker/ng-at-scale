import { Component, QueryList, ContentChildren, TemplateRef, Input, Output,
  EventEmitter, SimpleChanges, OnChanges, AfterContentInit, ViewChild} from '@angular/core';
import { Tab1Component as TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class Tabs1Component implements OnChanges, AfterContentInit {
  @ContentChildren(TabComponent) private tabs: QueryList<TabComponent>;
  @ViewChild('tabsContentTemplate') tabsContentTemplate: TemplateRef<any>;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;

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
