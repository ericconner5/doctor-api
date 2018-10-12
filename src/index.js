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
      }
    }

    // $.ajax(settings).done(function() {
    //   // console.log(response);
    // });

    // getKelvin() {
    //   $.ajax({
    //     url: `http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${process.env.WEATHER_API_KEY}`,
    //     type: 'GET',
    //     data: {
    //       format: 'json'
    //     },
    //     success: (response) => {
    //       const temp = response.main.temp;
    //       this.kelvin = temp;
    //     },
    //     error: function() {
    //     },
    //   });
    // }
  }
}
