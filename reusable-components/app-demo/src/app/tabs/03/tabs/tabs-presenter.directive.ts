import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[tabsPresenter3]',
})
export class TabsPresenter3Directive {
    constructor(public template: TemplateRef<any>) {
    }
}
