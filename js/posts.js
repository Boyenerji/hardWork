function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export const arrWords = [{
    pic: '../pictures/termo.jpg',
    name: 'Термобарические снаряды',
    desc: 'Снаряды, при взрыве образующие облако аэрозоля горючего вещества.',
    dateWord: ''
},
{
    pic: '../pictures/bund.png',
    name: 'Бундесвер',
    desc: 'Вооруженные силы Федеративной Республики Германии.',
    dateWord: ''
},
{
    pic: '../pictures/pic2.jpg',
    name: 'СПЗ (Система постановки завес)',
    desc: 'Аэрозольные гранаты для блокирования ПТУР с инфракрасными ГСН.',
    dateWord: ''
},
{
    pic: '../pictures/pic1.jpg',
    name: 'Планка Пикатинни',
    desc: 'Система рельсового крепления для стрелкового оружия.',
    dateWord: ''
},
{
    pic: '../pictures/pic4.jpg',
    name: 'Термодымовая аппаратура (ТДА).',
    desc: 'Система постановки дымовых завес на танках, <span class="blur-sm">основанная на принципе испарения топлива с горячих деталей двигателя</span>.',
    dateWord: ''
},
{
    pic: '../pictures/pic5.jpg',
    name: 'Куликовская битва.',
    desc: 'Крупное сражение между <span class="blur-sm">русским войском и войском Золотой Орды.</span>',
    dateWord: '8 сентября 1380 года.'
},
{
    pic: '../pictures/pravo.jpg',
    name: 'Отмена крепостного права.',
    desc: 'Александром 2.',
    dateWord: '3 марта 1861 года.'
},
{
    pic: '../pictures/5-okeanov.jpg',
    name: '5 океанов на земле.',
    desc: `
            Тихий<br>
            Атлантический<br>
            Северный-ледовитый<br>
            Индийский<br>
            Южный
    `,
    dateWord: ''
},
{
    pic: '../pictures/materics.jpg',
    name: '6 материков на земле.',
    desc: `
        СевернаяАмерика<br>
        ЮжнаяАмерика<br>
        Антарктида<br>
        Африка<br>
        Евразия<br>
        Австралия<br>
        `,
    dateWord: ''
},
{
    pic: '../pictures/gas.jpg',
    name: 'Ирританты.',
    desc: 
    `
        Группа веществ, вызывающих при попадании сильное местное раздражение слизистых оболочек, кожных покровов. 
        Подразделяются на 2 основные группы:<br>
        <span class="blur-sm">Лакриматоры</span> — вещества, вызывающие обильное слезотечение.<br>
        <span class="blur-sm">Стерниты</span> — вещества, вызывающие неконтролируемое чихание и кашель.
    `,
    dateWord: ''
},
{
    pic: '../pictures/vert.jpg',
    name: 'БКО(бортовой комплекс обороны).',
    desc: 'Предназначен для предупреждения экипажа о <span class="blur-sm">радиолокационном и лазерном облучении летательного аппарата, фактах пуска по нему управляемых ракет, и противодействия им</span>',
    dateWord: ''
},


{
    pic: '../pictures/gas2.jpg',
    name: 'Светильный газ.',
    desc: `
        Смесь <span class="blur-sm">водорода, метана, угарного газа и других горючих газов</span>, получаемая при пиролизе каменного угля или нефти.
        Светильный газ разработан немецким химиком Фридрихом Аккумом. Он применялся для освещения в газовых фонарях и в качестве топлива.
    `,
    dateWord: ''
},
{
    pic: '../pictures/gp25.jpg',
    name: 'ГП (Гранатомёты подствольные).',
    desc: `
        ГП-25<span class="blur-sm">(Костёр)</span> 40-мм подствольный гранатомёт.<br>
        ГП-30<span class="blur-sm">(Обувка)</span> 40-мм подствольный гранатомёт, разработанный на основе конструкции ГП-25.
    `,
    dateWord: ''
},

{
    pic: '../pictures/patr.jpg',
    name: 'Патроны',
    desc: 
    `
        Советский патрон: <span class="blur-sm">5,45 на 39мм</span><br>
        Патрон НАТО: <span class="blur-sm">5,56 на 45мм</span>
    `,
    dateWord: ''
},
{
    pic: '../pictures/petr.jpg',
    name: 'Петр 1.',
    desc: 
    `
        Пётр 1 правил страной на протяжении <span class="blur-sm">43 лет</span>.<br><br>
        Пётр 1 впервые завез в Россию популярные цветы - <span class="blur-sm">тюльпаны</span>.<br><br>
        Причиной смерти Петра 1 стала пневмония, развившаяся из обыкновенной простуды.<br><br>
        Пётр 1 учредил медаль "За пьянство" которую вешал на выпивающих бояр. Весила 7кг и надевалась в полицейском участке.<br><br>
        Добавил в рацион крестьян картошку. Русские люди не были знакомы с картофелем, пока царь не привез его из Голландии.
    `,
    dateWord: ''
},
{
    pic: '../pictures/nigi.jpg',
    name: 'Нигилизм.',
    desc: 
    `
        Философия, которая ставит под сомнение <span class="blur-sm">общепринятые ценности, идеалы, нормы нравственности, знание, мораль</span>.
    `,
    dateWord: ''
},


{
    pic: '../pictures/sova.jpg',
    name: 'Факты о совах.',
    desc: 
    `
        Совы могут поворачивать голову на <span class="blur-sm">270 градусов.</span><br>
        Сова не может двигать зрачками.<br><br>
        Глаза сов неподвижно стоят на месте в течение всей жизни.<br><br>
        Мир для сов представляется черно-белым.<br><br>
        Филин отлично видит днем на большом расстоянии.<br><br>
        Белые(полярные) совы охотятся днем.<br><br>
        Совы могут месяцами жить без воды, утоляя жажду кровью своих жертв.
    `,
    dateWord: ''
},


{
    pic: '../pictures/tormoz.jpg',
    name: 'Дульный тормоз.',
    desc: 
    `
        Устройство для уменьшения отдачи огнестрельного оружия.<br><br>
        Дульный тормоз также предотвращает опасное воздействие пороховых газов на ствол оружия при стрельбе.<br><br>
        Использование дульного тормоза вызывает смещение, в сторону казны, зоны повышенного давления ударной волны от выстрела (дульной волны). Повторяющееся воздействие ударной волны на незащищённые уши может привести к необратимому ухудшению слуха.<br><br>
        Применение дульного тормоза может привести к резкому увеличению громкости выстрела.<br><br>
        С применением дульного тормоза связан ряд проблем: демаскировка позиции орудия облаком пыли и огня, в тёмное время суток ослепляют стрелка.<br><br>
        Дульный тормоз-компенсатор, устанавливаемый на стрелковом оружии, также позволяет уменьшить подбрасывание ствола (подскок) при выстреле.
    `,
    dateWord: ''
},

{
    pic: '../pictures/polk.jpg',
    name: 'Преображенский полк.',
    desc: 
    `
        <span class="blur-sm">Пехотный полк Русской императорской армии</span>, один из старейших и наиболее известных полков, созданных Петром Великим.
    `,
    dateWord: ''
},

{
    pic: '../pictures/leib.jpg',
    name: 'Лейб-гвардия.',
    desc: 
    `
        <span class="blur-sm">Почетное наименование отборных воинских частей</span>, предназначенных для защиты и охраны важных людей.
    `,
    dateWord: ''
},

{
    pic: '../pictures/viver.jpg',
    name: 'Планка Вивера.',
    desc: 
    `
        Система рельсового крепления для стрелкового оружия.
        Различие между Пикаттини <span class="blur-sm">в ширине прорезей</span>.
    `,
    dateWord: ''
},

{
    pic: '../pictures/sevwar.jpg',
    name: 'Северная война.',
    desc: 
    `
        Война, длившаяся с 1700 по 1721 год между <span class="blur-sm">Шведским королевством и коалицией государств Северной Европы</span> за обладание прибалтийскими землями и господством на Балтийском море, закончившаяся поражением Швеции, навсегда утратившей статус великой державы.
    .
    `,
    dateWord: 'С 1700 по 1721 год.'
},

{
    pic: '../pictures/no_photo.png',
    name: 'Любые наркотики.',
    desc: 
    `
        Любые наркотики, придуманные человеком, работают по одному и тому же принципу: <span class="blur-sm">они конкурируют с теми психоактивными веществами, которые головной мозг вырабатывает сам</span>.
        Никотин конкурирует с ацетилхолином. Героин подавляет синтез эндорфинов.
    `,
    dateWord: ''
},

{
    pic: '../pictures/borodino.jpg',
    name: 'Бородинское сражение.',
    desc: 
    `
        Армия наполеона при заходе в Россию составляла <span class="blur-sm">500 тыс</span> человек.
        Наполеон был хорошим артиллеристом, его пушки могли стрелять по навесной траектории.<br><br>
        <span class="blur-sm">Петр Иванович</span> Багратион - 1765-1812 генерал от инфантерии.
        Багратион мог хорошо воодушевить солдат. После ранения гранатой в ногу Багратионовский войска отступили от укреплений. Багратион умер от полученных ранений спустя 17 дней.<br><br>
        В самом сражении участвовало:<br>
        У Франции - 127тыс французских солдат и 593 орудия.<br>
        У России - 126тыс человек и 640 орудий<br><br>
        Курганная высота - возвышение в центре бородинского поля.

    `,
    dateWord: '26 августа(7 сентября) 1812 года'
},

{
    pic: '../pictures/flesh.jpg',
    name: 'Флешь.',
    desc: 
    `
        Полевое укрепление в форме клина.

    `,
    dateWord: ''
},
{
    pic: '../pictures/redut.jpg',
    name: 'Редут.',
    desc: 
    `
        Полевое укрепление сомкнутого вида.
    `,
    dateWord: ''
},
{
    pic: '../pictures/olimp.jpg',
    name: 'Олимп.',
    desc: 
    `
        В древнегреческой мифологии Олимп - <span class="blur-sm">священная гора, место пребывания богов во главе с Зевсом</span>.
    `,
    dateWord: ''
},

{
    pic: '../pictures/ptol.jpg',
    name: 'Сын цезаря.',
    desc: 
    `
        <span class="blur-sm">Птолемей</span> XV Цезарион.

    `,
    dateWord: ''
},

{
    pic: '../pictures/kord.jpg',
    name: 'КОРД.',
    desc: 
    `
        Российский крупнокалиберный пулемёт с ленточным питанием под патрон <span class="blur-sm">12,7</span>.

    `,
    dateWord: ''
},

{
    pic: '../pictures/evr.jpg',
    name: 'Почему немцы ненавидели евреев',
    desc: 
    `
        Евреев обвиняли в заговорах, в <span class="blur-sm">притеснении бедняков.</span><br><br>
        К этому добавлялось <span class="blur-sm">наукообразное учение о расах - согласно которому</span> евреи хотят выжить и уничтожить европейцев.<br><br>
        Первоначально евреев хотели выселить на Мадагаскар, не выселили, потому что в короткие сроки такое кол-во вывезти было невозможно.<br><br>
        А в 1942 году возник ясный план как избавиться от евреев - построить лагеря смерти и убить.<br><br>
        Третьему рейху удалось уничтожить около 6 миллионов евреев.
    `
    ,
    dateWord: ''
},

{
    pic: '../pictures/rpg30.jpg',
    name: 'РПГ-30 Крюк.',
    desc: 
    `
        РПГ - <span class="blur-sm">ручной противотанковый гранатомет с тандемной боевой частью, калибра 105мм, одноразовый гранатомет</span>.<br>
        Имеет имитатор цели. Образовавшееся после уничтожения имитатора цели облако осколков и плазмы взрыва ослабляет радиоволны обнаружителя КАЗ на несколько милисекунд.<br>
        После достижения брони танка, <span class="blur-sm">первым детонирует лидирующий заряд</span> — он уничтожает динамическую защиту танка и открывает основную металлическую броню танка.
    `,
    dateWord: ''
},

{
    pic: '../pictures/fagot.jpg',
    name: 'ПТРК Фагот.',
    desc: 
    `
        <span class="blur-sm">Противотанковый ракетный комплекс с полуавтоматическим наведением по проводам</span>.<br>
        Ракету выталкивает <span class="blur-sm">вышибной патрон</span>. Ракета летит по спиральной траектории.<br>
        Скорострельность: <span class="blur-sm">3 выстр/мин</span>.<br>
        Калибр: <span class="blur-sm">120мм</span><br>
        Бронепробиваемость: <span class="blur-sm">до 600мм</span>.
    `,
    dateWord: ''
},

{
    pic: '../pictures/delta.jpg',
    name: 'Дельта.',
    desc: 
    `
        Первое оперативное подразделение <span class="blur-sm">войск специального назначения «Дельта».</span>
        Задачами Дельты являются: борьба с терроризмом, восстаниями, выполнение секретных заданий.
    `,
    dateWord: ''
},

{
    pic: '../pictures/panelv.jpg',
    name: 'Вышибные панели.',
    desc: 
    `
        Задача вышибных панелей была в том, <span class="blur-sm">чтобы выбивать крышу отделения с боезапасом, тем самым отведя взрывную волну и жар в сторону от экипажа</span>.
        Вышибные панели не помогают с полным боекомплектом кумулятивов - взрыв слишком сильный. Работают только с подкалиберными снарядами.
    `,
    dateWord: ''
},

{
    pic: '../pictures/rpg29.jpg',
    name: 'РПГ-29 Вампир.',
    desc: 
    `
        <span class="blur-sm">Советский ручной противотанковый гранатомёт.</span> 
        Калибр — <span class="blur-sm">105</span> миллиметров, дальность стрельбы — до <span class="blur-sm">500</span> метров. Оснащён оптическим прицелом для стрельбы в дневное время и прибором ночного видения для стрельбы ночью, а также сошкой для упора при стрельбе лёжа.<br>
        Бронепробиваемость — <span class="blur-sm">650мм</span> за динамической защитой. Помимо этого, может использоваться термобарический выстрел ТБГ-29В для борьбы с живой силой противника.
        РПГ-29 имеет недостаток — <span class="blur-sm">дымный след летящего к цели заряда</span>, по которому можно выследить и уничтожить стрелка. На этот случай РПГ-29 имеет функцию «холодного запуска», позволяющую избавиться от дыма при выстреле.
    `,
    dateWord: ''
},


{
    pic: '../pictures/no_photo.png',
    name: 'Аминазин или галопередол.',
    desc: 
    `
        Первый синтезированный нейролептик. При помощи аминазина удаётся <span class="blur-sm">купировать различные виды психомоторного возбуждения</span>, ослаблять или полностью купировать бред и галлюцинации, уменьшать или снимать страх, тревогу, напряжение у больных психозами и неврозами.<br>
        Одной из главных особенностей действия <span class="blur-sm">аминазина</span> на ЦНС является сильный седативный эффект.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Гидроцефалия.',
    desc: 
    `
        Чрезмерное накопление спинномозговой жидкости в желудочках головного мозга.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Прозопагно́зия.',
    desc: 
    `
        Расстройство восприятия лица, при котором способность узнавать лица потеряна, но при этом способность узнавать предметы в целом сохранена.<br>
        Область, отвечающая за распознавание лиц, находится в веретенообразной извилине.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Обеднённый уран.',
    desc: 
    `
        Использовался в качестве брони и снарядов. Плотность обеднённого урана на 67% выше, чем у свинца. 
        Авиапушка A-10 Тандерболт стреляет снарядами с сердечником из обеднённого урана.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Сталинград.',
    desc: 
    `
        До 1961 года город Волгоград назывался Сталинградом, в честь Иосифа Сталина, который играл важную роль в Сталинградской битве во время Второй мировой войны. 
        Однако в 1961 году город был переименован в Волгоград, чтобы убрать связь с личностью Сталина и связанные с ней негативные ассоциации.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Иосиф Сталин.',
    desc: 
    `
        Иосиф Сталин (1878-1953) был советским политическим деятелем, главным секретарём Центрального Комитета Коммунистической партии Советского Союза с 1922 года, и после смерти Владимира Ленина в 1924 году стал фактическим лидером СССР. 
        Он управлял страной в течение 30 лет`,
    dateWord: ''
},

{
    pic: '',
    name: 'Голодомор.',
    desc: 
    `
        Голодомор - это термин, используемый для обозначения голода и голодной катастрофы, которая произошла в Советском Союзе, в основном на Украине, в период с 1932 по 1933 годы
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Флаг Америки.',
    desc: 
    `
        Звезды на американском флаге представляют 50 штатов Соединенных Штатов Америки. Последним штатом являются Гавайи.    
    `,
    dateWord: '',
    nameChoice: 'Сколько звёзд на флаге Америки?',
    choice: [
        '50',
        '55',
        '48'
    ],
    trueChoice: '50',
    isTest: true
},

{
    pic: '',
    name: 'Вторая мировая война.',
    desc: 
    `
        Вторая мировая война началась 1 сентября 1939 года, когда нацистская Германия напала на Польшу. В ответ Великобритания и Франция объявили войну Германии 3 сентября 1939 года. Вскоре после этого, другие страны, включая США, СССР и Японию, также присоединились к конфликту, и война распространилась на многие части мира. 
        Война продолжалась до 2 сентября 1945 года, когда Япония подписала акт о безоговорочной капитуляции после атомных бомбардировок Хиросимы и Нагасаки. В результате Второй мировой войны погибло более 70 миллионов человек, что делает ее одной из самых кровопролитных войн в истории человечества.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Животные спящие стоя.',
    desc: 
    `
        Лошади и коровы могут спать, стоя на всех четырех ногах, используя механизм, известный как "замок коленного сустава".
        Этот механизм позволяет им расслабить мышцы ног и позвоночника, но сохранить устойчивость в вертикальном положении, не падая. Это очень полезное умение для животных, живущих на открытых пространствах, где они могут быть подвержены опасности, например, от хищников.

    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Огурцы - ягоды!.',
    desc: 
    `
        Вы знали, что огурцы на самом деле ягоды? Несмотря на то, что мы обычно рассматриваем их как овощи и используем в салатах и бутербродах, огурцы ботанически являются ягодами.
        Ягоды определяются как плоды, развивающиеся из одного цветка и содержащие семена внутри мякоти. В случае огурцов это значит, что они содержат семена внутри, что делает их ягодами, а не овощами.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Синие киты.',
    desc: 
    `
        Синие киты - самые крупные животные на планете, известные человечеству. Длина взрослого синего кита может достигать более 30 метров, а вес - свыше 200 тонн. У них огромное сердце, весом около 600 кг, и язык, который может весить столько же, сколько слон. 
        Кроме того, синие киты издают звуки, которые могут быть услышаны на расстоянии более 160 км, что делает их одними из самых громких животных на Земле.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Бабочки имеют вкусовые рецепторы на ногах.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Слоны - единственные млекопитающие, которые не могут прыгать.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'БМПТ Терминатор',
    desc: 
    `
        БМПТ Терминатор 2 - это боевая машина поддержки танков, которая была разработана на базе танка Т-90.
        БМПТ Терминатор 2 имеет два пулемета КПТ калибра 7,62мм и две пушки 2А42 калибра 30мм. Кроме того, на танке могут быть установлены ракетные комплексы "Атака" и "Конкурс" или "Аркан".
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'КПВТ',
    desc: 
    `
        КПВТ (Крупнокалиберный Пулемёт Владимирова) - это советский и российский тяжёлый пулемёт калибра 14,5мм, который был разработан в 1960-х годах и получил своё название от имени главного конструктора - Владимира ТК.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Пушка гш-30-1',
    desc: 
    `
        ГШ-30-1 - это авиационная пушка, разработанная в Советском Союзе в 1980-х годах. Пушка имеет калибр 30мм и используется на самолетах и вертолетах.
        ГШ-30-1 имеет высокую скорострельность (около 800 выстрелов в минуту). Она устанавливается на такие самолеты, как Су-25, МиГ-27 и МиГ-29, а также на вертолеты, такие как Ми-24 и Ка-50.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Номекс',
    desc: 
    `
        Это термостойкий материал, который обладает высокой прочностью и устойчивостью к огню. Он используется в производстве защитной одежды, такой как костюмы пожарных и спасателей, бронежилеты.
        Номекс может выдерживать температуры до 370 градусов Цельсия.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Владимир Ильич Ленин',
    desc: 
    `
        Владимир Ильич Ленин, родился 22 апреля 1870 года, революционер и первый лидер Советского Союза, умер 21 января 1924 года в Горках, подмосковном санатории, в возрасте 53 лет. 
        Причиной смерти был инсульт, который он получил несколько лет ранее.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Кто правил после Сталина',
    desc: 
    `
        После смерти Иосифа Сталина 5 марта 1953 году в Советском Союзе начался период, который называется "оттепелью". Главным руководителем Советского Союза стал Никита Хрущев, который возглавил Коммунистическую партию и занял пост Председателя Совета Министров СССР (премьер-министра).
        Хрущев провел ряд реформ, направленных на уменьшение репрессий и десталинизацию общества, а также начал процесс развития сельского хозяйства и ликвидации культа личности вокруг Сталина.<br>
        После Хрущева, в 1964 году, на пост главы государства пришел Леонид Брежнев, который возглавлял СССР в течение более чем 18 лет. Брежнев проводил политику "застоя", когда страна находилась в тупике, и проводились консервативные политические реформы. 
        Он также был ответственным за советскую интервенцию в Афганистане в 1979 году.
        После Брежнева последовал ряд кратковременных правителей, в том числе Юрий Андропов и Константин Черненко, которые не смогли значительно изменить политическую ситуацию в СССР. В 1985 году на пост Генерального секретаря ЦК КПСС пришел Михаил Горбачев, который провел значительные реформы в экономике, политике и обществе в рамках "перестройки". Он также улучшил отношения с Западом и вел диалог с лидерами других стран. Однако перестройка привела к крушению Советского Союза в 1991 году.
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'ЦК КПСС',
    desc: 
    `
        ЦК КПСС (Центральный Комитет Коммунистической партии Советского Союза) был высшим органом руководства КПСС, главной политической партии СССР. ЦК КПСС состоял из секретариата, политбюро и генерального секретаря. Эти органы принимали решения по всем вопросам, связанным с управлением Советским Союзом
    `,
    dateWord: ''
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Жирафы спят всего около 30 минут в день. Они делят этот отрезок времени на короткие периоды длиной в 5-10 минут.
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Некоторые виды попугаев, такие как африканский серый попугай, могут запомнить и повторить более 1 000 слов.
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Коалы - единственные животные, которые могут питаться эвкалиптом, потому что их желудок содержит микробы, которые помогают переваривать ядовитые вещества, содержащиеся в этом растении.
    `,
    dateWord: '',
    isInput: 2
},


{
    pic: '',
    name: 'Сталин',
    desc: 
    `
        Причина смерти Иосифа Сталина до сих пор остается предметом споров и дебатов. Официально было объявлено, что он скончался 5 марта 1953 года от инсульта.
        Однако, есть версии, что на самом деле Сталин был отравлен, возможно, в результате политического заговора. Также были предположения о том, что Сталин мог умереть от других заболеваний, таких как сердечная недостаточность или рак.
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Отличие АК-12 от АК-15',
    desc: 
    `
        Калибр: AK-12 использует стандартный 5,45-мм патрон, а AK-15 использует более крупный 7,62-мм патрон.<br><br>
        Вес: AK-12 весит около 3,3 кг, тогда как AK-15 весит около 4,2 кг.<br><br>
        Магазин: AK-12 использует магазин на 30 патронов, а AK-15 использует магазин на 20 патронов.<br><br>
        Дальность стрельбы: из-за различия в калибре, AK-15 имеет более дальнюю дальность стрельбы, чем AK-12.<br><br>
        Цена: из-за своих различий, AK-15 обычно стоит дороже, чем AK-12.

    `,
    dateWord: '',
    arrInput: ['AK-12', 'использует', 'патрон', '5,45-мм', 'AK-15', 'использует', 'патрон', '7,62-мм'],
    trueInput: ['AK-12 использует патрон 5,45-мм, AK-15 использует патрон 7,62-мм'],
    isInput: randomInteger(0, 1)
},

{
    pic: '',
    name: 'Гиппокамп',
    desc: 
    `
        Гиппокамп - это структура, которая находится во внутренней части медиальной темпоральной доли мозга.
        Вот несколько основных функций гиппокампа: <br>
        1) Формирование новых воспоминаний: он помогает нам запоминать новую информацию, обрабатывая ее и перенося ее в долговременную память.<br><br>
        2) Ориентация в пространстве: гиппокамп также участвует в работе пространственной памяти и навигации. Он помогает нам ориентироваться в пространстве и находить путь к цели.<br><br>
        3) Распознавание контекста: гиппокамп участвует в распознавании контекста, что позволяет нам понимать смысл событий и выбирать адекватную реакцию на них.<br><br>
        4) Регуляция эмоций: гиппокамп также участвует в регуляции некоторых аспектов эмоций. Например, он может усиливать или ослаблять эмоциональную реакцию на определенные события.<br><br>
        5) Обработка информации о контексте и времени: гиппокамп помогает нам оценивать связь между различными событиями во времени и понимать, как эти события связаны с нашим опытом и контекстом.

    `,
    dateWord: ''
},


{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Черепахи могут выживать без еды и воды в течение нескольких месяцев, благодаря своей способности сохранять запасы воды и энергии внутри своего тела.
    `,
    dateWord: '',
    arrInput: ['Черепахи', 'могут', 'выживать', 'без', 'еды', 'и', 'воды', 'в', 'течение', 'нескольких', 'месяцев'],
    trueInput: ['Черепахи могут выживать без еды и воды в течение нескольких месяцев'],
    isInput: randomInteger(0, 1)
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Лисы могут зарываться в снег и использовать его в качестве укрытия и теплоизоляции в холодные месяцы зимы. Они также могут использовать свой хвост в качестве "пледа".
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Белки могут запомнить большое количество мест, где они спрятали свою еду. Они используют ориентиры, такие как деревья и камни, чтобы найти свой путь к спрятанной еде.
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Российская империя закончилась в результате Февральской революции 1917 года, когда монархия была свергнута и было учреждено временное правительство. 
        Однако временное правительство было недолговечным, и в октябре того же года произошла Октябрьская революция, которая привела к установлению советской власти в России и созданию Советского Союза. Таким образом, Российская империя официально прекратила свое существование в 1917 году, когда монархия была свергнута и власть перешла к другим политическим
        силам.
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Факт',
    desc: 
    `
        Ленин страдал от нескольких заболеваний. Одной из самых серьезных заболеваний являлось артериосклероз, который привел к инсульту в 1922 году. В результате этого инсульта у Ленина возникли проблемы со здоровьем, включая проблемы с речью и движением, которые стали усугубляться со временем. Это привело к тому, что Ленин стал больше времени проводить в постели, и в конечном итоге он скончался от осложнений, связанных с инсультом, в январе 1924 года.
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Артериосклероз',
    desc: 
    `
        Артериосклероз - это хроническое заболевание, которое характеризуется утолщением и уплотнением стенок артерий вследствие скопления жировых отложений, фиброзной ткани и кальция.
    `,
    dateWord: '',
    arrInput: ['Артериосклероз', 'это', 'хроническое заболевание,', 'которое', 'характеризуется', 'утолщением', 'и', 'уплотнением', 'стенок', 'артерий'],
    trueInput: [
        'Артериосклероз это хроническое заболевание, которое характеризуется утолщением и уплотнением стенок артерий',
        'Артериосклероз это хроническое заболевание, которое характеризуется уплотнением и утолщением стенок артерий',
    ],
    isInput: randomInteger(0, 1)
},

{
    pic: '',
    name: 'Медиальная темпоральная доля мозга',
    desc: 
    `
        Это область мозга, расположенная в боковой части головного мозга и связанная с обработкой памяти, особенно декларативной памяти - памяти о фактах и событиях.
    `,
    dateWord: '',
    arrInput: ['Это', 'область', 'мозга,', 'расположенная', 'в боковой', 'части', 'головного', 'мозга', 'и связанная', 'с обработкой', 'памяти'],
    trueInput: ['Это область мозга, расположенная в боковой части головного мозга и связанная с обработкой памяти',],
    isInput: randomInteger(0, 1)
},

{
    pic: '',
    name: 'Остров кроликов',
    desc: 
    `
        Существует остров на Земле, где живут кролики, которые были завезены туда для эксперимента по производству шерсти, но эксперимент был прекращен, а кролики остались на острове и размножились настолько, что на некоторых участках острова на каждые два квадратных метра приходится один кролик?
        Этот остров называется Остров кроликов и находится в Японии. На острове нет хищников, поэтому популяция кроликов здесь быстро распространилась. Кролики на острове живут в дикой природе, но они привыкли к людям и часто подходят к туристам, прося еду. Кроме того, на острове есть много мест для пикников и прогулок.
    `,
    dateWord: '',
    isInput: 2
},

{
    pic: '',
    name: 'Факты о Ленине',
    desc: 
    `
        1) Владимир Ильич Ленин родился 22 апреля 1870 года в городе Симбирск (ныне Ульяновск) в Российской империи.<br><br>
        2) Его настоящее имя было Владимир Ильич Ульянов. Он принял псевдоним Ленин, когда начал свою революционную деятельность.<br><br>
        3) В 1922 году Ленин стал первым генеральным секретарем Коммунистической партии Советского Союза.
    `,
    dateWord: '',
    arrInput: ['Владимир', 'Ильич', 'Ленин', 'родился'],
    trueInput: ['Владимир Ильич Ленин родился'],
    isInput: randomInteger(0, 1)
},

{
    pic: '',
    name: 'Монархия',
    desc: 
    `
        Монархия - это форма правления, в которой главой государства является монарх, т.е. король, царь, император или другой монархический титул. 
        В монархии власть передается по наследству, и монарх обычно наследует свой титул от своих родителей. В отличие от республики, где главой государства является избранный представитель народа, в монархии глава государства не избирается и получает власть от своих предков.<br><br>
        Монархия может быть абсолютной или конституционной. В абсолютной монархии монарх имеет полную власть над государством и народом, а в конституционной монархии монарх является главой государства, но его власть ограничена конституцией и законами.
        Существует множество стран, где монархия является формой правления, такие как Великобритания, Испания, Норвегия, Швеция, Япония и др.
    `,
    dateWord: '',
    arrInput: ['Монархия', 'это', 'форма', 'правления', 'в которой главой', 'государства', 'является', 'монарх'],
    trueInput: ['Монархия это форма правления в которой главой государства является монарх'],
    isInput: randomInteger(0, 1)
},

{
    pic: '',
    name: 'Чекисты',
    desc: 
    `
        Это название, которое использовалось для обозначения членов Чрезвычайной Комиссии(ЧК) по Борьбе с Контрреволюцией и Саботажем (ЧК), органа государственной безопасности, созданного в России в 1917 году в период Гражданской войны.<br><br>
        Чекисты выполняли роль политической полиции, собирали информацию, проводили следственные действия, аресты и казнили врагов народа. Однако, кроме борьбы с врагами Советской власти, ЧК также была замешана в массовых политических репрессиях, массовых расстрелах и преследованиях политических оппонентов.`,
    dateWord: '',
    arrInput: ['Это название,', 'которое', 'использовалось', 'для обозначения', 'членов', 'Чрезвычайной Комиссии(ЧК)'],
    trueInput: ['Это название, которое использовалось для обозначения членов Чрезвычайной Комиссии(ЧК)'],
    isInput: randomInteger(0, 1)
},














];


