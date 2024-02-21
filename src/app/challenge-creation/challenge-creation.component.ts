import {Component} from '@angular/core';
import {ChallengeService} from "../challenge.service";
import {Router} from "@angular/router";
@Component({
  selector: 'create-challenge',
  templateUrl: './challenge-creation.component.html',
  styleUrl: './challenge-creation.component.css'
})
export class ChallengeCreationComponent {
  constructor(private router: Router, private challengeService: ChallengeService) {
  }

  create(challenge: string, challenger: string) {
    this.challengeService.createChallenge(challenge, challenger).subscribe(async (response) => {
      await this.router.navigate(['/share', response.id]);
    });
  }
}
