import { HeroDetailPipe } from './hero-detail.pipe';

describe('HeroDetailPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroDetailPipe();
    expect(pipe).toBeTruthy();
  });
});
