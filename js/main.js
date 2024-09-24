
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


  function addToAmount(doneteAmount) {
    const historyItem = document.createElement("p");  
    historyItem.innerHTML = `${doneteAmount} Taka `;
    const amountContainer = document.getElementById("doneteAmount");
  
    amountContainer.innerHTML=historyItem.innerText;
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

// // live validation for input

document.getElementById('donete-01Amount').addEventListener('input', function(){
  const inputValue = parseFloat(document.getElementById('donete-01Amount').value);
  if(inputValue <= 0 || isNaN(inputValue)) {
      getErrorMessageRemove('donete-01Amount-error');
      return false;
  }
});

document.getElementById('donete-02Amount').addEventListener('input', function(){
  const inputValue = parseFloat(document.getElementById('donete-02Amount').value);
  if(inputValue <= 0 || isNaN(inputValue)) {
      getErrorMessageRemove('donete-02Amount-error');
      return false;
  }
});

document.getElementById('donete-03Amount').addEventListener('input', function(){
  const inputValue = parseFloat(document.getElementById('donete-03Amount').value);
  if(inputValue <= 0 || isNaN(inputValue)) {
      getErrorMessageRemove('donete-03Amount-error');
      return false;
  }
});


function getDonateValue(cardId) {
  const totalDonetePrice = parseFloat(getDoneteTitles('total-donete-price'));
  const donetePrice = parseFloat(getDoneteTitles(`${cardId}Price`));
  const doneteTitles = getDoneteTitles(`${cardId}Title`);
  const doneteAmount = parseFloat(getInputFiuldValue(`${cardId}Amount`));
  const totalBalance =totalDonetePrice - doneteAmount;
  const totalDoneteBalance =donetePrice + doneteAmount;
  console.table({totalDonetePrice, doneteTitles,donetePrice,doneteAmount,totalBalance,totalDoneteBalance});

  if(doneteAmount <= totalDonetePrice &&  doneteAmount >0 ){
    const totalDonetePriceElement =document.getElementById('total-donete-price');
    totalDonetePriceElement.innerText = formatCurrency(totalBalance);
    const totalBalanceElement =document.getElementById(`${cardId}Price`);
    totalBalanceElement.innerText = formatCurrency(totalDoneteBalance);
    addToHistory(doneteAmount, doneteTitles);
    modal_success.showModal(addToAmount(doneteAmount));
  }else{
    modal_error.showModal(addToAmount(doneteAmount));
  }
}