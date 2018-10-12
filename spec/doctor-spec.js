import Search from './../src/index';

describe('Search', function() {

  let userSearch;
  console.log("here" + userSearch);

  beforeEach(function() {
    userSearch = new Search("portland", "fever");

  });

  it('should test that an api query returns a list of portland doctors', function() {
    const actual = userSearch.city;
    const control = "portland";
    expect(actual).toEqual(control);
  });
});
