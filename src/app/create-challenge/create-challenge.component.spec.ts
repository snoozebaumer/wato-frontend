import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChallengeComponent } from './create-challenge.component';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'translate'})
class TranslatePipeMock implements PipeTransform {
  transform(value: string): string {
    switch(value) {
      case "GAME.CHALLENGE_TITLE":
        return "Challenge Title";
      case "GAME.CHALLENGE_PLACEHOLDER":
        return "Challenge Placeholder";
      case "GAME.CHALLENGER":
        return "Challenger";
      case "GAME.CHALLENGER_PLACEHOLDER":
        return "Challenger Placeholder";
      case "GAME.CHALLENGE_BUTTON":
        return "Challenge Button";
    }
    return "";
  }
}

describe('CreateChallengeComponent', () => {
  let component: CreateChallengeComponent;
  let fixture: ComponentFixture<CreateChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateChallengeComponent, TranslatePipeMock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display translated challenge title label', () => {
    const fixture = TestBed.createComponent(CreateChallengeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toEqual('Challenge Title');
  });

  it('should display translated challenge placeholder text', () => {
    const fixture = TestBed.createComponent(CreateChallengeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#challenge')?.getAttribute('placeholder')).toEqual('Challenge Placeholder');
  });

  it('should display translated challenger label', () => {
    const fixture = TestBed.createComponent(CreateChallengeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('label')[1]?.textContent).toEqual('Challenger');
  });

  it('should display translated challenger placeholder text', () => {
    const fixture = TestBed.createComponent(CreateChallengeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#name')?.getAttribute('placeholder')).toEqual('Challenger Placeholder');
  });

  it('should display translated challenge button text', () => {
    const fixture = TestBed.createComponent(CreateChallengeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toEqual('Challenge Button');
  });

});
