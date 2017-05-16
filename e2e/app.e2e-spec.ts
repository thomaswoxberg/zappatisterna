import { LendToAFriendPage } from './app.po';

describe('lend-to-afriend App', () => {
  let page: LendToAFriendPage;

  beforeEach(() => {
    page = new LendToAFriendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
