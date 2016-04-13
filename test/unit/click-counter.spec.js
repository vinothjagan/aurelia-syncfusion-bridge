import {ClickCounter} from 'src/clickcounter/clickcounter';
import './setup';

describe('Click counter', () => {
  it('increases counter', () => {
    let clickCounter = new ClickCounter();
    clickCounter.count = 0;

    clickCounter.increment();

    expect(clickCounter.count).toBe(1);
  });
});
