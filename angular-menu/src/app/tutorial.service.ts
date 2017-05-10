import { Injectable } from '@angular/core';
import {Tutorial} from './tutorial';
import {TUTORIALS} from './mock-tutorials'

@Injectable()
export class TutorialService {

  getTutorials(): Promise<Tutorial[]> {
    return Promise.resolve(TUTORIALS);
  }

}
