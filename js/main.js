
document.addEventListener('DOMContentLoaded', function () {
  // Элементы управления и блоки
  const toQuotesButton = document.getElementById('to-quotes');
  const startPage = document.getElementById('start-page');
  const quotesSection = document.getElementById('quotes-section');
  const quoteDetail = document.getElementById('quote-detail');
  const selectedQuote = document.getElementById('selected-quote');
  const songText = document.getElementById('song-text');
  const audioPlayer = document.getElementById('audio-player');
  const backToQuotesButton = document.getElementById('backToQuotes');
  const albumCoverImage = document.getElementById('album-cover');
  const headerImg = document.getElementById('header')



  // Данные (замените данными вашего проекта)


  function switchScreen(fromScreen, toScreen, callback) {
    fromScreen.style.opacity = '0';
    setTimeout(() => {
      fromScreen.style.display = 'none';
      toScreen.style.display = 'flex';
      toScreen.style.opacity = '0';
      setTimeout(() => {
        toScreen.style.opacity = '1';
        if (callback && typeof callback === 'function') {
          callback();
        }
      }, 10);
    }, 500);
  }

  // Переход к цитатам
  toQuotesButton.addEventListener('click', function () {

    switchScreen(startPage, quotesSection, function () {
      headerImg.style.display = 'block';
      swiper.update(); // Обновляем Swiper после переключения
    });
  });



  const swiper = new Swiper('.blog-slider', {
    spaceBetween: 300,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    //autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    },
  });


  const swiperData = [
    {
      imgSrc: "/img/1200x1200bf-60 (1).jpg",
      date: "09 Мая 2014",
      title: "Трэп Хата",
      songText: `[Текст песни «Трэп хата» ft. ATL]

      [Интро: ATL]
      SK1TTLESS BEATS
      Клэп, по пизде ладошкой — клэп (Что? Что?)
      Клэп, по пизде ладошкой — клэп (Что? Что?)
      Овощам на грядке этот трек треклятый (Что?)
      Мы с пацанами сняли эту трэп-хату
      
      [Припев: Yanix & ATL]
      Плитки-слитки летят с моей трэп-хаты
      Прям на этаже уже несёт стаффом
      Это не притон, bitch, это трэп-хата
      Пью с горла бухло, как будто Трэп-Папа (Ага)
      Это трэп-хата (Хата), это трэп-хата (Хата)
      Мы с пацанами сняли эту трэп-хату
      Это трэп-хата (Хата), это трэп-хата (Хата)
      Мы с пацанами сняли эту трэп-хату
      
      [Куплет 1: ATL]
      Dirty-Dirty South (Dirty South), Crunk Juice (Crunk Juice)
      На этой трэп-машине я в пизду качусь
      Ещё чуть-чуть — и на хуй сторчусь, ведь я торчу за Русь
      За щекой грязной монашки — сплифф сладкий, как чупа-чупс (Чупа-чупс)
      И пусть планета как жопа трясётся
      За трэпчик родненький поднимем локти от сердца к солнцу
      От сердца к солнцу, от всего сердца к солнцу
      Вавилонское столпотворение уродцев (Гр-ра)
      В русрэпе самый южный черномазый — Пушкин
      На заднем курят крэк Хрюша, Степашка и Каркуша
      Танчик дымит, как фаерок, так что хер потушишь
      Тут гладко стелет фраерок — от души и в душу (Что?)
      
      [Припев: Yanix & ATL]
      Плитки-слитки летят с моей трэп-хаты
      Прям на этаже уже несёт стаффом
      Это не притон, bitch, это трэп-хата
      Пью с горла бухло, как будто Трэп-Папа (Ага)
      Это трэп-хата (Хата), это трэп-хата (Хата)
      Мы с пацанами сняли эту трэп-хату
      Это трэп-хата (Хата), это трэп-хата (Хата)
      Мы с пацанами сняли эту трэп-хату
      
      [Куплет 2: Yanix]
      Хлопай (Хлопай), хлопай (Хлопай), крошка, хлопай жопой (Да)
      Клянусь Богом, это не сигара — это жирный джонни
      Какой фистинг? Локтинг в моде, я танцую ей в утробе
      Кручу ризлы ей на жопе, ясен член, что на ней жоры, boy
      Она выбрила слово «Свэг» прямо у себя на лобке
      Сразу выразил ей респект, теперь мы ебёмся под трэп (Ага)
      Одел соску в новый Pyrex — стала яркая, как пиздец (О, да)
      Тощей жопой твёркает здесь, аж искра летит от костей, вау
      Эта сучка — внучка Мадонны
      Она любит трилл, Supreme и всё чёрное
      Тусует под спайсом в палёном Givenchy
      И все эти цацки — ненастоящие
      Она говорит: «Boychicks», я говорю: «Bullshit»
      Хочет на Party College, я говорю: «Фу, bitch»
      Так и проходят EDM-тусы
      Подведём итоги: Россия — для грустных (Pussy)

      [Припев: Yanix & ATL]
      Плитки-слитки летят с моей трэп-хаты
      Прям на этаже уже несёт стаффом
      Это не притон, bitch, это трэп-хата
      Пью с горла бухло, как будто Трэп-Папа (Ага)
      Это трэп-хата (Хата), это трэп-хата (Хата)
      Мы с пацанами сняли эту трэп-хату
      Это трэп-хата (Хата), это трэп-хата (Хата)
      Мы с пацанами сняли эту трэп-хату`,
      audioSrc: "/img/Трэп хата - Yanix feat ATL.mp3",
      description: "«Она выбрила слово «Swag» прямо у себя на лобке \n Сразу выразил ей респект, теперь мы ебемся под трэп»",
    },
    {
      imgSrc: "/img/Poppin.jpg",
      date: "04 Мая 2013",
      title: "Папин",
      songText: `
      [Текст песни «Папин»]

      [Припев]
      Лекс папин, Рейндж папин, Мерс папин, бенз папин
      Ты весь папин: кэш папин, успех папин, респект папин
      Эм-Эль папин, Кайен папин, Порше папин, Икс-6 папин
      LV папин, ДГ папин, ТТ папин, ИП папин
      Все пати — за счёт папы
      Те бабы — за счёт папы
      Жизнь в хате — за счёт папы
      Слил бабки — айфон пятый
      За счёт папы, счёт папы, счёт папы, счёт папы
      Ты сын папы, славный малый — таких не любят на кварталах
      
      [Куплет 1]
      За меня не платят мои папа с мамой (Нет)
      Но я вожу Мерин, и не самый старый
      Мы есть улицы, и это грёбаная правда (Тру)
      Кушал таблы вместе с шаути — в этом нету тайны (Вау)
      Я в деле, мои люди на сцене
      Крутим в ризлы растения (Негр), попивая Jack Daniels
      Мы верим: мне нужно лишь время
      Я и мои негры — мы делаем это
      Ты никчёмен: тратишь нал на тупых тёлок
      Твой папа может — тру стори
      Ты ничтожен — кто спорит? (А)
      Папины тряпки — размер не твой, но скатит
      Котлы папы, очки папы… Сын, тебе бы мозги папы
      
      [Припев]
      Лекс папин, Рейндж папин, Мерс папин, бенз папин
      Ты весь папин: кэш папин, успех папин, респект папин
      Эм-Эль папин, Кайен папин, Порше папин, Икс-6 папин
      LV папин, ДГ папин, ТТ папин, ИП папин
      Все пати — за счёт папы
      Те бабы — за счёт папы
      Жизнь в хате — за счёт папы
      Слил бабки — айфон пятый
      За счёт папы, счёт папы, счёт папы, счёт папы
      Ты сын папы, славный малый — таких не любят на кварталах`,
      audioSrc: "/img/Папин - Yanix.mp3",
      description: "Ты никчемен: тратишь нал на тупых телок \n Твой папа может - тру стори. Ты ничтожен - кто спорит? \n Папины тряпки - размер не твой, но скатит \n Котлы папы, очки папы.... Сын, тебе бы мозги папы»",
    },
    {
      imgSrc: "/img/1200x1200bf-60 (1).jpg",
      date: "25 Июня 2013",
      title: "Всё и Сразу",
      songText: `
      [Текст песни «Всё и сразу»]

      [Интро]
      CM The Producer
      Со мной плохая сука, но я ещё хуже
      Я пью много, курю больше десяти бошек в сутки (Bongo)
      
      [Припев]
      Со мной две подружки-лесбиянки (А)
      Тут жарко так же, как на Касабланке (Вау)
      Мы есть молодые музыканты (Aha)
      Но нам мало одного таланта
      Хочу всё и сразу (Bongo, а), хочу всё и сразу (А)
      Хочу всё и сразу, так нельзя, так надо
      Хочу всё и сразу (А), хочу всё и сразу (А)
      Хочу всё и сразу, так нельзя, так надо
      
      [Куплет 1]
      Я не трачу деньги на них, зато они на меня тратят
      Слушай, убери этот джип, ведь мы оба знаем: он папин
      Всё, что я делаю, — чилл, я катаюсь, будто сыр в масле
      Я и есть тот сукин сын, слышь, кто горячее, чем мы?
      Warrup, mommy, все хотят тусить с Яни (А)
      Никакой любви, boy, во мне ледяной камень (Вау)
      Дал бы ей на клык, но жаль, что у неё кариес (А)
      Насыплю ей в рот Vanish, меня не ебёт, парень
      Я в деле (в деле), wassup, фэны хотят фото (А)
      В моём носу кола, yeah, bitch, hello, Moto (Е)
      Я открытье года на пару с Биг Боссом
      И мне похуй, кореш, можешь считать, это мода (Yanix)
      
      [Припев]
      Со мной две подружки-лесбиянки (А)
      Тут жарко так же, как на Касабланке (Вау)
      Мы есть молодые музыканты (Aha)
      Но нам мало одного таланта
      Хочу всё и сразу (А), хочу всё и сразу (А)
      Хочу всё и сразу, так нельзя, так надо
      Хочу всё и сразу (А), хочу всё и сразу (А)
      Хочу всё и сразу, так нельзя, так надо
      
      [Куплет 2]
      Твой парень (Кто? Кто?) — хуй мамин (Что? Что?)
      Подтяни штаны, когда я в зданье (Я в зданье)
      Вой в спальне (Вой в спальне), тут Yanix (Yanix)
      Её номер занят (Занят), теперь ты знаешь
      Что я дую — сатива (А), с кем я ебусь — Карина (А)
      Что я люблю — блондинок, как Тила Текила (А)
      Я говорю о птичках (Панч), бро, ты взял рифмы в лизинг (Панч)
      Все твои типы — киски (Панч), они писают сидя (Панч)
      Мой родной братан — Мула (А), что ты скажешь мне, шлюха? (А)
      Пришёл из ниоткуда (Вау) и наделал здесь шума (Вау), а
      Любимый рэпер твоей тёлки на бите (Е)
      Как и прежде, я на кэше вместе с Мэри Джейн
      
      [Припев]
      Со мной две подружки-лесбиянки (А)
      Тут жарко так же, как на Касабланке (Вау)
      Мы есть молодые музыканты (Aha)
      Но нам мало одного таланта
      Хочу всё и сразу (А), хочу всё и сразу (А)
      Хочу всё и сразу, так нельзя, так надо
      Хочу всё и сразу (А), хочу всё и сразу (А)
      Хочу всё и сразу, так нельзя, так надо`,
      audioSrc: "/img/Всё и сразу - Yanix.mp3",
      description: "«Что я дую - сатива, с кем я ебусь - Карина \n Что я люблю - блондинок, как Тила Текила \n Я говорю о птичках, бро, ты взял рифмы в лизинг \n Все твои типы - киски, они писают сидя»",
    },

    {
      imgSrc: "/img/Poppin.jpg",
      date: "15 Января 2013",
      title: "Амбиции",
      songText: `
      [Текст песни «Амбиции»]

      [Интро]
      My name is Willy Wonka
      
      [Припев]
      Мне нужна тачка super car, а, сучка super star, а
      Кореш super man, а, тряпки super style
      Во мне так много амбиций (У), так много амбиций (У)
      Так много амбиций (У), так много амбиций
      Мне нужна тачка super car, а, сучка super star, а
      Кореш super man, а, тряпки super style
      Во мне так много амбиций (У), так много амбиций (У)
      Так много амбиций (У), так много амбиций
      
      [Куплет 1]
      Яникс— джуниор
      Мой дом— улица
      Запись— студия
      Это T.A. Union
      Заложник своих амбиций, быть в топе — это мой принцип
      Всё, что я хочу от жизни — условные единицы
      Окей, рубль, доллар, евро, у.е
      Больше, больше, больше лавэ
      Чтобы быть на высоте— Gucci, Dolce, Louis и т.д
      Smooky, Wonka здесь на бите, кроссы Jordan — вновь на ноге
      Поло Lauren — я на коне, кока-кола в моей ноздре
      Амбициозный boy в рэпе весит кило (Кило)
      Твою мать, здесь лучшее дерьмо — Россия (Ага)
      В меня не верит никто, кроме меня самого (Boy)
      Но я верю так сильно, помножь мою веру на сто (Boy)
      
      [Припев]
      Мне нужна тачка super car, а, сучка super star, а
      Кореш super man, а, тряпки super style
      Во мне так много амбиций (У), так много амбиций (У)
      Так много амбиций (У), так много амбиций
      Мне нужна тачка super car, а, сучка super star, а
      Кореш super man, а, тряпки super style
      Во мне так много амбиций (У), так много амбиций (У)
      Так много амбиций (У), так много амбиций
      
      [Куплет 2]
      То, что есть — мне мало
      Жить как все — не надо
      Руль Porsche — о мама
      BMW — о-о-о мама
      Mercedes McLaren поиметь обязан
      Каждый день — экзамен за респект окраин
      Окей, я не боюсь падать, я знаю — я встану
      За правду не в падлу читать без бабок
      Я дал обещание мечте стать реальной
      Я сделаю всё, чтоб сон стал явью
      Ты знаешь, я знаю, по жизни базарю
      Держись, братиш, это лишь начало
      Эй кис, отъебись, мой диск ожидают
      «Крутись, вертись» — девиз моей стаи
      Амбиции пизда (Воу), вызови мне врача (Воу)
      Мне говорят, самооценка так завышена (Ага)
      «Что он думает о себе (Что?), молодой парень?» (Boy)
      Запомни моё имя, сука,— молодой яникс

      [Припев]
      Мне нужна тачка super car, а, сучка super star, а
      Кореш super man, а, тряпки super style
      Во мне так много амбиций (У), так много амбиций (У)
      Так много амбиций (У), так много амбиций
      Мне нужна тачка super car, а, сучка super star, а
      Кореш super man, а, тряпки super style
      Во мне так много амбиций (У), так много амбиций (У)
      Так много амбиций (У), так много амбиций`,
      audioSrc: "/img/Yanix-Амбиции.mp3",
      description: "«Амбиции пизда, вызови мне врача \n Мне говорят, самооценка так завышена \n Что он думает о себе, молодой парень? \n Запомни моё имя, сука - молодой Яникс»",
    },

    {
      imgSrc: "/img/1200x1200bf-60 (1).jpg",
      date: "09 Мая 2014",
      title: "Хайпим",
      songText: `
      [Текст песни «Хайпим»]

      [Припев]
      Мы ворвались как гром в дом
      Никто не знал о Dream Team
      Сейчас мы входим в топ-сто
      Моя соска — копия мисс мир
      Я считаю фишки, со-со-сотни и тыщи
      Да-Да-Даю им жара, ведь мой микрофон — Cricket (Let's get it)
      Хайпим, хайпим, хайпим, хайпим
      Каждый день — праздник, я тусуюсь — мне платят
      Хайпим, хайпим, хайпим, хайпим
      Моя жизнь — пати, все хотят тусить с Яни
      
      [Куплет 1]
      Самец альфа в джордан гамма с сучкой в суши Benihana
      Грамм кайфа в моём пайпе — топливо для квартала (А)
      Тусуем как KUBANA (Е), три зада по два раза
      Тот парень — риани, по мне так плачет эстрада (Go)
      Твоя baby как скейт, она плоская везде
      Позволь я сделаю флип (Пу), я скольжу на нижнем белье
      Сучка, что ты знаешь про fame? Посмотри на меня теперь
      Сорок тыщ на новый Balmain, вместо тёлки целый гарем
      Я больше не хочу тебя трахать (No), от бонга у меня кашель (Бр-бр)
      От кекса у меня насморк, освободите мне Каса (Е)
      Мои псы сказали, я в мясо (Сало), в стакане градусы алко (А)
      Я пью Хенеси залпом (Е), я пью Хенеси в жало
      Я знаю, что такое «нечего есть» (Е-е-е)
      Поэтому мы пашем так целый день (Е-е-е)
      Надо работать, чтобы приблизить цель (Я-я)
      Я начинал с нуля, и сейчас я здесь
      
      [Припев]
      Мы ворвались как гром в дом
      Никто не знал о Dream Team
      Сейчас мы входим в топ-сто
      Моя соска — копия мисс мир
      Я считаю фишки, со-со-сотни и тыщи
      Да-Да-Даю им жара, ведь мой микрофон — Cricket (Let's get it)
      Хайпим, хайпим, хайпим, хайпим
      Каждый день — праздник, я тусуюсь — мне платят
      Хайпим, хайпим, хайпим, хайпим
      Моя жизнь — пати, все хотят тусить с Яни
      
      [Куплет 2]
      Иногда слишком много (Е), никогда слишком мало (Never)
      Иногда слишком долго (Ага), никогда слишком рано (No)
      Сука, убери гонор (Нахуй), сука, ты не Риана (Ты шлюха)
      В деле новая школа (Е), и мы классика жанра
      Я нагнул свою мечту, и теперь ты меня знаешь
      Я курю Мэри Джей Блайдж, пот и кровь цена за мой хайп
      Boy, котлета из Ярославлей говорит, что я не играю
      Жопу вверх, тело вниз, секс без чувств — все, что я знаю (Le' go)
      Я утону в алкоголе, брось мне спасательный круглый (А)
      Крошка, возьми его внутрь и не забудь сделать дубль (У)
      Boy, это для плохих сучек, плохие суки, руки вверх
      Если юзаешь типов здесь и под тобою длинный член
      Всеми можно-нельзя я добываю капусту (Е-а)
      Она хочет взять за яйца меня, но это трудно (Е)
      Только лучшие из лучших (Эй), все девочки в луже (Ага)
      Мои будни в этой суке, и я выбиваюсь в люди

      [Припев]
      Мы ворвались как гром в дом
      Никто не знал о Dream Team
      Сейчас мы входим в топ-сто
      Моя соска — копия мисс мир
      Я считаю фишки, со-со-сотни и тыщи
      Да-Да-Даю им жара, ведь мой микрофон — Cricket (Let's get it)
      Хайпим, хайпим, хайпим, хайпим
      Каждый день — праздник, я тусуюсь — мне платят
      Хайпим, хайпим, хайпим, хайпим
      Моя жизнь — пати, все хотят тусить с Яни`,
      audioSrc: "/img/Хайпим - Yanix.mp3",
      description: "«Всеми можно-нельзя я добываю капусту \n Она хочет взять за яйца меня, но это трудно \n Только лучшие из лучших, все девочки в луже \n Мои будни в этой суке, и я выбиваюсь в люди»",
    },

  ];

  const swiperWrapper = document.querySelector('.blog-slider__wrp');

  swiperData.forEach(function (item, index) {
    const swiperSlide = document.createElement('div');
    swiperSlide.className = 'blog-slider__item swiper-slide';

    swiperSlide.innerHTML = `
      <div class="blog-slider__img">
        <img src="${item.imgSrc}" alt="">
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">${item.date}</span>
        <div class="blog-slider__title">${item.title}</div>
        <div class="blog-slider__text">${item.description}</div>
        <a href="#" class="blog-slider__button" data-index="${index}">Перейти к тексту</a>
      </div>
    `;

    swiperWrapper.appendChild(swiperSlide);
  });

  // Обработчик клика на кнопке "Read More"
  document.querySelectorAll('.blog-slider__button').forEach(button => {
    button.addEventListener('click', function () {
      const index = this.getAttribute('data-index'); // Получаем индекс слайда из атрибута
      showQuoteDetail(index); // Функция для отображения деталей цитаты
    });
  });

  function showQuoteDetail(index) {
    const slideData = swiperData[index]; // Получаем данные для активного слайда
    // Здесь ваш код для обновления элементов quoteDetail на основе slideData
    selectedQuote.innerText = slideData.description;
    songText.innerText = slideData.songText;
    albumCoverImage.src = slideData.imgSrc;
    audioPlayer.src = slideData.audioSrc;

    // Переключаемся на экран с деталями цитаты
    quotesSection.style.display = 'none';
    quoteDetail.style.display = 'block';
    albumCoverImage.style.boxShadow = '#fc499c';

  }



  // При клике на цитату показываем детальный просмотр
  document.querySelectorAll('.blog-slider__button').forEach(button => {

    button.addEventListener('click', function () {

      quotesSection.style.opacity = 0;
      headerImg.style.display = 'none';
      setTimeout(() => {
        quotesSection.style.display = 'none';
        quoteDetail.style.opacity = 1;
        quoteDetail.style.display = 'block';
        // Здесь предполагается, что вы обновляете детали цитаты внутри функции showCurrentQuote
      }, 350);
    });


  });

  backToQuotesButton.addEventListener('click', function () {
    quoteDetail.style.opacity = 0;
    setTimeout(() => {
      headerImg.style.display = 'block';

      quoteDetail.style.display = 'none';
      quotesSection.style.opacity = 1;
      quotesSection.style.display = 'block';
    }, 350);
  });
  // Пример функции для плавного скрытия и отображения блоков

})