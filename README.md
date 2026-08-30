# KONSTANTINOV — сайт мебельной мастерской

Минималистичный одностраничный сайт в стиле [Minotti](https://www.minotti.com/) для бренда KONSTANTINOV.

## Структура

```
konstantinov/
├── index.html          # Главная страница
├── css/
│   └── styles.css      # Стили
├── js/
│   └── main.js         # Интерактив (меню, слайдер, анимации)
├── images/             # Изображения (см. ниже)
└── README.md
```

## Секции сайта

1. **Hero** — полноэкранный баннер с названием и слоганом
2. **Наследие и мастерство** — реставрация антикварной мебели и предметов искусства
3. **Featured** — блок новой коллекции
4. **Проекты** — портфолио реализованных интерьеров
5. **Услуги** — тексты из вашего документа «о нас»
6. **О нас** — философия бренда
7. **Контакты** — форма обратной связи и контактные данные
8. **Footer**

## Добавление изображений

Сейчас секции используют градиентные заглушки. Чтобы добавить реальные фото:

1. Положите изображения в папку `images/`:
   - `hero.jpg` — главный баннер (рекомендуемый размер: 1920×1080)
   - `hero-2.jpg` — второй слайд hero-секции
   - Фото для коллекций и проектов

2. Обновите CSS-классы в `css/styles.css`, заменив градиенты на:
   ```css
   background-image: url('../images/your-image.jpg');
   ```

## Локальный просмотр

Откройте `index.html` в браузере или запустите локальный сервер:

```bash
# Python
python3 -m http.server 8080

# или просто откройте файл
open index.html
```

## Публикация в интернет

Сайт — статический HTML, его можно разместить на любом хостинге:

### GitHub Pages (выбранный вариант)

#### Шаг 1 — создать репозиторий на GitHub

1. Зайдите на [github.com/new](https://github.com/new)
2. Название: `konstantinov` (или любое)
3. Public → Create repository

#### Шаг 2 — загрузить код

```bash
cd ~/Projects/konstantinov
git add .
git commit -m "Initial site skeleton"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/konstantinov.git
git push -u origin main
```

#### Шаг 3 — включить GitHub Pages

1. Репозиторий → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → folder **/ (root)** → Save
4. Через 1–2 минуты сайт будет на `https://ВАШ_ЛОГИН.github.io/konstantinov/`

#### Шаг 4 — подключить свой домен

Когда определитесь с доменом, создайте файл `CNAME` в корне проекта:

```
mmkonstantinov.ru
```

Затем у регистратора домена добавьте DNS-записи:



Для **mmkonstantinov.online** или **vibe-house.online** — те же A-записи, в `CNAME` укажите нужный домен.

В Settings → Pages включите **Enforce HTTPS**.

### Netlify / Vercel (альтернатива)

1. Зарегистрируйтесь на [netlify.com](https://netlify.com) или [vercel.com](https://vercel.com)
2. Перетащите папку проекта или подключите GitHub-репозиторий
3. Деплой произойдёт автоматически

### Свой домен

У вас есть три домена:

| Домен | Рекомендация |
|-------|--------------|
| **mmkonstantinov.ru** | Основной — для российской аудитории |
| **mmkonstantinov.online** | Зеркало или редирект на .ru |
| **vibe-house.online** | Отдельный проект / другой бренд |

#### Подключение через Netlify

1. Задеплойте сайт на Netlify
2. Domain settings → Add custom domain → `mmkonstantinov.ru`
3. У регистратора домена добавьте DNS-записи, которые покажет Netlify:

```

CNAME www    your-site.netlify.app
```

4. Для `mmkonstantinov.online` — добавьте как второй домен и настройте редирект на .ru

#### Подключение через Vercel

1. Задеплойте проект на Vercel
2. Settings → Domains → добавьте `mmkonstantinov.ru`
3. DNS у регистратора:

```

CNAME www    cname.vercel-dns.com
```

#### Почта на домене

Чтобы работал `info@mmkonstantinov.ru`, настройте почту у регистратора домена
(Яндекс 360, Mail.ru для бизнеса, или MX-записи вашего хостинга).

## Что нужно доработать

- [ ] Заменить заглушки на реальные фотографии мебели и интерьеров
- [ ] Обновить контактные данные (телефон, email, адрес шоурума)
- [ ] Подключить форму обратной связи (Formspree, Netlify Forms и т.д.)
- [ ] Добавить ссылки на соцсети
- [ ] Подключить ваш домен

## Технологии

- HTML5, CSS3, JavaScript (без зависимостей)
- Шрифты: Cormorant Garamond + Inter (Google Fonts)
- Адаптивная вёрстка (mobile-first)
