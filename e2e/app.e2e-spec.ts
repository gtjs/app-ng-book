import { RandomMeetupPage } from './app.po';

describe('random-meetup App', () => {
  let page: RandomMeetupPage;

  beforeEach(() => {
    page = new RandomMeetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
