import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Modulos
import {ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

//Components
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListProductosComponent } from "./components/list-productos/list-productos.component";
import { AddEditProductoComponent } from "./components/add-edit-productos/add-edit-productos.component";
import { ProgressBarComponent } from "./components/shared/progress-bar/progress-bar.component";
import { ListTicketsComponent } from "./components/list-tickets/list-tickets.component";
import { AddEditTicketComponent } from "./components/add-edit-tickets/add-edit-tickets.component";
import { AddEditUsersComponent } from "./components/add-edit-users/add-edit-users.component";
import { ListUsersComponent } from "./components/list-users/list-users.component";
import { ListGruposComponent } from "./components/list-grupos/list-grupos.component";
import { AddEditGrupoComponent } from "./components/add-edit-grupos/add-edit-grupos.component";
import { LoginComponent } from "./components/login/login.component";


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ListProductosComponent,
		AddEditProductoComponent,
		ProgressBarComponent,
		ListTicketsComponent,
		AddEditTicketComponent,
		AddEditUsersComponent,
		ListUsersComponent,
		ListGruposComponent,
		AddEditGrupoComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule, // required animations module
		ToastrModule.forRoot({
			timeOut: 10000,
			positionClass: "toast-bottom-right",
			preventDuplicates: true,
		}), // ToastrModule added
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
