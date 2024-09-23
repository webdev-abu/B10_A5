
function getInputFiuldValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getDoneteTitles(id){
  return document.getElementById(id).innerText;
}

function getErrorMessageRemove(id) {
  return document.getElementById(id).classList.remove('hidden');
}
function getErrorMessageAdd(id) {
  return document.getElementById(id).classList.add('hidden');
}

function formatCurrency(amount) {
    return `${amount.toFixed(2)}`;
  }


  function addToHistory(amount, donateTitle) {
    const historyItem = document.createElement("div");
    historyItem.className =
      "join join-vertical w-full";
  
    historyItem.innerHTML = `
          <div class="join-item px-10 py-6 bg-white rounded shadow-md mb-4">
            <p class="text-[rgba(17,17,17,1)] font-bold text-[20px]">${amount} Taka is Donated for ${donateTitle} </p>
            <p class="text-[rgba(17,17,17,0.7)] font-light text-[16px] mt-3">Date : ${new Date()}</p>
          </div>
      `;
    const historyContainer = document.getElementById("history-list");
  
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  }

  // history tab functionality

const historyButton = document.getElementById("history-button");
const donationButton = document.getElementById("donation-button");
historyButton.addEventListener("click", function () {
    historyButton.classList.add(
    "bg-gradient-to-r", 
    "from-[#4568dc]", 
    "to-[#b06ab3]", 
    "text-[#111111]"
  );

  historyButton.classList.remove("text-gray-600");
  donationButton.classList.remove(
    "bg-gradient-to-r", 
    "from-[#4568dc]", 
    "to-[#b06ab3]", 
    "text-[#111111]"
  );
  getErrorMessageAdd("donate-container");
  getErrorMessageRemove("history-container");
});

donationButton.addEventListener("click", function () {
    donationButton.classList.add(
    "bg-gradient-to-r", 
    "from-[#4568dc]", 
    "to-[#b06ab3]", 
    "text-[#111111]"
  );
  historyButton.classList.remove(
    "bg-gradient-to-r", 
    "from-[#4568dc]", 
    "to-[#b06ab3]", 
    "text-[#111111]"
  );
  getErrorMessageRemove("donate-container");
  getErrorMessageAdd("history-container");
});

// live validation for input

document.getElementById('amount').addEventListener('input', function(){
  const inputValue = parseFloat(document.getElementById('amount').value);
  if(inputValue <= 0 || isNaN(inputValue)) {
      getErrorMessageRemove('amount-error');
      return ;
  }
});

document.getElementById('amount_02').addEventListener('input', function(){
  const inputValue = parseFloat(document.getElementById('amount_02').value);
  if(inputValue <= 0 || isNaN(inputValue)) {
      getErrorMessageRemove('amount_02-error');
      return ;
  }
});

document.getElementById('amount_03').addEventListener('input', function(){
  const inputValue = parseFloat(document.getElementById('amount_03').value);
  if(inputValue <= 0 || isNaN(inputValue)) {
      getErrorMessageRemove('amount_03-error');
      return ;
  }
});

const doneteBtn1 = document.getElementById('donete-btn-01');

doneteBtn1.addEventListener("click", function() {
      
      const totalDonetePrice = parseFloat(getDoneteTitles('total-donete-price'));
      const doneteTitles = getDoneteTitles('card-title_01');
      const donetePrice = parseFloat(getDoneteTitles('donete-price_01'));
      const doneteAmount = getInputFiuldValue('amount');
      const totalBalance =totalDonetePrice - doneteAmount;
      const totalDoneteBalance =donetePrice + doneteAmount;

      if(doneteAmount <= totalDonetePrice){
        const totalDonetePriceElement =document.getElementById('total-donete-price');
        totalDonetePriceElement.innerText = formatCurrency(totalBalance);
        const totalBalanceElement =document.getElementById('donete-price_01');
        totalBalanceElement.innerText = formatCurrency(totalDoneteBalance);

        addToHistory(doneteAmount, doneteTitles);
        modal_success.showModal()
      }else{
        // alert('You have not enough balance to donate this amount');
        modal_error.showModal()
      }
     
      
    });


const doneteBtn2 = document.getElementById('donete-btn-02');
doneteBtn2.addEventListener("click", function() {
      
      const totalDonetePrice = parseFloat(getDoneteTitles('total-donete-price'));
      const doneteTitles = getDoneteTitles('card-title_02');
      const donetePrice = parseFloat(getDoneteTitles('donete-price_02'));
      const doneteAmount = getInputFiuldValue('amount_02');
      const totalBalance =totalDonetePrice - doneteAmount;
      const totalDoneteBalance =donetePrice + doneteAmount;
      console.table({totalDonetePrice, doneteTitles,donetePrice,doneteAmount,totalBalance,totalDoneteBalance})
      if(doneteAmount <= totalDonetePrice){
        const totalDonetePriceElement =document.getElementById('total-donete-price');
        totalDonetePriceElement.innerText = formatCurrency(totalBalance);
        const totalBalanceElement =document.getElementById('donete-price_02');
        totalBalanceElement.innerText = formatCurrency(totalDoneteBalance);

        addToHistory(doneteAmount, doneteTitles);
        modal_success.showModal()
      }else{
        // alert('You have not enough balance to donate this amount');
        modal_error.showModal()
      }
     
      
    });

    const doneteBtn3 = document.getElementById('donete-btn-03');
    doneteBtn3.addEventListener("click", function() {
          
          const totalDonetePrice = parseFloat(getDoneteTitles('total-donete-price'));
          const doneteTitles = getDoneteTitles('card-title_03');
          const donetePrice = parseFloat(getDoneteTitles('donete-price_03'));
          const doneteAmount = getInputFiuldValue('amount_03');
          const totalBalance =totalDonetePrice - doneteAmount;
          const totalDoneteBalance =donetePrice + doneteAmount;
          console.table({totalDonetePrice, doneteTitles,donetePrice,doneteAmount,totalBalance,totalDoneteBalance})
          if(doneteAmount <= totalDonetePrice){
            const totalDonetePriceElement =document.getElementById('total-donete-price');
            totalDonetePriceElement.innerText = formatCurrency(totalBalance);
            const totalBalanceElement =document.getElementById('donete-price_03');
            totalBalanceElement.innerText = formatCurrency(totalDoneteBalance);
    
            addToHistory(doneteAmount, doneteTitles);
            modal_success.showModal()
          }else{
            // alert('You have not enough balance to donate this amount');
            modal_error.showModal()
          }
         
          
        });