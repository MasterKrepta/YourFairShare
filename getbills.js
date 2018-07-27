var grid = document.getElementById('billGrid');

// Populate cards with data from localStorage
window.onload = GetBills();



function GetBills(){
  let bills = JSON.parse(localStorage.getItem('bills'));

  bills.forEach(function(bill){

    let cardDiv = document.createElement('div');
    cardDiv.className = ('card');

    let divContent = `
      <i class="far fa-money-bill-alt"></i>
      <h4 class="name">${bill.name}</h4>
      <p class="amount">$${bill.amount}</p>
      `;
    cardDiv.innerHTML = divContent;
    grid.append(cardDiv);
  });

}
