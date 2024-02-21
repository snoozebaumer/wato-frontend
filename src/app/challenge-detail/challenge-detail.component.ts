import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Challenge, ChallengeStatus} from "../models/challenge";
import {ChallengeService} from "../challenge.service";

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrl: './challenge-detail.component.css'
})
export class ChallengeDetailComponent {
  challenge: Challenge = new Challenge("", "","", "");
  formError?: string;

  constructor(
    public route: ActivatedRoute,
    private challengeService: ChallengeService) {
  }

  ngOnInit(): void {
    this.getChallenge();
  }

  getChallenge(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.challengeService.getChallenge(id).subscribe((challenge: Challenge) => {
      this.challenge = challenge;
    })
  }

  protected readonly ChallengeService = ChallengeService;
  protected readonly ChallengeStatus = ChallengeStatus;

  protected readonly window = window;

  changeStateToGuessInput() {
    if (!this.challenge?.maxRange || this.challenge.maxRange < 0) {
      this.formError = "GAME.ERROR_REQUIRED_INPUTS";
      return;
    }
    this.goToNextState();
  }

  goToNextState() {
    this.formError = undefined;

    switch (this.challenge.challengeStatus) {
      case ChallengeStatus.NEW:
        this.challenge!.challengeStatus = ChallengeStatus.GUESS_TO_BE_SET;
        break;
      case ChallengeStatus.GUESS_TO_BE_SET:
        // TODO: send guess to server and switch back to share
        break;
      case ChallengeStatus.CHALLENGER_TO_MOVE:
        // TODO: send guess to server and receive result.
        break;
    }
  }
}
