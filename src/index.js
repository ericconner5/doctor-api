import $ from 'jquery';
import Search from './business.js';
// export { location };
// export { condition };




$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const location = $("#location").val();
    const condition = $("#condition").val();
    const search = new Search(location, condition);
    console.log(location + " within doc ready");
    search.myNewSearchMethod();
  });
  // $('showDoctorList').text(`Here's a list of doctors in your area that can help:  ${response}`)
})
