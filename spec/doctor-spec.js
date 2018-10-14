import Search from './../src/business';

describe('Search', function() {

  let userSearch;

  beforeEach(function() {
    userSearch = new Search("37.773%2C-122.413", "fever");

    console.log("before " + userSearch);
  });

  it('should test that an api query returns a list of portland doctors', function() {
    console.log("here " + Search);
    // const userSearch = new Search ('location');
    expect(userSearch instanceof Search).toBe(true);
  });

  // it('should test that an empty api condition query returns an error message', function() {
  //   const actual = '';
  //   expect(actual)toReturn('error:no condition')
  // });


});
