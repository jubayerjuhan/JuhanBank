loginBtnClicked = () =>{
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transectionArea = document.getElementById('transection-area');
    transectionArea.style.display = 'block'
}


const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', loginBtnClicked)


// deposit event handler
depositFund = () =>{
    let deposit = document.getElementById('depo-amount').value
    const depositamount = parseFloat(deposit)

    // Adding Deposit
    const currentDeposit = document.getElementById('deposit-value').innerText
    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = depositamount + currentDepositNumber;
    console.log(currentDeposit);
    document.getElementById('deposit-value').innerText = totalDeposit;

    //Adding Balance
    const currentBalance = document.getElementById('balance-value').innerText
    const currentBalanceNumber = parseFloat(currentBalance);

    const totalBalance = depositamount + currentBalanceNumber;
    document.getElementById('balance-value').innerText = totalBalance;
}

withdrawFund = () =>{
    const withdrawedFund = document.getElementById('withdraw-amount').value;
    const withdrawedFundNum = parseFloat(withdrawedFund);

    const previousWithdraw = document.getElementById('withdraw-value').innerText;
    const previousWithdrawNum = parseFloat(previousWithdraw);

    const totalWithdraw = withdrawedFundNum + previousWithdrawNum;
    document.getElementById('withdraw-value').innerText = totalWithdraw; 

    const currentBalance = document.getElementById('balance-value').innerText;
    const currentBalanceNum = parseFloat(currentBalance);

    const currentTotalBalance = currentBalanceNum - withdrawedFundNum;
    document.getElementById('balance-value').innerText = currentTotalBalance;

    console.log(currentBalanceNum);
}



const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', depositFund)

const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener("click", withdrawFund)

