// ============================================================
// TJ CODE — script.js
// ============================================================

const TOTAL_LESSONS = 20;

const SECRET_KEYS = [
  "tj2026-01", "tj2026-02", "tj2026-03", "tj2026-04", "tj2026-05",
  "tj2026-06", "tj2026-07", "tj2026-08", "tj2026-09", "tj2026-10",
  "tjcode-pro", "html-master"
];

const TELEGRAM_TOKEN = "8493307801:AAEhUnRV1e47NUhI3NWoGkeYWkd4hi5uNJg";
const TELEGRAM_CHAT_ID = "6337391749";

// ============================================================
// HINTS — маслиҳати кӯтоҳ барои ҳар дарс (тоҷикӣ)
// ============================================================
const hints = [
  // Урок 1
  "Ҳар як ҳуҷҷати HTML бояд бо <!DOCTYPE html> оғоз шавад. Тегҳои <html>, <head> ва <body> сохтори асосии саҳифаро ташкил медиҳанд.",
  // Урок 2
  "Сарлавҳаҳо аз h1 (калонтарин) то h6 (хурдтарин) мераванд. Дар як саҳифа танҳо як <h1> истифода баред. <p> — параграф аст.",
  // Урок 3
  "<strong> матнро ғафс мекунад, <em> — курсивӣ. <br> хатро мешиканад, <hr> хати уфуқӣ мекашад.",
  // Урок 4
  "<ul> рӯйхати нишонадор аст, <ol> — рақамӣ. Ҳар унсури рӯйхат бо <li> печонида мешавад.",
  // Урок 5
  "Атрибути href суроғаи пайвандро нишон медиҳад. target='_blank' саҳифаро дар варақаи нав мекушояд. Барои якор — id ва #id истифода баред.",
  // Урок 6
  "src — роҳи расм, alt — матни ивазкунанда агар расм бор нашавад. width ва height андозаро дар пиксел муайян мекунанд.",
  // Урок 7
  "<table> ҷадвал аст, <tr> — сатр, <td> — хона, <th> — сарлавҳаи хона (ғафс ва дар марказ). border рамкаро мекашад.",
  // Урок 8
  "<form> майдонҳоро гурӯҳбандӣ мекунад. <label> тавассути for бо id-и майдон пайваст мешавад. <input> майдони воридот аст.",
  // Урок 9
  "<select> рӯйхати кашшофӣ бо <option>-ҳо аст. <textarea> майдони бисёрхатӣ. radio — як интихоб аз гурӯҳ, checkbox — якчанд.",
  // Урок 10
  "<video> ва <audio> атрибути controls доранд — барои нишон додани тугмаҳо. <iframe> саҳифаи берунӣ (YouTube, харита) -ро ворид мекунад.",
  // Урок 11
  "CSS-ро се роҳ пайваст кардан мешавад: inline (дар style=), internal (дар <style>), external (файли алоҳидаи .css тавассути <link>).",
  // Урок 12
  "Селектори тег — p {}, класс — .nom {}, id — #nom {}. Универсалӣ * {} ба ҳамаи унсурҳо татбиқ мешавад.",
  // Урок 13
  "color рангу матнро муайян мекунад, background-color — рангу фонро. Рангҳоро бо калима (red), HEX (#ff0000) ё rgb(255,0,0) навиштан мешавад.",
  // Урок 14
  "font-size — андозаи ҳарф (px, em, rem). font-family — намуди хат. text-align — ҷойгиркунии матн. line-height — фосилаи байни хатҳо.",
  // Урок 15
  "margin — фосилаи берунӣ (берун аз элемент), padding — фосилаи дохилӣ (дохили чаҳорчӯба). border — рамка. width/height — андозаи блок.",
  // Урок 16
  "display: flex контейнерро ба flex табдил медиҳад. justify-content ҷойгиркунии элементҳоро дар меҳвари асосӣ идора мекунад.",
  // Урок 17
  "align-items — ҷойгиркунӣ дар меҳвари поперечӣ. flex-wrap: wrap — интиқоли элементҳо. gap — фосила байни элементҳои flex.",
  // Урок 18
  "relative — аз ҷои худ ҷобаҷо мешавад. absolute — нисбат ба наздиктарин волидайни position:relative. fixed — дар тиреза маҳкам мемонад.",
  // Урок 19
  "transition тағйири хосиятро мулоим мекунад. transform имкон медиҳад элементро гардонем, калон/хурд кунем ё ҷобаҷо кунем.",
  // Урок 20
  "@media (min-width: 768px) {} — стилҳо танҳо барои экранҳои аз 768px калон. Mobile-first: аввал барои мобайл менависем, баъд барои калон."
];

