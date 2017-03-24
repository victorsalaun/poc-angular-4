import { POCAngular4Page } from './app.po';

describe('pocangular4 App', () => {
  let page: POCAngular4Page;

  beforeEach(() => {
    page = new POCAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
