//Login Area
const login = document.getElementById('loginBtn');
login.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
//Transection area

const dipositeButton = document.getElementById('dipositeBtn');
dipositeButton.addEventListener('click', function(){
    const depositeAmount = document.getElementById('depositeAmount').value;
    const depositeAmountNumber = parseFloat(depositeAmount);

    addSpanText('current-deposite', depositeAmountNumber);
    addSpanText('currentBalance', depositeAmountNumber);

    document.getElementById('depositeAmount').value = "";
});
function addSpanText(id, depositeAmountNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositeAmountNumber;
    document.getElementById(id).innerText = totalBalance;
}
    const withdrowBtn = document.getElementById('withdrowBtn');
    withdrowBtn.addEventListener('click', function(){
        getWithdrowBalance('currentWithdrow');
        const currentBalance = document.getElementById('currentBalance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const withdrowAmount = document.getElementById('withdrowAmount').value;
        const withdrowAmountNumber = parseFloat(withdrowAmount);
        const total = currentBalanceNumber - withdrowAmountNumber;
        document.getElementById('currentBalance').innerText = total;
        document.getElementById('withdrowAmount').value = "";
    });
    function getWithdrowBalance(id){
        const currentWithdrow = document.getElementById(id).innerText;
        const currentWithdrowNumber = parseFloat(currentWithdrow);
        const withdrowAmount = document.getElementById('withdrowAmount').value;
        const withdrowAmountNumber = parseFloat(withdrowAmount);
        const total = withdrowAmountNumber + currentWithdrowNumber;
        document.getElementById(id).innerText = total;
    }



