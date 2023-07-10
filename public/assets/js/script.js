$(function() {
  //ドロワーメニューアイコンをクリックするとPCドロワーメニューを表示
  $('.p-mv-menu__list:first-child').on('click', function() {
    $('.p-drawer').addClass('is-open');
    $('body').toggleClass('no-scroll');
  });

  //✕ボタンを押すとPCドロワーメニューを閉じる
  $('.p-drawer__button').on('click', function() {
    $('.p-drawer').removeClass('is-open'); 
  });

  //ヘッダーのメニューアイコンをクリックするとSPドロワーメニューを表示
  $('.p-sp-menu').on('click', function() {
    $('.p-drawer').toggleClass('is-open');
    $('.l-header, .p-sp-menu, .p-mv-menu-icon, .p-mv-menu-icon__bar1, .p-mv-menu-icon__bar2, .p-mv-menu-icon__bar3').toggleClass('is-open');
    $('body').toggleClass('no-scroll');
  });

  //プランから探すボタンを押すとプランドロワーメニューを表示
  $('.c-mv-button:first-child').on('click', function() {
    $('.p-drawer-plan').addClass('is-open'); 
  });

  //背景を押すとプランドロワーメニューを閉じる
  $('.p-drawer-plan__bg').on('click', function() {
    $('.p-drawer-plan').removeClass('is-open'); 
  });

  //エリアから探すボタンを押すとエリアドロワーメニューを表示
  $('.c-mv-button:last-child').on('click', function() {
    $('.p-drawer-area').addClass('is-open'); 
  });

  //背景を押すとエリアドロワーメニューを閉じる
  $('.p-drawer-area__bg').on('click', function() {
    $('.p-drawer-area').removeClass('is-open'); 
  });
});


