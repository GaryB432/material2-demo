import { Component, OnInit } from "@angular/core";

@Component({
  selector: "amd-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  public ngOnInit(): void {
    console.log("Hello Home");
  }

}
