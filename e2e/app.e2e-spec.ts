import { TestWebWorkersPage } from './app.po';

describe('test-web-workers App', function() {
  let page: TestWebWorkersPage;

  beforeEach(() => {
    page = new TestWebWorkersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
