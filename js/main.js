// ІМПОРТ ФУНКЦІЙ У MEIN
import { initVoiceSearch } from '../components-js/voiceSearch.js';

// ПІДКЛЮЧАЄМО СТИЛІ
import '../scss/styles.scss';

// ПІДКЛЮЧАЄМО ФАЙЛИ JS
import '../components-js/voiceSearch.js';

// ВИКЛИК ФУНКЦІЙ З ФАЙЛІВ
document.addEventListener('DOMContentLoaded', (event) => {
	initVoiceSearch(); // Ініціалізує обробник події для голосового пошуку після завантаження DOM
    });




