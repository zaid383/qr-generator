<script src="qr-code-styling.js"></script>
<script>
  let qrCode;

  // Function to create or update QR code
  function generateQR() {
    const url = document.getElementById("urlInput").value;
    const color = document.getElementById("qrColor").value;
    const style = document.getElementById("dotStyle").value;
    const logoInput = document.getElementById("logoUpload");
    const logoFile = logoInput.files[0];

    const reader = new FileReader();

    reader.onload = function () {
      if (qrCode) {
        document.getElementById("qrcode").innerHTML = "";
      }

      qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: url,
        image: logoFile ? reader.result : "",
        dotsOptions: {
          color: color,
          type: style
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 10
        }
      });

      qrCode.append(document.getElementById("qrcode"));
    };

    if (logoFile) {
      reader.readAsDataURL(logoFile);
    } else {
      reader.onload();
    }
  }

  // Update QR when URL, color, or style changes
  document.getElementById("urlInput").addEventListener("input", generateQR);
  document.getElementById("qrColor").addEventListener("input", generateQR);
  document.getElementById("dotStyle").addEventListener("change", generateQR);
  document.getElementById("logoUpload").addEventListener("change", generateQR);

  // Initial generate empty QR
  generateQR();

  function downloadQR() {
    if (qrCode) {
      qrCode.download({ name: "qr-code", extension: "png" });
    }
  }
</script>
