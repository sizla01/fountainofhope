document.addEventListener('DOMContentLoaded', function() {
    var donateBtn = document.getElementById('donate-btn');
    var donationOptions = document.getElementById('donation-options');

    if (donateBtn && donationOptions) {
        donateBtn.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default link behavior

            // Toggle the 'show' class to force display as flex
            donationOptions.classList.toggle('show');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // PayPal Pop-up
    var paypalBtn = document.getElementById('paypal-btn');
    paypalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        openPopup('https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=AZZH6P34LRZWG');
    });

    // Cash App Pop-up
    var cashAppBtn = document.getElementById('cashapp-btn');
    cashAppBtn.addEventListener('click', function(event) {
        event.preventDefault();
        openPopup('https://cash.app/$fountainofhope');
    });

    // Function to open a pop-up window
    function openPopup(url) {
        var width = 1000;
        var height = 700;
        var left = (screen.width - width) / 2;
        var top = (screen.height - height) / 2;
        window.open(url, 'popup', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    }
});
