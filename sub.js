'use strict';

{
  // 魔法使いの実配列を定義
  const misuraLockedView = [
    'misura.png',
    '★',
    'へんしん前',
    'へんしん後',
    'ミスラの特徴ミスラの特徴ミスラの特徴ミスラの特徴ミスラの特徴ミスラの特徴ミスラの特徴ミスラの特徴',
    '#b488f8',
  ],
    misuraCommandTop = [
      "《ｱﾙｼﾑ》 全員に40のダメージ",
      "ねむい",
      "《ｱﾙｼﾑ》 ｸﾗｰｹﾝにへんしん",
      "《ｱﾙｼﾑ》 相手を凍らせたもう一回振る",
      "《ｱﾙｼﾑ》 クラーケンにへんしん！",
      "あはは！"
    ],
    misuraCommandButtom = [
      "まきつき攻撃 全員に40のダメージ",
      "うでがもげた！ 次の１回の攻撃力 -30",
      "まきつき攻撃 全員に70ダメージ",
      "まきつき攻撃 全員に30ダメージ",
      "うでがもげた！ 次の１回の攻撃力 -30",
      "まきつき攻撃 全員に30ダメージ"
    ];

  const ozLockedView = [
    'oz.png',
    '★',
    'へんしん前',
    'へんしん後',
    'オズの特徴オズの特徴オズの特徴オズの特徴オズの特徴オズの特徴オズの特徴オズの特徴オズの特徴オズの特徴',
    '#edc420',
  ],
    ozCommandTop = [
      "《ｳﾞｫｸｽﾉｸ0》 ",
      "《ｳﾞｫｸｽﾉｸ1》 ",
      "《ｳﾞｫｸｽﾉｸ2》 ",
      "《ｳﾞｫｸｽﾉｸ3》 ",
      "《ｳﾞｫｸｽﾉｸ4》 ",
      "《ｳﾞｫｸｽﾉｸ5》 ",
    ],
    ozCommandButtom = [
      "《かみつき0》 ",
      "《かみつき1》 ",
      "《かみつき2》 ",
      "《かみつき3》 ",
      "《かみつき4》 ",
      "《かみつき5》 ",
    ];

  // 交流ケシゴムの実配列を定義
  const rutileEraserCommand = [
    'ルチルのコマンド1',
    'ルチルのコマンド2',
    'ルチルのコマンド3',
    'ルチルのコマンド4',
    'ルチルのコマンド5',
    'ルチルのコマンド6',
    'rutile.png',
  ],
    chloeRusticaEraserCommand = [
      'クロラスのコマンド1',
      'クロラスのコマンド2',
      'クロラスのコマンド3',
      'クロラスのコマンド4',
      'クロラスのコマンド5',
      'クロラスのコマンド6',
      'chloeRustica.png',
    ];

  // 装備の実配列を定義
  const sickleEquipCommand = [
    '鎌のコマンド1',
    '鎌のコマンド2',
    '鎌のコマンド3',
    '鎌のコマンド4',
    '鎌のコマンド5',
    '鎌のコマンド6',
    'rgba(50, 50, 255, 0.505)',
  ],
    swordEquipCommand = [
      '剣のコマンド1',
      '剣のコマンド2',
      '剣のコマンド3',
      '剣のコマンド4',
      '剣のコマンド5',
      '剣のコマンド6',
      'rgba(255, 0, 0, 0.454)',
    ],
    maceEquipCommand = [
      'メイスのコマンド1',
      'メイスのコマンド2',
      'メイスのコマンド3',
      'メイスのコマンド4',
      'メイスのコマンド5',
      'メイスのコマンド6',
      'rgba(13, 255, 0, 0.308)',
    ];

  // 呪いの実配列を定義
  const curseCommand = [
    'のろいコマンド1',
    'のろいコマンド2',
    'のろいコマンド3',
    'のろいコマンド4',
    'のろいコマンド5',
    'のろいコマンド6',
    'pink',
  ];

  // 差し込む仮配列を定義
  let CommandTop = [];
  let CommandButtom = [];
  let LockedView = [];
  let EraserCommand = [];
  let EquipCommand = [];

  // 装備と呪いの切り替えに使用する真偽値を定義
  let equipMode2p = false;
  let curseMode2p = false;

  // 魔法使いを選択する際、実配列を仮配列に代入
  const wizardSelectElement = document.querySelector('#wizardSelect2p');
  wizardSelectElement.addEventListener('change', () => {
    const wizardSelect = wizardSelectElement.value;
    switch (wizardSelect) {
      case 'ミスラ':
        CommandTop = misuraCommandTop;
        CommandButtom = misuraCommandButtom;
        LockedView = misuraLockedView;
        break;
      case 'オズ':
        CommandTop = ozCommandTop;
        CommandButtom = ozCommandButtom;
        LockedView = ozLockedView;
        break;
    }

    // 画像・特徴を選択した魔法使いに切り替え
    document.querySelector('#wizardIcon2p').src = LockedView[0];
    document.querySelector('#C2pBefore').textContent = LockedView[2];
    document.querySelector('#C2pAfter').textContent = LockedView[3];
    document.querySelector('#wizardFeature2p').textContent = LockedView[4];

    // コマンド表を選択した魔法使いに切り替え
    CommandTop.forEach((command, index) => {
       document.querySelector(`#C2pT${index}`).textContent = command; });
    CommandButtom.forEach((command, index) => {
       document.querySelector(`#C2pB${index}`).textContent = command; });

    // まほエンのデフォルト表示は配列の0番目とする
    document.querySelector('#commandTop').textContent = CommandTop[0];
    document.querySelector('#commandButtom').textContent = CommandButtom[0];

    // まほエンの色設定（複数あるためAllで取得）
    document.querySelectorAll('.mahoen2p-1').forEach((element) => { 
      element.style.background = LockedView[5]; });
    document.querySelectorAll('.mahoen2p-9').forEach((element) => { 
      element.style.background = LockedView[5]; });

    // 動かない表示の設定
    document.querySelector('#clmid-2p-img').src = LockedView[0];
    document.querySelector('#clmid-2p-3').textContent = LockedView[1];
    document.querySelector('#clmid-2p-5').textContent = LockedView[2];
    document.querySelector('#clmid-2p-7').textContent = LockedView[3];

  });

  // ケシゴムを選択する際、実配列を仮配列に代入
  document.querySelector('#assistSelect2p').addEventListener('change', () => {
    const assistSelect = document.querySelector('#assistSelect2p').value;
    switch (assistSelect) {
      case 'ルチル':
        EraserCommand = rutileEraserCommand;
        break;
      case 'クロエとラスティカ':
        EraserCommand = chloeRusticaEraserCommand;
        break;
    }
    document.querySelector('#assist2pCommand').textContent = EraserCommand[0];
    document.querySelector('#assist2pIcon').src = EraserCommand[6];
  });

  // 装備を選択する際、実配列を仮配列に代入
  document.querySelector('#equipSelect2p').addEventListener('change', () => {
    const equipSelect = document.querySelector('#equipSelect2p').value;
    switch (equipSelect) {
      case 'おおがま':
        EquipCommand = sickleEquipCommand;
        break;
      case 'きしだんの剣':
        EquipCommand = swordEquipCommand;
        break;
      case 'メイス':
        EquipCommand = maceEquipCommand;
        break;
    }
  });

  // 装備するボタンをクリック=>装備コマンドを表示、モードをtrueに
  document.querySelector('#equip2p').addEventListener('click', () => {

    if (equipMode2p === false) {
      // 文字と色を変える
      document.querySelector('#clmid-2p-9').textContent = EquipCommand[0];
      document.querySelectorAll('.mahoen2p-9').forEach((element) => { 
        element.style.background = EquipCommand[6]; });  
      // ボタンの表記を変更
      document.querySelector('#equip2p').textContent = '装備を外す！';
      equipMode2p = true;
    } else {
      document.querySelector('#clmid-2p-9').textContent = '';
      document.querySelectorAll('.mahoen2p-9').forEach((element) => { 
        element.style.background = LockedView[5]; });  
      document.querySelector('#equip2p').textContent = '装備する！';
      equipMode2p = false;
    }
  });

  // 呪いボタンをクリック=>呪いコマンドを表示、モードをtrueに
  document.querySelector('#curse2p').addEventListener('click', () => {
    if (curseMode2p === false) {
      document.querySelector('#clmid-2p-1').textContent = curseCommand[0];
      document.querySelectorAll('.mahoen2p-1').forEach((element) => { 
        element.style.background = curseCommand[6]; });  
      document.querySelector('#curse2p').textContent = '呪いを浄化';
      curseMode2p = true;
    } else {
      document.querySelector('#clmid-2p-1').textContent = '';
      document.querySelectorAll('.mahoen2p-1').forEach((element) => { 
        element.style.background = LockedView[5]; });  
      document.querySelector('#curse2p').textContent = '呪われた！';
      curseMode2p = false;
    }
  });

  // ボタンをクリック=>コマンド配列をランダムで表内に表示
  const attack2player = document.querySelector('#attack2p')
  attack2player.addEventListener('click', () => {

    const interval = setInterval(() => {
      let n = Math.floor(Math.random() * 6)
      document.querySelector('#commandTop').textContent = CommandTop[n]
      document.querySelector('#commandButtom').textContent = CommandButtom[n];
      // 装備モードがtrueの際は装備コマンドを表示
      if (equipMode2p === true) {
        document.querySelector('#clmid-2p-9').textContent = EquipCommand[n];
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

  // ボタンをクリック=>交流ケシゴムをランダムで表内に表示
  const assist2player = document.querySelector('#assist2p')
  assist2player.addEventListener('click', () => {

    const interval = setInterval(() => {
      let n = Math.floor(Math.random() * 6)
      document.querySelector('#assist2pCommand').textContent = EraserCommand[n]
    }, 25);
    setTimeout(() => {
      clearInterval(interval);
    }, 1000);

    assist2player.disabled = true;
  });

  // マイナスボタンをクリックする際、値から差し引く
  const updateHP = (buttonId, decrement) => { 
    document.querySelector(buttonId).addEventListener('click', () => {
      // HPの値を10進数の数値として解釈する
       let count = parseInt(document.querySelector('#HP2p').value, 10);
       const targetValue = count - decrement;
      const counterElement = document.querySelector('#HP2p');
      const interval = setInterval(() => { 
        count--; counterElement.value = count; 
        if (count <= targetValue) { 
          clearInterval(interval); 
        } 
      }, 5);
     });
     }; 
     // ボタンごとに関数を呼び出す 
     updateHP('#minus50-2p', 50); 
     updateHP('#minus40-2p', 40); 
     updateHP('#minus30-2p', 30); 
     updateHP('#minus20-2p', 20); 
     updateHP('#minus10-2p', 10);

  // リセットボタンでHPを初期値に戻す、交流ケシゴムを復活
  document.querySelector('#reset2p').addEventListener('click', () => {
    const counterElement = document.querySelector('#HP2p');
    counterElement.value = 100;
    document.querySelector('#assist2p').disabled = false;
  });


}