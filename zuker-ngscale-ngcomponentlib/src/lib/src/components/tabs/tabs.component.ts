import { Component, QueryList, ContentChildren, ContentChild, TemplateRef, Input, Output,
  EventEmitter, SimpleChanges, OnChanges, AfterContentInit, ViewChild} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsPresenterDirective } from './tabs-presenter.directive';

@Component({
  selector: 'zuknglib-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnChanges, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;
  @ContentChild(TabsPresenterDirective) tabsPresenter: TabsPresenterDirective;

  @ViewChild('defaultTabsPresenterTemplate') defaultTabsPresenterTemplate: TemplateRef<any>;
  @ViewChild('defaultContentTemplate') defaultContentTemplate: TemplateRef<any>;
  @ViewChild('defaultHeaderTemplate') defaultHeaderTemplate: TemplateRef<any>;
  @ViewChild('tabsContentTemplate') tabsContentTemplate: TemplateRef<any>;

  @Output() selectionChanged = new EventEmitter<TabComponent>();
  @Input() selectedTab: TabComponent;

  get tabsPresenterTemplate(): TemplateRef<any> {
    return this.tabsPresenter == null ? this.defaultTabsPresenterTemplate : this.tabsPresenter.template;
  }

  get tabContentTemplate(): TemplateRef<any> {
    return this.contentTemplate == null ? this.defaultContentTemplate : this.contentTemplate;
  }

  get tabHeaderTemplate(): TemplateRef<any> {
    return this.headerTemplate == null ? this.defaultHeaderTemplate : this.headerTemplate;
  }

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
