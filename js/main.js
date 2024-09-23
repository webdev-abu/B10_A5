function getInputFiuldValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getDoneteTitles(id){
    return document.getElementById(id).innerText;
    // return document.querySelectorAll(id);
}

function formatCurrency(amount) {
    return `${amount.toFixed(2)}`;
  }

const doneteBtn1 = document.getElementById('donete-btn-01');

doneteBtn1.addEventListener("click", function() {
      
      const totalDonetePrice = parseFloat(getDoneteTitles('total-donete-price'));
      console.log(totalDonetePrice);
      const doneteTitles = getDoneteTitles('card-title_01');
      console.log(doneteTitles);
      const donetePrice = parseFloat(getDoneteTitles('donete-price_01'));
      console.log(donetePrice);
      const doneteAmount = getInputFiuldValue('amount');
      console.log(doneteAmount);
      const totalBalance =totalDonetePrice - doneteAmount;
      console.log(totalBalance);
      const totalDoneteBalance =donetePrice + doneteAmount;
      console.log(totalDoneteBalance);
     
      const totalDonetePriceElement =document.getElementById('total-donete-price');
      totalDonetePriceElement.innerText = formatCurrency(totalBalance);
      const totalBalanceElement =document.getElementById('donete-price_01');
      totalBalanceElement.innerText = formatCurrency(totalDoneteBalance);
    });