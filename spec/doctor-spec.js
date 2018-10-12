import Search from './../src/business';

describe('Search', function() {

  let userSearch;

  beforeEach(function() {
    userSearch = new Search("37.773%2C-122.413", "fever");

    console.log("here " + userSearch);
  });

  it('should test that an api query returns a list of portland doctors', function() {
    console.log(Search);
    const userSearch = new Search ('city');
    expect(userSearch instanceof Search).toBe(true);
  });
  //
  // it('should test that an empty api condition query returns an error message', function() {
  //   const actual = userSearch.city;
  //   const control = "";
  //   expect(actual).toEqual(control);
  // });





});
