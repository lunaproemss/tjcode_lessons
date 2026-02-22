// ====================================
// СИСТЕМА ПЛАТНОГО ДОСТУПА ДЛЯ TJ CODE
// ====================================

// 1. НАСТРОЙКИ (измени под себя)
const SECRET_KEYS = [
    'tj2026-01', // ключ для первого ученика
    'tj2026-02', // для второго
    'tj2026-03',
    'tj2026-04',
    'tj2026-05',
    'tj2026-06',
    'tj2026-07',
    'tj2026-08',
    'tj2026-09',
    'tj2026-10',
    'tjcode-pro',
    'html-master'
];
const TOTAL_LESSONS = 5; // Сколько всего уроков

// 2. Функция проверки доступа (главная)
function checkAccessAndLock() {
    // Сначала проверяем, есть ли уже доступ в браузере
    let hasAccess = localStorage.getItem('tjcode_paid');
    
    // Если доступа нет, смотрим на ключ в URL
    if (!hasAccess) {
        const urlParams = new URLSearchParams(window.location.search);
        const keyFromUrl = urlParams.get('key');
        
        // Если ключ правильный - даём доступ
        if (keyFromUrl && SECRET_KEYS.includes(keyFromUrl)) {
            localStorage.setItem('tjcode_paid', 'true');
            hasAccess = 'true';
            
            // Убираем ключ из адресной строки (чтобы не светился)
            const cleanUrl = window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
            
            // Показываем сообщение (можно убрать, если мешает)
            setTimeout(() => alert('✅ Доступ открыт! Все 5 уроков теперь доступны'), 500);
        }
    }
    
    // Теперь блокируем или разблокируем уроки
    const lessonItems = document.querySelectorAll('.lesson-item');
    
    for (let i = 1; i < TOTAL_LESSONS; i++) { // i=1, потому что урок 1 оставляем бесплатным
        if (lessonItems[i]) {
            if (!hasAccess) {
                // Нет доступа - блокируем
                lessonItems[i].classList.add('locked');
                lessonItems[i].style.pointerEvents = 'none';
                lessonItems[i].style.opacity = '0.6';
                
                // Добавляем иконку замка, если её нет
                if (!lessonItems[i].querySelector('.lock-icon')) {
                    const lockSpan = document.createElement('span');
                    lockSpan.className = 'lock-icon';
                    lockSpan.innerHTML = ' 🔒';
                    lockSpan.style.marginLeft = '5px';
                    lessonItems[i].querySelector('h3')?.appendChild(lockSpan);
                }
            } else {
                // Есть доступ - разблокируем
                lessonItems[i].classList.remove('locked');
                lessonItems[i].style.pointerEvents = 'auto';
                lessonItems[i].style.opacity = '1';
                
                // Убираем замок
                const lockIcon = lessonItems[i].querySelector('.lock-icon');
                if (lockIcon) lockIcon.remove();
            }
        }
    }
}

// 3. Переопределяем функцию showLesson для защиты
const originalShowLesson = window.showLesson;
window.showLesson = function(lessonNumber) {
    // Проверяем доступ, если урок не первый
    if (lessonNumber > 1) {
        const hasAccess = localStorage.getItem('tjcode_paid');
        if (!hasAccess) {
            alert('🔒 Этот урок доступен только после оплаты курса. Перейдите в блок "Купить курс"!');
            return; // Не показываем урок
        }
    }
    // Если доступ есть или урок первый - показываем
    if (originalShowLesson) {
        originalShowLesson(lessonNumber);
    }
};

// 4. Запускаем проверку при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    checkAccessAndLock();
    
    // Обновляем счётчик мест (если есть)
    if (typeof updatePlacesCounter === 'function') {
        updatePlacesCounter();
    }
});

// 5. Функция для сброса (можешь вызвать в консоли для теста)
window.resetAccess = function() {
    localStorage.removeItem('tjcode_paid');
    checkAccessAndLock();
    alert('🔄 Доступ сброшен. Обнови страницу.');
};

console.log('✅ Система защиты уроков активна!');
