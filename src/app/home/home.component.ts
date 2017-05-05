import { Component, OnInit } from "@angular/core";
import { TooltipPosition } from "@angular/material";

@Component({
  selector: "amd-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  public position: TooltipPosition = "below";
  public message: string = "This is a tooltip!";
  public progress: number = 0;

  public foods: any[] = [
    { name: "Pizza", rating: "Excellent" },
    { name: "Burritos", rating: "Great" },
    { name: "French fries", rating: "Pretty good" },
  ];

public ngOnInit(): void {
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

}
