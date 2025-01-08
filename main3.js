'use strict';

{

  // ナビの出し入れ
  document.querySelector('#explainIcon').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('hiddenNav')
  });

  // 遊びかたの出し入れ
  document.querySelector('#Howto').addEventListener('click', () => {
    document.querySelector('.mahoenHowto').classList.toggle('hidden')
  });
  document.querySelector('#HowtoHidden').addEventListener('click', () => {
    document.querySelector('.mahoenHowto').classList.toggle('hidden')
  });

  // 魔法使い一覧の出し入れ
  document.querySelector('#wizardList').addEventListener('click', () => {
    document.querySelector('.wizardExpContainer').classList.toggle('hidden')
  });
  document.querySelector('#wizardHidden').addEventListener('click', () => {
    document.querySelector('.wizardExpContainer').classList.toggle('hidden')
  });

  // そうび一覧の出し入れ
  document.querySelector('#equipList').addEventListener('click', () => {
    document.querySelector('.equipContainer').classList.toggle('hidden')
  });
  document.querySelector('#equipHidden').addEventListener('click', () => {
    document.querySelector('.equipContainer').classList.toggle('hidden')
  });

  // のろい一覧の出し入れ
  document.querySelector('#curseList').addEventListener('click', () => {
    document.querySelector('.curseContainer').classList.toggle('hidden')
  });
  document.querySelector('#curseHidden').addEventListener('click', () => {
    document.querySelector('.curseContainer').classList.toggle('hidden')
  });

  // ケシゴムの紹介の出し入れ
  document.querySelector('#eraserList').addEventListener('click', () => {
    document.querySelector('.eraserContainer').classList.toggle('hidden')
  });
  document.querySelector('#eraserHidden').addEventListener('click', () => {
    document.querySelector('.eraserContainer').classList.toggle('hidden')
  });

  // 魔法使いの実配列を定義
  const misuraLockedView = [
    'misura.png',
    '★',
    'へんしん前',
    'へんしん後',
    'きまぐれでミスが多いが、あたれば大ダメージ！いきなりかみつかれないように注意！',
    '#b488f8',
    '【LOSE】「はぁ！？俺負けたんですか！？」',
  ],
    misuraCommandTop = [
      "《ｱﾙｼﾑ》 全員に30のダメージ",
      "ねむい",
      "《ｱﾙｼﾑ》 クラーケンにへんしん！",
      "《ｱﾙｼﾑ》 相手を凍らせた もう一回振る",
      "《ｱﾙｼﾑ》 クラーケンにへんしん！",
      "あはは！"
    ],
    misuraCommandButtom = [
      "まきつき攻撃 全員に50ダメージ",
      "うでがもげた！ 次の１回の攻撃力 -30",
      "まきつき攻撃 全員に50ダメージ",
      "まきつき攻撃 全員に30ダメージ",
      "うでがもげた！ 次の１回の攻撃力 -30",
      "まきつき攻撃 全員に30ダメージ"
    ];

  const ozLockedView = [
    'oz.png',
    '★',
    'へんしん前',
    'へんしん後',
    'しっぽがあたまになった後の２回攻撃は強力だ！勝てればいい！それが最強のゆえんだ！',
    '#edc420',
    '【LOSE】「……。」',
  ],
    ozCommandTop = [
      "《ｳﾞｫｸｽﾉｸ》 全員に30のダメージ",
      "リヴァイアサンにへんしん",
      "《ｳﾞｫｸｽﾉ... ねむってしまった ",
      "アーサーがみている ★に20ダメージ",
      "リヴァイアサンにへんしん",
      "夜になった ●に20ダメージ",
    ],
    ozCommandButtom = [
      "かみつき攻撃 全員に20ダメージ",
      "かみつき攻撃 全員に10ダメージ",
      "しっぽが頭に！ 次から２回ふる",
      "かみつき攻撃 全員に30ダメージ",
      "かみつき攻撃 全員に20ダメージ",
      "しっぽが頭に！ 次から２回ふる",
    ];

  const figaroLockedView = [
    'figaro.png',
    '●',
    '',
    '',
    '謎のちょい悪オヤジ製作のまほエン。超強力なHP全回復がとくちょう。そういうところだぞ！',
    '#aecd1b',
    '【LOSE】「まいったな…。」',
  ],
    figaroCommandTop = [
      "《ﾎﾟｯｼﾃﾞｵ》 味方のHP全かいふく ",
      "ミチルがみている かっこいいウインク",
      "《ﾎﾟｯｼﾃﾞｵ》 ●に50のダメージ",
      "《ﾎﾟｯｼﾃﾞｵ》 全員に50のダメージ",
      "ルチルがみている 先生にまかせて！",
      "《ﾎﾟｯｼﾃﾞｵ》 ★に50ダメージ",
    ],
    figaroCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];

  const faustLockedView = [
    'faust.png',
    '●',
    '',
    '',
    '回復、そうび、呪いをこなす万能まほエン。そういえば呪い屋だったね。',
    '#5e8ce1',
    '【LOSE】「呪ってやる…。」',
  ],
    faustCommandTop = [
      "《ｻﾃｨﾙｸﾅｰﾄﾑﾙｸﾘｰﾄﾞ》 味方のHP30回復",
      "そうび",
      "あいてに のろいキャップをつける",
      "《ｻﾃｨﾙｸﾅｰﾄﾑﾙｸﾘｰﾄﾞ》 全員に20のダメージ",
      "そうび",
      "あいてに のろいキャップをつける",
    ],
    faustCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];

  const shinoHeathLockedView = [
    'shinoHeath.png',
    '●',
    '',
    '',
    'おおがまをそうびすれば、安定して相手を狩れるぞ！２ほん持ってはいけないという、きまりはないのだ！',
    '#5e8ce1',
    '【LOSE】「おい。かかってこいよ。」「こらシノ」',
  ],
    shinoHeathCommandTop = [
      "《ﾏｯﾂｱｰｽﾃﾞｨｰﾊﾟｽ》 全員に20ダメージ",
      "《ﾚﾌﾟｾｳﾞｧｨｳﾞﾙﾌﾟ･ｽﾉｽ》 動きを止めた そうび",
      "ヒースの応援！ 次の１回の攻撃力が２ばい",
      "《ﾏｯﾂｱｰｽﾃﾞｨｰﾊﾟｽ》 全員に20ダメージ",
      "《ﾚﾌﾟｾｳﾞｧｨｳﾞﾙﾌﾟ･ｽﾉｽ》 動きを止めた そうび",
      "出血！ ヒースにおこられた",
    ],
    shinoHeathCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];

  const arthurLockedView = [
    'arthur.png',
    '★',
    '',
    '',
    '大きなダメージが狙いやすく、安定して強いまほエン。傷つくと、なぜか強力な魔法がとんでくる！',
    '#edc420',
    '【LOSE】「楽しいな！」',
  ],
    arthurCommandTop = [
      "《ﾊﾟﾙﾉｸﾀﾝﾆｸｽｼﾞｵ》 ★に30ダメージ",
      "てをさしのべた！",
      "《ﾊﾟﾙﾉｸﾀﾝﾆｸｽｼﾞｵ》 ●に30ダメージ",
      "むちゃをした！ オズ様にしかられた",
      "《ﾊﾟﾙﾉｸﾀﾝﾆｸｽｼﾞｵ》 全員に30ダメージ",
      "20ダメージをうけた 《ｳﾞｫｸｽﾉｸ》全員に40ダメージ",
    ],
    arthurCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const neroLockedView = [
    'nero.png',
    '★',
    '',
    '',
    '仲良しのブラッド…リーくんに強化されれば、大ダメージを狙えるぞ！回復もこなせるしぶといまほエン',
    '#5e8ce1',
    '【LOSE】「ちゃちな料理人なんで…」',
  ],
    neroCommandTop = [
      "《ｱﾄﾞﾉﾃﾞｨｽｵﾑﾆｽ》 全員に20ダメージ",
      "ブラッドからえんご 次の１回の攻撃力が２ばい",
      "《ｱﾄﾞﾉﾃﾞｨｽｵﾑﾆｽ》 全員に20ダメージ",
      "アヒージョでばんしゃく！ HP30回復",
      "《ｱﾄﾞﾉﾃﾞｨｽｵﾑﾆｽ》 全員に20ダメージ",
      "ブラッドからえんご 次の１回の攻撃力が２ばい",
    ],
    neroCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const bradleyLockedView = [
    'bradley.png',
    '★',
    '',
    '',
    '呪文のあとのこうげきは強力だ！厄災のきずを利用して回避もできる！さすがボス！かしこい！',
    '#b488f8',
    '【LOSE】「おれは盗賊団のボスだぞ！」',
  ],
    bradleyCommandTop = [
      "うちぬいた！ ★に40のダメージ",
      "《ｱﾄﾞﾉﾎﾟﾃﾝｽﾑ》 次の１回の攻撃力 +30",
      "えんごしゃげき 全員に20のダメージ",
      "うちぬいた！ ●に40のダメージ",
      "えんごしゃげき 全員に20のダメージ",
      "くしゃみ！ 次の１回ダメージをうけない",
    ],
    bradleyCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const lennoxLockedView = [
    'lennox.png',
    '●',
    '',
    '',
    'メイスを装備すれば、一撃で相手をひん死にできる、肉体派まほエン。おまえのような羊飼いがいるか。',
    '#aecd1b',
    '【LOSE】「鍛えなおすか…」',
  ],
    lennoxCommandTop = [
      "ふん！ ●に20のダメージ",
      "そうび",
      "はぁっ！ ★に20のダメージ",
      "そうび",
      "ひつじが通りすぎた 全員に20のダメージ",
      "呪文をわすれていた！ 全員に10のダメージ",
    ],
    lennoxCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const figaroAdLockedView = [
    'figaroAd.png',
    '★',
    '',
    '',
    '謎の有識者により、バランス調整されたまほエン。いざというとき呪文が使えないこともある！そんな時もある！',
    '#aecd1b',
    '【LOSE】「……。」',
  ],
    figaroAdCommandTop = [
      "《ﾎﾟｯｼﾃﾞｵ》 味方のHP40かいふく",
      "ミチルがみている 全員に10ダメージ",
      "むしけらが ●に30のダメージ",
      "けだものが ★に30のダメージ",
      "ちりにしてあげよう 全員に40のダメージ",
      "呪文がつかえない…",
    ],
    figaroAdCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const riquetMitileLockedView = [
    'riquetMitile.png',
    '●',
    '',
    '',
    '大きな攻撃はもたないが、高確率で回復をつかうことができるぞ！二人で協力してがんばれ！',
    '#aecd1b',
    '【LOSE】「わーーーっ！」',
  ],
    riquetMitileCommandTop = [
      "《ｵﾙﾄﾆｸ･ｾｱﾙｼｽﾋﾟﾙﾁｪ》 HP30かいふく",
      "《ｻﾝﾚﾃｨｱ･ｴﾃﾞｨﾌ》 全員に20ダメージ",
      "《ｵﾙﾄﾆｸ･ｾｱﾋﾟ… かんだ！ もう１回振る！",
      "回復薬をつかった HP20かいふく",
      "「許します」 あいてをゆるした",
      "《ｽｷﾝﾃｨｯﾗ》 全員に20ダメージ",
    ],
    riquetMitileCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const murrLockedView = [
    'murr.png',
    '●',
    '',
    '',
    'とくに★マークに対して強力な、問答を使えるぞ！おこらせたら友人に謝ってもらおう！',
    '#f96595',
    '【LOSE】「おもしろいね！」',
  ],
    murrCommandTop = [
      "問答をした ★に60 自分に30ダメージ",
      "世紀の知恵者に 自分の回まで攻撃をはね返す",
      "問答をした ●に40ダメージ",
      "おこらせた！ ｼｬｲﾛｯｸがひざまずいた",
      "世紀の知恵者に 自分の回まで攻撃をはね返す",
      "《ｴｱﾆｭｰﾗﾝﾌﾞﾙ》 花火があがった！",
    ],
    murrCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const shylockLockedView = [
    'shylock.png',
    '●',
    '',
    '',
    '半分の確率で相手の攻撃を受けない強力なまほエン！この駆け引きはまるで恋！',
    '#f96595',
    '【LOSE】「いやな人…」',
  ],
    shylockCommandTop = [
      "《ｲﾝｳﾞｨｰﾍﾞﾙ》 自分の回まで攻撃をはね返す",
      "げんわく攻撃 全員に20のダメージ",
      "けむりを出した 次の１回はダメージをうけない",
      "なげキスをおくった！ 全員よろこんだ",
      "《ｲﾝｳﾞｨｰﾍﾞﾙ》 自分の回まで攻撃をはね返す",
      "しんぞうがもえる！ 20のダメージをうけた",
    ],
    shylockCommandButtom = [
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  const cainLockedView = [
    'cain.png',
    '●',
    'やくさいのきず',
    'みえた！',
    '最初は大きなハンデを負っているぞ！みえた後は強力なまほエンに！きしさま！がんばれ！',
    '#edc420',
    '【LOSE】「くそっ！」',
  ],
    cainCommandTop = [
      "●に30のダメージ みえた！",
      "10のダメージをうけた みえた！",
      "★に30のダメージ みえた！",
      "ミス",
      "20のダメージをうけた みえた！",
      "ミス",
    ],
    cainCommandButtom = [
      "剣をふるった！ ●に30のダメージ",
      "《ｸﾞﾗﾃﾞｨｱｽ･ﾌﾟﾛｾｰﾗ》 全員に20ダメージ",
      "剣をふるった！ ★に30のダメージ",
      "アーサーからの激励 次の１回の攻撃力２ばい",
      "《ｸﾞﾗﾃﾞｨｱｽ･ﾌﾟﾛｾｰﾗ》 全員に20ダメージ",
      "オーエンからの助言 次の１回の攻撃力２ばい",
    ];
  const owenLockedView = [
    'owen.png',
    '★',
    '北の魔法使い',
    'やくさいのきず',
    '言葉で追い詰め、少しづつ相手を弱らせるまほエン。厄災の傷になった時、何が起きるかは本人にも分らない。',
    '#b488f8',
    '【LOSE】「最悪…」',
  ],
    owenCommandTop = [
      "ケルベロスのえさに ●に30ダメージ",
      "言葉の呪い 相手にのろいキャップをつける",
      "《ｸｰﾚ･ﾒﾐﾆ》 ★に30ダメージ",
      "やくさいのきず へ もう１回ふる",
      "言葉の呪い 相手にのろいキャップをつける",
      "やくさいのきず へ もう１回ふる",
    ],
    owenCommandButtom = [
      "北の魔法使いに戻った ★に20ダメージ",
      "死んじゃえ 全員に60のダメージ",
      "北の魔法使いに戻った ●に20ダメージ",
      "おうたをうたった",
      "北の魔法使いに戻った",
      "……？",
    ];
  const snowWhiteLockedView = [
    'snowWhite.png',
    '★',
    'こどものすがた',
    'おとなのすがた',
    '★マークにはようしゃしないまほエンだ！低確率でこどもの姿に戻ってしまう！たすけて～！',
    '#b488f8',
    '【LOSE】「「きゃーっ！」」',
  ],
    snowWhiteCommandTop = [
      "《ﾉｽｺﾑﾆｱ》 ★に30のダメージ",
      "おとなのすがたにへんしん！",
      "《ﾉｽｺﾑﾆｱ》 ●に20のダメージ",
      "おとなのすがたにへんしん！",
      "《ﾉｽｺﾑﾆｱ》 全員に20のダメージ",
      "夜になった 絵にとじこめられた",
    ],
    snowWhiteCommandButtom = [
      "《ﾉｽｺﾑﾆｱ》 ★に50のダメージ",
      "《ﾉｽｺﾑﾆｱ》 ★に50のダメージ",
      "《ﾉｽｺﾑﾆｱ》 ●に30のダメージ",
      "《ﾉｽｺﾑﾆｱ》 ●に30のダメージ",
      "《ﾉｽｺﾑﾆｱ》 全員に30のダメージ",
      "夜になった 絵にとじこめられた",
    ];

  // 交流ケシゴムの実配列を定義
  const rutileEraserCommand = [
    '《ｵﾙﾄﾆｸ･ｾﾄﾏｵｰｼﾞｪ》 HP30かいふく',
    'ハーブティーの差し入れ HP30かいふく',
    '《ｵﾙﾄﾆｸ･ｾﾄﾏｵｰｼﾞｪ》 HP30かいふく',
    'ハーブティーの差し入れ HP30かいふく',
    'ミスラさんのお守り 相手は次のターン行動できない',
    'ルチルの箒に乗った！ 酔ってしまった…',
    'rutile.png',
  ],
    chloeRusticaEraserCommand = [
      '鳥籠にしまった 相手は次のターン行動できない',
      '仮死状態に 相手は次のターン行動できない',
      '「失礼。少々お待ちを」 相手は次のターン行動できない',
      '「採寸させて！」 相手は次のターン行動できない',
      'クロエの祈り HP30かいふく',
      'うたっておどった！',
      'chloeRustica.png',
    ];

  // 装備の実配列を定義
  const sickleEquipCommand = [
    'ミス',
    '全員に10のダメージ',
    '全員に20のダメージ',
    'ミス',
    '全員に20のダメージ',
    '全員に10のダメージ',
    'rgba(50, 50, 255, 0.505)',
  ],
    swordEquipCommand = [
      '★に30のダメージ',
      '●に30のダメージ',
      'ミス',
      '★に30のダメージ',
      '●に30のダメージ',
      'ミス',
      'rgba(255, 0, 0, 0.454)',
    ],
    maceEquipCommand = [
      '●に60のダメージ',
      'ミス',
      '★に60のダメージ',
      'ミス',
      'ミス',
      'ミス',
      'rgba(13, 255, 0, 0.308)',
    ];

  // 呪いの実配列を定義
  const curseCommand = [
    'のろい 20のダメージをうけた',
    'のろい 20のダメージをうけた',
    'じょうか キャップをはずす',
    'のろい 20のダメージをうけた',
    'のろい 20のダメージをうけた',
    'じょうか キャップをはずす',
    'pink',
  ];

  // 差し込む仮配列を定義
  let CommandTopExp = [];
  let CommandButtomExp = [];
  let LockedViewExp = [];

  let CommandTop1p = [];
  let CommandButtom1p = [];
  let LockedView1p = [];
  let EraserCommand1p = [];
  let EquipCommand1p = [];

  let CommandTop2p = [];
  let CommandButtom2p = [];
  let LockedView2p = [];
  let EraserCommand2p = [];
  let EquipCommand2p = [];

  // 装備と呪いの切り替えに使用する真偽値を定義
  let equipMode1p = false;
  let curseMode1p = false;

  let equipMode2p = false;
  let curseMode2p = false;

  // 魔法使いを一覧に表示
  const wizardSelectExp = document.querySelector('#wizardExp');
  wizardSelectExp.addEventListener('change', () => {
    const wizardSelect = wizardSelectExp.value;
    switch (wizardSelect) {
      case 'ミスラ ★':
        CommandTopExp = misuraCommandTop;
        CommandButtomExp = misuraCommandButtom;
        LockedViewExp = misuraLockedView;
        break;
      case 'オズ ★':
        CommandTopExp = ozCommandTop;
        CommandButtomExp = ozCommandButtom;
        LockedViewExp = ozLockedView;
        break;
      case 'フィガロ ●':
        CommandTopExp = figaroCommandTop;
        CommandButtomExp = figaroCommandButtom;
        LockedViewExp = figaroLockedView;
        break;
      case 'ファウスト ●':
        CommandTopExp = faustCommandTop;
        CommandButtomExp = faustCommandButtom;
        LockedViewExp = faustLockedView;
        break;
      case 'シノとヒース ●':
        CommandTopExp = shinoHeathCommandTop;
        CommandButtomExp = shinoHeathCommandButtom;
        LockedViewExp = shinoHeathLockedView;
        break;
      case 'アーサー ★':
        CommandTopExp = arthurCommandTop;
        CommandButtomExp = arthurCommandButtom;
        LockedViewExp = arthurLockedView;
        break;
      case 'ネロ ★':
        CommandTopExp = neroCommandTop;
        CommandButtomExp = neroCommandButtom;
        LockedViewExp = neroLockedView;
        break;
      case 'ブラッドリー ★':
        CommandTopExp = bradleyCommandTop;
        CommandButtomExp = bradleyCommandButtom;
        LockedViewExp = bradleyLockedView;
        break;
      case 'レノックス ●':
        CommandTopExp = lennoxCommandTop;
        CommandButtomExp = lennoxCommandButtom;
        LockedViewExp = lennoxLockedView;
        break;
      case 'フィガロ ★（調整版）':
        CommandTopExp = figaroAdCommandTop;
        CommandButtomExp = figaroAdCommandButtom;
        LockedViewExp = figaroAdLockedView;
        break;
      case 'リケとミチル ●':
        CommandTopExp = riquetMitileCommandTop;
        CommandButtomExp = riquetMitileCommandButtom;
        LockedViewExp = riquetMitileLockedView;
        break;
      case 'ムル ●':
        CommandTopExp = murrCommandTop;
        CommandButtomExp = murrCommandButtom;
        LockedViewExp = murrLockedView;
        break;
      case 'シャイロック ●':
        CommandTopExp = shylockCommandTop;
        CommandButtomExp = shylockCommandButtom;
        LockedViewExp = shylockLockedView;
        break;
      case 'カイン ●':
        CommandTopExp = cainCommandTop;
        CommandButtomExp = cainCommandButtom;
        LockedViewExp = cainLockedView;
        break;
      case 'オーエン ★':
        CommandTopExp = owenCommandTop;
        CommandButtomExp = owenCommandButtom;
        LockedViewExp = owenLockedView;
        break;
      case 'スノウとホワイト ★':
        CommandTopExp = snowWhiteCommandTop;
        CommandButtomExp = snowWhiteCommandButtom;
        LockedViewExp = snowWhiteLockedView;
        break;
    }

    // 画像・特徴を選択した魔法使いに切り替え
    document.querySelector('#wizardIcon').src = LockedViewExp[0];
    document.querySelector('#CBefore').textContent = LockedViewExp[2];
    document.querySelector('#CAfter').textContent = LockedViewExp[3];
    document.querySelector('#wizardFeature').textContent = LockedViewExp[4];

    // コマンド表を選択した魔法使いに切り替え
    CommandTopExp.forEach((command, index) => {
      document.querySelector(`#CT${index}`).textContent = command;
    });
    CommandButtomExp.forEach((command, index) => {
      document.querySelector(`#CB${index}`).textContent = command;
    });
  });

  {

    // 1pの魔法使いを選択する際、実配列を仮配列に代入
    const wizardSelectElement = document.querySelector('#wizardSelect-1p');
    wizardSelectElement.addEventListener('change', () => {
      const wizardSelect = wizardSelectElement.value;
      switch (wizardSelect) {
        case 'ミスラ ★':
          CommandTop1p = misuraCommandTop;
          CommandButtom1p = misuraCommandButtom;
          LockedView1p = misuraLockedView;
          break;
        case 'オズ ★':
          CommandTop1p = ozCommandTop;
          CommandButtom1p = ozCommandButtom;
          LockedView1p = ozLockedView;
          break;
        case 'フィガロ ●':
          CommandTop1p = figaroCommandTop;
          CommandButtom1p = figaroCommandButtom;
          LockedView1p = figaroLockedView;
          break;
        case 'ファウスト ●':
          CommandTop1p = faustCommandTop;
          CommandButtom1p = faustCommandButtom;
          LockedView1p = faustLockedView;
          break;
        case 'シノとヒース ●':
          CommandTop1p = shinoHeathCommandTop;
          CommandButtom1p = shinoHeathCommandButtom;
          LockedView1p = shinoHeathLockedView;
          break;
        case 'アーサー ★':
          CommandTop1p = arthurCommandTop;
          CommandButtom1p = arthurCommandButtom;
          LockedView1p = arthurLockedView;
          break;
        case 'ネロ ★':
          CommandTop1p = neroCommandTop;
          CommandButtom1p = neroCommandButtom;
          LockedView1p = neroLockedView;
          break;
        case 'ブラッドリー ★':
          CommandTop1p = bradleyCommandTop;
          CommandButtom1p = bradleyCommandButtom;
          LockedView1p = bradleyLockedView;
          break;
        case 'レノックス ●':
          CommandTop1p = lennoxCommandTop;
          CommandButtom1p = lennoxCommandButtom;
          LockedView1p = lennoxLockedView;
          break;
        case 'フィガロ ★（調整版）':
          CommandTop1p = figaroAdCommandTop;
          CommandButtom1p = figaroAdCommandButtom;
          LockedView1p = figaroAdLockedView;
          break;
        case 'リケとミチル ●':
          CommandTop1p = riquetMitileCommandTop;
          CommandButtom1p = riquetMitileCommandButtom;
          LockedView1p = riquetMitileLockedView;
          break;
        case 'ムル ●':
          CommandTop1p = murrCommandTop;
          CommandButtom1p = murrCommandButtom;
          LockedView1p = murrLockedView;
          break;
        case 'シャイロック ●':
          CommandTop1p = shylockCommandTop;
          CommandButtom1p = shylockCommandButtom;
          LockedView1p = shylockLockedView;
          break;
        case 'カイン ●':
          CommandTop1p = cainCommandTop;
          CommandButtom1p = cainCommandButtom;
          LockedView1p = cainLockedView;
          break;
        case 'オーエン ★':
          CommandTop1p = owenCommandTop;
          CommandButtom1p = owenCommandButtom;
          LockedView1p = owenLockedView;
          break;
        case 'スノウとホワイト ★':
          CommandTop1p = snowWhiteCommandTop;
          CommandButtom1p = snowWhiteCommandButtom;
          LockedView1p = snowWhiteLockedView;
          break;
      }

      // まほエンのデフォルト表示は配列の0番目とする
      document.querySelector('#commandTop-1p').textContent = CommandTop1p[0];
      document.querySelector('#commandButtom-1p').textContent = CommandButtom1p[0];

      // まほエンの色設定（複数あるためAllで取得）
      document.querySelectorAll('.mahoen-1p-1').forEach((element) => {
        element.style.background = LockedView1p[5];
      });
      document.querySelectorAll('.mahoen-1p-9').forEach((element) => {
        element.style.background = LockedView1p[5];
      });

      // 動かない表示の設定
      document.querySelector('#clmid-1p-img').src = LockedView1p[0];
      document.querySelector('#clmid-1p-3').textContent = LockedView1p[1];
      document.querySelector('#clmid-1p-5').textContent = LockedView1p[2];
      document.querySelector('#clmid-1p-7').textContent = LockedView1p[3];

    });

    // 1pのケシゴムを選択する際、実配列を仮配列に代入
    document.querySelector('#assistSelect-1p').addEventListener('change', () => {
      const assistSelect = document.querySelector('#assistSelect-1p').value;
      switch (assistSelect) {
        case 'ルチル':
          EraserCommand1p = rutileEraserCommand;
          break;
        case 'クロエとラスティカ':
          EraserCommand1p = chloeRusticaEraserCommand;
          break;
      }
      document.querySelector('#assist-1p-Command').textContent = EraserCommand1p[0];
      document.querySelector('#assist-1p-Icon').src = EraserCommand1p[6];
    });

    // 1pの装備を選択する際、実配列を仮配列に代入
    document.querySelector('#equipSelect-1p').addEventListener('change', () => {
      const equipSelect = document.querySelector('#equipSelect-1p').value;
      switch (equipSelect) {
        case 'おおがま':
          EquipCommand1p = sickleEquipCommand;
          document.querySelector('#equip-1p').disabled = false;
          break;
        case 'きしだんの剣':
          EquipCommand1p = swordEquipCommand;
          document.querySelector('#equip-1p').disabled = false;
          break;
        case 'メイス':
          EquipCommand1p = maceEquipCommand;
          document.querySelector('#equip-1p').disabled = false;
          break;
      }
    });

    // 1pの装備するボタンをクリック=>装備コマンドを表示、モードをtrueに
    document.querySelector('#equip-1p').addEventListener('click', () => {

      if (equipMode1p === false) {
        // 文字と色を変える
        document.querySelector('#clmid-1p-9').textContent = EquipCommand1p[0];
        document.querySelectorAll('.mahoen-1p-9').forEach((element) => {
          element.style.background = EquipCommand1p[6];
        });
        // ボタンの表記を変更
        document.querySelector('#equip-1p').textContent = '装備を外す！';
        equipMode1p = true;
      } else {
        document.querySelector('#clmid-1p-9').textContent = '';
        document.querySelectorAll('.mahoen-1p-9').forEach((element) => {
          element.style.background = LockedView1p[5];
        });
        document.querySelector('#equip-1p').textContent = '装備する！';
        equipMode1p = false;
      }
    });

    // 1pの呪いボタンをクリック=>呪いコマンドを表示、モードをtrueに
    document.querySelector('#curse-1p').addEventListener('click', () => {
      if (curseMode1p === false) {
        document.querySelector('#clmid-1p-1').textContent = curseCommand[0];
        document.querySelectorAll('.mahoen-1p-1').forEach((element) => {
          element.style.background = curseCommand[6];
        });
        document.querySelector('#curse-1p').textContent = '呪いを浄化';
        curseMode1p = true;
      } else {
        document.querySelector('#clmid-1p-1').textContent = '';
        document.querySelectorAll('.mahoen-1p-1').forEach((element) => {
          element.style.background = LockedView1p[5];
        });
        document.querySelector('#curse-1p').textContent = '呪われた！';
        curseMode1p = false;
      }
    });

    // 1pのボタンをクリック=>コマンド配列をランダムで表内に表示
    const attack1Player = document.querySelector('#attack-1p')
    attack1Player.addEventListener('click', () => {

      const interval = setInterval(() => {
        let n = Math.floor(Math.random() * 6)
        document.querySelector('#commandTop-1p').textContent = CommandTop1p[n]
        document.querySelector('#commandButtom-1p').textContent = CommandButtom1p[n];
        // 装備モードがtrueの際は装備コマンドを表示
        if (equipMode1p === true) {
          document.querySelector('#clmid-1p-9').textContent = EquipCommand1p[n];
        }
        // 呪いモードがtrueの際は呪いコマンドを表示
        if (curseMode1p === true) {
          document.querySelector('#clmid-1p-1').textContent = curseCommand[n];
        }
      }, 25);
      setTimeout(() => {
        clearInterval(interval);
      }, 1000);

    });

    // 1pのボタンをクリック=>交流ケシゴムをランダムで表内に表示
    const assist1Player = document.querySelector('#assist-1p')
    assist1Player.addEventListener('click', () => {

      const interval = setInterval(() => {
        let n = Math.floor(Math.random() * 6)
        document.querySelector('#assist-1p-Command').textContent = EraserCommand1p[n]
      }, 25);
      setTimeout(() => {
        clearInterval(interval);
      }, 1000);

      // assist1Player.disabled = true;
    });

    // マイナスボタンをクリックする際、値から差し引く
    const updateHP = (buttonId, decrement) => {
      document.querySelector(buttonId).addEventListener('click', () => {
        // HPの値を10進数の数値として解釈する
        let count = parseInt(document.querySelector('#HP-1p').value, 10);
        const targetValue =
          (decrement > 0) ? count - decrement : count + (-decrement);
        const counterElement = document.querySelector('#HP-1p');

        const interval = setInterval(() => {
          if (decrement > 0) {
            count--;
          } else {
            count++;
            // 値が100以上にならないように制御 
            if (count > 100) {
              count = 100; clearInterval(interval);
            }
          }
          counterElement.value = count;

          if ((decrement > 0 && count <= targetValue) || (decrement < 0 && count >= targetValue) || count <= 0) {
            clearInterval(interval);
          }
          // 値が0以下になった時喋る
          if (count <= 0) {
            document.querySelector('#losevoice-1p').textContent = LockedView1p[6];
          }
        }, 5);
      });
    };
    // 1pのボタンごとに関数を呼び出す 
    updateHP('#minus50-1p', 50);
    updateHP('#minus40-1p', 40);
    updateHP('#minus30-1p', 30);
    updateHP('#minus20-1p', 20);
    updateHP('#minus10-1p', 10);
    updateHP('#plus10-1p', - 10);
    updateHP('#plus20-1p', - 20);
    updateHP('#plus30-1p', - 30);


  }

  // ここから２Pーーーーーーーーーーーーーーーーーーーーーーーーー

  {

    // 2pの魔法使いを選択する際、実配列を仮配列に代入
    const wizardSelectElement = document.querySelector('#wizardSelect-2p');
    wizardSelectElement.addEventListener('change', () => {
      const wizardSelect = wizardSelectElement.value;
      switch (wizardSelect) {
        case 'ミスラ ★':
          CommandTop2p = misuraCommandTop;
          CommandButtom2p = misuraCommandButtom;
          LockedView2p = misuraLockedView;
          break;
        case 'オズ ★':
          CommandTop2p = ozCommandTop;
          CommandButtom2p = ozCommandButtom;
          LockedView2p = ozLockedView;
          break;
        case 'フィガロ ●':
          CommandTop2p = figaroCommandTop;
          CommandButtom2p = figaroCommandButtom;
          LockedView2p = figaroLockedView;
          break;
        case 'ファウスト ●':
          CommandTop2p = faustCommandTop;
          CommandButtom2p = faustCommandButtom;
          LockedView2p = faustLockedView;
          break;
        case 'シノとヒース ●':
          CommandTop2p = shinoHeathCommandTop;
          CommandButtom2p = shinoHeathCommandButtom;
          LockedView2p = shinoHeathLockedView;
          break;
        case 'アーサー ★':
          CommandTop2p = arthurCommandTop;
          CommandButtom2p = arthurCommandButtom;
          LockedView2p = arthurLockedView;
          break;
        case 'ネロ ★':
          CommandTop2p = neroCommandTop;
          CommandButtom2p = neroCommandButtom;
          LockedView2p = neroLockedView;
          break;
        case 'ブラッドリー ★':
          CommandTop2p = bradleyCommandTop;
          CommandButtom2p = bradleyCommandButtom;
          LockedView2p = bradleyLockedView;
          break;
        case 'レノックス ●':
          CommandTop2p = lennoxCommandTop;
          CommandButtom2p = lennoxCommandButtom;
          LockedView2p = lennoxLockedView;
          break;
        case 'フィガロ ★（調整版）':
          CommandTop2p = figaroAdCommandTop;
          CommandButtom2p = figaroAdCommandButtom;
          LockedView2p = figaroAdLockedView;
          break;
        case 'リケとミチル ●':
          CommandTop2p = riquetMitileCommandTop;
          CommandButtom2p = riquetMitileCommandButtom;
          LockedView2p = riquetMitileLockedView;
          break;
        case 'ムル ●':
          CommandTop2p = murrCommandTop;
          CommandButtom2p = murrCommandButtom;
          LockedView2p = murrLockedView;
          break;
        case 'シャイロック ●':
          CommandTop2p = shylockCommandTop;
          CommandButtom2p = shylockCommandButtom;
          LockedView2p = shylockLockedView;
          break;
        case 'カイン ●':
          CommandTop2p = cainCommandTop;
          CommandButtom2p = cainCommandButtom;
          LockedView2p = cainLockedView;
          break;
        case 'オーエン ★':
          CommandTop2p = owenCommandTop;
          CommandButtom2p = owenCommandButtom;
          LockedView2p = owenLockedView;
          break;
        case 'スノウとホワイト ★':
          CommandTop2p = snowWhiteCommandTop;
          CommandButtom2p = snowWhiteCommandButtom;
          LockedView2p = snowWhiteLockedView;
          break;
      }

      // まほエンのデフォルト表示は配列の0番目とする
      document.querySelector('#commandTop-2p').textContent = CommandTop2p[0];
      document.querySelector('#commandButtom-2p').textContent = CommandButtom2p[0];

      // まほエンの色設定（複数あるためAllで取得）
      document.querySelectorAll('.mahoen-2p-1').forEach((element) => {
        element.style.background = LockedView2p[5];
      });
      document.querySelectorAll('.mahoen-2p-9').forEach((element) => {
        element.style.background = LockedView2p[5];
      });

      // 動かない表示の設定
      document.querySelector('#clmid-2p-img').src = LockedView2p[0];
      document.querySelector('#clmid-2p-3').textContent = LockedView2p[1];
      document.querySelector('#clmid-2p-5').textContent = LockedView2p[2];
      document.querySelector('#clmid-2p-7').textContent = LockedView2p[3];

    });

    // 2pのケシゴムを選択する際、実配列を仮配列に代入
    document.querySelector('#assistSelect-2p').addEventListener('change', () => {
      const assistSelect = document.querySelector('#assistSelect-2p').value;
      switch (assistSelect) {
        case 'ルチル':
          EraserCommand2p = rutileEraserCommand;
          break;
        case 'クロエとラスティカ':
          EraserCommand2p = chloeRusticaEraserCommand;
          break;
      }
      document.querySelector('#assist-2p-Command').textContent = EraserCommand2p[0];
      document.querySelector('#assist-2p-Icon').src = EraserCommand2p[6];
    });

    // 2pの装備を選択する際、実配列を仮配列に代入
    document.querySelector('#equipSelect-2p').addEventListener('change', () => {
      const equipSelect = document.querySelector('#equipSelect-2p').value;
      switch (equipSelect) {
        case 'おおがま':
          EquipCommand2p = sickleEquipCommand;
          document.querySelector('#equip-2p').disabled = false;
          break;
        case 'きしだんの剣':
          EquipCommand2p = swordEquipCommand;
          document.querySelector('#equip-2p').disabled = false;
          break;
        case 'メイス':
          EquipCommand2p = maceEquipCommand;
          document.querySelector('#equip-2p').disabled = false;
          break;
      }
    });

    // 2pの装備するボタンをクリック=>装備コマンドを表示、モードをtrueに
    document.querySelector('#equip-2p').addEventListener('click', () => {

      if (equipMode2p === false) {
        // 文字と色を変える
        document.querySelector('#clmid-2p-9').textContent = EquipCommand2p[0];
        document.querySelectorAll('.mahoen-2p-9').forEach((element) => {
          element.style.background = EquipCommand2p[6];
        });
        // ボタンの表記を変更
        document.querySelector('#equip-2p').textContent = '装備を外す！';
        equipMode2p = true;
      } else {
        document.querySelector('#clmid-2p-9').textContent = '';
        document.querySelectorAll('.mahoen-2p-9').forEach((element) => {
          element.style.background = LockedView2p[5];
        });
        document.querySelector('#equip-2p').textContent = '装備する！';
        equipMode2p = false;
      }
    });

    // 2pの呪いボタンをクリック=>呪いコマンドを表示、モードをtrueに
    document.querySelector('#curse-2p').addEventListener('click', () => {
      if (curseMode2p === false) {
        document.querySelector('#clmid-2p-1').textContent = curseCommand[0];
        document.querySelectorAll('.mahoen-2p-1').forEach((element) => {
          element.style.background = curseCommand[6];
        });
        document.querySelector('#curse-2p').textContent = '呪いを浄化';
        curseMode2p = true;
      } else {
        document.querySelector('#clmid-2p-1').textContent = '';
        document.querySelectorAll('.mahoen-2p-1').forEach((element) => {
          element.style.background = LockedView2p[5];
        });
        document.querySelector('#curse-2p').textContent = '呪われた！';
        curseMode2p = false;
      }
    });

    // 2pのボタンをクリック=>コマンド配列をランダムで表内に表示
    const attack2player = document.querySelector('#attack-2p')
    attack2player.addEventListener('click', () => {

      const interval = setInterval(() => {
        let n = Math.floor(Math.random() * 6)
        document.querySelector('#commandTop-2p').textContent = CommandTop2p[n]
        document.querySelector('#commandButtom-2p').textContent = CommandButtom2p[n];
        // 装備モードがtrueの際は装備コマンドを表示
        if (equipMode2p === true) {
          document.querySelector('#clmid-2p-9').textContent = EquipCommand2p[n];
        }
        // 呪いモードがtrueの際は呪いコマンドを表示
        if (curseMode2p === true) {
          document.querySelector('#clmid-2p-1').textContent = curseCommand[n];
        }
      }, 25);
      setTimeout(() => {
        clearInterval(interval);
      }, 1000);

    });

    // 2pのボタンをクリック=>交流ケシゴムをランダムで表内に表示
    const assist2player = document.querySelector('#assist-2p')
    assist2player.addEventListener('click', () => {

      const interval = setInterval(() => {
        let n = Math.floor(Math.random() * 6)
        document.querySelector('#assist-2p-Command').textContent = EraserCommand2p[n]
      }, 25);
      setTimeout(() => {
        clearInterval(interval);
      }, 1000);

      // assist2player.disabled = true;
    });

    // マイナスボタンをクリックする際、値から差し引く
    const updateHP = (buttonId, decrement) => {
      document.querySelector(buttonId).addEventListener('click', () => {
        // HPの値を10進数の数値として解釈する
        let count = parseInt(document.querySelector('#HP-2p').value, 10);
        const targetValue =
          (decrement > 0) ? count - decrement : count + (-decrement);
        const counterElement = document.querySelector('#HP-2p');

        const interval = setInterval(() => {
          if (decrement > 0) {
            count--;
          } else {
            count++;
            // 値が100以上にならないように制御 
            if (count > 100) {
              count = 100; clearInterval(interval);
            }
          }
          counterElement.value = count;

          if ((decrement > 0 && count <= targetValue) || (decrement < 0 && count >= targetValue) || count <= 0) {
            clearInterval(interval);
          }
          // 値が0以下になった時喋る
          if (count <= 0) {
            document.querySelector('#losevoice-2p').textContent = LockedView2p[6];
          }
        }, 5);
      });
    };
    // 2pのボタンごとに関数を呼び出す 
    updateHP('#minus50-2p', 50);
    updateHP('#minus40-2p', 40);
    updateHP('#minus30-2p', 30);
    updateHP('#minus20-2p', 20);
    updateHP('#minus10-2p', 10);
    updateHP('#plus10-2p', - 10);
    updateHP('#plus20-2p', - 20);
    updateHP('#plus30-2p', - 30);

  }

  // リセットボタン
  document.querySelector('#reset-1p').addEventListener('click', () => {
    const userConfirmed = confirm('リセットしますか？');
    if (userConfirmed) {
      // HPのリセット
      document.querySelector('#HP-1p').value = 100;

      // 装備のリセット
      document.querySelector('#clmid-1p-9').textContent = '';
      document.querySelectorAll('.mahoen-1p-9').forEach((element) => {
        element.style.background = LockedView1p[5];
      });
      document.querySelector('#equip-1p').textContent = '装備する！';
      equipMode1p = false;

      document.querySelector('#equip-1p').disabled = true;
      document.querySelector('#equipSelect-1p').value = '-そうびを選ぶ！-';

      // 呪いのリセット
      document.querySelector('#clmid-1p-1').textContent = '';
      document.querySelectorAll('.mahoen-1p-1').forEach((element) => {
        element.style.background = LockedView1p[5];
      });
      document.querySelector('#curse-1p').textContent = '呪われた！';
      curseMode1p = false;

      // 負けボイスのリセット
      document.querySelector('#losevoice-1p').textContent = ' '

      // HPのリセット
      document.querySelector('#HP-2p').value = 100;

      // 装備のリセット
      document.querySelector('#clmid-2p-9').textContent = '';
      document.querySelectorAll('.mahoen-2p-9').forEach((element) => {
        element.style.background = LockedView2p[5];
      });
      document.querySelector('#equip-2p').textContent = '装備する！';
      equipMode2p = false;

      document.querySelector('#equip-2p').disabled = true;
      document.querySelector('#equipSelect-2p').value = '-そうびを選ぶ！-';


      // 呪いのリセット
      document.querySelector('#clmid-2p-1').textContent = '';
      document.querySelectorAll('.mahoen-2p-1').forEach((element) => {
        element.style.background = LockedView2p[5];
      });
      document.querySelector('#curse-2p').textContent = '呪われた！';
      curseMode2p = false;

      // 負けボイスのリセット
      document.querySelector('#losevoice-2p').textContent = ' '
    }
  });

  // リセットボタン
  document.querySelector('#reset-2p').addEventListener('click', () => {
    const userConfirmed = confirm('リセットしますか？');
    if (userConfirmed) {
      // HPのリセット
      document.querySelector('#HP-2p').value = 100;

      // 装備のリセット
      document.querySelector('#clmid-2p-9').textContent = '';
      document.querySelectorAll('.mahoen-2p-9').forEach((element) => {
        element.style.background = LockedView2p[5];
      });
      document.querySelector('#equip-2p').textContent = '装備する！';
      equipMode2p = false;
      document.querySelector('#equip-2p').disabled = true;
      document.querySelector('#equipSelect-2p').value = '-そうびを選ぶ！-';


      // 呪いのリセット
      document.querySelector('#clmid-2p-1').textContent = '';
      document.querySelectorAll('.mahoen-2p-1').forEach((element) => {
        element.style.background = LockedView2p[5];
      });
      document.querySelector('#curse-2p').textContent = '呪われた！';
      curseMode2p = false;

      // 負けボイスのリセット
      document.querySelector('#losevoice-2p').textContent = ' '

      // HPのリセット
      document.querySelector('#HP-1p').value = 100;

      // 装備のリセット
      document.querySelector('#clmid-1p-9').textContent = '';
      document.querySelectorAll('.mahoen-1p-9').forEach((element) => {
        element.style.background = LockedView1p[5];
      });
      document.querySelector('#equip-1p').textContent = '装備する！';
      equipMode1p = false;
      document.querySelector('#equip-1p').disabled = true;
      document.querySelector('#equipSelect-1p').value = '-そうびを選ぶ！-';


      // 呪いのリセット
      document.querySelector('#clmid-1p-1').textContent = '';
      document.querySelectorAll('.mahoen-1p-1').forEach((element) => {
        element.style.background = LockedView1p[5];
      });
      document.querySelector('#curse-1p').textContent = '呪われた！';
      curseMode1p = false;

      // 負けボイスのリセット
      document.querySelector('#losevoice-1p').textContent = ' '
    }
  });


}