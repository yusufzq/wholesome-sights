import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { UserModule } from './user/user.module';

@NgModule({
	declarations: [ApplicationComponent],
	imports: [
		BrowserModule,
		ApplicationRoutingModule,
		UserModule
	],
	providers: [],
	bootstrap: [ApplicationComponent]
})
export class ApplicationModule {};