import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Challenge, ChallengeStatus} from './models/challenge';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private httpClient: HttpClient) {
  }

  createChallenge(challenge: string, challenger: string) {
    return this.httpClient.post<{ id: string }>('http://127.0.0.1:8080/api/challenges', {
      challenge,
      'name': challenger,
      'challengeStatus': ChallengeStatus.NEW
    }, {withCredentials: true});
  }

  getChallenge(id: string): Observable<Challenge> {
    return this.httpClient.get<Challenge>(`http://127.0.0.1:8080/api/challenges/${id}`);
  }

  setRange(id: string, range: number, challengeeName: string): Observable<Challenge> {
    return this.httpClient.put<Challenge>(`http://127.0.0.1:8080/api/challenges/${id}`, {'maxRange': range, challengeeName}, {withCredentials: true});
  }

  setGuess(id: string, number: number): Observable<Challenge> {
    return this.httpClient.put<Challenge>(`http://127.0.0.1:8080/api/challenges/${id}`, {number}, {withCredentials: true});
  }

}
