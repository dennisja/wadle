const WORD_LIST = [
  'aabic',
  'aarye',
  'abaas',
  'ababa',
  'abaro',
  'abeda',
  'abedo',
  'abila',
  'abili',
  'abina',
  'abino',
  'abiro',
  'abite',
  'abiye',
  'aboka',
  'abola',
  'aboro',
  'aboyo',
  'abula',
  'abung',
  'aburo',
  'aburu',
  'acaka',
  'acaki',
  'acako',
  'acama',
  'acamo',
  'acata',
  'acato',
  'acayo',
  'accra',
  'acele',
  'acell',
  'acelo',
  'acena',
  'acika',
  'acike',
  'acima',
  'acito',
  'acoba',
  'acobo',
  'acoya',
  'acoye',
  'acoyo',
  'acula',
  'aculo',
  'aculu',
  'acuna',
  'acung',
  'acwak',
  'acwal',
  'adada',
  'adaka',
  'adane',
  'adcaa',
  'addis',
  'adeda',
  'adena',
  'adida',
  'adita',
  'adiya',
  'adoko',
  'adola',
  'adong',
  'adopt',
  'adoya',
  'aduku',
  'aduno',
  'adunu',
  'adura',
  'adwii',
  'adwir',
  'adwog',
  'adwok',
  'adwol',
  'afric',
  'agagi',
  'agama',
  'agamo',
  'agena',
  'ageni',
  'ageno',
  'agent',
  'agera',
  'ageya',
  'ageyo',
  'agiki',
  'agoja',
  'agola',
  'agoni',
  'agony',
  'agoya',
  'agulu',
  'agwen',
  'ahmad',
  'ahmed',
  'ajaji',
  'ajoga',
  'ajola',
  'akaka',
  'akala',
  'akana',
  'akata',
  'akato',
  'akele',
  'akelo',
  'akemo',
  'akeng',
  'akeny',
  'aketa',
  'aketo',
  'akira',
  'akita',
  'akoba',
  'akoya',
  'akube',
  'akubu',
  'akura',
  'akure',
  'akuri',
  'akuro',
  'alaip',
  'alaka',
  'alako',
  'alama',
  'alany',
  'alara',
  'alaro',
  'albam',
  'alcel',
  'alega',
  'alegi',
  'alego',
  'aleko',
  'aleya',
  'aleyo',
  'alibo',
  'alibu',
  'alima',
  'alimo',
  'alipa',
  'alogo',
  'aloka',
  'aloko',
  'alora',
  'aloro',
  'alota',
  'aloya',
  'aluba',
  'alubi',
  'alubu',
  'aluka',
  'alwak',
  'alwok',
  'alwor',
  'amaka',
  'amako',
  'amara',
  'amari',
  'amaro',
  'amata',
  'amato',
  'ameda',
  'amede',
  'amedo',
  'amine',
  'amini',
  'amito',
  'amiya',
  'amiye',
  'amiyo',
  'amoka',
  'amoko',
  'amola',
  'amora',
  'amoto',
  'amuka',
  'amuru',
  'anaka',
  'aneka',
  'anena',
  'anene',
  'aneno',
  'aneya',
  'angea',
  'angec',
  'angee',
  'angeo',
  'anget',
  'angey',
  'anina',
  'aning',
  'anite',
  'anong',
  'anyai',
  'anyim',
  'anyoo',
  'anyut',
  'aonya',
  'aonyo',
  'aparo',
  'apeke',
  'apida',
  'apima',
  'apita',
  'apito',
  'apoka',
  'apoto',
  'apoya',
  'april',
  'apura',
  'apwua',
  'arabu',
  'arege',
  'ariba',
  'ariya',
  'ariyo',
  'aroca',
  'aroma',
  'aromo',
  'arubo',
  'arubu',
  'aruka',
  'aruko',
  'aruya',
  'aryio',
  'asher',
  'asian',
  'assad',
  'atamo',
  'atani',
  'atata',
  'ateda',
  'atedo',
  'atema',
  'atemo',
  'atera',
  'ateri',
  'atero',
  'ateta',
  'atidi',
  'atika',
  'atiko',
  'atima',
  'atimo',
  'atina',
  'atiya',
  'atiyo',
  'atona',
  'atudu',
  'atuka',
  'atuko',
  'atuku',
  'atuma',
  'atura',
  'ature',
  'aturu',
  'atuta',
  'atwom',
  'atyek',
  'atyer',
  'awace',
  'awaci',
  'awaco',
  'awaka',
  'awano',
  'awanu',
  'aweko',
  'awene',
  'awero',
  'awila',
  'awilo',
  'awira',
  'awobe',
  'awobi',
  'awobo',
  'awola',
  'awora',
  'awota',
  'awoto',
  'awura',
  'ayaba',
  'ayabo',
  'ayela',
  'ayele',
  'ayera',
  'ayero',
  'ayeti',
  'ayivu',
  'ayuba',
  'ayubo',
  'aywee',
  'bagwa',
  'bajet',
  'baket',
  'balgi',
  'balla',
  'balle',
  'balli',
  'balni',
  'balun',
  'balwa',
  'bango',
  'banks',
  'banya',
  'barak',
  'barua',
  'batri',
  'batun',
  'bedni',
  'beneo',
  'benge',
  'benyo',
  'berre',
  'berri',
  'bible',
  'bibul',
  'bicel',
  'bicop',
  'bidok',
  'biedo',
  'bigik',
  'biilo',
  'bikok',
  'bilok',
  'binen',
  'binga',
  'bipoo',
  'birii',
  'bitic',
  'bitum',
  'biwil',
  'biwot',
  'biyee',
  'biyer',
  'black',
  'blood',
  'board',
  'bokci',
  'bombi',
  'bonga',
  'bongi',
  'bongo',
  'bonyo',
  'borre',
  'bosco',
  'botgi',
  'botte',
  'botwa',
  'braun',
  'brick',
  'bukke',
  'bukki',
  'bullu',
  'bunga',
  'bungi',
  'bunia',
  'bunyo',
  'bunyu',
  'burek',
  'burre',
  'burup',
  'busia',
  'butgi',
  'butte',
  'bwami',
  'bwani',
  'bwaro',
  'bwire',
  'bwolo',
  'bwuko',
  'bwulo',
  'bwulu',
  'bwura',
  'bwuro',
  'bwuto',
  'bwuyu',
  'byako',
  'byeko',
  'byerk',
  'caani',
  'caaro',
  'caato',
  'cabin',
  'cabir',
  'cabit',
  'cable',
  'cabot',
  'cabum',
  'cabun',
  'cacel',
  'caden',
  'cadet',
  'cafew',
  'caina',
  'cairo',
  'cakka',
  'cakke',
  'cakoo',
  'calgi',
  'calla',
  'calle',
  'calli',
  'calun',
  'calwa',
  'camgi',
  'camme',
  'camps',
  'camwa',
  'canca',
  'canel',
  'cange',
  'cango',
  'canne',
  'canni',
  'canto',
  'capat',
  'cards',
  'catan',
  'catgi',
  'cayan',
  'ceeng',
  'cekon',
  'cello',
  'cells',
  'centa',
  'cente',
  'cento',
  'cfive',
  'chess',
  'chief',
  'china',
  'chuka',
  'cikat',
  'cikgi',
  'cikke',
  'cikwa',
  'cilam',
  'cilim',
  'cimgi',
  'cimma',
  'cimme',
  'cimmi',
  'cinga',
  'cinge',
  'cingi',
  'cinia',
  'cinye',
  'cipid',
  'cital',
  'citio',
  'citoi',
  'citul',
  'civil',
  'class',
  'clays',
  'clerk',
  'cobbe',
  'cocok',
  'cocol',
  'coggi',
  'cokci',
  'cokke',
  'cokko',
  'colic',
  'colli',
  'conge',
  'congo',
  'conne',
  'coogi',
  'coone',
  'coron',
  'court',
  'crane',
  'cream',
  'cross',
  'cucut',
  'cukul',
  'culan',
  'culgi',
  'culle',
  'cullu',
  'cumar',
  'cungi',
  'cungo',
  'cungu',
  'cuppa',
  'cutgi',
  'cuura',
  'cuwal',
  'cwake',
  'cwako',
  'cwala',
  'cwale',
  'cwalo',
  'cwana',
  'cwara',
  'cware',
  'cwari',
  'cweet',
  'cwero',
  'cweta',
  'cweyo',
  'cwiny',
  'cwiri',
  'daane',
  'dabol',
  'dador',
  'daggi',
  'daily',
  'dairy',
  'dakar',
  'daker',
  'dakta',
  'dange',
  'dango',
  'danoi',
  'danyo',
  'danyu',
  'datye',
  'david',
  'dayng',
  'deene',
  'denis',
  'dhabi',
  'diego',
  'digri',
  'diini',
  'dikal',
  'dirre',
  'disco',
  'ditto',
  'diwoo',
  'dogge',
  'dogwa',
  'donge',
  'dongo',
  'donut',
  'donyo',
  'doong',
  'doris',
  'dorre',
  'dotte',
  'downg',
  'drowa',
  'dubai',
  'dudwo',
  'dukan',
  'dulgi',
  'dulle',
  'dulli',
  'dulme',
  'dulne',
  'dulwa',
  'dunyo',
  'dunyu',
  'dutch',
  'dwane',
  'dwani',
  'dwano',
  'dwaro',
  'dweni',
  'dwero',
  'dwiro',
  'dwoco',
  'dwogi',
  'dwogo',
  'dwoko',
  'dwone',
  'dwong',
  'dwoni',
  'dwoya',
  'dwoyo',
  'dyang',
  'dyede',
  'dyedo',
  'dyegi',
  'dyeka',
  'dyeli',
  'dyere',
  'dyero',
  'dywor',
  'ebedo',
  'ebola',
  'ecang',
  'ecito',
  'ecoyo',
  'edgar',
  'edith',
  'edony',
  'egamo',
  'egeng',
  'egero',
  'egesa',
  'egini',
  'egoni',
  'eguni',
  'egypt',
  'eight',
  'ektea',
  'elgon',
  'ellly',
  'eloko',
  'elsie',
  'email',
  'emito',
  'eneko',
  'eneno',
  'engeo',
  'enini',
  'enioo',
  'enong',
  'enoni',
  'enono',
  'entye',
  'enuni',
  'enyau',
  'eparo',
  'epore',
  'erias',
  'eromo',
  'etiyo',
  'etron',
  'etyek',
  'ewaco',
  'eyela',
  'eyubo',
  'falls',
  'famme',
  'famwa',
  'fenec',
  'ferry',
  'fever',
  'field',
  'fifth',
  'filim',
  'filta',
  'final',
  'firat',
  'first',
  'flash',
  'force',
  'forum',
  'fundi',
  'gabon',
  'galle',
  'gamme',
  'ganga',
  'gange',
  'gangi',
  'garej',
  'gates',
  'genga',
  'genge',
  'gengo',
  'genna',
  'genne',
  'gente',
  'ggaba',
  'ghana',
  'gibal',
  'gibed',
  'gical',
  'gicol',
  'gicoo',
  'gicto',
  'gicuk',
  'gicul',
  'gidag',
  'gidok',
  'gigik',
  'giilo',
  'gijuk',
  'giket',
  'gikok',
  'gikwo',
  'gilac',
  'gilok',
  'gimak',
  'gimed',
  'gimer',
  'gimii',
  'ginen',
  'ginki',
  'ginmo',
  'ginne',
  'ginok',
  'gipek',
  'gipok',
  'gipti',
  'girii',
  'girre',
  'girye',
  'gitee',
  'giteg',
  'gitek',
  'giter',
  'gitic',
  'gitii',
  'gitim',
  'gitoo',
  'gituk',
  'gitwo',
  'gitye',
  'gityo',
  'giumu',
  'giunu',
  'giwek',
  'giwor',
  'giwot',
  'giyee',
  'giyer',
  'giyik',
  'giyte',
  'giyub',
  'goalf',
  'golle',
  'goloi',
  'gomgi',
  'gonye',
  'gonyo',
  'googa',
  'goona',
  'grade',
  'grant',
  'great',
  'greek',
  'green',
  'group',
  'guard',
  'gubal',
  'gubed',
  'gubii',
  'gubin',
  'gubit',
  'gubol',
  'gubut',
  'gucak',
  'gucal',
  'gucam',
  'gucat',
  'gucik',
  'gucit',
  'gucob',
  'gucok',
  'gucoo',
  'gucuk',
  'gucul',
  'gucwe',
  'gudak',
  'gudde',
  'guddu',
  'gudii',
  'gudir',
  'gudok',
  'gudot',
  'gudwo',
  'guero',
  'gugam',
  'gugen',
  'gugud',
  'guild',
  'guilo',
  'guita',
  'guito',
  'gujal',
  'gujol',
  'gukat',
  'gukel',
  'gukem',
  'guket',
  'gukir',
  'gukok',
  'gukur',
  'gukwo',
  'guleg',
  'gulim',
  'gulob',
  'gulok',
  'guloo',
  'gulop',
  'gulub',
  'gulul',
  'gulwi',
  'gumaa',
  'gumak',
  'gumar',
  'gumed',
  'gumee',
  'gumer',
  'gumii',
  'gumme',
  'gumok',
  'gumot',
  'gunek',
  'gunen',
  'guneo',
  'gunge',
  'gungi',
  'gungo',
  'gungu',
  'gunon',
  'gunya',
  'guolo',
  'guony',
  'gupaa',
  'gupar',
  'gupim',
  'gupit',
  'gupok',
  'gupur',
  'gupwo',
  'gupye',
  'gurib',
  'gurii',
  'gurre',
  'guruk',
  'gurup',
  'gutam',
  'guted',
  'gutee',
  'gutii',
  'gutim',
  'gutit',
  'gutoo',
  'gutuc',
  'gutuk',
  'gutum',
  'gutye',
  'guuno',
  'guwac',
  'guwek',
  'guwil',
  'guwok',
  'guwoo',
  'guwor',
  'guwot',
  'guyab',
  'guyac',
  'guyee',
  'guyel',
  'guyer',
  'guyub',
  'guyup',
  'gwana',
  'gweng',
  'gweni',
  'gweno',
  'gwere',
  'gweri',
  'gwero',
  'gweto',
  'gweyo',
  'gwogi',
  'gwoka',
  'gwoke',
  'gwoko',
  'hajji',
  'halid',
  'halls',
  'helio',
  'henry',
  'hoima',
  'honor',
  'hotel',
  'house',
  'human',
  'ibank',
  'ibayo',
  'ibedo',
  'ibino',
  'ibiro',
  'iboda',
  'ibolo',
  'iboma',
  'ibong',
  'ibutu',
  'icako',
  'icamo',
  'icamp',
  'icang',
  'icaro',
  'icato',
  'icawa',
  'icelo',
  'iceng',
  'iceto',
  'icike',
  'icima',
  'icing',
  'iciti',
  'icito',
  'icity',
  'icobo',
  'icoyo',
  'iculo',
  'iculu',
  'icuma',
  'icuna',
  'icung',
  'icwal',
  'idagu',
  'idero',
  'idiwo',
  'idoko',
  'idong',
  'idony',
  'idoro',
  'idule',
  'idwee',
  'idwer',
  'idwog',
  'idwok',
  'idyer',
  'ieast',
  'igamo',
  'igang',
  'igare',
  'igene',
  'igiki',
  'igiyo',
  'igomo',
  'igoyo',
  'igudi',
  'igudo',
  'igudu',
  'igwer',
  'igwok',
  'ijami',
  'ijemo',
  'ijeng',
  'ijwik',
  'ikaki',
  'ikalo',
  'ikama',
  'ikare',
  'ikato',
  'ikayo',
  'ikelo',
  'ikeme',
  'ikene',
  'iketo',
  'ikine',
  'ikoko',
  'ikome',
  'ikong',
  'ikoro',
  'ikulu',
  'ikwan',
  'ikwer',
  'ikwir',
  'ilain',
  'ilake',
  'ilaro',
  'ilega',
  'ilego',
  'ileko',
  'ilima',
  'ilimo',
  'ilimu',
  'ilobe',
  'ilobo',
  'iloko',
  'iloro',
  'iloyo',
  'ilubi',
  'ilubu',
  'imako',
  'imare',
  'imaro',
  'imato',
  'imede',
  'imiti',
  'imito',
  'imiya',
  'imiye',
  'imiyo',
  'imoko',
  'imony',
  'imoto',
  'imung',
  'india',
  'inene',
  'ineni',
  'ineno',
  'ineye',
  'ineyo',
  'ingee',
  'ingeo',
  'inget',
  'ingii',
  'ingom',
  'ingot',
  'ingut',
  'inino',
  'injin',
  'inong',
  'inter',
  'inyam',
  'inyim',
  'inyom',
  'inyut',
  'ipaci',
  'ipaco',
  'ipacu',
  'iparo',
  'ipeke',
  'ipeki',
  'ipeko',
  'ipeny',
  'ipido',
  'ipiko',
  'ipime',
  'ipito',
  'ipola',
  'ipore',
  'iporo',
  'ipoto',
  'ipoyo',
  'ipuru',
  'ipwoo',
  'ipyem',
  'irene',
  'iribe',
  'irine',
  'iromo',
  'iruke',
  'iruko',
  'iruku',
  'irwak',
  'irwom',
  'irwot',
  'isuzu',
  'italy',
  'itamo',
  'itang',
  'itara',
  'itaun',
  'itedo',
  'itela',
  'itele',
  'itelo',
  'itemo',
  'iteng',
  'itera',
  'itere',
  'itero',
  'itice',
  'itimo',
  'itino',
  'itito',
  'itiyo',
  'itong',
  'itown',
  'itoyo',
  'ituku',
  'itung',
  'ituru',
  'itwok',
  'ityek',
  'ivory',
  'iwaca',
  'iwaco',
  'iwang',
  'iward',
  'iweko',
  'iwigi',
  'iwilo',
  'iwiny',
  'iwiya',
  'iwiye',
  'iwoto',
  'iyamo',
  'iyele',
  'iyeng',
  'iyeni',
  'iyeoo',
  'iyero',
  'iyeto',
  'iyube',
  'iyubu',
  'jaayi',
  'jaket',
  'jammi',
  'jange',
  'japan',
  'jenge',
  'jengo',
  'jingo',
  'jingu',
  'jinja',
  'jippe',
  'joint',
  'jokon',
  'jongo',
  'jonye',
  'jonyo',
  'jooma',
  'jukke',
  'jukon',
  'jwayo',
  'jwero',
  'jwigo',
  'jwiko',
  'jwolo',
  'kabad',
  'kabed',
  'kabej',
  'kabii',
  'kabin',
  'kabit',
  'kabut',
  'kacam',
  'kacat',
  'kacek',
  'kacel',
  'kacwe',
  'kadaa',
  'kadhi',
  'kadot',
  'kakar',
  'kaket',
  'kakok',
  'kakwo',
  'kalam',
  'kalek',
  'kalgi',
  'kalim',
  'kalle',
  'kalok',
  'kameg',
  'kamol',
  'kamya',
  'kanca',
  'kanen',
  'kanne',
  'kanya',
  'kanyo',
  'kapet',
  'karan',
  'karem',
  'karot',
  'katen',
  'katic',
  'katii',
  'katoo',
  'katop',
  'katte',
  'katti',
  'katto',
  'katur',
  'katwo',
  'katye',
  'kawco',
  'kawek',
  'kawer',
  'kawok',
  'kawot',
  'kayee',
  'kedgi',
  'kedwa',
  'kekem',
  'keken',
  'kelli',
  'kello',
  'kemme',
  'kengi',
  'kengo',
  'kenwa',
  'kenya',
  'kenye',
  'kenyo',
  'khadi',
  'kibal',
  'kibed',
  'kibit',
  'kibol',
  'kibot',
  'kicaa',
  'kicak',
  'kicce',
  'kicel',
  'kicim',
  'kicob',
  'kicok',
  'kicoo',
  'kicor',
  'kicuk',
  'kicul',
  'kidaa',
  'kidek',
  'kidir',
  'kidog',
  'kidot',
  'kiged',
  'kigen',
  'kiger',
  'kigik',
  'kigud',
  'kiiza',
  'kijuk',
  'kikel',
  'kiken',
  'kiket',
  'kikir',
  'kikit',
  'kikob',
  'kikok',
  'kikom',
  'kikop',
  'kikpo',
  'kikub',
  'kikwo',
  'kilac',
  'kilok',
  'kilub',
  'kimak',
  'kimed',
  'kimii',
  'kimok',
  'kimon',
  'kinek',
  'kinen',
  'kingi',
  'kinwa',
  'kinwo',
  'kinwu',
  'kioro',
  'kioyo',
  'kipim',
  'kipit',
  'kipok',
  'kipoo',
  'kiput',
  'kipwo',
  'kirib',
  'kiryo',
  'kitam',
  'kited',
  'kitem',
  'kiter',
  'kitgi',
  'kitii',
  'kitim',
  'kitta',
  'kitte',
  'kituc',
  'kitwa',
  'kitye',
  'kityo',
  'kiumu',
  'kiunu',
  'kiwee',
  'kiwek',
  'kiwil',
  'kiwor',
  'kiyab',
  'kiyee',
  'kiyer',
  'kiyik',
  'kiyub',
  'kizza',
  'kojan',
  'komgi',
  'komma',
  'komme',
  'kommi',
  'komwa',
  'kongi',
  'kongo',
  'konne',
  'konya',
  'konye',
  'konyi',
  'konyo',
  'koppe',
  'koran',
  'korgi',
  'koron',
  'kotti',
  'ktimo',
  'kubbe',
  'kucat',
  'kucce',
  'kuket',
  'kuman',
  'kumii',
  'kuret',
  'kurre',
  'kwagi',
  'kwait',
  'kwake',
  'kwaki',
  'kwako',
  'kwale',
  'kwali',
  'kwalo',
  'kwana',
  'kwane',
  'kwang',
  'kwani',
  'kwann',
  'kwano',
  'kwany',
  'kwara',
  'kwari',
  'kwaro',
  'kwato',
  'kwayi',
  'kwayo',
  'kweda',
  'kwede',
  'kwedi',
  'kwedo',
  'kwele',
  'kwena',
  'kwene',
  'kweno',
  'kweny',
  'kweri',
  'kwero',
  'kweyo',
  'kwica',
  'kwidi',
  'kwigi',
  'kwilo',
  'kwiri',
  'kwiya',
  'kwogi',
  'kwoko',
  'kwona',
  'kwone',
  'kwong',
  'kwoni',
  'kwopa',
  'kwoto',
  'kwowa',
  'kwoyo',
  'kyeto',
  'kyoga',
  'labal',
  'labed',
  'laber',
  'labit',
  'labol',
  'laboo',
  'labuk',
  'labul',
  'labut',
  'lacak',
  'lacan',
  'lacat',
  'lacce',
  'lacen',
  'lacoc',
  'lacon',
  'lacoo',
  'lacor',
  'lacot',
  'lacuc',
  'lacul',
  'lacun',
  'ladam',
  'ladic',
  'ladir',
  'ladit',
  'ladoo',
  'lador',
  'ladot',
  'ladwo',
  'lagal',
  'lagam',
  'lagen',
  'lagoo',
  'lagor',
  'lagwa',
  'lagwe',
  'laitc',
  'laiye',
  'lajok',
  'lakel',
  'laket',
  'lakgi',
  'lakit',
  'lakke',
  'lakub',
  'lakur',
  'lakwe',
  'lakwo',
  'lalar',
  'lalim',
  'laloc',
  'lalok',
  'laloo',
  'lalor',
  'lalub',
  'lamak',
  'lamal',
  'lamar',
  'lamed',
  'lamek',
  'lamic',
  'lamii',
  'lamin',
  'lamok',
  'lamot',
  'lanek',
  'lanen',
  'langi',
  'lanyo',
  'laora',
  'lapal',
  'lapar',
  'lapik',
  'lapim',
  'lapor',
  'lapur',
  'larem',
  'larok',
  'larot',
  'larre',
  'larwa',
  'latam',
  'lated',
  'latel',
  'laten',
  'latic',
  'latii',
  'latim',
  'latin',
  'latoo',
  'latuc',
  'latuk',
  'latwo',
  'lawal',
  'lawat',
  'lawer',
  'lawii',
  'lawil',
  'lawir',
  'lawoo',
  'lawor',
  'lawot',
  'layab',
  'layet',
  'layub',
  'ldait',
  'ldilo',
  'ldwok',
  'lebgi',
  'leeoo',
  'legal',
  'lekgi',
  'lekka',
  'lekke',
  'lemon',
  'lemun',
  'lenga',
  'lengo',
  'lengu',
  'level',
  'lewci',
  'lewic',
  'lexus',
  'lgeng',
  'libya',
  'licuc',
  'light',
  'limgi',
  'limki',
  'limme',
  'linen',
  'linga',
  'lingo',
  'lirem',
  'lirre',
  'liter',
  'litik',
  'litni',
  'llimo',
  'lobbe',
  'lobed',
  'loboa',
  'loboo',
  'lobpo',
  'local',
  'locce',
  'locgi',
  'locoo',
  'lodge',
  'lokgi',
  'lokke',
  'lokne',
  'lokwa',
  'lolok',
  'lomok',
  'longe',
  'longo',
  'lonyo',
  'lorri',
  'lorry',
  'luact',
  'lubak',
  'lubal',
  'lubbe',
  'lubbu',
  'luber',
  'lubit',
  'lubol',
  'lubuc',
  'lucam',
  'lucan',
  'lucat',
  'lucik',
  'lucoc',
  'lucok',
  'lucoo',
  'lucor',
  'lucul',
  'ludit',
  'ludob',
  'ludok',
  'ludoo',
  'ludor',
  'ludwa',
  'ludwo',
  'lugam',
  'luged',
  'lugoo',
  'lugum',
  'lugwe',
  'luino',
  'lujog',
  'lukan',
  'lukee',
  'luket',
  'lukin',
  'lukol',
  'lukot',
  'lukub',
  'lukuc',
  'lukur',
  'lukut',
  'lukwo',
  'lulim',
  'luloc',
  'lulok',
  'lulor',
  'lulub',
  'lumaa',
  'lumak',
  'lumar',
  'lumat',
  'lumii',
  'lumok',
  'lunac',
  'lunek',
  'lunen',
  'lungi',
  'lunya',
  'luode',
  'luony',
  'lupim',
  'lupit',
  'lupok',
  'lupor',
  'lupur',
  'lupuu',
  'lurem',
  'luren',
  'luric',
  'lurok',
  'lurot',
  'lutel',
  'lutet',
  'lutic',
  'lutii',
  'lutim',
  'lutin',
  'lutio',
  'lutno',
  'lutoo',
  'lutti',
  'lutuc',
  'lutuk',
  'lutur',
  'lutwi',
  'lutwo',
  'luwat',
  'luwee',
  'luwer',
  'luwii',
  'luwil',
  'luwor',
  'luwot',
  'luyak',
  'luyee',
  'luyer',
  'luyub',
  'lwagi',
  'lwaka',
  'lweny',
  'lwero',
  'lwite',
  'lwney',
  'lwoke',
  'lwoki',
  'lwoko',
  'lwong',
  'lworo',
  'lwoto',
  'lwoyo',
  'lyeci',
  'lyeli',
  'lyelo',
  'lyere',
  'lyero',
  'lyete',
  'lyeti',
  'lyeto',
  'mabal',
  'mabed',
  'maber',
  'mabit',
  'mabor',
  'mabub',
  'mabuc',
  'mabup',
  'macal',
  'macan',
  'macar',
  'macci',
  'macek',
  'macen',
  'macik',
  'macil',
  'macin',
  'maclo',
  'macok',
  'macol',
  'macon',
  'macta',
  'madaa',
  'madak',
  'madal',
  'madda',
  'madic',
  'madir',
  'madit',
  'madok',
  'mador',
  'mager',
  'maggi',
  'magin',
  'magwa',
  'mairo',
  'maize',
  'major',
  'majwi',
  'makaa',
  'makar',
  'makci',
  'maket',
  'makke',
  'makot',
  'makun',
  'makwa',
  'makwo',
  'malac',
  'malak',
  'malip',
  'malit',
  'malok',
  'maman',
  'mamii',
  'mamit',
  'mamol',
  'mamon',
  'mamuk',
  'manen',
  'manit',
  'manok',
  'mapar',
  'mapat',
  'mapek',
  'mapol',
  'mapud',
  'maraa',
  'marac',
  'maram',
  'marci',
  'marep',
  'marii',
  'marom',
  'maryo',
  'masda',
  'masks',
  'matar',
  'matek',
  'mateo',
  'matin',
  'matir',
  'matoo',
  'matuk',
  'matut',
  'matwi',
  'matwo',
  'matye',
  'mawii',
  'mawok',
  'mayam',
  'mayee',
  'mayen',
  'mayer',
  'mayor',
  'mayot',
  'mazda',
  'mbale',
  'mbega',
  'mburo',
  'mecca',
  'mecej',
  'medal',
  'medde',
  'media',
  'meeca',
  'megga',
  'megge',
  'meggi',
  'megwa',
  'megwu',
  'mejor',
  'memba',
  'menyo',
  'metre',
  'miero',
  'miini',
  'mikel',
  'mingi',
  'mingo',
  'minne',
  'mitte',
  'mityi',
  'mixed',
  'mmiyo',
  'mocam',
  'mocce',
  'model',
  'moeti',
  'money',
  'mongi',
  'mongo',
  'monne',
  'monye',
  'monyo',
  'motgi',
  'motka',
  'motok',
  'motor',
  'motte',
  'motto',
  'mpigi',
  'mucek',
  'mucwe',
  'muken',
  'mukwo',
  'munge',
  'mungo',
  'mungu',
  'muntu',
  'munya',
  'munyu',
  'mupye',
  'murem',
  'mutii',
  'mutoo',
  'mutop',
  'muyac',
  'muyec',
  'muzee',
  'mwaka',
  'mwaki',
  'mwang',
  'mwega',
  'mwero',
  'mwoco',
  'mwolo',
  'mwony',
  'myelo',
  'myera',
  'myero',
  'myomi',
  'nacci',
  'nacni',
  'namba',
  'nango',
  'ncube',
  'nebbi',
  'nekke',
  'nekki',
  'neneo',
  'ngadi',
  'ngala',
  'ngalo',
  'ngati',
  'ngayo',
  'ngece',
  'ngeci',
  'ngeco',
  'ngene',
  'ngeng',
  'ngete',
  'ngeti',
  'ngeto',
  'ngewa',
  'ngeya',
  'ngeye',
  'ngeyi',
  'ngeyo',
  'ngico',
  'ngicu',
  'ngido',
  'ngino',
  'ngiyo',
  'ngole',
  'ngolo',
  'ngoma',
  'ngome',
  'ngomi',
  'nguku',
  'ngulo',
  'nguna',
  'nguno',
  'ngunu',
  'nguru',
  'nguta',
  'ngute',
  'ngwec',
  'ngwen',
  'niang',
  'ningo',
  'ninig',
  'ninog',
  'nipoo',
  'nipor',
  'nitik',
  'nitye',
  'niyee',
  'njuba',
  'nobel',
  'nogno',
  'nommo',
  'nonge',
  'nongo',
  'nonok',
  'notta',
  'ntare',
  'nukta',
  'numba',
  'nungu',
  'nurse',
  'nwako',
  'nwaro',
  'nwoyo',
  'nyabo',
  'nyako',
  'nyaku',
  'nyamo',
  'nyang',
  'nyapa',
  'nyara',
  'nyare',
  'nyari',
  'nyaro',
  'nyayo',
  'nyebo',
  'nyera',
  'nyero',
  'nyeto',
  'nyeyo',
  'nyige',
  'nyike',
  'nyiko',
  'nyimi',
  'nying',
  'nyiny',
  'nyira',
  'nyodo',
  'nyoma',
  'nyome',
  'nyomi',
  'nyomo',
  'nyono',
  'nyubu',
  'nyuka',
  'nyuta',
  'nyute',
  'nyuti',
  'nyuto',
  'nyutu',
  'nywak',
  'nywal',
  'nywar',
  'nywen',
  'nywko',
  'obako',
  'obale',
  'obalo',
  'obano',
  'obato',
  'obayo',
  'obede',
  'obedi',
  'obedo',
  'obedp',
  'obema',
  'obino',
  'obira',
  'obito',
  'oboke',
  'obolo',
  'obong',
  'oboro',
  'oboyo',
  'obuaa',
  'obuoo',
  'obure',
  'oburi',
  'oburo',
  'oburu',
  'obuto',
  'obutu',
  'obwol',
  'obwor',
  'obwot',
  'ocaco',
  'ocake',
  'ocaki',
  'ocako',
  'ocalo',
  'ocamo',
  'ocang',
  'ocata',
  'ocate',
  'ocato',
  'ocaye',
  'ocayo',
  'ocela',
  'ocele',
  'ocelo',
  'ocero',
  'oceto',
  'ochwo',
  'ocido',
  'ocike',
  'ociko',
  'ocimo',
  'ocing',
  'ociti',
  'ocito',
  'ocobe',
  'ocobo',
  'ocoko',
  'ocone',
  'ocora',
  'ocore',
  'ocoro',
  'ocoya',
  'ocoyo',
  'octio',
  'ocubu',
  'ocuko',
  'ocuku',
  'ocule',
  'oculi',
  'oculo',
  'oculu',
  'ocung',
  'ocuto',
  'ocwak',
  'ocwal',
  'ocwee',
  'ocwer',
  'odelo',
  'odeno',
  'odeye',
  'odeyo',
  'odido',
  'odigi',
  'odiko',
  'odili',
  'odilo',
  'odilp',
  'oding',
  'odiny',
  'odiro',
  'odiwa',
  'odiyo',
  'odoco',
  'odode',
  'ododo',
  'odojo',
  'odoko',
  'odole',
  'odong',
  'odony',
  'odoro',
  'odoto',
  'oduro',
  'odwel',
  'odwog',
  'odwok',
  'odwoo',
  'odwor',
  'oebdo',
  'offic',
  'ogale',
  'ogalo',
  'ogamo',
  'ogedo',
  'ogene',
  'ogeng',
  'ogero',
  'ogiko',
  'ogolo',
  'ogone',
  'ogony',
  'ogoya',
  'ogoye',
  'ogoyi',
  'ogoyo',
  'ogudo',
  'ogudu',
  'ogura',
  'ogure',
  'ogwal',
  'ogwil',
  'ogwok',
  'oille',
  'ojale',
  'ojalo',
  'ojemo',
  'ojing',
  'ojoge',
  'ojogo',
  'ojola',
  'ojole',
  'ojolo',
  'ojone',
  'ojong',
  'ojony',
  'ojuke',
  'ojuko',
  'ojuku',
  'ojwik',
  'okabi',
  'okadi',
  'okale',
  'okalo',
  'okane',
  'okano',
  'okany',
  'okaro',
  'okati',
  'okato',
  'okawa',
  'okaye',
  'okayo',
  'okcon',
  'okeco',
  'okedo',
  'okela',
  'okele',
  'okelo',
  'okeme',
  'okemi',
  'okeng',
  'oketa',
  'oketo',
  'okobe',
  'okobo',
  'okoko',
  'okong',
  'okono',
  'okony',
  'okope',
  'okori',
  'okoro',
  'okuba',
  'okudu',
  'okule',
  'okure',
  'okuro',
  'okuto',
  'okwan',
  'okwed',
  'okwee',
  'olamo',
  'olang',
  'olara',
  'olare',
  'olaro',
  'olaya',
  'olega',
  'olego',
  'oleny',
  'oleyo',
  'olima',
  'olimo',
  'oling',
  'oloke',
  'oloko',
  'olong',
  'olony',
  'oloro',
  'oloto',
  'oloya',
  'oloye',
  'oloyo',
  'oluba',
  'olube',
  'olubi',
  'olubo',
  'olubu',
  'oluma',
  'oluto',
  'olwar',
  'olwii',
  'olwit',
  'olwok',
  'olyel',
  'omaka',
  'omake',
  'omaki',
  'omako',
  'omara',
  'omaro',
  'omato',
  'omayo',
  'omede',
  'omedo',
  'omege',
  'omegi',
  'omego',
  'omera',
  'omero',
  'omina',
  'omine',
  'omini',
  'omite',
  'omito',
  'omiya',
  'omiye',
  'omiyo',
  'omnia',
  'omoko',
  'omolo',
  'omoro',
  'omota',
  'omote',
  'omoto',
  'omoyo',
  'omwoc',
  'omyel',
  'omyeo',
  'onedo',
  'oneka',
  'oneke',
  'oneko',
  'onena',
  'onene',
  'oneno',
  'ongee',
  'ongeo',
  'ongii',
  'ongok',
  'ongol',
  'ongut',
  'onguu',
  'onino',
  'onngo',
  'onogo',
  'onong',
  'onono',
  'onuru',
  'onwoo',
  'onyaa',
  'onyak',
  'onyam',
  'onyar',
  'onyon',
  'onyoo',
  'onyut',
  'oonyo',
  'opako',
  'opang',
  'opedo',
  'opego',
  'openy',
  'opera',
  'opice',
  'opici',
  'opido',
  'opime',
  'opimo',
  'opito',
  'opiyo',
  'opoke',
  'opoko',
  'opong',
  'opore',
  'oporo',
  'opoto',
  'opoyo',
  'opwuk',
  'opyee',
  'opyem',
  'oreny',
  'oreto',
  'oribe',
  'oribo',
  'orido',
  'oring',
  'oroce',
  'oroco',
  'oroma',
  'oromo',
  'oroto',
  'oroyo',
  'orubo',
  'orudo',
  'oruke',
  'oruko',
  'oruku',
  'orumo',
  'orumu',
  'orung',
  'orwak',
  'orwee',
  'oryem',
  'ostel',
  'otamo',
  'otang',
  'otany',
  'otara',
  'otedo',
  'otegi',
  'otego',
  'oteka',
  'oteko',
  'otelo',
  'oteme',
  'otemo',
  'otera',
  'otere',
  'oteri',
  'otero',
  'oteto',
  'otiko',
  'otime',
  'otimo',
  'otine',
  'oting',
  'otini',
  'otita',
  'otito',
  'otiyo',
  'otomo',
  'otoni',
  'ottic',
  'otuce',
  'otuco',
  'otucu',
  'otugi',
  'otugo',
  'otugu',
  'otuko',
  'otuku',
  'oturo',
  'oturu',
  'otute',
  'otwoo',
  'otwor',
  'otyat',
  'otyek',
  'otyel',
  'otyer',
  'oucko',
  'outuk',
  'owace',
  'owaci',
  'owaco',
  'owako',
  'owalo',
  'owane',
  'owang',
  'owano',
  'oweco',
  'oweke',
  'oweko',
  'owero',
  'oweyo',
  'owile',
  'owilo',
  'owiny',
  'owire',
  'owiro',
  'owoti',
  'owoto',
  'owuro',
  'oyabe',
  'oyabi',
  'oyabo',
  'oyabu',
  'oyaco',
  'oyacu',
  'oyako',
  'oyaro',
  'oyele',
  'oyelo',
  'oyeng',
  'oyeno',
  'oyeny',
  'oyera',
  'oyere',
  'oyero',
  'oyeto',
  'oyeyo',
  'oyiko',
  'oyima',
  'oyite',
  'oyito',
  'oyoke',
  'oyoko',
  'oyomo',
  'oyoto',
  'oyube',
  'oyubo',
  'oyubu',
  'oywec',
  'oywee',
  'oywek',
  'pacci',
  'pacen',
  'packa',
  'pacta',
  'paipo',
  'pajau',
  'pamba',
  'pamit',
  'panga',
  'pango',
  'paric',
  'paris',
  'parti',
  'party',
  'paska',
  'pasta',
  'patch',
  'peace',
  'pedok',
  'pekke',
  'pekki',
  'pemol',
  'penal',
  'penya',
  'penye',
  'penyi',
  'penyo',
  'peter',
  'petye',
  'peyee',
  'peyot',
  'phone',
  'piano',
  'piine',
  'pikap',
  'pilok',
  'pilot',
  'pimgi',
  'pimme',
  'pingo',
  'pinye',
  'pinyi',
  'pirgi',
  'pirij',
  'pirin',
  'piyer',
  'plate',
  'ployo',
  'poimo',
  'pokgi',
  'pokke',
  'polgi',
  'polic',
  'polio',
  'polle',
  'pongo',
  'porre',
  'porte',
  'potea',
  'power',
  'ppeko',
  'presa',
  'prime',
  'primi',
  'prize',
  'pulan',
  'pulet',
  'pulgi',
  'pulle',
  'pulot',
  'pungo',
  'purre',
  'putin',
  'puuro',
  'pweny',
  'pwera',
  'pwiny',
  'pwoda',
  'pwodi',
  'pwodo',
  'pwono',
  'pwony',
  'pwour',
  'pwoye',
  'pwoyi',
  'pwoyo',
  'pyedo',
  'pyeem',
  'pyegi',
  'pyera',
  'pyere',
  'qatar',
  'queen',
  'quran',
  'racce',
  'radio',
  'range',
  'rangi',
  'rdong',
  'reach',
  'recit',
  'redio',
  'rekod',
  'remgi',
  'rette',
  'ribbe',
  'ribbo',
  'ricac',
  'ricit',
  'ringo',
  'ripot',
  'river',
  'roads',
  'rolex',
  'rover',
  'royal',
  'rugby',
  'rukca',
  'rukka',
  'rukke',
  'rummi',
  'runne',
  'rural',
  'rwako',
  'rwate',
  'rwatw',
  'rwaye',
  'rwede',
  'rwemo',
  'rweny',
  'rweyo',
  'rwode',
  'rwodi',
  'rwome',
  'rwony',
  'ryeko',
  'ryema',
  'ryeme',
  'ryemo',
  'ryeny',
  'saint',
  'saleh',
  'salim',
  'salon',
  'samba',
  'sarah',
  'scout',
  'scrap',
  'share',
  'silam',
  'silva',
  'simon',
  'slums',
  'smart',
  'sochi',
  'solar',
  'south',
  'spain',
  'spare',
  'speke',
  'sport',
  'state',
  'stock',
  'store',
  'story',
  'stove',
  'sudam',
  'sudan',
  'super',
  'supre',
  'swarm',
  'table',
  'tagge',
  'takci',
  'talle',
  'tamgi',
  'tamma',
  'tamme',
  'tamwa',
  'tamwu',
  'tangi',
  'tango',
  'tanka',
  'tayil',
  'tcigi',
  'teams',
  'tecen',
  'tecno',
  'teggi',
  'tekci',
  'tekke',
  'tekki',
  'tella',
  'telle',
  'tells',
  'teloc',
  'telok',
  'teneg',
  'tenge',
  'tenye',
  'tenyo',
  'tesla',
  'tessa',
  'tetek',
  'three',
  'ticca',
  'ticce',
  'ticci',
  'ticee',
  'ticgi',
  'ticki',
  'ticne',
  'ticwa',
  'tiket',
  'timgi',
  'timme',
  'timmo',
  'tinga',
  'tinge',
  'tingo',
  'tinni',
  'tioyo',
  'title',
  'tocce',
  'tokyo',
  'tolli',
  'tonge',
  'tongi',
  'tongo',
  'towns',
  'trela',
  'trump',
  'trust',
  'tubbe',
  'tukui',
  'tukus',
  'tungi',
  'tutal',
  'tutsi',
  'tutte',
  'tutwl',
  'tuugi',
  'tuuru',
  'tuwal',
  'twage',
  'twela',
  'twere',
  'twero',
  'tweya',
  'tweye',
  'tweyo',
  'twoke',
  'twolo',
  'twomo',
  'twone',
  'twong',
  'twoni',
  'twora',
  'tworo',
  'twoye',
  'twoyo',
  'tyang',
  'tyeka',
  'tyeko',
  'tyelo',
  'tyena',
  'tyene',
  'tyeng',
  'tyeni',
  'tyeno',
  'tyeoo',
  'tyero',
  'uanda',
  'udoro',
  'udwoo',
  'uhuru',
  'ulaya',
  'ulubu',
  'union',
  'units',
  'unugi',
  'uring',
  'uteka',
  'utoka',
  'video',
  'vidio',
  'vinci',
  'virus',
  'volts',
  'volvo',
  'wabal',
  'wabed',
  'wabin',
  'wacak',
  'wacca',
  'wacce',
  'wacci',
  'wacit',
  'wacok',
  'wacon',
  'wacoo',
  'wacuk',
  'wacul',
  'wadii',
  'wadok',
  'wadot',
  'waged',
  'wagen',
  'wagik',
  'wajol',
  'wajuk',
  'waket',
  'wakir',
  'wakke',
  'wakur',
  'wakuu',
  'wakwo',
  'walac',
  'waleg',
  'walok',
  'waloo',
  'walub',
  'wamak',
  'wamar',
  'wamed',
  'wamii',
  'wamok',
  'wanen',
  'wanga',
  'wange',
  'wangi',
  'wango',
  'wangu',
  'wapar',
  'wapit',
  'wapok',
  'wapor',
  'wapwo',
  'warib',
  'warid',
  'warii',
  'warna',
  'warne',
  'warre',
  'warri',
  'waruk',
  'waswa',
  'watam',
  'watem',
  'water',
  'watgi',
  'watii',
  'watik',
  'watim',
  'watuk',
  'watye',
  'wawek',
  'wawil',
  'wawor',
  'wawot',
  'wayee',
  'wayin',
  'wayub',
  'wegge',
  'weggi',
  'welgi',
  'welle',
  'welwa',
  'wengo',
  'wenne',
  'wergi',
  'werne',
  'werni',
  'werre',
  'werri',
  'wibye',
  'wiken',
  'wikom',
  'wilgi',
  'willo',
  'wilok',
  'winne',
  'winye',
  'winyi',
  'winyo',
  'wipem',
  'wirre',
  'wodgi',
  'wongi',
  'wongo',
  'wonne',
  'wonwa',
  'wonye',
  'wooro',
  'world',
  'wotgi',
  'wotte',
  'wotwa',
  'wtiyo',
  'wuter',
  'wutim',
  'wutye',
  'wuyer',
  'xceed',
  'yabbe',
  'yabbo',
  'yacco',
  'yango',
  'yatgi',
  'yatte',
  'yeegi',
  'yelle',
  'yello',
  'yengo',
  'yenye',
  'yenyo',
  'yibbe',
  'yonge',
  'yubbe',
  'yubbu',
  'yubgi',
  'yubni',
  'yuggi',
  'ywako',
  'ywayo',
  'yweka',
  'ywero',
  'yweyo',
  'zaire',
  'zayed',
  'zebra',
  'zumba',
];

export default WORD_LIST;