import $ from 'jquery';
import Search from './business.js';

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const location = $("#location").val();
    const condition = $("#condition").val();
    const search = new Search(location, condition);
    const doctorResultsCallback = function(doctors) {
      $('#results').text(`Here's a list of doctors in your area that can help: ${doctors.join(', ')}`)
      console.log(search, 'after submit');
    }
    search.myNewSearchMethod(doctorResultsCallback);
  });

})
