import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Challenge, ChallengeStatus} from '../models/challenge';
import {ChallengeService} from '../challenge.service';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrl: './challenge-detail.component.css'
})
export class ChallengeDetailComponent {
  challenge: Challenge = new Challenge('', '', '', '');
  formError?: string;

  constructor(
    public route: ActivatedRoute,
    private challengeService: ChallengeService,
    private router: Router) {
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

  setRange() {
    if (!this.challenge?.maxRange || this.challenge.maxRange < 0 || !this.challenge.challengeeName) {
      this.formError = 'GAME.ERROR_REQUIRED_INPUTS';
      return;
    }
    this.challengeService.setRange(this.challenge.id, this.challenge.maxRange, this.challenge.challengeeName).subscribe((response) => {
      this.formError = undefined;
      this.challenge.challengeStatus = response.challengeStatus;
    });
  }

  setChallengeeGuess() {
    this.setGuess(this.challenge.challengeeNumber)?.subscribe(async (response) => {
      this.formError = undefined;
      await this.router.navigate(['/share', this.challenge.id]);
    });
  }

  setChallengerGuess() {
    this.setGuess(this.challenge.challengerNumber)?.subscribe(async (response) => {
      this.formError = undefined;
      this.challenge = response;
    });
  }

  setGuess(chosenNumber?: number) {
    if (!chosenNumber || chosenNumber > this.challenge.maxRange!
      || chosenNumber < 1) {
      this.formError = "GAME.ERROR_RESPECT_RANGE";
      return;
    }
    return this.challengeService.setGuess(this.challenge.id, chosenNumber);
  }
}
