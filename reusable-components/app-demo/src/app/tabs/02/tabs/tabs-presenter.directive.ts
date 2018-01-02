import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[tabsPresenter2]',
})
export class TabsPresenter2Directive {
    constructor(public template: TemplateRef<any>) {
    }
}
