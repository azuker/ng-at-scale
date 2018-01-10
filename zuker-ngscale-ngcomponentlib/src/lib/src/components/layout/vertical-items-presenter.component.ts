import { Component, TemplateRef, Input } from '@angular/core';

@Component({
    selector: 'zuknglib-vertical-items-presenter',
    template: `
        <div class="itemsContainer">
            <ng-container *ngFor="let i of items">
                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: i }"></ng-container>
            </ng-container>
        </div>
    `,
    styleUrls: [ './vertical-items-presenter.component.css' ],
})
export class VerticalItemsPresenterComponent {
    @Input() items: any[];
    @Input() itemTemplate: TemplateRef<any>;
}
