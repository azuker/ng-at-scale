import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[zuknglibTabsPresenter]',
})
export class TabsPresenterDirective {
    constructor(public template: TemplateRef<any>) {
    }
}
