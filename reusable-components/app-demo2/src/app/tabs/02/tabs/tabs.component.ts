import { Component, QueryList, ContentChildren, ContentChild, TemplateRef, Input, Output,
  EventEmitter, SimpleChanges, OnChanges, AfterContentInit, 
  OnDestroy, ViewChild, OnInit } from '@angular/core';
import { Tab2Component as TabComponent } from '../tab/tab.component';
import { TabsPresenter2Directive } from './tabs-presenter.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class Tabs2Component implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() headerTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;
  @ContentChild(TabsPresenter2Directive) tabsPresenter: TabsPresenter2Directive;

  @ViewChild('defaultTabsPresenterTemplate') defaultTabsPresenterTemplate: TemplateRef<any>;
  @ViewChild('defaultContentTemplate') defaultContentTemplate: TemplateRef<any>;
  @ViewChild('defaultHeaderTemplate') defaultHeaderTemplate: TemplateRef<any>;
  @ViewChild('tabsContentTemplate') tabsContentTemplate: TemplateRef<any>;

  @Output() selectionChanged = new EventEmitter<TabComponent>();
  @Input() selectedTab: TabComponent;
  // Should consider using observables since subscribe isn't something you should use with EventEmitter
  public selectTabEmitter = new EventEmitter<TabComponent>();
  private subscription: Subscription;

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

  ngOnInit() {
    this.subscription = this.selectTabEmitter.subscribe(tab => this.selectTab(tab));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
