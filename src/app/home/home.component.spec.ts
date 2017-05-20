// This shows a different way of testing a component, check about for a simpler one
import { Component } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { ComponentFixture, TestBed } from "@angular/core/testing";

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
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from "@angular/material";

import { HomeComponent } from "./home.component";

describe("Home Component", () => {
  const html: string = "<amd-home></amd-home>";

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [HomeComponent, TestComponent],
        imports: [
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
          MdTabsModule,
          MdToolbarModule,
          MdTooltipModule,
          NoopAnimationsModule,
        ],
      });
    TestBed.overrideComponent(TestComponent, { set: { template: html } });
  });

  it("should have a PRIMARY RAISED button", () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain("PRIMARY RAISED");
  });

});

@Component({ selector: "amd-test", template: "" })
class TestComponent { }
