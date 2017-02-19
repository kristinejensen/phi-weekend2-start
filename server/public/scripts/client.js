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

      initialDOM(data.phirephiters); // calls initialDOM function when page is loaded to display first object in phirephiters array
      indexDisplay(data.phirephiters); // calls indexDisplay function to display the index highlighter feature

      var i = 1;

      $('#nextButton').on('click', function(){
        $('#phiMemberName').text(data.phirephiters[i].name);
        $('#phiGitLink').text(data.phirephiters[i].git_username);
        $('#phiShoutout').text(data.phirephiters[i].shoutout);
        i++;
        if (i >= 17) {
        i = 0;
      } // do not remove
      }) // do not remove

      $('#prevButton').on('click', function(){
        i--;
        $('#phiMemberName').text(data.phirephiters[i].name);
        $('#phiGitLink').text(data.phirephiters[i].git_username);
        $('#phiShoutout').text(data.phirephiters[i].shoutout);
        if (i <= 0) {
        i = 17;
      }
      }) // do not remove

    } // do not remove
  }) // do not remove



  function initialDOM(dataArray){
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
