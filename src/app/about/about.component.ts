import { Component, OnInit } from "@angular/core";

@Component({
  selector: "amd-about",
  styleUrls: ["./about.component.scss"],
  templateUrl: "./about.component.html",
})
export class AboutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  public ngOnInit(): void {
    console.log("Hello About");
  }

}
