import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MdButtonModule, MdMenuModule, MdToolbarModule } from "@angular/material";
import { provideRoutes } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";

describe("App", () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        MdButtonModule,
        MdMenuModule,
        MdToolbarModule,
        RouterTestingModule,
      ],
      providers: [provideRoutes([])],
    });
  });

  it("should have a title", () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.title).toEqual("testing");
  });

});
