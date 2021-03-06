const WORD_LIST = [
  'aantu',
  'abaas',
  'ababa',
  'ababi',
  'abafu',
  'abaha',
  'abahe',
  'abahi',
  'abami',
  'abana',
  'aband',
  'abany',
  'abari',
  'abasa',
  'abato',
  'abaza',
  'abeeg',
  'abeka',
  'abiri',
  'abomu',
  'accra',
  'added',
  'addis',
  'afica',
  'afire',
  'afune',
  'agari',
  'agati',
  'agent',
  'agire',
  'agomu',
  'agume',
  'agure',
  'ahabi',
  'ahabw',
  'ahaka',
  'ahaku',
  'ahame',
  'ahare',
  'ahari',
  'ahatu',
  'ahayo',
  'ahbwa',
  'aheer',
  'aheru',
  'ahiri',
  'ahmad',
  'ahmed',
  'aingi',
  'akaba',
  'akabi',
  'akade',
  'akafa',
  'akaha',
  'akahu',
  'akaju',
  'akapa',
  'akari',
  'akata',
  'akato',
  'akaza',
  'akaze',
  'akazi',
  'akira',
  'akiri',
  'akora',
  'akore',
  'alima',
  'amahe',
  'amaju',
  'amaka',
  'amani',
  'amare',
  'amate',
  'amatu',
  'amuhe',
  'amuka',
  'amuru',
  'aniha',
  'anite',
  'annav',
  'arabe',
  'ariba',
  'aribo',
  'arifa',
  'ariho',
  'arimu',
  'ariwe',
  'ariyo',
  'armed',
  'aruge',
  'asher',
  'asidi',
  'asima',
  'assad',
  'ataka',
  'atano',
  'atari',
  'ateta',
  'atone',
  'ayeko',
  'ayine',
  'baaba',
  'baabe',
  'baabo',
  'baafa',
  'baafu',
  'baagi',
  'baago',
  'baaha',
  'baahi',
  'baaka',
  'baana',
  'baara',
  'baari',
  'baasi',
  'baato',
  'baawe',
  'baayo',
  'baaza',
  'baazo',
  'babyo',
  'bagye',
  'bahwa',
  'baiba',
  'baibo',
  'baiha',
  'baija',
  'baije',
  'baine',
  'baire',
  'baisi',
  'baita',
  'baitu',
  'bakye',
  'bambe',
  'bamwe',
  'bamwo',
  'banda',
  'bandi',
  'bando',
  'bangi',
  'banka',
  'banto',
  'bantu',
  'banya',
  'banza',
  'barya',
  'baryo',
  'basha',
  'basya',
  'batri',
  'batyo',
  'bebwa',
  'beege',
  'beegi',
  'beeka',
  'beete',
  'beeyi',
  'beiba',
  'beihe',
  'beija',
  'beine',
  'beitu',
  'benda',
  'bensi',
  'bente',
  'biibi',
  'biiha',
  'biika',
  'biina',
  'biine',
  'biiru',
  'biisi',
  'biitu',
  'bikye',
  'bimwe',
  'bindi',
  'bingi',
  'binig',
  'bintu',
  'bisha',
  'bisya',
  'black',
  'board',
  'bomba',
  'bombi',
  'bombo',
  'bomuu',
  'bondi',
  'bonka',
  'boobo',
  'boodi',
  'boojo',
  'booka',
  'boomo',
  'boona',
  'booro',
  'boosi',
  'bosco',
  'brick',
  'bukye',
  'bumwe',
  'bundi',
  'buntu',
  'buryo',
  'busha',
  'busya',
  'buuha',
  'buuku',
  'buuto',
  'bwaba',
  'bwabo',
  'bwago',
  'bwaha',
  'bwaki',
  'bwako',
  'bwaku',
  'bwato',
  'bwatu',
  'bwawe',
  'bwayo',
  'bwaza',
  'bwazo',
  'bwebi',
  'bwehe',
  'bwenu',
  'bwine',
  'bwino',
  'bwira',
  'bwire',
  'bwiro',
  'bwisi',
  'bwitu',
  'bwoba',
  'bwoki',
  'bwoma',
  'bwomu',
  'bwona',
  'bworo',
  'byaba',
  'byabo',
  'byabu',
  'byago',
  'byaha',
  'byake',
  'byana',
  'byaro',
  'byawe',
  'byayo',
  'byazo',
  'byehe',
  'byeka',
  'byine',
  'byoma',
  'byomu',
  'byona',
  'byowa',
  'cairo',
  'campu',
  'ceeka',
  'ceeki',
  'cente',
  'chayi',
  'china',
  'clays',
  'congo',
  'court',
  'covid',
  'cross',
  'crude',
  'daamu',
  'daara',
  'daily',
  'dakar',
  'dashi',
  'david',
  'dhabi',
  'diini',
  'diiro',
  'dolla',
  'doora',
  'doozi',
  'doris',
  'dubai',
  'duuka',
  'dwano',
  'dyari',
  'eamba',
  'ebaga',
  'ebaju',
  'ebeka',
  'eberi',
  'ebibi',
  'ebicu',
  'ebika',
  'ebiki',
  'ebire',
  'ebiri',
  'ebiro',
  'ebiso',
  'ebiti',
  'ebola',
  'eboma',
  'ebora',
  'ebura',
  'ecupa',
  'edgar',
  'edith',
  'efeyo',
  'efuka',
  'egabe',
  'egaro',
  'egesa',
  'egoye',
  'eguma',
  'egume',
  'eguza',
  'egypt',
  'ehami',
  'eisyo',
  'ejura',
  'ekaba',
  'ekaha',
  'ekata',
  'ekaza',
  'ekeza',
  'ekibi',
  'ekide',
  'ekifa',
  'ekika',
  'ekine',
  'ekira',
  'ekiri',
  'ekiro',
  'ekiti',
  'ekito',
  'ekome',
  'ekora',
  'ekore',
  'ekoti',
  'ekumi',
  'ekure',
  'ekuri',
  'ekuru',
  'elgon',
  'elsie',
  'email',
  'embwa',
  'embyi',
  'emere',
  'emibi',
  'emira',
  'emiro',
  'emisi',
  'emita',
  'emiti',
  'emito',
  'emitu',
  'emize',
  'emizi',
  'emyka',
  'enaku',
  'enati',
  'enbwa',
  'encwa',
  'eniya',
  'enkye',
  'enora',
  'ensen',
  'ensha',
  'ensya',
  'enyau',
  'epaka',
  'epiki',
  'erabe',
  'eragi',
  'erahi',
  'eraze',
  'erias',
  'eridi',
  'eriho',
  'erije',
  'erimu',
  'erine',
  'eriri',
  'eriya',
  'eriyo',
  'eruge',
  'eruho',
  'esano',
  'esasi',
  'esati',
  'esimu',
  'esira',
  'esiri',
  'esnte',
  'etaba',
  'etaka',
  'etama',
  'etana',
  'etano',
  'etari',
  'etsya',
  'eturi',
  'eyaha',
  'eyihe',
  'eyine',
  'eyira',
  'eyogu',
  'eyomu',
  'ezaha',
  'eziri',
  'ezomu',
  'faamu',
  'faani',
  'fairo',
  'falls',
  'feene',
  'feesi',
  'feeza',
  'fever',
  'fifth',
  'fiire',
  'fiizi',
  'first',
  'foomu',
  'force',
  'forum',
  'fuuro',
  'fuuzi',
  'gaaba',
  'gaabo',
  'gaago',
  'gaahi',
  'gaama',
  'gaari',
  'gaasi',
  'gaata',
  'gaawe',
  'gaayo',
  'gaaza',
  'gaazo',
  'gabon',
  'gabwo',
  'gagye',
  'gaine',
  'gaita',
  'gaitu',
  'gamba',
  'gamwe',
  'gates',
  'geeki',
  'geeti',
  'geine',
  'geitu',
  'genju',
  'gensi',
  'gente',
  'ggaba',
  'ghana',
  'giine',
  'giini',
  'gobwa',
  'gomwe',
  'gonka',
  'goofu',
  'goona',
  'goora',
  'goori',
  'gooro',
  'great',
  'green',
  'guard',
  'guhwe',
  'gumwe',
  'gundi',
  'gurio',
  'guuha',
  'guuto',
  'gwaba',
  'gwabo',
  'gwako',
  'gwawe',
  'gwayo',
  'gwazo',
  'gwena',
  'gwete',
  'gweye',
  'gwine',
  'gwomu',
  'gwona',
  'gyera',
  'gyira',
  'gyiya',
  'haaba',
  'haabo',
  'haare',
  'habwa',
  'hagwa',
  'haihi',
  'haine',
  'hajji',
  'hakye',
  'halid',
  'hamba',
  'hamwa',
  'hamwe',
  'hamya',
  'handi',
  'hanga',
  'hansi',
  'harho',
  'hebwa',
  'heeru',
  'heihe',
  'heihi',
  'heine',
  'helio',
  'henry',
  'hiihi',
  'hiika',
  'hiine',
  'hoima',
  'honka',
  'honor',
  'hoomu',
  'hoona',
  'hriho',
  'hunda',
  'huuma',
  'huuzi',
  'hwera',
  'ibara',
  'ibega',
  'ibiri',
  'ibura',
  'idara',
  'igana',
  'igoba',
  'igufa',
  'iguna',
  'iguru',
  'ihaga',
  'ikimi',
  'ikiri',
  'ikume',
  'ikumi',
  'ikumu',
  'ikuru',
  'imuri',
  'india',
  'iraka',
  'iraro',
  'irene',
  'iriho',
  'ishwa',
  'isuzu',
  'itagi',
  'itaka',
  'italy',
  'itano',
  'itika',
  'iziba',
  'izoba',
  'jaamu',
  'japan',
  'jiini',
  'jinja',
  'juuba',
  'juura',
  'jwara',
  'kaabo',
  'kaada',
  'kaadi',
  'kaahi',
  'kaare',
  'kaawe',
  'kaayo',
  'kaazo',
  'kabir',
  'kabwo',
  'kadhi',
  'kafyu',
  'kagwa',
  'kaine',
  'kaire',
  'kaitu',
  'kaiwe',
  'kakye',
  'kampu',
  'kamwe',
  'kamya',
  'kandi',
  'kansa',
  'kansi',
  'kanso',
  'kanwa',
  'kanya',
  'kasya',
  'kazyo',
  'keeki',
  'keire',
  'kekyi',
  'kenda',
  'kensi',
  'kenya',
  'khadi',
  'kiibo',
  'kiiha',
  'kiina',
  'kiine',
  'kiipa',
  'kiire',
  'kiita',
  'kiiza',
  'kikye',
  'kimwe',
  'kindi',
  'kinga',
  'kingi',
  'kintu',
  'kisya',
  'kityo',
  'kizza',
  'kobwa',
  'kojan',
  'komwe',
  'kondo',
  'kongo',
  'konka',
  'kooki',
  'kooko',
  'koona',
  'koopi',
  'koosi',
  'kooti',
  'kooto',
  'kucwa',
  'kugir',
  'kugra',
  'kugwa',
  'kuhwa',
  'kujwa',
  'kukwa',
  'kukya',
  'kukye',
  'kumpa',
  'kumwe',
  'kungi',
  'kungu',
  'kurya',
  'kuryo',
  'kusya',
  'kuuba',
  'kuubi',
  'kuuza',
  'kwaba',
  'kwabo',
  'kwafa',
  'kwago',
  'kwaha',
  'kwaho',
  'kwaka',
  'kwako',
  'kwara',
  'kwasa',
  'kwatu',
  'kwawe',
  'kwaya',
  'kwayo',
  'kwaza',
  'kwega',
  'kwena',
  'kwera',
  'kweta',
  'kweye',
  'kweza',
  'kwezi',
  'kwiba',
  'kwigi',
  'kwiha',
  'kwija',
  'kwine',
  'kwini',
  'kwita',
  'kwoga',
  'kwoma',
  'kwomu',
  'kwona',
  'kwosa',
  'kyaba',
  'kyabo',
  'kyago',
  'kyano',
  'kyaro',
  'kyawe',
  'kyayi',
  'kyayo',
  'kyeki',
  'kyesi',
  'kyeye',
  'kyibi',
  'kyine',
  'kyiri',
  'kyitu',
  'kyoga',
  'kyoma',
  'kyomu',
  'kyona',
  'kyoto',
  'lacor',
  'lakes',
  'lawal',
  'libya',
  'light',
  'liigi',
  'looni',
  'luwum',
  'maabi',
  'maaju',
  'maama',
  'maana',
  'maane',
  'maani',
  'maapu',
  'maawe',
  'maaya',
  'mabga',
  'magar',
  'maino',
  'mairo',
  'maize',
  'maizi',
  'makye',
  'malac',
  'manda',
  'mangu',
  'manja',
  'manya',
  'marwa',
  'masya',
  'mazda',
  'mbaga',
  'mbaju',
  'mbale',
  'mbeba',
  'mbega',
  'mbeho',
  'mbenu',
  'mbera',
  'mbibo',
  'mbisi',
  'mboga',
  'mbone',
  'mbuga',
  'mburo',
  'mbuzi',
  'mecca',
  'media',
  'meeri',
  'meeya',
  'meeza',
  'meezi',
  'megya',
  'meizi',
  'memba',
  'micwe',
  'miibi',
  'miisa',
  'miisi',
  'miiti',
  'mikel',
  'mikye',
  'mingi',
  'misho',
  'misya',
  'mixed',
  'moeti',
  'mooka',
  'mooro',
  'mooto',
  'mooyo',
  'movie',
  'mpago',
  'mpaka',
  'mpaki',
  'mpare',
  'mpeka',
  'mpigi',
  'mpora',
  'mpuku',
  'mubbi',
  'mukur',
  'mukye',
  'mungo',
  'munju',
  'muntu',
  'musya',
  'mutnu',
  'mutwe',
  'muzei',
  'mwaka',
  'mwami',
  'mwana',
  'mwaro',
  'mwegi',
  'mwena',
  'mwene',
  'mwere',
  'mwezi',
  'mwibi',
  'mwika',
  'mwine',
  'mwita',
  'mwoga',
  'mwojo',
  'myaka',
  'myara',
  'myate',
  'myezi',
  'myoga',
  'myoyo',
  'naaba',
  'naabo',
  'naafa',
  'naago',
  'naaha',
  'naaho',
  'naasi',
  'naata',
  'naawe',
  'naayo',
  'naaza',
  'naazo',
  'nabwe',
  'nabwo',
  'nabyo',
  'nagwa',
  'nagwo',
  'naiba',
  'naiga',
  'naija',
  'nairi',
  'nairo',
  'naiwe',
  'naiza',
  'nakhe',
  'nakyo',
  'namba',
  'nampa',
  'nanda',
  'nangu',
  'nansi',
  'nanye',
  'narwo',
  'narya',
  'naryo',
  'ncube',
  'ncuro',
  'ndahi',
  'ndara',
  'ndeka',
  'ndimi',
  'ndimu',
  'ndiyo',
  'ndoga',
  'nebya',
  'nebyo',
  'neeba',
  'neebe',
  'neeha',
  'neeka',
  'neena',
  'neeta',
  'neeza',
  'neezo',
  'negwa',
  'neija',
  'neiza',
  'nekya',
  'nekyi',
  'nempu',
  'nemwe',
  'nenda',
  'nenfu',
  'nenio',
  'nenju',
  'nenki',
  'nenku',
  'nensi',
  'nente',
  'nerya',
  'nerye',
  'ngabo',
  'ngaro',
  'ngawe',
  'ngire',
  'ngoma',
  'ngomu',
  'ngufu',
  'nguri',
  'nguta',
  'nguto',
  'nibwe',
  'nibwo',
  'nibyo',
  'nigwe',
  'nigwo',
  'niibo',
  'niija',
  'niiki',
  'niiwe',
  'niiyo',
  'niizo',
  'nikba',
  'nikwe',
  'nikwo',
  'nikyo',
  'nimbi',
  'nimwe',
  'nimwo',
  'ninga',
  'ninta',
  'ninye',
  'ninza',
  'nirwe',
  'nirwo',
  'nirye',
  'niryo',
  'nishe',
  'nitwe',
  'niywa',
  'njuba',
  'njuma',
  'njura',
  'nkaba',
  'nkabo',
  'nkaga',
  'nkahe',
  'nkahi',
  'nkaka',
  'nkana',
  'nkare',
  'nkaza',
  'nkebi',
  'nkega',
  'nkegi',
  'nkeka',
  'nkeya',
  'nkezi',
  'nkezo',
  'nkiko',
  'nkine',
  'nkira',
  'nkiri',
  'nkiro',
  'nkobu',
  'nkogu',
  'nkoko',
  'nkoku',
  'nkomo',
  'nkomu',
  'nkora',
  'nkozi',
  'nkumi',
  'nkura',
  'nkuru',
  'nkuto',
  'nobel',
  'nobwa',
  'nogwa',
  'nogwo',
  'noija',
  'noiri',
  'nokwa',
  'nommo',
  'nomwe',
  'nooba',
  'noobu',
  'nooha',
  'noota',
  'nooza',
  'north',
  'norwa',
  'nstya',
  'ntabo',
  'ntalo',
  'ntare',
  'ntaro',
  'ntebe',
  'nteri',
  'ntesa',
  'ntima',
  'ntobo',
  'ntsya',
  'nungi',
  'nuuma',
  'nwona',
  'nyama',
  'nyido',
  'nyigi',
  'nyija',
  'nyima',
  'nyina',
  'nyine',
  'nying',
  'nyngi',
  'nyoko',
  'nyowe',
  'nyoze',
  'nzaba',
  'nzabo',
  'nzaha',
  'nziba',
  'nziri',
  'nzomu',
  'nzona',
  'obaho',
  'obayo',
  'obiri',
  'obone',
  'obori',
  'obuba',
  'obubi',
  'obuju',
  'oburi',
  'oburo',
  'obuta',
  'obuto',
  'obwir',
  'ochwo',
  'ofire',
  'ofisi',
  'ogate',
  'oguri',
  'oguza',
  'oguze',
  'okaba',
  'okabi',
  'okaza',
  'okira',
  'okiri',
  'okora',
  'okore',
  'okuba',
  'okufa',
  'okuha',
  'okuju',
  'okuri',
  'okuta',
  'okuza',
  'olaro',
  'omire',
  'omnia',
  'omrui',
  'omubi',
  'omufu',
  'omuhi',
  'omuka',
  'omuku',
  'omuma',
  'omuri',
  'omuru',
  'omusi',
  'omuti',
  'omuto',
  'omutu',
  'omuza',
  'omuze',
  'omwak',
  'omwka',
  'opera',
  'orabe',
  'oreky',
  'oriho',
  'oriya',
  'oriyo',
  'orufu',
  'orugo',
  'oruhi',
  'oruhu',
  'orume',
  'oruri',
  'orusa',
  'oryem',
  'osibe',
  'otaho',
  'otari',
  'oveni',
  'owabo',
  'owaha',
  'oweka',
  'oyete',
  'oyine',
  'oyiro',
  'oyite',
  'ozite',
  'paadi',
  'paaka',
  'paapa',
  'paipu',
  'pamba',
  'pampa',
  'paris',
  'patch',
  'peace',
  'peeya',
  'peter',
  'piiki',
  'piira',
  'pingo',
  'plant',
  'polio',
  'prize',
  'putin',
  'qatar',
  'queen',
  'raaba',
  'raabe',
  'rabyo',
  'radio',
  'range',
  'rangi',
  'raxio',
  'rebel',
  'redio',
  'reeba',
  'reedi',
  'reeka',
  'reero',
  'reeru',
  'reesa',
  'reesi',
  'renti',
  'riigi',
  'riiha',
  'riine',
  'riino',
  'riiri',
  'riivu',
  'rikye',
  'rimwe',
  'rinda',
  'rindi',
  'ringi',
  'ringo',
  'risya',
  'river',
  'ronda',
  'roodi',
  'roogi',
  'rooma',
  'rooni',
  'roore',
  'rooru',
  'roosi',
  'rooya',
  'rooyo',
  'royal',
  'rugby',
  'rumwe',
  'rungo',
  'rusha',
  'rusya',
  'ruuha',
  'ruuri',
  'rwaba',
  'rwabo',
  'rwabu',
  'rwago',
  'rwaha',
  'rwatu',
  'rwawe',
  'rwayo',
  'rwehe',
  'rwezo',
  'rwigi',
  'rwine',
  'rwomu',
  'rwona',
  'ryaba',
  'ryabo',
  'ryari',
  'ryato',
  'ryawe',
  'ryayo',
  'ryebi',
  'ryeye',
  'ryomu',
  'ryona',
  'saasi',
  'saati',
  'sachs',
  'saint',
  'saleh',
  'salim',
  'samba',
  'sande',
  'sarah',
  'seemi',
  'seera',
  'seeri',
  'seeru',
  'sende',
  'senta',
  'sente',
  'senti',
  'shaba',
  'shabe',
  'shaha',
  'shaho',
  'shana',
  'sharo',
  'sheik',
  'shoma',
  'shozi',
  'siiko',
  'siima',
  'siimu',
  'simon',
  'sochi',
  'sooda',
  'soora',
  'sosho',
  'south',
  'spain',
  'speed',
  'speke',
  'stock',
  'sudan',
  'suuka',
  'suuti',
  'swarm',
  'swiss',
  'switi',
  'swizz',
  'taabe',
  'taaka',
  'taamu',
  'taani',
  'taapu',
  'taata',
  'taine',
  'tanka',
  'tauni',
  'tecno',
  'teepu',
  'teeti',
  'teeza',
  'teine',
  'tenti',
  'terye',
  'tesla',
  'tessa',
  'three',
  'tigwo',
  'tiimi',
  'tiimu',
  'tiine',
  'tiivi',
  'tikwo',
  'tikya',
  'tindi',
  'togwe',
  'toine',
  'tokyi',
  'tokyo',
  'tonto',
  'toosi',
  'trump',
  'trust',
  'tukye',
  'tunga',
  'turye',
  'twaba',
  'twara',
  'twata',
  'twaza',
  'twena',
  'twina',
  'twine',
  'twita',
  'ugada',
  'ugnda',
  'uhayo',
  'uhuru',
  'union',
  'utube',
  'vaaka',
  'value',
  'veesi',
  'vinci',
  'vinyo',
  'virus',
  'volvo',
  'voore',
  'waaba',
  'waabo',
  'waafa',
  'waago',
  'waaka',
  'waata',
  'waawe',
  'waawi',
  'waaya',
  'waayo',
  'waaza',
  'wagye',
  'waija',
  'waitu',
  'wange',
  'warid',
  'waryo',
  'water',
  'webya',
  'weeka',
  'weena',
  'weihe',
  'weitu',
  'wekna',
  'wemwe',
  'wenda',
  'wenju',
  'wenka',
  'wensi',
  'wiiki',
  'wishe',
  'womwe',
  'woodi',
  'wooha',
  'yaaba',
  'yaabe',
  'yaabo',
  'yaafa',
  'yaago',
  'yaaha',
  'yaako',
  'yaata',
  'yaawe',
  'yaayo',
  'yaaza',
  'yaazo',
  'yabyo',
  'yagwa',
  'yagye',
  'yaija',
  'yaita',
  'yaitu',
  'yakyo',
  'yampa',
  'yebya',
  'yebyo',
  'yeeye',
  'yeezo',
  'yeiha',
  'yeitu',
  'yejwa',
  'yemwe',
  'yenda',
  'yenju',
  'yensi',
  'yente',
  'yitwa',
  'yoana',
  'yobwa',
  'yokwa',
  'yomba',
  'yonka',
  'yoona',
  'yozya',
  'zaaba',
  'zaabo',
  'zaabu',
  'zaago',
  'zaara',
  'zaata',
  'zaawe',
  'zaayo',
  'zaazo',
  'zaine',
  'zaire',
  'zaitu',
  'zakyo',
  'zange',
  'zaryo',
  'zayed',
  'zebya',
  'zeeka',
  'zeeye',
  'zeine',
  'zensi',
  'zente',
  'ziiha',
  'ziine',
  'ziipu',
  'zimwe',
  'zindi',
  'zirmu',
  'zirya',
  'zitwa',
  'zityo',
  'zobwa',
  'zombi',
  'zonka',
  'zooba',
  'zoona',
  'zumba',
];

export default WORD_LIST;
