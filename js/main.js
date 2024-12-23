// サムネイル
const sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 2, // サムネイルの枚数
});
// スライダー
const slider = new Swiper(".slider", {
  loop: true, // ループ
  speed: 1500, // 少しゆっくり(デフォルトは300)
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
    // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});