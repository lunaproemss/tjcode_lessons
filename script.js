// Функция обновления предпросмотра
function updatePreview() {
    const htmlCode = document.getElementById('htmlCode').value;
    const preview = document.getElementById('preview');
    
    const styledHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px;
                    line-height: 1.6;
                }
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

// Функция показа уроков
function showLesson(lessonNumber) {
    // Скрываем все уроки
    for (let i = 1; i <= 5; i++) {
        const lesson = document.getElementById('lesson' + i);
        if (lesson) {
            lesson.style.display = 'none';
        }
    }
    
    // Показываем нужный урок
    const currentLesson = document.getElementById('lesson' + lessonNumber);
    if (currentLesson) {
        currentLesson.style.display = 'block';
    }
    
    // Обновляем подсказку
    const hints = {
        1: 'Тегҳои HTML бо қавсҳои кунҷак кушода ва баста мешаванд',
        2: 'Барои пайванд аз href истифода баред',
        3: 'Барои ҷадвал: table, tr, td',
        4: 'Аз style истифода баред',
        5: 'display: flex; ва justify-content: center;'
    };
    
    document.getElementById('hint-text').innerHTML = hints[lessonNumber];
    
    // Обновляем код в редакторе
    const codes = {
        1: '<h1>Салом, Ҷаҳон!</h1>\n<h2>Ин сарлавҳаи хурд аст</h2>\n<p>Ин параграф аст.</p>\n<div>Ин блок аст</div>',
        2: '<p>Ин <strong>матини ғафс</strong> аст.</p>\n<p>Ин <em>матини курсив</em> аст.</p>\n<a href="https://youtube.com/@tj_codee">YouTube канали мо</a>',
        3: '<h3>Рӯйхат:</h3>\n<ul>\n  <li>Python</li>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\n<h3>Ҷадвал:</h3>\n<table border="1">\n  <tr>\n    <td>1</td>\n    <td>2</td>\n  </tr>\n  <tr>\n    <td>3</td>\n    <td>4</td>\n  </tr>\n</table>',
        4: '<style>\n  h1 { color: red; }\n  p { color: blue; }\n</style>\n\n<h1>Сарлавҳаи сурх</h1>\n<p>Матни кабуд</p>',
        5: '<style>\n  .container {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n  }\n  .box {\n    width: 100px;\n    height: 100px;\n    background: #667eea;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n</style>\n\n<div class="container">\n  <div class="box">1</div>\n  <div class="box">2</div>\n  <div class="box">3</div>\n</div>'
    };
    
    document.getElementById('htmlCode').value = codes[lessonNumber];
    
    // Обновляем активный класс
    document.querySelectorAll('.lesson-item').forEach((item, index) => {
        if (index + 1 === lessonNumber) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    updatePreview();
}

// Обработчик для изменения хеша в URL
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash && !isNaN(hash) && hash >= 1 && hash <= 5) {
        showLesson(parseInt(hash));
    }
});

// При загрузке страницы
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && !isNaN(hash) && hash >= 1 && hash <= 5) {
        showLesson(parseInt(hash));
    } else {
        showLesson(1);
    }
});

// Автоматическое обновление при вводе кода
document.getElementById('htmlCode').addEventListener('input', function() {
    clearTimeout(window.updateTimeout);
    window.updateTimeout = setTimeout(updatePreview, 500);
});