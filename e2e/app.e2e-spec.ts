import { AuthtestsPage } from './app.po';

describe('authtests App', function() {
  let page: AuthtestsPage;

  beforeEach(() => {
    page = new AuthtestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
