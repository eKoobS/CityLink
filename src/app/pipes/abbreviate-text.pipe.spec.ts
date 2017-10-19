import { AbbreviateTextPipe } from './abbreviate-text.pipe';

describe('AbbreviateTextPipe', () => {
  it('create an instance', () => {
    const pipe = new AbbreviateTextPipe();
    expect(pipe).toBeTruthy();
  });
});
