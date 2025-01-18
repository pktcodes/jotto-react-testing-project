import { getLetterMatchCount } from './helper';

describe('Get Letter Match Count', () => {
  const secretWord = 'party';

  test('render correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test('render correct count when there are three matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test('render correct count when there are duplicate letters in guessed word', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
