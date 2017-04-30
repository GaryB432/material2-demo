import { ComponentFixture, TestBed } from "@angular/core/testing";

import {
  // MdButtonModule,
  // MdCardModule,
  // MdCheckboxModule,
  // MdChipsModule,
  // MdDialogModule,
  MdIconModule,
  // MdInputModule,
  // MdMenuModule,
  // MdProgressBarModule,
  // MdSidenavModule,
  // MdSnackBarModule,
  // MdToolbarModule,
} from "@angular/material";

import { AboutComponent } from "./about.component";

describe("About Component", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [
        MdIconModule,
      ],
    });
  });

  it("should ...", () => {
    const fixture: ComponentFixture<AboutComponent> = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain("SEARCH");
  });

});
