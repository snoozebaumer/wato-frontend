import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChallengeStatus} from "../models/challenge";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent {
  id: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  protected readonly window = window;
}
