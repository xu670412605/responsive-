import { MytestPage } from './app.po';

describe('mytest App', () => {
  let page: MytestPage;

  beforeEach(() => {
    page = new MytestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
