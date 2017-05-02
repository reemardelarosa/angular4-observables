import { Angular4ObservablesPage } from './app.po';

describe('angular4-observables App', function() {
  let page: Angular4ObservablesPage;

  beforeEach(() => {
    page = new Angular4ObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
