
    console.log("clicked");

var yoco = new window.YocoSDK({
    publicKey: 'pk_test_17f1eefaDmwX8Ee76004',
  });
  var checkoutButton = document.querySelector('#submit');
  checkoutButton.addEventListener('click', function () {
    let valueMoney = document.getElementById("amount").value;
    let ans = valueMoney * 100
    // let money = valueMoney.split("")
    yoco.showPopup({
      amountInCents: ans,
      currency: 'ZAR',
      name: 'Link Me',
      description: 'Awesome description',
      callback: function (result) {
        // This function returns a token that your server can use to capture a payment
        if (result.error) {
          const errorMessage = result.error.message;
          alert("error occured: " + errorMessage);
        } else {
          alert("card successfully tokenised: " + result.id);
        }
        // In a real integration - you would now pass this chargeToken back to your
        // server along with the order/basket that the customer has purchased.
      }
    })
  });

  function btnSubmit(){
    document.getElementById("modal").style.display = "none"
  }