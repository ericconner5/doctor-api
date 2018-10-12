import Search from './../src/index';

describe('Search', function() {

  let userSearch;
  console.log("here" + userSearch);

  beforeEach(function() {
    userSearch = new Search("37.773%2C-122.413", "fever");

  });

  it('should test that an api query returns a list of portland doctors', function() {
    const actual = userSearch.city;
    const control = "37.773%2C-122.413";
    expect(actual).toEqual(control);
  });

  it('should test that an empty api query returns an error message', function() {
    const actual = userSearch.city;
    const control = "";
    expect(actual).toEqual(control);
  });





});
