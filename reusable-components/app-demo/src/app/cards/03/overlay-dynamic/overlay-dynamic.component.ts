import { Component, ViewChild, ViewContainerRef, Input, Type, ComponentRef,
  OnDestroy, AfterViewInit, AfterViewChecked, ComponentFactoryResolver, OnChanges,
  ElementRef, Output, EventEmitter } from '@angular/core';
import { slideTopDownAnimation } from '../../animations';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-overlay-dynamic3',
  templateUrl: './overlay-dynamic.component.html',
  styleUrls: ['./overlay-dynamic.component.css'],
  animations: [ slideTopDownAnimation ],
})
export class OverlayDynamic3Component implements OnDestroy, OnChanges, AfterViewInit {

  @ViewChild('cardHost', { read: ViewContainerRef }) cardHost: ViewContainerRef;
  @ViewChild('overlayHost', { read: ViewContainerRef }) overlayHost: ViewContainerRef;
  @Input() cardComponentType: Type<any>;
  @Input() overlayComponentType: Type<any>;
  @Input() overlayData: any;
  @Input() cardData: any;
  @Output() childEvents = new EventEmitter<any>();

  subscription: Subscription;
  cardComponentRef: ComponentRef<any>;
  overlayComponentRef: ComponentRef<any>;
  overlayActive = false;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  toggleOverlay(value?: boolean) {
    this.overlayActive = value == null ? !this.overlayActive : value;
  }

  ngAfterViewInit() {
    const cardFactory = this.factoryResolver.resolveComponentFactory(this.cardComponentType);
    this.cardHost.clear();
    this.cardComponentRef = this.cardHost.createComponent(cardFactory);
    this.cardComponentRef.instance.data = this.cardData;
    this.cardComponentRef.changeDetectorRef.detectChanges();

    const overlayFactory = this.factoryResolver.resolveComponentFactory(this.overlayComponentType);
    this.overlayHost.clear();
    this.overlayComponentRef = this.overlayHost.createComponent(overlayFactory);
    this.overlayComponentRef.instance.data = this.overlayData;
    this.overlayComponentRef.changeDetectorRef.detectChanges();

    this.subscription = (this.overlayComponentRef.instance.playClicked as EventEmitter<any>)
      .subscribe((data: any) => this.childEvents.emit({ event: 'playClicked', payload: data }));
  }

  ngOnChanges() {
    if (this.cardComponentRef) {
      this.cardComponentRef.instance.data = this.cardData;
    }
    if (this.overlayComponentRef) {
      this.overlayComponentRef.instance.data = this.overlayData;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.cardComponentRef) {
      this.cardComponentRef.destroy();
    }
    if (this.overlayComponentRef) {
      this.overlayComponentRef.destroy();
    }
  }
}
