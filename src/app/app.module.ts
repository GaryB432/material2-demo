import { ApplicationRef, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdTooltipModule,
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";

import { createNewHosts, removeNgStyles } from "@angularclass/hmr";

interface HmrStore {
  disposeOldHosts(): void;
};

type NativeElement = any;

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdTooltipModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    routing,
  ],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) { }
  public hmrOnInit(store: HmrStore): void {
    console.log("HMR store", store);
  }
  public hmrOnDestroy(store: HmrStore): void {
    const cmpLocation: NativeElement[] = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  public hmrAfterDestroy(store: HmrStore): void {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