// ============================================================
// THEORY — назария ва қоидаҳо барои ҳар дарс (тоҷикӣ)
// ============================================================
const theory = [
  // Урок 1 — Сохтори HTML
  {
    intro: "HTML (HyperText Markup Language) — забони белгузории гипертекст аст. Он сохтори саҳифаи вебро муайян мекунад.",
    rules: [
      "<!DOCTYPE html> — ба браузер мегӯяд, ки ин HTML5 аст. Бидуни он браузер хато кор мекунад.",
      "<html> — решаи ҳамаи тегҳо. Ҳамаи чиз дар дохили он менависем.",
      "<head> — мета-маълумот: унвон, charset, пайвасти CSS. Дар экран намоиш дода намешавад.",
      "<body> — ҳама чизе, ки корбар дар браузер мебинад, дар ин ҷо аст.",
      "Атрибути lang='tg' ба браузер забони саҳифаро нишон медиҳад."
    ]
  },
  // Урок 2 — Сарлавҳаҳо ва параграфҳо
  {
    intro: "Сарлавҳаҳо иерархияи матнро нишон медиҳанд. Онҳо барои SEO низ муҳиманд — системаҳои ҷустуҷӯ h1-ро мехонанд.",
    rules: [
      "h1 — сарлавҳаи асосии саҳифа. Дар як саҳифа танҳо ЯКТО h1 бояд бошад.",
      "h2–h6 — зерсарлавҳаҳо. Иерархияро риоя кунед: h3 бояд дар дохили h2 бошад.",
      "<p> — параграф. Браузер автоматӣ фосила мегузорад байни параграфҳо.",
      "Сарлавҳаҳо block-element ҳастанд — ҳар кадом хати нав мегиранд.",
      "Матни холии <p></p> гузоштан хато аст — ҳамеша мазмун дошта бошад."
    ]
  },
  // Урок 3 — Форматкунии матн
  {
    intro: "Форматкунии матн хонданро осон мекунад ва маъноро возеҳтар мекунад. Ҳар тег мақсади хоси худро дорад.",
    rules: [
      "<strong> — матни муҳим (семантикӣ + ғафс). Аз <b> беҳтар аст, зеро маъно дорад.",
      "<em> — таъкид (семантикӣ + курсивӣ). Аз <i> беҳтар аст.",
      "<br> — тег тагёб аст, яъне пӯшанда надорад. Дар матн хатшиканӣ мекунад.",
      "<hr> — хати горизонталӣ барои тақсим кардани бахшҳо.",
      "<u> зери хат мекашад, <s> хати миёна. Аммо барои услуб CSS истифода баред."
    ]
  },
  // Урок 4 — Рӯйхатҳо
  {
    intro: "Рӯйхатҳо маълумотро мунтазам нишон медиҳанд. Дар HTML се намуди рӯйхат вуҷуд дорад.",
    rules: [
      "<ul> (unordered list) — рӯйхати нишонадор. Тартиб муҳим нест.",
      "<ol> (ordered list) — рӯйхати рақамӣ. Тартиб муҳим аст.",
      "<li> (list item) — ҳар унсури рӯйхат. Ҳамеша дар дохили ul ё ol менависем.",
      "Рӯйхатҳоро дар ҳамдигар ҷойгир кардан мешавад — рӯйхати дохилӣ.",
      "type='A' дар ol — ҳарфҳо, type='I' — рақамҳои румӣ."
    ]
  },
  // Урок 5 — Пайвандҳо
  {
    intro: "Пайвандҳо — асоси веб. Онҳо саҳифаҳоро бо ҳамдигар мепайванданд ва навигатсияро ташкил медиҳанд.",
    rules: [
      "href — атрибути асосии пайванд. Метавонад URL, роҳи файл ё #якор бошад.",
      "target='_blank' — варақаи нав. Бехатарӣ: rel='noopener noreferrer' илова кунед.",
      "Якор: id='section1' дар элемент, href='#section1' дар пайванд.",
      "href='tel:+992...' — барои зангзанӣ, href='mailto:...' — барои почта.",
      "Пайванди холӣ: href='#' — ба боло мегардонад. href='javascript:void(0)' — ҳеҷ кор намекунад."
    ]
  },
  // Урок 6 — Расмҳо
  {
    intro: "Расмҳо саҳифаро зинда мекунанд. Формати дуруст ва атрибути alt барои ҳар расм ҳатмист.",
    rules: [
      "src — роҳ ба расм: метавонад URL ё роҳи маҳаллӣ бошад.",
      "alt — матни ивазкунанда. Барои нобиноён ва вақте расм бор намешавад лозим аст.",
      "width ва height — андозаи расм. Бе онҳо саҳифа ҳангоми бор шудан меларзад.",
      "Форматҳо: .jpg — аксҳо, .png — тасвирҳо бо шаффофӣ, .svg — векторӣ, .webp — беҳтарин.",
      "loading='lazy' — расм танҳо вақти дидани корбар бор мешавад. Суръатро зиёд мекунад."
    ]
  },
  // Урок 7 — Ҷадвалҳо
  {
    intro: "Ҷадвалҳо барои намоиш додани маълумоти сохторманд — нархномаҳо, ҷадвали дарсӣ, рӯйхатҳо — истифода мешаванд.",
    rules: [
      "<table> — контейнери ҷадвал. <tr> — сатр (table row). <td> — хона (table data).",
      "<th> — хонаи сарлавҳа. Браузер онро ғафс ва дар марказ нишон медиҳад.",
      "colspan='2' — хона 2 сутун ишғол мекунад. rowspan='2' — 2 сатр.",
      "<thead>, <tbody>, <tfoot> — бахшҳои ҷадвал. Барои услуб ва хонданпазирии код муфид.",
      "Барои тарҳбандии саҳифа ҷадвал ИСТИФОДА НАБАРЕД — барои он Flexbox ва Grid вуҷуд дорад."
    ]
  },
  // Урок 8 — Формаҳо. Қисми 1
  {
    intro: "Формаҳо маълумотро аз корбар мегиранд. Онҳо барои аккаунт, сабт, ҷустуҷӯ ва дигар амалҳо лозиманд.",
    rules: [
      "<form> — контейнер. action — ба куҷо маълумот мефиристад. method='post' ё 'get'.",
      "<input type='text'> — майдони матнӣ. type='email' — барои почта бо санҷиш.",
      "<label> — тавсифи майдон. for='id_майдон' — лозим аст барои дастрасӣ.",
      "placeholder — матни намунавӣ дар дохили майдон. required — майдони ҳатмӣ.",
      "type='submit' — тугмаи фиристодан. type='reset' — тоза кардани форм."
    ]
  },
  // Урок 9 — Формаҳо. Қисми 2
  {
    intro: "Формаҳо унсурҳои гуногун доранд. Ҳар кадом барои вазифаи муайян ихтироъ шудааст.",
    rules: [
      "<select> — рӯйхати кашшофӣ. Ҳар интихоб бо <option value='...'> навишта мешавад.",
      "<textarea> — майдони бисёрхатӣ. rows ва cols андозаро муайян мекунанд.",
      "radio — танҳо ЯК интихоб аз гурӯҳ. Ҳамаи radio-ҳои як гурӯҳ як name доранд.",
      "checkbox — якчанд интихоб дар якҷоягӣ мумкин. Ҳар кадом name-и алоҳида дорад.",
      "<button type='submit'> беҳтар аз <input type='submit'> аст — CSS-и бойтар."
    ]
  },
  // Урок 10 — Видео ва аудио
  {
    intro: "Медиаҳо саҳифаро ҷолибтар мекунанд. HTML5 имкон медиҳад видео ва аудиоро бе плагин нишон диҳем.",
    rules: [
      "controls — атрибути ҳатмӣ барои нишон додани тугмаҳои назорат.",
      "autoplay — видео/аудио худ оғоз мешавад. Дар бисёр браузер танҳо бо muted кор мекунад.",
      "loop — такрор шудан. poster — расме, ки пеш аз оғози видео нишон дода мешавад.",
      "<source src='...' type='video/mp4'> — метавонем якчанд формат пешниҳод кунем.",
      "<iframe> — барои видеоҳои YouTube ё харитаҳои Google Maps. sandbox — амнияти иловагӣ."
    ]
  },
  // Урок 11 — Пайваст кардани CSS
  {
    intro: "CSS (Cascading Style Sheets) — забони услуб аст. Он зоҳири HTML-элементҳоро муайян мекунад.",
    rules: [
      "Inline: style='color:red;' — танҳо барои як элемент. Идора кардан мушкил аст.",
      "Internal: <style>...дар <head>...</style> — барои як саҳифа. Беҳтар аз inline.",
      "External: <link rel='stylesheet' href='style.css'> — беҳтарин усул. Барои ҳамаи саҳифа.",
      "Каскад — агар ду қоида якҷо бошанд, қавитарин ғолиб мешавад. inline > internal > external.",
      "Тавсия: ҳамеша external CSS истифода баред — код мунтазамтар ва дубора истифодашаванда."
    ]
  },
  // Урок 12 — Селекторҳо
  {
    intro: "Селектор нишон медиҳад, ки кадом элементҳоро услуб бояд гирад. Дар CSS селекторҳои зиёд вуҷуд доранд.",
    rules: [
      "Тег: p { } — ба ҲАМАИ <p>-ҳо татбиқ мешавад. Эҳтиёт бошед — хеле васеъ аст.",
      "Класс: .nom { } — ба ҳамаи элементҳои class='nom'. Аксар вақт истифода мешавад.",
      "ID: #nom { } — танҳо ба ЯК элемент бо id='nom'. Дар як саҳифа id такрор нашавад.",
      "Универсалӣ: * { } — ба ҳамаи элементҳо. Одатан барои reset истифода мешавад.",
      "Ворисӣ: .card p { } — танҳо <p>-ҳои дохили .card. Дақиқтар аст."
    ]
  },
  // Урок 13 — Рангҳо ва фон
  {
    intro: "Ранг яке аз муҳимтарин хосиятҳои тарҳбандист. CSS усулҳои гуногуни нишон додани рангро дастгирӣ мекунад.",
    rules: [
      "color — ранги матн. background-color — ранги фон.",
      "Калима: red, blue, green — содда аммо маҳдуд (танҳо 140 ранг).",
      "HEX: #ff0000 — 16-тоӣ. Аввал #, баъд 6 рақам (RR GG BB). Маъмултарин.",
      "RGB: rgb(255, 0, 0) — (сурх, сабз, кабуд) ҳар кадом 0–255.",
      "rgba(255,0,0,0.5) — бо шаффофӣ (alpha 0=шаффоф, 1=пурра). Барои пӯшишҳо муфид."
    ]
  },
  // Урок 14 — Матн ва шрифтҳо
  {
    intro: "Типографияи дуруст хонданро осон мекунад. CSS хосиятҳои зиёд барои идора кардани матн дорад.",
    rules: [
      "font-size: 16px — андозаи хат. px — пиксел. em — нисбат ба волидайн. rem — нисбат ба решаи саҳифа.",
      "font-family: 'Roboto', sans-serif — аввал хати дилхоҳ, баъд запасӣ.",
      "font-weight: 400 — муқаррарӣ, 700 — ғафс. bold = 700, normal = 400.",
      "text-align: left/center/right/justify — ҷойгиркунии матн дар блок.",
      "line-height: 1.6 — тавсияшуда барои матни асосӣ. Хонданро беҳтар мекунад."
    ]
  },
  // Урок 15 — Блокҳо ва фосилаҳо
  {
    intro: "Box Model — асоси тарҳбандии CSS. Ҳар элемент чаҳор қабат дорад: мӯҳтаво, padding, border, margin.",
    rules: [
      "padding — фосилаи дохилӣ байни мӯҳтаво ва border. Рангу фон он-ро пӯшонида мешавад.",
      "margin — фосилаи берунӣ байни ин элемент ва дигарон. Шаффоф аст.",
      "border: 2px solid #ccc — ғафсӣ, услуб (solid/dashed/dotted), ранг.",
      "box-sizing: border-box — width андозаи УМУМИИ элементро нишон медиҳад. Ҳамеша истифода баред.",
      "margin: auto дар элементи дорои width — онро дар марказ мегузорад."
    ]
  },
  // Урок 16 — Flexbox. Қисми 1
  {
    intro: "Flexbox — системаи тарҳбандии якмеҳварӣ. Он тақсими элементҳоро дар сатр ё сутун осон мекунад.",
    rules: [
      "display: flex — ба контейнер дода мешавад, на ба фарзандон.",
      "flex-direction: row (пешфарз) — аз чап ба рост. column — аз боло ба поён.",
      "justify-content идора мекунад меҳвари асосиро: flex-start, center, flex-end, space-between, space-around.",
      "space-between — фосилаи баробар байни элементҳо. space-around — фосила аз ҳамаи тарафҳо.",
      "Контейнери flex элементҳоро автоматӣ дар як хат мегузорад (агар flex-wrap набошад)."
    ]
  },
  // Урок 17 — Flexbox. Қисми 2
  {
    intro: "Дар дарси дуюми Flexbox хосиятҳои пешрафта омӯхта мешаванд, ки имкони тарҳбандии мураккабро медиҳанд.",
    rules: [
      "align-items — меҳвари поперечӣ (амудӣ): stretch (пешфарз), center, flex-start, flex-end.",
      "flex-wrap: wrap — агар ҷой нарасад, элементҳо ба хати нав мегузаранд.",
      "gap: 16px — фосила байни ҳамаи элементҳо. Беҳтар аз margin аст.",
      "flex: 1 — элемент ҷои холиро ишғол мекунад. flex: 2 — ду баробар зиёдтар.",
      "align-self — барои ЯК элемент align-items-ро мепӯшонад."
    ]
  },
  // Урок 18 — Ҷойгиркунӣ (Position)
  {
    intro: "position имкон медиҳад элементҳоро аз ҷараёни муқаррарии ҳуҷҷат берун кунем ва дар ҷои дилхоҳ гузорем.",
    rules: [
      "static — пешфарз. top/left/right/bottom кор намекунанд.",
      "relative — аз ҷои аслии худ ҷобаҷо мешавад. Дигар элементҳоро ба ҳаракат намеорад.",
      "absolute — аз ҷараёни ҳуҷҷат берун меравад. Нисбат ба наздиктарин position-дор волидайн.",
      "fixed — нисбат ба тиреза. Ҳангоми scrollи саҳифа дар ҷои худ мемонад.",
      "sticky — мисли relative, аммо вақти scroll ба fixed табдил меёбад. Барои header муфид."
    ]
  },
  // Урок 19 — Аниматсияҳо
  {
    intro: "Аниматсияҳо саҳифаро зинда мекунанд. CSS ду роҳ дорад: transition (гузариши мулоим) ва animation (@keyframes).",
    rules: [
      "transition: all 0.3s ease — ҳамаи тағйиротро дар 0.3 сония мулоим мекунад.",
      "transform: translateX(10px) — ҷобаҷокунӣ. rotate(45deg) — чархондан. scale(1.1) — калон кардан.",
      "@keyframes nom { from {...} to {...} } — кадрҳои аниматсия. animation: nom 1s infinite.",
      "ease, ease-in, ease-out, linear — суръати аниматсия. ease-out — табиитарин аст.",
      "will-change: transform — браузерро огоҳ мекунад, ки ин элемент аниматсия мегирад. GPU истифода мешавад."
    ]
  },
  // Урок 20 — Медиа-запросҳо
  {
    intro: "Адаптивӣ маънояш он аст, ки сайт дар ҳама дастгоҳ — телефон, планшет, компютер — хуб намоиш дода мешавад.",
    rules: [
      "@media (max-width: 768px) {} — стилҳо танҳо барои экранҳои то 768px (Desktop-first).",
      "@media (min-width: 768px) {} — стилҳо барои экранҳои аз 768px калон (Mobile-first).",
      "Mobile-first тавсия дода мешавад: аввал барои телефон, баъд бо @media барои калон.",
      "Нуқтаҳои шикаст (breakpoints): 480px — телефон, 768px — планшет, 1024px — ноутбук, 1280px — мониторы калон.",
      "meta viewport фаромӯш накунед: <meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    ]
  }
];

// ============================================================
// CODES — примеры кода для каждого урока
// ============================================================
const codes = [
  // Урок 1 — Сохтори HTML
  `<!DOCTYPE html>
<html lang="tg">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сафҳаи ман</title>
  </head>
  <body>
    <h1>Салом, ҷаҳон!</h1>
    <p>Ин аввалин сафҳаи веби ман аст.</p>
  </body>
</html>`,

  // Урок 2 — Сарлавҳаҳо ва параграфҳо
  `<!DOCTYPE html>
<html>
<head><title>Сарлавҳаҳо</title></head>
<body>
  <h1>Сарлавҳаи асосӣ (H1)</h1>
  <h2>Сарлавҳаи дуюм (H2)</h2>
  <h3>Сарлавҳаи сеюм (H3)</h3>
  <h4>Сарлавҳаи чорум (H4)</h4>
  <h5>Сарлавҳаи панҷум (H5)</h5>
  <h6>Сарлавҳаи шашум (H6)</h6>
  <p>Ин параграфи якум аст.</p>
  <p>Ин параграфи дуюм аст.</p>
</body>
</html>`,

  // Урок 3 — Форматкунии матн
  `<!DOCTYPE html>
<html>
<body>
  <p>Матни <strong>муҳим (bold)</strong> ва матни <em>курсивӣ (italic)</em>.</p>
  <p>Хат якум.<br>Хат дуюм (баъди br).</p>
  <p>Боло</p>
  <hr>
  <p>Поён (баъди хати уфуқӣ)</p>
  <p><u>Зери хат</u> ва <s>хати миёна</s></p>
</body>
</html>`,

  // Урок 4 — Рӯйхатҳо
  `<!DOCTYPE html>
<html>
<body>
  <h2>Рӯйхати нишонадор (ul)</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>Рӯйхати рақамӣ (ol)</h2>
  <ol>
    <li>Дарси якум</li>
    <li>Дарси дуюм</li>
    <li>Дарси сеюм</li>
  </ol>
</body>
</html>`,

  // Урок 5 — Пайвандҳо
  `<!DOCTYPE html>
<html>
<body>
  <!-- Пайванди берунӣ -->
  <a href="https://google.com" target="_blank">Google кушо</a>

  <br><br>

  <!-- Якор (anchor) -->
  <a href="#section2">Ба қисми дуюм гузар</a>

  <br><br><br><br><br><br>

  <h2 id="section2">Қисми дуюм</h2>
  <p>Ту ба ин ҷо гузаштӣ!</p>
</body>
</html>`,

  // Урок 6 — Расмҳо
  `<!DOCTYPE html>
<html>
<body>
  <h2>Расм бо андозаи муайян</h2>
  <img
    src="https://picsum.photos/300/200"
    alt="Расми намунавӣ"
    width="300"
    height="200"
  >

  <h2>Расм бо фоиз</h2>
  <img
    src="https://picsum.photos/400/250"
    alt="Манзара"
    style="width:100%; max-width:400px;"
  >
</body>
</html>`,

  // Урок 7 — Ҷадвалҳо
  `<!DOCTYPE html>
<html>
<body>
  <table border="1" cellpadding="8" cellspacing="0">
    <tr>
      <th>Ном</th>
      <th>Синф</th>
      <th>Баҳо</th>
    </tr>
    <tr>
      <td>Алӣ</td>
      <td>10-А</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Нилуфар</td>
      <td>10-Б</td>
      <td>4</td>
    </tr>
  </table>
</body>
</html>`,

  // Урок 8 — Формаҳо. Қисми 1
  `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="name">Номатонро нависед:</label><br>
    <input type="text" id="name" name="name" placeholder="Масалан: Алӣ"><br><br>

    <label for="email">Почтаи электронӣ:</label><br>
    <input type="email" id="email" name="email" placeholder="ali@email.com"><br><br>

    <label for="password">Рамз:</label><br>
    <input type="password" id="password" name="password"><br><br>

    <input type="submit" value="Фиристодан">
  </form>
</body>
</html>`,

  // Урок 9 — Формаҳо. Қисми 2
  `<!DOCTYPE html>
<html>
<body>
  <form>
    <!-- Выпадающий список -->
    <label for="city">Шаҳр:</label>
    <select id="city">
      <option value="dushanbe">Душанбе</option>
      <option value="khujand">Хуҷанд</option>
      <option value="bokhtar">Бохтар</option>
    </select><br><br>

    <!-- Textarea -->
    <label for="msg">Паём:</label><br>
    <textarea id="msg" rows="4" cols="30"></textarea><br><br>

    <!-- Radio -->
    <p>Ҷинс:</p>
    <input type="radio" name="gender" value="m"> Мард
    <input type="radio" name="gender" value="f"> Зан<br><br>

    <!-- Checkbox -->
    <input type="checkbox" id="agree">
    <label for="agree">Розиам</label><br><br>

    <button type="submit">Ирсол</button>
  </form>
</body>
</html>`,

  // Урок 10 — Видео ва аудио
  `<!DOCTYPE html>
<html>
<body>
  <h2>Видео</h2>
  <video width="320" controls>
    <source src="video.mp4" type="video/mp4">
    Браузери шумо видеоро дастгирӣ намекунад.
  </video>

  <h2>Аудио</h2>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Браузери шумо аудиоро дастгирӣ намекунад.
  </audio>

  <h2>YouTube (iframe)</h2>
  <iframe
    width="560" height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    allowfullscreen>
  </iframe>
</body>
</html>`,

  // Урок 11 — Пайваст кардани CSS
  `<!DOCTYPE html>
<html>
<head>
  <!-- Internal CSS -->
  <style>
    h1 { color: darkblue; }
    p  { font-size: 16px; }
  </style>
  <!-- External CSS: <link rel="stylesheet" href="style.css"> -->
</head>
<body>
  <!-- Inline CSS -->
  <h1 style="text-decoration: underline;">Сарлавҳа</h1>
  <p>Параграф бо internal CSS.</p>
  <p style="color: red;">Параграф бо inline CSS.</p>
</body>
</html>`,

  // Урок 12 — Селекторҳо
  `<!DOCTYPE html>
<html>
<head>
<style>
  /* Селектори тег */
  p { color: #333; }

  /* Селектори класс */
  .highlight { background-color: yellow; font-weight: bold; }

  /* Селектори id */
  #main-title { color: darkgreen; font-size: 2em; }

  /* Универсалӣ */
  * { box-sizing: border-box; margin: 0; padding: 0; }
</style>
</head>
<body>
  <h1 id="main-title">Сарлавҳа бо ID</h1>
  <p>Параграфи оддӣ.</p>
  <p class="highlight">Параграфи равшон (class).</p>
</body>
</html>`,

  // Урок 13 — Рангҳо ва фон
  `<!DOCTYPE html>
<html>
<head>
<style>
  body { background-color: #f0f4f8; }

  .box1 {
    color: white;
    background-color: #e74c3c;
    padding: 20px;
  }
  .box2 {
    color: #2c3e50;
    background-color: rgb(52, 152, 219);
    padding: 20px;
  }
  .box3 {
    background-image: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 20px;
  }
</style>
</head>
<body>
  <div class="box1">Сурх (HEX)</div>
  <div class="box2">Кабуд (RGB)</div>
  <div class="box3">Градиент</div>
</body>
</html>`,

  // Урок 14 — Матн ва шрифтҳо
  `<!DOCTYPE html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Roboto', sans-serif; }

  .big    { font-size: 32px; }
  .small  { font-size: 12px; }
  .center { text-align: center; }
  .right  { text-align: right; }
  .spaced { line-height: 2; }
  .upper  { text-transform: uppercase; letter-spacing: 3px; }
</style>
</head>
<body>
  <p class="big">Калон (32px)</p>
  <p class="small">Хурд (12px)</p>
  <p class="center">Марказ</p>
  <p class="right">Рост</p>
  <p class="spaced">Фосилаи байни хатҳо зиёд аст. Lorem ipsum dolor sit amet consectetur.</p>
  <p class="upper">Ҳарфҳои калон</p>
</body>
</html>`,

  // Урок 15 — Блокҳо ва фосилаҳо
  `<!DOCTYPE html>
<html>
<head>
<style>
  .card {
    width: 250px;
    height: auto;
    border: 2px solid #3498db;
    border-radius: 10px;
    padding: 20px;
    margin: 30px auto;
    background: #ecf0f1;
  }
  .inner {
    background: #3498db;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="inner">padding: 10px дорад</div>
    <p>margin ин элементро аз дигарон дур мекунад.</p>
  </div>
</body>
</html>`,

  // Урок 16 — Flexbox. Қисми 1
  `<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    display: flex;
    justify-content: space-between;
    background: #dfe6e9;
    padding: 10px;
    gap: 10px;
  }
  .box {
    background: #0984e3;
    color: white;
    padding: 20px 30px;
    border-radius: 6px;
    font-size: 18px;
  }
</style>
</head>
<body>
  <h3>justify-content: space-between</h3>
  <div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</body>
</html>`,

  // Урок 17 — Flexbox. Қисми 2
  `<!DOCTYPE html>
<html>
<head>
<style>
  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    background: #f8f9fa;
    padding: 15px;
    min-height: 120px;
  }
  .item {
    background: #6c5ce7;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
  }
  .tall { height: 80px; display:flex; align-items:center; }
</style>
</head>
<body>
  <div class="wrap">
    <div class="item">A</div>
    <div class="item tall">B (баланд)</div>
    <div class="item">C</div>
    <div class="item">D</div>
    <div class="item">E</div>
    <div class="item">F</div>
  </div>
</body>
</html>`,

  // Урок 18 — Ҷойгиркунӣ (position)
  `<!DOCTYPE html>
<html>
<head>
<style>
  .relative-box {
    position: relative;
    background: #dfe6e9;
    width: 300px; height: 150px;
    margin: 40px auto;
  }
  .absolute-box {
    position: absolute;
    top: 10px; right: 10px;
    background: #e17055;
    color: white;
    padding: 8px 14px;
    border-radius: 4px;
    font-size: 13px;
  }
  .fixed-badge {
    position: fixed;
    bottom: 20px; right: 20px;
    background: #00b894;
    color: white;
    padding: 10px 16px;
    border-radius: 20px;
    font-size: 13px;
  }
</style>
</head>
<body>
  <div class="relative-box">
    Волидайн (relative)
    <div class="absolute-box">absolute</div>
  </div>
  <div class="fixed-badge">fixed (ҳамеша пайдо)</div>
</body>
</html>`,

  // Урок 19 — Аниматсияҳо
  `<!DOCTYPE html>
<html>
<head>
<style>
  .btn {
    display: inline-block;
    padding: 14px 28px;
    background: #6c5ce7;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    margin: 20px;
    font-size: 16px;
  }
  .btn:hover {
    background: #a29bfe;
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 8px 24px rgba(108,92,231,0.4);
  }
  .spin {
    display: inline-block;
    width: 50px; height: 50px;
    border: 6px solid #dfe6e9;
    border-top-color: #0984e3;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
    margin: 20px;
  }
  @keyframes rotate {
    to { transform: rotate(360deg); }
  }
</style>
</head>
<body>
  <div class="btn">Ба болояш бир!</div>
  <div class="spin"></div>
</body>
</html>`,

  // Урок 20 — Медиа-запросҳо
  `<!DOCTYPE html>
<html>
<head>
<style>
  /* Mobile-first: аввал барои мобайл */
  .card {
    background: #0984e3;
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;
  }
  .grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
  }

  /* Tablet (768px ва болотар) */
  @media (min-width: 768px) {
    .grid { flex-direction: row; }
    .card { font-size: 18px; flex: 1; }
  }

  /* Desktop (1024px ва болотар) */
  @media (min-width: 1024px) {
    .card { padding: 40px; font-size: 22px; }
  }
</style>
</head>
<body>
  <div class="grid">
    <div class="card">Карди 1</div>
    <div class="card">Карди 2</div>
    <div class="card">Карди 3</div>
  </div>
  <p style="text-align:center;color:#636e72;">Андозаи браузерро тағйир диҳед!</p>
</body>
</html>`
];

// ============================================================
// LESSON DATA — заголовки уроков (для showLesson)
// ============================================================
const lessonData = [
  { week: 1, title: "Сохтори HTML", tags: ["<!DOCTYPE html>", "<html>", "<head>", "<body>"] },
  { week: 1, title: "Сарлавҳаҳо ва параграфҳо", tags: ["<h1>–<h6>", "<p>"] },
  { week: 1, title: "Форматкунии матн", tags: ["<strong>", "<em>", "<br>", "<hr>"] },
  { week: 1, title: "Рӯйхатҳо", tags: ["<ul>", "<ol>", "<li>"] },
  { week: 1, title: "Пайвандҳо", tags: ["<a href>", "target", "якоряҳо"] },
  { week: 2, title: "Расмҳо", tags: ["<img>", "src", "alt", "width", "height"] },
  { week: 2, title: "Ҷадвалҳо", tags: ["<table>", "<tr>", "<td>", "<th>"] },
  { week: 2, title: "Формаҳо. Қисми 1", tags: ["<form>", "<input>", "<label>"] },
  { week: 2, title: "Формаҳо. Қисми 2", tags: ["<select>", "<textarea>", "<button>", "radio", "checkbox"] },
  { week: 2, title: "Видео ва аудио", tags: ["<video>", "<audio>", "<iframe>"] },
  { week: 3, title: "Пайваст кардани CSS", tags: ["inline", "internal", "external"] },
  { week: 3, title: "Селекторҳо", tags: ["tag", ".class", "#id", "*"] },
  { week: 3, title: "Рангҳо ва фон", tags: ["color", "background-color", "background-image"] },
  { week: 3, title: "Матн ва шрифтҳо", tags: ["font-size", "font-family", "text-align", "line-height"] },
  { week: 3, title: "Блокҳо ва фосилаҳо", tags: ["margin", "padding", "border", "width", "height"] },
  { week: 4, title: "Flexbox. Қисми 1", tags: ["display: flex", "justify-content"] },
  { week: 4, title: "Flexbox. Қисми 2", tags: ["align-items", "flex-wrap", "gap", "flex-direction"] },
  { week: 4, title: "Ҷойгиркунӣ (Position)", tags: ["relative", "absolute", "fixed", "sticky"] },
  { week: 4, title: "Аниматсияҳо", tags: ["transition", "transform", "@keyframes"] },
  { week: 4, title: "Медиа-запросҳо (Адаптив)", tags: ["@media", "mobile-first", "min-width"] }
];

// ============================================================
// CORE FUNCTIONS
// ============================================================

function updatePreview() {
  const editor = document.getElementById("code-editor");
  const preview = document.getElementById("preview-frame");
  if (!editor || !preview) return;
  const doc = preview.contentDocument || preview.contentWindow.document;
  doc.open();
  doc.write(editor.value);
  doc.close();
}

function showLesson(num) {
  const isUnlocked = localStorage.getItem("tjcode_access") === "true";
  const freeLimit = 3;

  if (num > freeLimit && !isUnlocked) {
    showAccessModal();
    return;
  }

  const idx = num - 1;
  const lesson = lessonData[idx];

  // Update active lesson button
  document.querySelectorAll(".lesson-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`.lesson-btn[data-lesson="${num}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  // Update lesson title
  const titleEl = document.getElementById("lesson-title");
  if (titleEl) titleEl.textContent = `Дарс ${num}: ${lesson.title}`;

  // Update week badge
  const weekEl = document.getElementById("lesson-week");
  if (weekEl) weekEl.textContent = `Ҳафтаи ${lesson.week}`;

  // Update tags
  const tagsEl = document.getElementById("lesson-tags");
  if (tagsEl) {
    tagsEl.innerHTML = lesson.tags.map(t => `<span class="tag-badge">${t}</span>`).join(" ");
  }

  // Update hint
  const hintEl = document.getElementById("lesson-hint");
  if (hintEl) hintEl.textContent = hints[idx];

  // Update theory block
  const theoryEl = document.getElementById("lesson-theory");
  if (theoryEl && theory[idx]) {
    const t = theory[idx];
    const rulesHTML = t.rules.map(r => `
      <li class="theory-rule">
        <span class="rule-dot"></span>
        <span>${r}</span>
      </li>`).join("");
    theoryEl.innerHTML = `
      <div class="theory-intro">${t.intro}</div>
      <ul class="theory-rules">${rulesHTML}</ul>
    `;
  }

  // Update editor with lesson code
  const editor = document.getElementById("code-editor");
  if (editor) {
    editor.value = codes[idx];
    updatePreview();
  }

  // Scroll to editor
  const editorSection = document.getElementById("editor-section");
  if (editorSection) {
    editorSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Save current lesson
  localStorage.setItem("tjcode_current_lesson", num);
}

function showAccessModal() {
  const modal = document.getElementById("access-modal");
  if (modal) modal.style.display = "flex";
}

function closeAccessModal() {
  const modal = document.getElementById("access-modal");
  if (modal) modal.style.display = "none";
}

function checkAccessAndLock() {
  const keyInput = document.getElementById("access-key-input");
  if (!keyInput) return;
  const key = keyInput.value.trim();

  if (SECRET_KEYS.includes(key)) {
    localStorage.setItem("tjcode_access", "true");
    localStorage.setItem("tjcode_key_used", key);
    sendTelegramNotification(key);
    closeAccessModal();
    updateUIForAccess(true);
    showSuccessToast("Дастрасӣ кушода шуд! Ҳамаи дарсҳо озод аст.");
    markKeyAsUsed(key);
  } else {
    keyInput.style.borderColor = "#e74c3c";
    keyInput.placeholder = "Калид нодуруст аст! Дубора кӯшиш кунед";
    keyInput.value = "";
    setTimeout(() => {
      keyInput.style.borderColor = "";
      keyInput.placeholder = "Калиди дастрасиро ворид кунед...";
    }, 2000);
  }
}

function updateUIForAccess(unlocked) {
  const lockOverlays = document.querySelectorAll(".lock-overlay");
  lockOverlays.forEach(el => el.style.display = unlocked ? "none" : "flex");

  const accessStatus = document.getElementById("access-status");
  if (accessStatus) {
    accessStatus.innerHTML = unlocked
      ? '<i class="fa-solid fa-unlock"></i> Дастрасии пурра'
      : '<i class="fa-solid fa-lock"></i> Дастрасӣ маҳдуд';
    accessStatus.className = unlocked ? "access-badge unlocked" : "access-badge locked";
  }
}

function markKeyAsUsed(key) {
  // Track used keys in localStorage
  const used = JSON.parse(localStorage.getItem("tjcode_used_keys") || "[]");
  if (!used.includes(key)) {
    used.push(key);
    localStorage.setItem("tjcode_used_keys", JSON.stringify(used));
  }
}

async function sendTelegramNotification(key) {
  const time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Dushanbe" });
  const msg = `🎓 TJ CODE — Нави дастрасӣ!\n\n🔑 Калид: ${key}\n⏰ Вақт: ${time}\n🌍 Сафҳа: ${window.location.href}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg, parse_mode: "HTML" })
    });
  } catch (e) {
    console.log("Telegram notification failed:", e);
  }
}

function updatePlacesCounter() {
  const usedKeys = JSON.parse(localStorage.getItem("tjcode_used_keys") || "[]").length;
  const total = 10;
  const remaining = Math.max(0, total - usedKeys);

  const counter = document.getElementById("places-counter");
  if (counter) counter.textContent = remaining;

  const bar = document.getElementById("places-bar");
  if (bar) bar.style.width = `${((total - remaining) / total) * 100}%`;
}

function markAsSold() {
  const priceBlock = document.getElementById("price-block");
  if (priceBlock) {
    priceBlock.classList.add("sold-out");
    const soldBadge = document.createElement("div");
    soldBadge.className = "sold-badge";
    soldBadge.textContent = "ТАМОМ ШУД";
    priceBlock.prepend(soldBadge);
  }
}

function showSuccessToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ============================================================
// TEST / DEBUG FUNCTIONS
// ============================================================

function resetAccess() {
  localStorage.removeItem("tjcode_access");
  localStorage.removeItem("tjcode_key_used");
  localStorage.removeItem("tjcode_current_lesson");
  updateUIForAccess(false);
  console.log("✅ Дастрасӣ бозгардонида шуд");
}

function testNotification() {
  sendTelegramNotification("TEST-KEY-DEBUG");
  console.log("📨 Огоҳии санҷишӣ фиристода шуд");
}

// ============================================================
// INIT — DOMContentLoaded
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Check stored access
  const isUnlocked = localStorage.getItem("tjcode_access") === "true";
  updateUIForAccess(isUnlocked);
  updatePlacesCounter();

  // Load last lesson or default to 1
  const lastLesson = parseInt(localStorage.getItem("tjcode_current_lesson")) || 1;
  showLesson(lastLesson);

  // Editor live preview
  const editor = document.getElementById("code-editor");
  if (editor) {
    editor.addEventListener("input", updatePreview);
  }

  // Access key input — Enter key support
  const keyInput = document.getElementById("access-key-input");
  if (keyInput) {
    keyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkAccessAndLock();
    });
  }

  // Close modal on backdrop click
  const modal = document.getElementById("access-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAccessModal();
    });
  }
});
