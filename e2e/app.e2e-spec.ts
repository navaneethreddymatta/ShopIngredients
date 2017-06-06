import { ShopIngredientsPage } from './app.po';

describe('shop-ingredients App', () => {
  let page: ShopIngredientsPage;

  beforeEach(() => {
    page = new ShopIngredientsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
