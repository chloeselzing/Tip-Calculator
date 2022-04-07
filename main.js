let Calculate = document.getElementById('Calculate');

Calculate.addEventListener('click', () => {
let totalBill = document.getElementById('totalBill').value;
let Percentage = document.getElementById('Percentage').value;
let split = document.getElementById('split').value;

if(totalBill === '' || Percentage == 0 || split == 0) {
    alert('Please enter value');
    return;
}

let total = (totalBill * Percentage) / split;

total = total.toFixed(2);

document.getElementById('tip').innerHTML = total;
}
)