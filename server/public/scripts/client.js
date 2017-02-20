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

      indexDisplay(data.phirephiters); // calls indexDisplay function to display the index highlighter feature
      initialDOM(data.phirephiters); // calls initialDOM function when page is loaded to display first object in phirephiters array

      var i = 0;

      $('#nextButton').on('click', function(){ // next button event listener to update DOM
        i++;
        $('#'+ i).css('background-color', 'Moccasin');
        $('#'+ (i - 1)).css('background-color', 'Tomato');
        $('#phiMemberName').text(data.phirephiters[i].name);
        $('#phiGitLink').text(data.phirephiters[i].git_username);
        $('#phiShoutout').text(data.phirephiters[i].shoutout);
        if (i >= data.phirephiters.length - 1) { // resets i for carousel functionality
          i = -1;
        } // do not remove

        console.log(i);
      }) // do not remove

      $('#prevButton').on('click', function(){ // prev button event listener to update DOM
        if (i <= 0) { // resets 'i' for carousel functionality
        i = data.phirephiters.length;
      }
      i--;
      $('#phiMemberName').text(data.phirephiters[i].name);
      $('#phiGitLink').text(data.phirephiters[i].git_username);
      $('#phiShoutout').text(data.phirephiters[i].shoutout);
    }) // do not remove
  } // do not remove
}) // do not remove


function initialDOM(dataArray){
  $('#phiMemberName').append(dataArray[0].name);
  $('#phiGitLink').append(dataArray[0].git_username);
  $('#phiShoutout').append(dataArray[0].shoutout);
  $('#0').css('background-color', 'Moccasin');
}

function indexDisplay(array) {
  for (var i = 0; i < array.length; i++) {
    $('#indexHighlight').append('<div id="'+ i +'" class="highlight"></div>');
  }
}
});
