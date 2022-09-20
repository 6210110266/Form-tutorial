import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { AddressInputComponent } from './address-input/address-input.component';
import { AliasesInputComponent } from './aliases-input/aliases-input.component';
import { AddressCvaComponent } from './address-cva/address-cva.component';
import { AliasesCvaComponent } from './aliases-cva/aliases-cva.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    AddressInputComponent,
    AliasesInputComponent,
    AddressCvaComponent,
    AliasesCvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
