

document.getElementById('speak').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    if (text.trim() !== '') {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Please enter text to speak');
    }
  });
  