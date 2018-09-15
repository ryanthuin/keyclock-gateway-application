import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { KeyclockGatewayApplicationSharedLibsModule, KeyclockGatewayApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [KeyclockGatewayApplicationSharedLibsModule, KeyclockGatewayApplicationSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [KeyclockGatewayApplicationSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KeyclockGatewayApplicationSharedModule {}
