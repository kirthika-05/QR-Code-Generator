let qr;

function generateQRCode() {
  const text = document.getElementById("qrText").value;
  const qrCodeBox = document.getElementById("qrCodeBox");
  const downloadBtn = document.getElementById("downloadBtn");

  qrCodeBox.innerHTML = ""; // clear previous QR

  if (text.trim() === "") {
    alert("Please enter some text or URL");
    return;
  }

  // Generate QR Code
  qr = new QRCode(qrCodeBox, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });

  // Show download button after small delay to allow QR code to render
  setTimeout(() => {
    downloadBtn.style.display = "inline-block";
  }, 500);
}

function downloadQRCode() {
  const qrImg = document.querySelector("#qrCodeBox img");
  if (qrImg) {
    const imgURL = qrImg.src;
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("No QR code found to download!");
  }
}
