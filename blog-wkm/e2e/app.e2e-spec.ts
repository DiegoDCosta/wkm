import { BlogWkmPage } from './app.po';

describe('blog-wkm App', () => {
  let page: BlogWkmPage;

  beforeEach(() => {
    page = new BlogWkmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
