document.getElementById("submit-roommate").addEventListener('click',  AddRoommate);


var xhr = new XMLHttpRequest();
var url = "userdata.json";
xhr.open("GET", url, true);

xhr.onreadystatechange = function(){

  if(xhr.readyState == 4 && xhr.status == 200){
    // console.log(JSON.parse(xhr.responseText));

  }
}
xhr.send();

function AddRoommate(e){
  console.log('clicked')
  var roommate = {};
  roommate.firstName = document.getElementById('firstname').value;
  roommate.lastName = document.getElementById('lastname').value;
  roommate.hasPets = document.getElementById('haspets').checked;
  roommate.hasKids = document.getElementById('haskids').checked;
  // TODO: save user profile pic



  console.console.log(roommate);
  // TODO: Might switch this to local storage for now

  //saveText( JSON.stringify(roommate), "userdata.json" );

  e.preventDefault();
}


// function saveText(text, filename){
//   var a = document.createElement('a');
//   a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
//   a.setAttribute('download', filename);
//   a.click()
// }
