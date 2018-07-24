var data = [
  {"firstName":"Brenda", "lastName":"Doe", "percentage":0.25},
  {"firstName":"Sarah", "lastName":"Teal", "percentage":0.25},
  {"firstName":"Kevin", "lastName":"Jones", "percentage":0.25},
  {"firstName":"Matt", "lastName":"Smith", "percentage":0.25},
]
var cards = document.querySelectorAll('.card');

window.onload = function() {
  for (var i = 0; i < data.length; i++) {
    getJokes(data[i], cards[i]);
  }
  // doSomethingElse();
};
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
