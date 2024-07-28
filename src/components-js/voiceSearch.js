export function initVoiceSearch() {
	console.log('Initializing voice search');
    
	const voiceSearchBtn = document.getElementById('voiceSearchBtn');
	
	if (!voiceSearchBtn) {
	  console.error('Element with ID "voiceSearchBtn" not found.');
	  return;
	}
    
	voiceSearchBtn.addEventListener('click', function() {
	  if ('webkitSpeechRecognition' in window) {
	    const recognition = new webkitSpeechRecognition();
	    recognition.lang = 'uk-UA';
	    recognition.interimResults = false;
	    recognition.maxAlternatives = 1;
    
	    recognition.start();
    
	    recognition.onresult = function(event) {
		const transcript = event.results[0][0].transcript;
		document.querySelector('.head__input').value = transcript;
		console.log('Результат: ', transcript);
	    };
    
	    recognition.onerror = function(event) {
		console.error('Помилка розпізнавання: ', event.error);
	    };
    
	    recognition.onend = function() {
		console.log('Розпізнавання завершено');
	    };
	  } else {
	    alert('Ваш браузер не підтримує Web Speech API');
	  }
	});
    }