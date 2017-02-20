$(document).ready(function(){

  // Upon page load, get the data from the server
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      // yay! we have data!
      console.log('returned data from server: ', data);
      // DO NOT CHANGE ANY CODE ABOVE THIS LINE

      indexDisplay(data.phirephiters); // calls indexDisplay function to display the index highlighter feature
      initialDOM(data.phirephiters); // calls initialDOM function when page is loaded to display first object in phirephiters array

      var i = 0;

      $('#nextButton').on('click', function(){ // next button event listener to update DOM
        $('#'+ i).css('background-color', 'Tomato');
        i++;
        if (i >= data.phirephiters.length - 1) { // resets i for carousel functionality
          i = 0;
        } // do not remove
        $('#'+ i).css('background-color', 'Moccasin');
        $('#phiMemberName').text(data.phirephiters[i].name);
        $('#phiGitLink').text(data.phirephiters[i].git_username);
        $('#phiShoutout').text(data.phirephiters[i].shoutout);
      }) // do not remove

      $('#prevButton').on('click', function(){ // prev button event listener to update DOM
        $('#' + i).css('background-color', 'Tomato');
        if (i <= 0) { // resets 'i' for carousel functionality
          i = data.phirephiters.length;
        }
        i--;
        $('#' + i).css('background-color', 'Moccasin');
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

// while (i = 0){ --- this code breaks my loop
//   $('#' + (i + data.phirephiters.length) - 1).css('background-color', 'Tomato');
// }
