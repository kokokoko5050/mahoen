'use strict';
{

    // 遊びかたの出し入れ
    document.querySelector('#battleStart').addEventListener('click', () => {
      document.querySelector('.mahoenHowto').classList.toggle('hidden')
    });
    document.querySelector('#HowtoHidden').addEventListener('click', () => {
      document.querySelector('.mahoenHowto').classList.toggle('hidden')
    });
}