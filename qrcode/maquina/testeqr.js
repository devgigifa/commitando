const textInput = document.getElementById('text');
const qrcodeDiv = document.getElementById('qrcode');
const clearBtn = document.getElementById('clear-btn');
const downloadBtn = document.getElementById('download-btn');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = textInput.value.trim();
        if (text) {
            generateQRCode(text);
        }
    });

    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        qrcodeDiv.innerHTML = '';
    });
});

downloadBtn.addEventListener('click', () => {
    const qrcodeImg = qrcodeDiv.querySelector('img');
    const link = document.createElement('a');
    link.href = qrcodeImg.src;
    link.download = 'qrcode.png';
    link.click();
});

function generateQRCode(text) {
    const qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}