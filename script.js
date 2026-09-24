const mainPage = document.getElementById("main-page");

const streamingPage = document.getElementById("streaming-page");
const streamingListPage = document.getElementById("streaming-list-page");

const fanchantPage = document.getElementById("fanchant-page");
const fanchantDetailPage = document.getElementById("fanchant-detail-page");

const streamingLinks = document.querySelectorAll(".streaming-link");
const fanchantLinks = document.querySelectorAll(".fanchant-link");

const homeLink = document.getElementById("home-link");

const streamingListButton =
  document.getElementById("streaming-list-btn");

const streamingHomeButton =
  document.getElementById("streaming-home-btn");

const streamingListBackButton =
  document.getElementById("streaming-list-back-btn");

const fanchantHomeButton =
  document.getElementById("fanchant-home-btn");

const fanchantSongButtons =
  document.querySelectorAll(".fanchant-song-btn");

const fanchantBackButton =
  document.getElementById("fanchant-back-btn");

const fanchantSongTitle =
  document.getElementById("fanchant-song-title");

const fanchantSongImage =
  document.getElementById("fanchant-song-image");

const oneclickStreamingPage =
  document.getElementById("oneclick-streaming-page");

const oneclickStreamingButton =
  document.getElementById("streaming-oneclick-btn");

const oneclickStreamingBackButton =
  document.getElementById("oneclick-streaming-back-btn");

// =========================
// 모든 페이지 숨기기
// =========================

function hideAllPages() {

  mainPage.classList.remove("active");

  streamingPage.classList.remove("active");
  streamingListPage.classList.remove("active");

  fanchantPage.classList.remove("active");
  fanchantDetailPage.classList.remove("active");

  oneclickStreamingPage.classList.remove("active");

}


// =========================
// HOME 버튼
// =========================

homeLink.addEventListener("click", (event) => {

  event.preventDefault();

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


// =========================
// STREAMING 메뉴
// =========================

streamingLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    hideAllPages();

    streamingPage.classList.add("active");

    window.scrollTo(0, 0);

  });

});


// =========================
// STREAMING GUIDE → HOME
// =========================

streamingHomeButton.addEventListener("click", () => {

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


// =========================
// STREAMING LIST
// =========================

streamingListButton.addEventListener("click", () => {

  hideAllPages();

  streamingListPage.classList.add("active");

  window.scrollTo(0, 0);

});

// =========================
// ONE CLICK STREAMING
// =========================

oneclickStreamingButton.addEventListener("click", () => {

  hideAllPages();

  oneclickStreamingPage.classList.add("active");

  window.scrollTo(0, 0);

});


// =========================
// ONE CLICK STREAMING → STREAMING GUIDE
// =========================

oneclickStreamingBackButton.addEventListener("click", () => {

  hideAllPages();

  streamingPage.classList.add("active");

  window.scrollTo(0, 0);

});

// =========================
// STREAMING LIST → HOME
// =========================

streamingListBackButton.addEventListener("click", () => {

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


// =========================
// FANCHANT 메뉴
// =========================

fanchantLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    hideAllPages();

    fanchantPage.classList.add("active");

    window.scrollTo(0, 0);

  });

});


// =========================
// FANCHANT 목록 → HOME
// =========================

fanchantHomeButton.addEventListener("click", () => {

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


// =========================
// 곡 버튼 → 응원법 이미지
// =========================

fanchantSongButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const songName = button.dataset.song;
    const songTitle = button.dataset.title;

    fanchantSongTitle.textContent = songTitle;

    fanchantSongImage.src =
      `images/${songName}-fanchant.jpg`;

    fanchantSongImage.alt =
      `${songTitle} 공식 응원법`;

    hideAllPages();

    fanchantDetailPage.classList.add("active");

    window.scrollTo(0, 0);

  });

});


// =========================
// 응원법 이미지 → FANCHANT 목록
// =========================

fanchantBackButton.addEventListener("click", () => {

  hideAllPages();

  fanchantPage.classList.add("active");

  window.scrollTo(0, 0);

});