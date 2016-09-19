import { ChronoGongPage } from './app.po';

describe('chrono-gong App', function() {
  let page: ChronoGongPage;

  beforeEach(() => {
    page = new ChronoGongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
