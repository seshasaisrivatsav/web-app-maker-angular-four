import { WebAppMakerAngularFourPage } from './app.po';

describe('web-app-maker-angular-four App', function() {
  let page: WebAppMakerAngularFourPage;

  beforeEach(() => {
    page = new WebAppMakerAngularFourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
