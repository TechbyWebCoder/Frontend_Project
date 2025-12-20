const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const captchaLength = 6;

function generateCaptcha() {
    let captcha = '';
    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
    }
    return captcha;
}

document.getElementById('generate').addEventListener('click', () => {
    const captcha = generateCaptcha();
    document.getElementById('captchaDisplay').textContent = captcha;
    document.getElementById('result').textContent = '';
    document.getElementById('captchaInput').value = '';
});

document.getElementById('validate').addEventListener('click', () => {
    const captcha = document.getElementById('captchaDisplay').textContent;
    const input = document.getElementById('captchaInput').value;
    const result = document.getElementById('result');
    if (input === captcha) {
        result.textContent = 'CAPTCHA Validated Successfully!';
        result.style.color = 'green';
    } else {
        result.textContent = 'CAPTCHA Validation Failed!';
        result.style.color = 'red';
    }
});

// Initialize with a CAPTCHA
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate').click();
});
