import { AfterViewInit, ChangeDetectorRef, Component } from "@angular/core";

import "../style/app.scss";

import "@angular/material/prebuilt-themes/indigo-pink.css";

@Component({
  selector: "amd-app",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {
  public title: string;

  // public visible: boolean = true;

  // public vertical: boolean = true;

  private rlaSafe: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.title = "testing";
  }

  public ngAfterViewInit(): void {
    this.rlaSafe = true;
    this.changeDetectorRef.detectChanges();
  }

  public onMenuClick(item: string): void {
    console.log(item);
  }

  // public toggleVisible(): void {
  //   this.visible = !this.visible;
  // }

  public alert(message: string): void {
    console.log(message);
  }
}

// import { Component, ViewEncapsulation } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
// import { MdIconRegistry } from '@angular/material';

// import "../style/app.scss";

// import "@angular/material/prebuilt-themes/indigo-pink.css";

// @Component({
//   encapsulation: ViewEncapsulation.None,
//   selector: "amd-app",
//   styleUrls: ["./app.component.scss"],
//   templateUrl: "./app.component.html",
// })
// export class AppComponent {
//   public title: string;

//   constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
//     mdIconRegistry
//       .addSvgIcon('thumb-up',
//       sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
//       .addSvgIconSetInNamespace('core',
//       sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/core-icon-set.svg'))
//       .registerFontClassAlias('fontawesome', 'fa');
//   }

//   public onMenuClick(item: string): void {
//     console.log(item);
//   }
// }
