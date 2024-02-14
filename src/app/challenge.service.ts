import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private httpClient: HttpClient) { }

  createChallenge(challenge: string, challenger: string) {
    this.httpClient.post('http://localhost:8080/api/challenge', {challenge, "name": challenger}).subscribe(() => console.log('Challenge created'));
  }


}
