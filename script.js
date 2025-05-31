function generateQR() {
  const url = document.getElementById("urlInput").value;
  const qrDiv = document.getElementById("qrcode");
  const downloadLink = document.getElementById("downloadLink");

  if (!url) {
    alert("Please enter a URL.");
    return;
  }

  qrDiv.innerHTML = "";

  QRCode.toDataURL(url, { width: 200 }, function (err, dataUrl) {
    if (err) {
      console.error(err);
      return;
    }

    const img = new Image();
    img.src = dataUrl;
    qrDiv.appendChild(img);

    downloadLink.href = dataUrl;
    downloadLink.style.display = "inline-block";
  });
}