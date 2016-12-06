import { SimasSeadPage } from './app.po';

describe('simas-sead App', function() {
  let page: SimasSeadPage;

  beforeEach(() => {
    page = new SimasSeadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
