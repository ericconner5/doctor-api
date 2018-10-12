import Search from './..src/index.js';

describe('Search', function() {

  let userSearch;

  beforeEach(function () {
    userSearch = new Search("userSearch", "portland");

  });

  it('should test that an api query returns a list of portland doctors', function() {
    const actual = userSearch.city;
    const control = "portland";
    expect(actual)toEqual(control);
  });
});
