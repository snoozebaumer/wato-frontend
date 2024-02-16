import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private httpClient: HttpClient) { }

  createChallenge(challenge: string, challenger: string) {
    return this.httpClient.post<{id: string}>('http://127.0.0.1:8080/api/challenge', {challenge, "name": challenger}, {withCredentials: true});
  }


}
