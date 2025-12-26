function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    function onScanSuccess(decodeText, decodeResult) {
        alert("Your QR code is: " + decodeText, decodeResult);
    }

    let htmlScanner = new Html5QrcodeScanner(
        "my-qr-reader", 
        { fps: 10, qrbox: 250 }
    );

    htmlScanner.render(onScanSuccess);
});
