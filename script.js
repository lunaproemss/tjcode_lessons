// ====================================
// СИСТЕМА ПЛАТНОГО ДОСТУПА ДЛЯ TJ CODE
// ====================================

// ====================================
// 1. НАСТРОЙКИ
// ====================================

// Секретные ключи доступа
const SECRET_KEYS = [
    'tj2026-01', 'tj2026-02', 'tj2026-03', 'tj2026-04', 'tj2026-05',
    'tj2026-06', 'tj2026-07', 'tj2026-08', 'tj2026-09', 'tj2026-10',
    'tjcode-pro', 'html-master'
];

// Настройки Telegram (ЗАМЕНИ НА СВОИ!)
const TELEGRAM_TOKEN = '8269302769:AAEqTcYxPxm0vXHGBhOGlkstxmqDDEClFpM';      // токен бота от @BotFather
const TELEGRAM_CHAT_ID = '6337391749';  // твой Chat ID от @userinfobot

const TOTAL_LESSONS = 5; // Всего уроков

// ====================================
// 2. ФУНКЦИИ РЕДАКТОРА КОДА
// ====================================

function updatePreview() {
    const htmlCode = document.getElementById('htmlCode')?.value || '';
    const preview = document.getElementById('preview');
    if (!preview) return;
    
    const styledHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
                h1 { color: #667eea; }
                h2 { color: #764ba2; }
            </style>
        </head>
        <body>
            ${htmlCode}
        </body>
        </html>
    `;
    preview.srcdoc = styledHtml;
}

// ====================================
// 3. ФУНКЦИЯ ПОКАЗА УРОКОВ
// ====================================

function showLesson(lessonNumber) {
    console.log('showLesson вызван для урока', lessonNumber);
    
    // Проверка доступа (кроме первого урока)
    if (lessonNumber > 1) {
        const hasAccess = localStorage.getItem('tjcode_paid');
        if (!hasAccess) {
            alert('🔒 Ин дарс танҳо барои харидорони курс дастрас аст!');
            return;
        }
    }

    // Скрываем все уроки
    for (let i = 1; i <= TOTAL_LESSONS; i++) {
        const lesson = document.getElementById('lesson' + i);
        if (lesson) lesson.style.display = 'none';
    }

    // Показываем нужный
    const currentLesson = document.getElementById('lesson' + lessonNumber);
    if (currentLesson) {
        currentLesson.style.display = 'block';
    } else {
        console.error('Урок с id lesson' + lessonNumber + ' не найден');
    }

    // Обновляем подсказку
    const hints = {
        1: 'Тегҳои HTML бо қавсҳои кунҷак кушода ва баста мешаванд',
        2: 'Барои пайванд аз href истифода баред',
        3: 'Барои ҷадвал: table, tr, td',
        4: 'Аз style истифода баред',
        5: 'display: flex; ва justify-content: center;'
    };
    const hintEl = document.getElementById('hint-text');
    if (hintEl) hintEl.innerHTML = hints[lessonNumber] || '';

    // Обновляем код в редакторе
    const codes = {
        1: '<h1>Салом, Ҷаҳон!</h1>\n<h2>Ин сарлавҳаи хурд аст</h2>\n<p>Ин параграф аст.</p>\n<div>Ин блок аст</div>',
        2: '<p>Ин <strong>матини ғафс</strong> аст.</p>\n<p>Ин <em>матини курсив</em> аст.</p>\n<a href="https://youtube.com/@tj_codee">YouTube канали мо</a>',
        3: '<h3>Рӯйхат:</h3>\n<ul>\n  <li>Python</li>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\n<h3>Ҷадвал:</h3>\n<table border="1">\n  <tr>\n    <td>1</td>\n    <td>2</td>\n  </tr>\n  <tr>\n    <td>3</td>\n    <td>4</td>\n  </tr>\n</table>',
        4: '<style>\n  h1 { color: red; }\n  p { color: blue; }\n</style>\n\n<h1>Сарлавҳаи сурх</h1>\n<p>Матни кабуд</p>',
        5: '<style>\n  .container {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n  }\n  .box {\n    width: 100px;\n    height: 100px;\n    background: #667eea;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n</style>\n\n<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>'
    };
    const htmlEl = document.getElementById('htmlCode');
    if (htmlEl) htmlEl.value = codes[lessonNumber] || '';

    // Активный класс
    document.querySelectorAll('.lesson-item').forEach((item, index) => {
        if (index + 1 === lessonNumber) item.classList.add('active');
        else item.classList.remove('active');
    });

    updatePreview();
}

// ====================================
// 4. УВЕДОМЛЕНИЯ В TELEGRAM
// ====================================

function sendTelegramNotification(key, userAgent) {
    // Если токен не настроен, просто выходим
    if (TELEGRAM_TOKEN === '8269302769:AAEqTcYxPxm0vXHGBhOGlkstxmqDDEClFpM' || TELEGRAM_CHAT_ID === '6337391749') {
        console.log('Telegram не настроен. Уведомление не отправлено.');
        return;
    }

    const message = `🔥 <b>Новый вход по ключу!</b>
🔑 Ключ: ${key}
🌐 Браузер: ${userAgent}
⏰ Время: ${new Date().toLocaleString()}`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('✅ Уведомление в Telegram отправлено');
        } else {
            console.error('❌ Ошибка отправки в Telegram:', data);
        }
    })
    .catch(error => console.error('❌ Ошибка:', error));
}

// ====================================
// 5. ЗАЩИТА УРОКОВ
// ====================================

function checkAccessAndLock() {
    let hasAccess = localStorage.getItem('tjcode_paid');

    // Проверяем ключ в URL
    if (!hasAccess) {
        const urlParams = new URLSearchParams(window.location.search);
        const keyFromUrl = urlParams.get('key');
        
        if (keyFromUrl && SECRET_KEYS.includes(keyFromUrl)) {
            localStorage.setItem('tjcode_paid', 'true');
            hasAccess = 'true';
            
            // Отправляем уведомление в Telegram
            sendTelegramNotification(keyFromUrl, navigator.userAgent);
            
            // Убираем ключ из адресной строки
            const cleanUrl = window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
            
            setTimeout(() => alert('✅ Доступ открыт! Все 5 уроков теперь доступны'), 500);
        }
    }
    
    // Блокируем или разблокируем уроки визуально
    const lessonItems = document.querySelectorAll('.lesson-item');
    
    for (let i = 1; i < TOTAL_LESSONS; i++) {
        if (lessonItems[i]) {
            if (!hasAccess) {
                lessonItems[i].classList.add('locked');
                lessonItems[i].style.pointerEvents = 'none';
                lessonItems[i].style.opacity = '0.6';
                
                if (!lessonItems[i].querySelector('.lock-icon')) {
                    const lockSpan = document.createElement('span');
                    lockSpan.className = 'lock-icon';
                    lockSpan.innerHTML = ' 🔒';
                    lockSpan.style.marginLeft = '5px';
                    lessonItems[i].querySelector('h3')?.appendChild(lockSpan);
                }
            } else {
                lessonItems[i].classList.remove('locked');
                lessonItems[i].style.pointerEvents = 'auto';
                lessonItems[i].style.opacity = '1';
                
                const lockIcon = lessonItems[i].querySelector('.lock-icon');
                if (lockIcon) lockIcon.remove();
            }
        }
    }
}

// ====================================
// 6. СЧЁТЧИК МЕСТ
// ====================================

function updatePlacesCounter() {
    const total = 10;
    let sold = parseInt(localStorage.getItem('tjcode_sold') || '0');
    let remaining = Math.max(total - sold, 0);
    
    const counterEl = document.getElementById('placesCounter');
    if (counterEl) counterEl.textContent = remaining;
    
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = (remaining / total) * 100 + '%';
    }
}

function markAsSold() {
    let sold = parseInt(localStorage.getItem('tjcode_sold') || '0');
    localStorage.setItem('tjcode_sold', sold + 1);
    updatePlacesCounter();
}

// ====================================
// 7. ЗАПУСК ПРИ ЗАГРУЗКЕ
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    checkAccessAndLock();
    updatePlacesCounter();
    showLesson(1);
});

// Автообновление редактора
document.getElementById('htmlCode')?.addEventListener('input', function() {
    clearTimeout(window.updateTimeout);
    window.updateTimeout = setTimeout(updatePreview, 500);
});

// ====================================
// 8. ФУНКЦИИ ДЛЯ ТЕСТИРОВАНИЯ
// ====================================

window.resetAccess = function() {
    localStorage.removeItem('tjcode_paid');
    checkAccessAndLock();
    showLesson(1);
    alert('🔄 Доступ сброшен');
};

window.testNotification = function() {
    sendTelegramNotification('test-key', navigator.userAgent);
    alert('✅ Тестовое уведомление отправлено (если токен настроен)');
};

console.log('✅ Система защиты уроков активна!');

