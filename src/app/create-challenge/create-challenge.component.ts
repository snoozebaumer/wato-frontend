import {Component} from '@angular/core';
import {ChallengeService} from "../challenge.service";
@Component({
  selector: 'create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrl: './create-challenge.component.css'
})
export class CreateChallengeComponent {
  constructor(private challengeService: ChallengeService) {
  }

  create(challenge: string, challenger: string) {
    this.challengeService.createChallenge(challenge, challenger).subscribe((response) => {
      console.log(response);
    });
  }
}
