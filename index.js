function sendMoney() {
    var Sender = document.getElementById("Semail").value;
    var AmountPay = parseInt(document.getElementById("Smoney").value);
    var Receiver = document.getElementById("Remail").value;

    if (Sender == "" || AmountPay == "" || Receiver == "") {
        alert("Insufficient Data.")
    }
    var findSenderBankAccount = Sender + "Bal";
    var SenderAccBal = parseInt(document.getElementById(findSenderBankAccount).innerHTML);

    console.log(Sender, AmountPay, Receiver);
    if (AmountPay > SenderAccBal) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = Receiver + "Bal";

        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + AmountPay;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - AmountPay;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !!\nRs ${AmountPay} is sent to ${Receiver}.`)

        // transaction history 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Amount of Rs. ${AmountPay} is sent from the Sender "${Sender}"
          to Recepient "${Receiver}" on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}