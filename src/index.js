import $ from 'jquery';
import Search from './business.js';


$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const locationInput = $("#location").val();
    const conditionInput = $("#condition").val();
    const search = new Search(locationInput, conditionInput);
  });
  // $('showDoctorList').text(`Here's a list of doctors in your area that can help:  ${response}`)
})


    // $.ajax(Search).done(function() {
    //   // console.log(response);
    // });
