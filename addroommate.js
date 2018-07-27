
document.getElementById("submit-roommate").addEventListener('click',  AddRoommate);

function AddRoommate(e){
  let roommates;
  let roommate = {};

  roommate.picUrl = document.getElementById('firstname').value + ".jpg";
  // TODO: actually save user profile pic in directory
  roommate.firstName = document.getElementById('firstname').value;
  roommate.lastName = document.getElementById('lastname').value;
  roommate.hasPets = document.getElementById('haspets').checked;
  roommate.hasKids = document.getElementById('haskids').checked;

  if(localStorage.getItem('roommates') === null){ // IF there is nothing in storage
    roomates = [];
    roomates.push(roommate)
    localStorage.setItem('roommates', JSON.stringify(roomates));
  } else{
    roomates = JSON.parse(localStorage.getItem('roommates'));
    roomates.push(roommate);
    localStorage.setItem('roommates', JSON.stringify(roomates));
  }


  console.log(roommate);
  // TODO: Might switch this to local storage for now

  //saveText( JSON.stringify(roommate), "userdata.json" );

  e.preventDefault();
  document.getElementById('firstname').value = '';
  document.getElementById('lastname').value = '';
  document.getElementById('haspets').checked = false;
  document.getElementById('haskids').checked = false;
  
}
