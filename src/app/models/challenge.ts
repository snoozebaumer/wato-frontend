export interface Challenge {
  id: string;
  challenge: string;
  challengerId: string;
  challengerName: string;
  challengeeId: string;
  challengeeName: string;
  challengeStatus: ChallengeStatus;
  maxRange: number;
  challengerNumber: number;
  challengeeNumber: number;
}

export enum ChallengeStatus {
  New = 'New',
  ChallengerToMove = 'ChallengerToMove',
  Finished = 'Finished'
}
