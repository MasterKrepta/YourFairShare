document.getElementById("submit-bill").addEventListener('click',  AddBills);


function AddBills(e){
  let bills;
  let bill = {};

  bill.name = document.getElementById('billName').value;
  bill.amount = document.getElementById('billAmount').value;

  if(localStorage.getItem('bills') === null){ // IF there is nothing in storage
    bills = [];
    bills.push(bill);
    localStorage.setItem('bills', JSON.stringify(bills));
  } else{
    bills = JSON.parse(localStorage.getItem('bills'));
    bills.push(bill);
    localStorage.setItem('bills', JSON.stringify(bills));
  }

  console.log(bill);

  e.preventDefault();
  document.getElementById('billName').value = '';
  document.getElementById('billAmount').value = '';
}
