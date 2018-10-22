import $ from 'jquery';
import { apiKey } from '../.env';


export default class Search {
  constructor(location, condition){
    if (location === '') {
      console.log('error: no location');
      return;
    } else if (condition === '') {
      console.log('error:no condition');
    } else {
      this.location = location;
      this.condition = condition;
    }
  }
  myNewSearchMethod() {
    console.log(this.location, this.condition);
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.condition}location=${this.location}&user_key=${apiKey}`,


      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        // const location = this.location;
        // const condition = this.condition;
        console.log(response.data);
      },
      error: function() {
        console.log('api return error');
      },
    });

  }
}




    // const searchApi = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url":
    //   `https://api.betterdoctor.com/2016-03-01/doctors?query=fever&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.apiKey}`,
    //   "method": "GET",
    //   "headers": {
    //     "cache-control": "no-cache",
    //     "Postman-Token": "a3ba4709-526c-49f7-9d72-32a3fc4da55f"
    //   },
    //   data: {
    //     format: 'json'
    //   },
    //   success: (response) => {
    //     const city = this.city;
    //     const condition = this.condition;
    //   },
    //   error: function() {
    //     console.log('error after api search');
    //   },
    //
    // }

  //   $.ajax({
  //     "async": true,
  //     "crossDomain": true,
  //     "method": "GET",
  //     headers:{
  //       "key":"{process.env.apiKey}",
  //       "cache-control": "no-cache",
  //       "Postman-Token": "a3ba4709-526c-49f7-9d72-32a3fc4da55f"
  //     },
  //     data: {
  //       format: 'json'
  //     },
  //     "Accept":"application/json",//depends on your api
  //  url:`https://api.betterdoctor.com/2016-03-01/doctors?query=fever&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.apiKey}`,
  //   success:function(response){
  //     var r=JSON.parse(response);
  //     $("#main").html(r.base);
  //   },
  //   error:function() {
  //     console.log('api return error');
  //   }
  // });
