// =================================
// 페이지
// =================================

const mainPage = document.getElementById("main-page");
const streamingPage = document.getElementById("streaming-page");
const streamingListPage = document.getElementById("streaming-list-page");


// =================================
// 버튼
// =================================

const streamingLinks = document.querySelectorAll(".streaming-link");

const homeLink = document.getElementById("home-link");

const streamingListButton =
  document.getElementById("streaming-list-btn");


// =================================
// 메인 → 스트리밍 가이드
// =================================

streamingLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    mainPage.classList.remove("active");

    streamingListPage.classList.remove("active");

    streamingPage.classList.add("active");

    window.scrollTo(0, 0);

  });

});


// =================================
// 스트리밍 가이드 → 스트리밍 리스트
// =================================

streamingListButton.addEventListener("click", () => {

  streamingPage.classList.remove("active");

  streamingListPage.classList.add("active");

  window.scrollTo(0, 0);

});


// =================================
// HOME → 메인 화면
// =================================

homeLink.addEventListener("click", (event) => {

  event.preventDefault();

  streamingPage.classList.remove("active");

  streamingListPage.classList.remove("active");

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});