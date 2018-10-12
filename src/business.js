import $ from 'jquery';

export default class Search {
  constructor(city, condition){
    if (city === undefined) {
      console.log('error: no city');
      return;
    } else if (condition === undefined) {
      console.log('error:no condition');
    } else {
      this.city = city;
      this.condition = condition;
    }


    const searchApi = {
      "async": true,
      "crossDomain": true,
      "url":
      `https://api.betterdoctor.com/2016-03-01/doctors?query=fever&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.apiKey}`,
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "Postman-Token": "a3ba4709-526c-49f7-9d72-32a3fc4da55f"
      },
      data: {
        format: 'json'
      },
      success: (response) => {
        const city = this.city;
        const condition = this.condition;
      },
      error: function() {
        console.log('error after api search');
      },

    }
  }
}
