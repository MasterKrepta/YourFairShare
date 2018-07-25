// const grid = document.getElementByID('roommateGrid');
var grid = document.getElementById('roommateGrid');
// const grid = document.querySelector('roommateGrid');


// Populate cards with data from localStorage
window.onload = GetRoommates();



function GetRoommates(){
  let roommates = JSON.parse(localStorage.getItem('roommates'));
let footer = document.querySelector('footer');
  roommates.forEach(function(roommate){

    let cardDiv = document.createElement('div');
    cardDiv.className = ('card');
    var fullname = `${roommate.firstName} ` + `${roommate.lastName}`;
    var picurl = "images/roommates/" + roommate.picUrl;
    // TODO: Set up a profile pic not found image
    let divContent = `


      <img class"profile-pic" src=${picurl} alt="">
      <h4 class="name">${fullname}</h2>
      <p class="joke">${getJokes(roommate, cardDiv)}</p>
      <p class="percentage">Bill share: 25%</p>
      `;
    cardDiv.innerHTML = divContent;
    grid.append(cardDiv);
  });

}

// Load jokes into html
// var cards = document.querySelectorAll('.card');

// window.onload = function() {
//   for (var i = 0; i < data.length; i++) {
//     getJokes(data[i], cards[i]);
//   }
//   // doSomethingElse();
// };
function getJokes(roomate, card){

const xhr = new XMLHttpRequest();

xhr.open('GET', `http://api.icndb.com/jokes/random?firstName=${roomate.firstName}&amp&lastName=${roomate.lastName}`, true);

xhr.onload = function(){
  if(this.status === 200){
    const response = JSON.parse(this.responseText);

    let output = '';

    if(response.type === 'success'){
      output += `<li>${response.value.joke}</li>`;
    } else {
      output += '<li>Something Went Wrong</li>'
    }
    var fullName = `${roomate.firstName} ${roomate.lastName}`;
    card.querySelector('.name').innerHTML = fullName;
    card.querySelector('.joke').innerHTML = output;
  }
}
  xhr.send();
}

// function getJokes(roomate, card){
//
// const xhr = new XMLHttpRequest();
//
// xhr.open('GET', `http://api.icndb.com/jokes/random?firstName=${roomate.firstName}&amp&lastName=${roomate.lastName}`, true);
//
// xhr.onload = function(){
//   if(this.status === 200){
//     const response = JSON.parse(this.responseText);
//
//     let output = '';
//
//     if(response.type === 'success'){
//       output += `<li>${response.value.joke}</li>`;
//     } else {
//       output += '<li>Something Went Wrong</li>'
//     }
//     var fullName = `${roomate.firstName} ${roomate.lastName}`;
//     card.querySelector('.name').innerHTML = fullName;
//     card.querySelector('.joke').innerHTML = output;
//   }
// }
//   xhr.send();
// }
