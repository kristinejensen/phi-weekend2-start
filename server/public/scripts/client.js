$(document).ready(function(){

  // Upon page load, get the data from the server
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      // yay! we have data!
      console.log('returned data from server: ', data);
      // DO NOT CHANGE ANY CODE ABOVE THIS LINE
      // note -- console.log(data.phirephiters[0]); will access object in array
      // note -- console.log(data.phirephiters[0].name); will access property of object in array

      updateDOM(data.phirephiters);

    }
  })





  function updateDOM (dataArray){
    $('#phiMemberName').append(dataArray[4].name);
    $('#phiGitLink').append(dataArray[4].git_username);
    $('#phiShoutout').append(dataArray[4].shoutout);
  }



});
