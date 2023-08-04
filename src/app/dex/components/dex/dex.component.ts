import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dex",
  templateUrl: "./dex.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DexComponent implements OnInit {
  search: string = "";

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.search = this.activatedRoute.snapshot.params["value"];
    this.activatedRoute.params.subscribe((params) => {
      if (params["value"]) {
        this.search = params["value"] ?? "";
      }
    });
  }
}
