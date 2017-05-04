import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { TooltipPosition } from "@angular/material";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "amd-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  public position: TooltipPosition = "below";
  public message: string = "This is a tooltip!";

  public foods: any[] = [
    { name: "Pizza", rating: "Excellent" },
    { name: "Burritos", rating: "Great" },
    { name: "French fries", rating: "Pretty good" },
  ];

  public ngOnInit(): void {
    console.log("Hello Home");
  }

}
