var grid = document.getElementById('billGrid');

// Populate cards with data from localStorage
window.onload = GetBills();



function GetBills(){
  let bills = JSON.parse(localStorage.getItem('bills'));

  bills.forEach(function(bill){

    let cardDiv = document.createElement('div');
    cardDiv.className = ('card');

    let divContent = `
      <h4 class="name">Bills Name: ${bill.name}</h4>
      <p class="amount">Cost: ${bill.amount}</p>
      `;
    cardDiv.innerHTML = divContent;
    grid.append(cardDiv);
  });

}
