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
      indexDisplay(data.phirephiters);


    }
  })



  function updateDOM(dataArray){
    $('#phiMemberName').append(dataArray[0].name);
    $('#phiGitLink').append(dataArray[0].git_username);
    $('#phiShoutout').append(dataArray[0].shoutout);
  }

  function indexDisplay(array) {
    for (var i = 0; i < array.length; i++) {
      array[i];
      $('#indexHighlight').append('<div class="highlight"></div>');
    }
  }
});
