export class Challenge {
  id: string;
  challenge: string;
  challengerId: string;
  challengerName: string;
  challengeeId?: string;
  challengeeName?: string;
  challengeStatus: ChallengeStatus = ChallengeStatus.NEW;
  maxRange?: number = undefined;
  challengerNumber?: number = undefined;
  challengeeNumber?: number = undefined;

  constructor(id: string, challenge: string, challengerId: string, challengerName: string) {
    this.id = id;
    this.challenge = challenge;
    this.challengerId = challengerId;
    this.challengerName = challengerName;
  }
}

export enum ChallengeStatus {
  NEW = 'GAME.NEW_TITLE',
  GUESS_TO_BE_SET = 'GAME.GUESS_TO_BE_SET_TITLE',
  CHALLENGER_TO_MOVE = 'GAME.CHALLENGER_TO_MOVE_TITLE',
  SUCCESS = 'GAME.FINISHED_SUCCESSFULLY_TITLE',
  FAILURE = 'GAME.FINISHED_NOTHING_HAPPENS_TITLE'
}
