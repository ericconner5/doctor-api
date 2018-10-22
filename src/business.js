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
  myNewSearchMethod(doctorResultsCallback) {
    console.log(this.location, this.condition);
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.condition}location=${this.location}&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: (response) => {
        const doctors = response.data.map(function(eachDoctor) {
          return eachDoctor.profile.first_name + ' ' +  eachDoctor.profile.last_name;
        })
        doctorResultsCallback(doctors);
      },
      error: () => {
        alert("The server is having trouble. Try again sometime.")
        console.log('api return error');
      },
    });
  }
}
