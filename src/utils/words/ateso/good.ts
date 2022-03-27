const WORD_LIST = [
  'aacer',
  'aanyu',
  'aarak',
  'aaran',
  'aarei',
  'abaas',
  'ababa',
  'abala',
  'abaoi',
  'abasi',
  'abawo',
  'abear',
  'abeei',
  'abeit',
  'aberu',
  'abian',
  'abila',
  'abong',
  'aboro',
  'aboti',
  'abubu',
  'abuio',
  'abuni',
  'aburu',
  'abuwa',
  'abuyo',
  'abwaa',
  'abwan',
  'abwoi',
  'abwot',
  'abwou',
  'acamu',
  'acaun',
  'acobe',
  'acoco',
  'acoit',
  'acres',
  'acuma',
  'acupa',
  'adaun',
  'adawu',
  'addis',
  'adeka',
  'adeke',
  'adeki',
  'adepa',
  'adita',
  'adolo',
  'adolu',
  'adugu',
  'aduki',
  'aduko',
  'aduku',
  'adumu',
  'aduor',
  'afomu',
  'agali',
  'agear',
  'ageet',
  'ageun',
  'ageut',
  'agilo',
  'agiri',
  'agola',
  'agule',
  'agumi',
  'agwel',
  'ahmad',
  'ahmed',
  'aibar',
  'aibil',
  'aiboi',
  'aibok',
  'aibos',
  'aibuc',
  'aibuk',
  'aibuo',
  'aibur',
  'aibwa',
  'aibwo',
  'aicak',
  'aicap',
  'aicat',
  'aicer',
  'aicik',
  'aicil',
  'aicip',
  'aicir',
  'aicor',
  'aicud',
  'aicuk',
  'aicul',
  'aicum',
  'aicwe',
  'aidae',
  'aidak',
  'aidar',
  'aidem',
  'aidia',
  'aidok',
  'aidor',
  'aiduk',
  'aigan',
  'aigir',
  'aigol',
  'aijal',
  'aijar',
  'aijau',
  'aijen',
  'aijep',
  'aijuk',
  'aijul',
  'aikaj',
  'aikam',
  'aikar',
  'aikep',
  'aikis',
  'aikor',
  'aikul',
  'aikut',
  'ailak',
  'ailam',
  'ailed',
  'ailek',
  'ailel',
  'ailem',
  'ailep',
  'ailia',
  'ailik',
  'ailip',
  'ailok',
  'ailot',
  'aimad',
  'aiman',
  'aimar',
  'aimat',
  'aimec',
  'aimen',
  'aimii',
  'aimik',
  'aimor',
  'ainac',
  'ainak',
  'ainap',
  'ainer',
  'aingu',
  'ainok',
  'ainom',
  'ainuk',
  'aipal',
  'aiped',
  'aipet',
  'aipie',
  'aipir',
  'aipit',
  'aipor',
  'aipuc',
  'aipud',
  'aipup',
  'aiput',
  'airam',
  'airao',
  'airap',
  'airem',
  'airia',
  'airik',
  'airit',
  'airoc',
  'airop',
  'airot',
  'airut',
  'aisab',
  'aisac',
  'aisak',
  'aisal',
  'aisia',
  'aisik',
  'aisio',
  'aisom',
  'aisub',
  'aisud',
  'aisup',
  'aisut',
  'aitac',
  'aitai',
  'aitam',
  'aitan',
  'aitem',
  'aiteo',
  'aitep',
  'aitim',
  'aitji',
  'aitor',
  'aitub',
  'aituk',
  'aitun',
  'aitup',
  'aitur',
  'aiwen',
  'aiwii',
  'aiwoo',
  'aiyap',
  'aiyar',
  'aiyas',
  'aiyat',
  'aiyen',
  'aiyoo',
  'ajaai',
  'ajaar',
  'ajaas',
  'ajali',
  'ajari',
  'ajaun',
  'ajaut',
  'ajele',
  'ajena',
  'ajeni',
  'ajenu',
  'ajepi',
  'ajesa',
  'ajimi',
  'ajiok',
  'ajior',
  'ajiun',
  'ajoke',
  'ajore',
  'akadi',
  'akako',
  'akale',
  'akalo',
  'akamu',
  'akani',
  'akant',
  'akany',
  'akare',
  'akaru',
  'akaul',
  'akeje',
  'akeki',
  'akere',
  'akeri',
  'akeru',
  'akesi',
  'akeun',
  'akile',
  'akima',
  'akine',
  'akiot',
  'akipi',
  'akipu',
  'akiro',
  'akito',
  'akiyo',
  'akoik',
  'akoit',
  'akojo',
  'akoka',
  'akoke',
  'akoki',
  'akoko',
  'akolo',
  'akora',
  'akoro',
  'akoru',
  'akosi',
  'akote',
  'akoto',
  'akoye',
  'akrio',
  'akuan',
  'akufu',
  'akulu',
  'akuma',
  'akume',
  'akung',
  'akure',
  'akusi',
  'akuta',
  'akwam',
  'akwan',
  'akwap',
  'akwar',
  'akwat',
  'akwel',
  'akwes',
  'akwii',
  'alaro',
  'alele',
  'alema',
  'alemu',
  'aliar',
  'alias',
  'aligo',
  'alima',
  'alimo',
  'alolo',
  'aloma',
  'alomu',
  'alope',
  'aloro',
  'alosi',
  'alotk',
  'aloto',
  'alubo',
  'aluok',
  'aluor',
  'amaak',
  'amaan',
  'amamu',
  'amapu',
  'amasi',
  'amask',
  'ameda',
  'ameet',
  'ameja',
  'amera',
  'ameri',
  'ameun',
  'amiar',
  'amina',
  'amoak',
  'amoot',
  'amori',
  'amoru',
  'amoun',
  'amoya',
  'amuka',
  'amumu',
  'amuna',
  'amuno',
  'amuru',
  'anaba',
  'andre',
  'aneti',
  'angai',
  'angar',
  'angas',
  'anger',
  'angic',
  'angin',
  'angol',
  'angor',
  'angul',
  'angun',
  'anibo',
  'anite',
  'anubo',
  'anuke',
  'anwak',
  'anyam',
  'anyoi',
  'anyou',
  'aojak',
  'aojau',
  'aokau',
  'aokot',
  'aolio',
  'aomit',
  'aomom',
  'aoret',
  'aosan',
  'apade',
  'apads',
  'apaka',
  'apala',
  'apalu',
  'apany',
  'apapa',
  'apate',
  'apedo',
  'apejo',
  'aperi',
  'apero',
  'apese',
  'apesi',
  'apeto',
  'apiai',
  'apipa',
  'apolo',
  'apone',
  'aponi',
  'aporo',
  'aporu',
  'apote',
  'apotu',
  'apout',
  'apoyo',
  'apuga',
  'apuko',
  'apupi',
  'apuru',
  'aputo',
  'aputu',
  'araai',
  'araar',
  'araas',
  'araba',
  'arabn',
  'araun',
  'araut',
  'arayo',
  'areio',
  'areit',
  'areya',
  'ariak',
  'ariit',
  'ariri',
  'aroko',
  'arono',
  'asani',
  'asawm',
  'aseak',
  'asean',
  'aseka',
  'aseku',
  'aseun',
  'asher',
  'asiak',
  'asima',
  'asiol',
  'asiom',
  'assad',
  'asupu',
  'aswam',
  'ataba',
  'ataci',
  'atamu',
  'atapu',
  'atenu',
  'atesi',
  'ateus',
  'atiai',
  'atiji',
  'atimu',
  'atipe',
  'atiro',
  'atoet',
  'atogo',
  'atubo',
  'atuku',
  'aturo',
  'atwak',
  'atwan',
  'atwar',
  'aucor',
  'aumok',
  'aunoi',
  'aupar',
  'aures',
  'aurik',
  'aurio',
  'aurun',
  'autar',
  'awany',
  'awate',
  'awawa',
  'awear',
  'awoit',
  'awoja',
  'awook',
  'awoon',
  'ayait',
  'ayari',
  'ayaun',
  'ayelo',
  'ayivu',
  'ayook',
  'ayoon',
  'ayuar',
  'ayura',
  'ayuun',
  'baaba',
  'banks',
  'betty',
  'biyai',
  'black',
  'bodan',
  'bombo',
  'bonik',
  'bosco',
  'busia',
  'bwire',
  'cabin',
  'cairo',
  'cakes',
  'caloi',
  'cards',
  'chess',
  'china',
  'choir',
  'chuka',
  'civil',
  'congo',
  'covid',
  'cross',
  'daily',
  'david',
  'dhabi',
  'doris',
  'dubai',
  'ebaga',
  'ebait',
  'ebaja',
  'ebala',
  'ebale',
  'ebang',
  'ebank',
  'ebara',
  'ebasa',
  'ebasi',
  'ebeit',
  'ebela',
  'ebeli',
  'ebino',
  'eboie',
  'ebola',
  'ebomu',
  'ebong',
  'ebore',
  'eboyi',
  'ebpie',
  'ebuku',
  'ebuni',
  'ebwoi',
  'ecalo',
  'ecamu',
  'ecela',
  'ecoak',
  'ecobe',
  'ecoot',
  'ecuma',
  'edabo',
  'edais',
  'edaka',
  'edare',
  'edata',
  'edaun',
  'edege',
  'edeka',
  'edeke',
  'edgar',
  'edila',
  'edilu',
  'edini',
  'edioe',
  'ediop',
  'edipe',
  'ediro',
  'edite',
  'edith',
  'ediya',
  'edoan',
  'edoli',
  'edolo',
  'edook',
  'edowu',
  'eduka',
  'eduki',
  'eduko',
  'edumu',
  'eduon',
  'efain',
  'efamu',
  'efene',
  'egali',
  'egang',
  'egear',
  'egeet',
  'egesa',
  'egeto',
  'egeun',
  'egoel',
  'egoen',
  'egolf',
  'egoli',
  'egolo',
  'egoye',
  'egudo',
  'egumu',
  'egura',
  'egwel',
  'egypt',
  'eibap',
  'eicor',
  'eidin',
  'eiduk',
  'eijin',
  'eikop',
  'eikor',
  'eilat',
  'eiled',
  'einer',
  'eipie',
  'eipos',
  'eipud',
  'eitai',
  'eiyas',
  'eiyat',
  'ejaai',
  'ejaak',
  'ejaar',
  'ejaas',
  'ejaik',
  'ejamu',
  'ejari',
  'ejasi',
  'ejaun',
  'ejena',
  'ejeni',
  'ejenu',
  'ejera',
  'ejiin',
  'ejins',
  'ejion',
  'ejios',
  'ejiri',
  'ejita',
  'ejoka',
  'ejula',
  'ekabi',
  'ekajo',
  'ekala',
  'ekale',
  'ekami',
  'ekapa',
  'ekaru',
  'ekato',
  'ekeek',
  'ekeon',
  'ekera',
  'ekere',
  'ekeri',
  'ekesi',
  'ekeun',
  'ekiar',
  'ekide',
  'ekido',
  'ekilo',
  'ekisa',
  'ekisi',
  'ekisl',
  'ekito',
  'ekiya',
  'ekojo',
  'ekoko',
  'ekona',
  'ekooc',
  'ekopo',
  'ekora',
  'ekore',
  'ekori',
  'ekosi',
  'ekote',
  'ekoti',
  'ekoto',
  'ekume',
  'ekuse',
  'ekusi',
  'ekwam',
  'ekwap',
  'elaga',
  'elago',
  'elaim',
  'elait',
  'elapa',
  'elemi',
  'elemu',
  'elita',
  'eloji',
  'elomu',
  'elong',
  'eloni',
  'elope',
  'elore',
  'elose',
  'elosi',
  'eloto',
  'elsie',
  'elupe',
  'email',
  'emame',
  'emane',
  'emany',
  'emase',
  'emasi',
  'emata',
  'emaya',
  'emeba',
  'emeda',
  'emeet',
  'emeja',
  'emesa',
  'emeya',
  'emidi',
  'emiki',
  'emina',
  'emisa',
  'emita',
  'emoot',
  'emoru',
  'emoyo',
  'emudu',
  'emuit',
  'emumu',
  'emuno',
  'emuro',
  'enaba',
  'enabi',
  'enaki',
  'enape',
  'enapi',
  'enera',
  'engar',
  'enger',
  'engit',
  'enoma',
  'enoot',
  'enuka',
  'enyau',
  'eojak',
  'eomit',
  'eonga',
  'eonge',
  'eonit',
  'eonng',
  'epaak',
  'epaba',
  'epaga',
  'epain',
  'epale',
  'epali',
  'epark',
  'epata',
  'epate',
  'epedo',
  'epege',
  'epelu',
  'epene',
  'eperi',
  'epese',
  'epeta',
  'epete',
  'epiei',
  'epiir',
  'epika',
  'epiki',
  'epiko',
  'episo',
  'epoga',
  'epois',
  'epoli',
  'epone',
  'eponi',
  'epoon',
  'epote',
  'eprim',
  'epuda',
  'epues',
  'epuga',
  'epuko',
  'epuni',
  'epupe',
  'epupi',
  'epupo',
  'epuri',
  'eraai',
  'eraar',
  'eraas',
  'eraat',
  'eraba',
  'erami',
  'eraun',
  'ereet',
  'ereke',
  'ereng',
  'erian',
  'erias',
  'eriga',
  'erimo',
  'ering',
  'erogo',
  'eroko',
  'erono',
  'eropi',
  'erute',
  'erwom',
  'esabu',
  'esake',
  'esaki',
  'esale',
  'esang',
  'esati',
  'esawa',
  'esawe',
  'eseny',
  'esiep',
  'esike',
  'esimi',
  'esimu',
  'esipi',
  'esipo',
  'esisa',
  'esite',
  'esoda',
  'esola',
  'esolo',
  'esubi',
  'esula',
  'esumu',
  'esupu',
  'esuti',
  'eswak',
  'eswam',
  'eswan',
  'eswma',
  'etaba',
  'etaca',
  'etace',
  'etaci',
  'etada',
  'etapa',
  'etapi',
  'etask',
  'etaun',
  'etela',
  'etent',
  'eteok',
  'etepe',
  'etepi',
  'etiai',
  'etiar',
  'etimu',
  'etini',
  'etoci',
  'etogo',
  'etome',
  'etoon',
  'etuan',
  'etube',
  'etubi',
  'etubo',
  'etuki',
  'etuko',
  'etupi',
  'eturi',
  'eupas',
  'euria',
  'eurie',
  'eurok',
  'eutai',
  'eutar',
  'eutas',
  'eutsi',
  'evole',
  'ewalu',
  'ewaya',
  'ewear',
  'eweas',
  'ewema',
  'ewena',
  'ewere',
  'ewodi',
  'ewuga',
  'ewuta',
  'eyait',
  'eyaiy',
  'eyala',
  'eyapi',
  'eyara',
  'eyari',
  'eyasi',
  'fever',
  'force',
  'gabon',
  'gates',
  'ghana',
  'gnesi',
  'grant',
  'green',
  'hajji',
  'halid',
  'helio',
  'henry',
  'hoima',
  'hotel',
  'human',
  'iarai',
  'iarei',
  'iareo',
  'ibaan',
  'ibala',
  'ibian',
  'iboda',
  'iboie',
  'iboio',
  'ibore',
  'iboro',
  'iboyo',
  'ibuin',
  'ibuni',
  'icana',
  'icaya',
  'icela',
  'iciei',
  'icori',
  'icwei',
  'idari',
  'idaut',
  'ideka',
  'idgei',
  'idila',
  'idiop',
  'idoko',
  'idola',
  'idopo',
  'iduki',
  'idulo',
  'idumu',
  'iduwe',
  'iekas',
  'igang',
  'igiru',
  'igoen',
  'iican',
  'iilor',
  'ijaai',
  'ijaak',
  'ijaar',
  'ijaas',
  'ijaik',
  'ijaka',
  'ijake',
  'ijari',
  'ijeni',
  'ijesu',
  'ijuka',
  'ijula',
  'ikaja',
  'ikama',
  'ikami',
  'ikamu',
  'ikang',
  'ikany',
  'ikapu',
  'ikaru',
  'ikata',
  'ikatu',
  'ikela',
  'ikera',
  'ikere',
  'ikeri',
  'ikesi',
  'ikeun',
  'ikiar',
  'ikiro',
  'ikisa',
  'ikito',
  'ikiya',
  'ikoki',
  'ikoku',
  'ikoni',
  'ikopa',
  'ikoru',
  'ikote',
  'ikoto',
  'ikwii',
  'ikwny',
  'ilair',
  'ilany',
  'ileic',
  'ilema',
  'iliki',
  'iliko',
  'ilipi',
  'iloga',
  'ilolo',
  'ilong',
  'iloni',
  'ilope',
  'ilosi',
  'imasi',
  'imera',
  'imiki',
  'imina',
  'imoet',
  'imono',
  'imoot',
  'imoru',
  'imuit',
  'imuno',
  'imuut',
  'imuwa',
  'inape',
  'inapi',
  'india',
  'inera',
  'ingai',
  'ingit',
  'inobo',
  'inoka',
  'inoma',
  'inomi',
  'inter',
  'inyek',
  'inyoi',
  'iomit',
  'ipalu',
  'ipapa',
  'ipaup',
  'ipese',
  'ipiko',
  'ipisi',
  'ipoga',
  'ipois',
  'ipooi',
  'ipoyo',
  'ipuda',
  'ipuga',
  'ipupi',
  'iraan',
  'iraik',
  'iraio',
  'irait',
  'irara',
  'iraun',
  'iraya',
  'irema',
  'irene',
  'irisi',
  'irupe',
  'iruta',
  'irwan',
  'isaki',
  'isama',
  'isapa',
  'isila',
  'isimu',
  'isiol',
  'isiru',
  'islam',
  'isubi',
  'isumu',
  'isuzu',
  'iswam',
  'itabo',
  'itaci',
  'italy',
  'itang',
  'itian',
  'itima',
  'iting',
  'itipe',
  'itnga',
  'itodu',
  'itogi',
  'itoni',
  'itons',
  'itoon',
  'itori',
  'ituan',
  'ituga',
  'ituki',
  'iukoi',
  'iutar',
  'ivory',
  'iwawa',
  'iwela',
  'iwori',
  'iworo',
  'iwosa',
  'iwuta',
  'iyapi',
  'iyasi',
  'iyata',
  'iyesu',
  'iyeta',
  'iyoga',
  'janan',
  'japan',
  'jelly',
  'jinja',
  'jokan',
  'junta',
  'kabin',
  'kabua',
  'kacie',
  'kacut',
  'kadum',
  'kagon',
  'kajai',
  'kakan',
  'kakes',
  'kakwp',
  'kamun',
  'kamya',
  'kanen',
  'kange',
  'kangi',
  'kango',
  'kangu',
  'kanoi',
  'kanua',
  'kanuk',
  'kaoni',
  'kapak',
  'kapun',
  'karai',
  'karii',
  'kasek',
  'kaseo',
  'kasio',
  'katan',
  'kauka',
  'kauke',
  'kaulo',
  'kauta',
  'kayen',
  'kding',
  'keduk',
  'kedum',
  'kegeu',
  'kelot',
  'kenya',
  'kenye',
  'ketam',
  'ketau',
  'khadi',
  'kibap',
  'kibus',
  'kicak',
  'kicum',
  'kidin',
  'kidou',
  'kigeu',
  'kiitu',
  'kijai',
  'kijau',
  'kikam',
  'kilak',
  'kilip',
  'kilot',
  'kimik',
  'kimor',
  'kiner',
  'kinga',
  'kinom',
  'kipaa',
  'kirum',
  'kitim',
  'kiton',
  'kitor',
  'kitur',
  'kiuco',
  'kiyap',
  'kiyar',
  'kizza',
  'koabu',
  'koany',
  'koaru',
  'kobaa',
  'kobar',
  'kobil',
  'kobok',
  'kobwo',
  'kocai',
  'kocam',
  'kocel',
  'kocor',
  'kodak',
  'kodau',
  'kodit',
  'kodol',
  'kodom',
  'kodoo',
  'kodou',
  'koduk',
  'kodum',
  'kodwe',
  'kogeu',
  'kogia',
  'kojai',
  'kojan',
  'kojar',
  'kojen',
  'kojie',
  'kojii',
  'kokau',
  'kokek',
  'koker',
  'kokoo',
  'kokor',
  'kokua',
  'kokut',
  'kolai',
  'kolap',
  'kolel',
  'kolem',
  'kolim',
  'kolom',
  'kolot',
  'koluk',
  'komai',
  'komam',
  'komat',
  'komen',
  'komoi',
  'komor',
  'komou',
  'konap',
  'konga',
  'konye',
  'kooti',
  'kopau',
  'kopeg',
  'koper',
  'kopet',
  'kopol',
  'kopon',
  'kopup',
  'koput',
  'korai',
  'koram',
  'kored',
  'korop',
  'korot',
  'koruo',
  'kosab',
  'kosac',
  'koseu',
  'kosii',
  'kosoi',
  'kosub',
  'kotac',
  'kotam',
  'kotep',
  'kotia',
  'kotma',
  'kotom',
  'kotoo',
  'kotub',
  'kotun',
  'kotup',
  'kouta',
  'kowai',
  'kowoi',
  'kowoo',
  'koyar',
  'ktoma',
  'kwalo',
  'kwana',
  'kwanu',
  'kwape',
  'kware',
  'kyoga',
  'lacor',
  'laije',
  'lands',
  'lawal',
  'lexus',
  'libya',
  'light',
  'loabu',
  'loaco',
  'loaka',
  'loatu',
  'local',
  'lodos',
  'loduc',
  'loeco',
  'loika',
  'loipu',
  'lokai',
  'lokec',
  'lokon',
  'lomam',
  'lopac',
  'losek',
  'loset',
  'luabu',
  'lucie',
  'ludos',
  'luduc',
  'luepu',
  'luipi',
  'luipu',
  'lujis',
  'lukaa',
  'lukon',
  'lukwi',
  'lulem',
  'lumam',
  'luman',
  'lupac',
  'lusap',
  'lusek',
  'luwii',
  'luwum',
  'lybia',
  'malac',
  'mamai',
  'mazda',
  'mbale',
  'mburo',
  'mecca',
  'media',
  'metan',
  'mikel',
  'minat',
  'mixed',
  'model',
  'moeti',
  'mpigi',
  'muntu',
  'naabu',
  'naara',
  'nados',
  'naduc',
  'naeco',
  'nagor',
  'naipu',
  'najai',
  'najok',
  'nakec',
  'nakoa',
  'nakon',
  'namam',
  'napac',
  'napak',
  'napol',
  'narai',
  'nasek',
  'ncube',
  'nebbi',
  'nedos',
  'negsi',
  'neipu',
  'nejai',
  'nejas',
  'nejok',
  'nelem',
  'nence',
  'nepep',
  'nepol',
  'ngeis',
  'ngesi',
  'ngina',
  'ngini',
  'ngoli',
  'njuba',
  'nommo',
  'ntale',
  'nuabe',
  'nuabu',
  'nubon',
  'nudos',
  'nuipi',
  'nuipu',
  'nukec',
  'nukee',
  'nukon',
  'numam',
  'nupac',
  'nusek',
  'obaan',
  'obaga',
  'obale',
  'obank',
  'oboma',
  'obong',
  'oboro',
  'obuoi',
  'ocalo',
  'ocamu',
  'ochwo',
  'ocoti',
  'ocuma',
  'odaun',
  'odege',
  'odeka',
  'odini',
  'odiro',
  'odite',
  'odoco',
  'oduka',
  'oduwe',
  'ofamu',
  'ofisa',
  'ofisi',
  'ogali',
  'ogear',
  'ogeun',
  'ogudo',
  'ogwel',
  'oicor',
  'oigur',
  'oikor',
  'oilat',
  'ojaas',
  'ojamu',
  'ojaun',
  'ojenu',
  'ojera',
  'okabi',
  'okale',
  'okaru',
  'okide',
  'okito',
  'okoka',
  'okoke',
  'okoko',
  'okoku',
  'okoot',
  'okoru',
  'okuju',
  'okuta',
  'okwam',
  'okwap',
  'olago',
  'olalp',
  'olama',
  'olapa',
  'olaro',
  'olema',
  'olemu',
  'olimo',
  'olimu',
  'oloma',
  'olore',
  'omany',
  'omase',
  'omesa',
  'omina',
  'ominu',
  'omnia',
  'omony',
  'omoom',
  'omoru',
  'omuna',
  'onaba',
  'onace',
  'onang',
  'ongaa',
  'onger',
  'onyam',
  'onyou',
  'oolio',
  'opaak',
  'opala',
  'opate',
  'opedo',
  'opelu',
  'opera',
  'opeta',
  'opete',
  'opiir',
  'opiki',
  'opoga',
  'opone',
  'oponi',
  'opote',
  'opotu',
  'opuko',
  'opura',
  'oputo',
  'oputu',
  'oraai',
  'oraas',
  'orara',
  'oraun',
  'oreet',
  'oreka',
  'oreke',
  'oreng',
  'oriit',
  'orute',
  'oryem',
  'osama',
  'osawa',
  'osawe',
  'oseku',
  'osiep',
  'osimu',
  'osiok',
  'osiom',
  'osite',
  'osoda',
  'osolo',
  'otagi',
  'otaun',
  'otema',
  'otiai',
  'otimu',
  'otogo',
  'otoma',
  'otube',
  'otubo',
  'oukoi',
  'oumok',
  'owaia',
  'owany',
  'oyaga',
  'oyite',
  'pakio',
  'papap',
  'paran',
  'paris',
  'parts',
  'patch',
  'pearl',
  'pesur',
  'peter',
  'polan',
  'polic',
  'polio',
  'polis',
  'polok',
  'power',
  'press',
  'pugan',
  'putin',
  'qatar',
  'queen',
  'radio',
  'range',
  'redio',
  'rolex',
  'rover',
  'royal',
  'rugby',
  'rural',
  'rwand',
  'saint',
  'saleh',
  'salim',
  'samba',
  'sarah',
  'senia',
  'sheik',
  'simat',
  'simon',
  'sinia',
  'sodit',
  'somon',
  'south',
  'spain',
  'spare',
  'stock',
  'store',
  'sudan',
  'super',
  'swarm',
  'swiss',
  'tatai',
  'tatak',
  'tecno',
  'tenis',
  'tesla',
  'tessa',
  'tests',
  'teten',
  'three',
  'title',
  'togoi',
  'tokyo',
  'tonne',
  'trump',
  'trust',
  'tutsi',
  'uhuru',
  'union',
  'unite',
  'vinci',
  'volvo',
  'waswa',
  'winni',
  'xceed',
  'zaire',
  'zayed',
  'zumba',
];

export default WORD_LIST;