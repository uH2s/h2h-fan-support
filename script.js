/* ================================= */
/* 페이지 요소 */
/* ================================= */

const mainPage = document.getElementById("main-page");

const streamingPage = document.getElementById("streaming-page");
const streamingListPage = document.getElementById("streaming-list-page");

const fanchantPage = document.getElementById("fanchant-page");
const fanchantDetailPage = document.getElementById("fanchant-detail-page");

const streamingLinks =
  document.querySelectorAll(".streaming-link");

const fanchantLinks =
  document.querySelectorAll(".fanchant-link");

const homeLink =
  document.getElementById("home-link");

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


/* ================================= */
/* 모든 페이지 숨기기 */
/* ================================= */

function hideAllPages() {

  mainPage.classList.remove("active");

  streamingPage.classList.remove("active");
  streamingListPage.classList.remove("active");

  fanchantPage.classList.remove("active");
  fanchantDetailPage.classList.remove("active");

  oneclickStreamingPage.classList.remove("active");

}


/* ================================= */
/* HOME 버튼 */
/* ================================= */

homeLink.addEventListener("click", (event) => {

  event.preventDefault();

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* STREAMING 메뉴 */
/* ================================= */

streamingLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    hideAllPages();

    streamingPage.classList.add("active");

    window.scrollTo(0, 0);

  });

});


/* ================================= */
/* STREAMING GUIDE → HOME */
/* ================================= */

streamingHomeButton.addEventListener("click", () => {

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* STREAMING LIST */
/* ================================= */

streamingListButton.addEventListener("click", () => {

  hideAllPages();

  streamingListPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* ONE CLICK STREAMING */
/* ================================= */

oneclickStreamingButton.addEventListener("click", () => {

  hideAllPages();

  oneclickStreamingPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* ONE CLICK STREAMING → STREAMING GUIDE */
/* ================================= */

oneclickStreamingBackButton.addEventListener("click", () => {

  hideAllPages();

  streamingPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* STREAMING LIST → HOME */
/* ================================= */

streamingListBackButton.addEventListener("click", () => {

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* FANCHANT 메뉴 */
/* ================================= */

fanchantLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    hideAllPages();

    fanchantPage.classList.add("active");

    window.scrollTo(0, 0);

  });

});


/* ================================= */
/* FANCHANT 목록 → HOME */
/* ================================= */

fanchantHomeButton.addEventListener("click", () => {

  hideAllPages();

  mainPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* 곡 버튼 → 응원법 이미지 */
/* ================================= */

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


/* ================================= */
/* 응원법 이미지 → FANCHANT 목록 */
/* ================================= */

fanchantBackButton.addEventListener("click", () => {

  hideAllPages();

  fanchantPage.classList.add("active");

  window.scrollTo(0, 0);

});


/* ================================= */
/* 언어 변환 기능 */
/* ================================= */

const languageData = {

  ko: {
    name: "한국어",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",

    guideDescription: "팬 활동에 필요한 가이드",
    streamingDescription: "MV/음원 스트리밍 가이드",
    fanchantDescription: "공식 응원법 모음",

    footer: "Made by H2H 음원총공팀",

    streamingSmall: "MV/음원 스트리밍 가이드",
    streamingTitle: "STREAMING GUIDE",
    streamingList: "스트리밍 리스트",
    oneClick: "원클릭 스트리밍",

    streamingListSmall:
      "H2H 음원총공팀에서 제공하는 권장 스트리밍리스트",

    streamingListTitle: "STREAMING LIST",
    streamingListCaption:
      "MOONRIDE 스트리밍 리스트",

    oneClickSmall: "음원 원클릭 스트리밍",
    oneClickTitle: "ONE CLICK STREAMING",

    melonAndroid1: "멜론 (안드로이드) 1",
    melonAndroid2: "멜론 (안드로이드) 2",
    melonAndroid3: "멜론 (안드로이드) 3",
    melonAndroid4: "멜론 (안드로이드) 4",
    melonIOS: "멜론 (iOS)",
    genieAndroid: "지니뮤직 (안드로이드)",
    genieIOS: "지니뮤직 (iOS)",

    fanchantSmall:
      "H2H 음원총공팀에서 제공하는 공식 응원법",

    officialFanchant: "OFFICIAL FANCHANT",

    fanchantAlt: "공식 응원법"
  },


  en: {
    name: "English",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",

    guideDescription: "Guides for fan activities",
    streamingDescription: "MV / music streaming guide",
    fanchantDescription: "Official fanchant collection",

    footer: "Made by H2H 음원총공팀",

    streamingSmall: "MV / music streaming guide",
    streamingTitle: "STREAMING GUIDE",
    streamingList: "Streaming List",
    oneClick: "One-Click Streaming",

    streamingListSmall:
      "Recommended streaming list provided by H2H 음원총공팀",

    streamingListTitle: "STREAMING LIST",
    streamingListCaption:
      "MOONRIDE Streaming List",

    oneClickSmall: "One-click music streaming",
    oneClickTitle: "ONE CLICK STREAMING",

    melonAndroid1: "Melon (Android) 1",
    melonAndroid2: "Melon (Android) 2",
    melonAndroid3: "Melon (Android) 3",
    melonAndroid4: "Melon (Android) 4",
    melonIOS: "Melon (iOS)",
    genieAndroid: "Genie Music (Android)",
    genieIOS: "Genie Music (iOS)",

    fanchantSmall:
      "Official fanchants provided by H2H 음원총공팀",

    officialFanchant: "OFFICIAL FANCHANT",

    fanchantAlt: "Official Fanchant"
  },


  id: {
    name: "Bahasa Indonesia",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",

    guideDescription: "Panduan untuk aktivitas penggemar",
    streamingDescription: "Panduan streaming MV / musik",
    fanchantDescription: "Kumpulan fanchant resmi",

    footer: "Made by H2H 음원총공팀",

    streamingSmall: "Panduan streaming MV / musik",
    streamingTitle: "STREAMING GUIDE",
    streamingList: "Daftar Streaming",
    oneClick: "Streaming Sekali Klik",

    streamingListSmall:
      "Daftar streaming rekomendasi dari H2H 음원총공팀",

    streamingListTitle: "STREAMING LIST",
    streamingListCaption:
      "Daftar Streaming MOONRIDE",

    oneClickSmall: "Streaming musik sekali klik",
    oneClickTitle: "ONE CLICK STREAMING",

    melonAndroid1: "Melon (Android) 1",
    melonAndroid2: "Melon (Android) 2",
    melonAndroid3: "Melon (Android) 3",
    melonAndroid4: "Melon (Android) 4",
    melonIOS: "Melon (iOS)",
    genieAndroid: "Genie Music (Android)",
    genieIOS: "Genie Music (iOS)",

    fanchantSmall:
      "Fanchant resmi dari H2H 음원총공팀",

    officialFanchant: "OFFICIAL FANCHANT",

    fanchantAlt: "Fanchant Resmi"
  },


  ja: {
    name: "日本語",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",

    guideDescription: "ファン活動に必要なガイド",
    streamingDescription: "MV・音源ストリーミングガイド",
    fanchantDescription: "公式応援法まとめ",

    footer: "Made by H2H 음원총공팀",

    streamingSmall: "MV・音源ストリーミングガイド",
    streamingTitle: "STREAMING GUIDE",
    streamingList: "ストリーミングリスト",
    oneClick: "ワンクリックストリーミング",

    streamingListSmall:
      "H2H 음원총공팀が提供するおすすめストリーミングリスト",

    streamingListTitle: "STREAMING LIST",
    streamingListCaption:
      "MOONRIDE ストリーミングリスト",

    oneClickSmall: "音源ワンクリックストリーミング",
    oneClickTitle: "ONE CLICK STREAMING",

    melonAndroid1: "Melon (Android) 1",
    melonAndroid2: "Melon (Android) 2",
    melonAndroid3: "Melon (Android) 3",
    melonAndroid4: "Melon (Android) 4",
    melonIOS: "Melon (iOS)",
    genieAndroid: "Genie Music (Android)",
    genieIOS: "Genie Music (iOS)",

    fanchantSmall:
      "H2H 음원총공팀が提供する公式応援法",

    officialFanchant: "OFFICIAL FANCHANT",

    fanchantAlt: "公式応援法"
  },


  zh: {
    name: "简体中文",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",

    guideDescription: "粉丝活动指南",
    streamingDescription: "MV / 音源串流指南",
    fanchantDescription: "官方应援法合集",

    footer: "Made by H2H 음원총공팀",

    streamingSmall: "MV / 音源串流指南",
    streamingTitle: "STREAMING GUIDE",
    streamingList: "串流列表",
    oneClick: "一键串流",

    streamingListSmall:
      "H2H 음원총공팀提供的推荐串流列表",

    streamingListTitle: "STREAMING LIST",
    streamingListCaption:
      "MOONRIDE 串流列表",

    oneClickSmall: "音源一键串流",
    oneClickTitle: "ONE CLICK STREAMING",

    melonAndroid1: "Melon（Android）1",
    melonAndroid2: "Melon（Android）2",
    melonAndroid3: "Melon（Android）3",
    melonAndroid4: "Melon（Android）4",
    melonIOS: "Melon（iOS）",
    genieAndroid: "Genie Music（Android）",
    genieIOS: "Genie Music（iOS）",

    fanchantSmall:
      "H2H 음원총공팀提供的官方应援法",

    officialFanchant: "OFFICIAL FANCHANT",

    fanchantAlt: "官方应援法"
  }

};


/* ================================= */
/* 언어 선택기 만들기 */
/* ================================= */

const nav = document.querySelector("nav");

const languageSelector =
  document.createElement("div");

languageSelector.className =
  "language-selector";


/* 지구본 아이콘 */

const languageToggle =
  document.createElement("button");

languageToggle.className =
  "language-toggle";

languageToggle.type = "button";

languageToggle.setAttribute(
  "aria-label",
  "언어 선택"
);

languageToggle.innerHTML = `
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      stroke-width="1.5"
    />

    <path
      d="M3 12H21"
      stroke="currentColor"
      stroke-width="1.5"
    />

    <path
      d="M12 3C14.5 5.4 15.7 8.4 15.7 12C15.7 15.6 14.5 18.6 12 21"
      stroke="currentColor"
      stroke-width="1.5"
    />

    <path
      d="M12 3C9.5 5.4 8.3 8.4 8.3 12C8.3 15.6 9.5 18.6 12 21"
      stroke="currentColor"
      stroke-width="1.5"
    />
  </svg>
`;


/* 언어 메뉴 */

const languageMenu =
  document.createElement("div");

languageMenu.className =
  "language-menu";


Object.keys(languageData).forEach((languageCode) => {

  const option =
    document.createElement("button");

  option.type = "button";

  option.className =
    "language-option";

  option.dataset.language =
    languageCode;

  option.textContent =
    languageData[languageCode].name;

  languageMenu.appendChild(option);

});


languageSelector.appendChild(languageToggle);
languageSelector.appendChild(languageMenu);

nav.appendChild(languageSelector);


/* ================================= */
/* 언어별 텍스트 변경 */
/* ================================= */

function applyLanguage(languageCode) {

  const language =
    languageData[languageCode];

  if (!language) {
    return;
  }


  /* 브라우저 언어 설정 */

  document.documentElement.lang =
    languageCode;


  /* 상단 메뉴 */

  homeLink.textContent =
    language.navHome;

  document.querySelector(
    'nav a[href="#guide"]'
  ).textContent =
    language.navGuide;

  document.querySelector(
    'nav a[href="#streaming"]'
  ).textContent =
    language.navStreaming;

  document.querySelector(
    'nav a[href="#fanchant"]'
  ).textContent =
    language.navFanchant;


  /* 메인 카드 */

  document.querySelector(
    '.menu-card[href="#guide"] p'
  ).textContent =
    language.guideDescription;

  document.querySelector(
    '.menu-card[href="#streaming"] p'
  ).textContent =
    language.streamingDescription;

  document.querySelector(
    '.menu-card[href="#fanchant"] p'
  ).textContent =
    language.fanchantDescription;


  /* 푸터 */

  document.querySelector(
    "footer p"
  ).textContent =
    language.footer;


  /* 스트리밍 가이드 */

  document.querySelector(
    "#streaming-page .small-text"
  ).textContent =
    language.streamingSmall;

  document.querySelector(
    "#streaming-page h2"
  ).textContent =
    language.streamingTitle;

  streamingListButton.textContent =
    language.streamingList;

  oneclickStreamingButton.textContent =
    language.oneClick;


  /* 스트리밍 리스트 */

  document.querySelector(
    "#streaming-list-page .small-text"
  ).textContent =
    language.streamingListSmall;

  document.querySelector(
    "#streaming-list-page h2"
  ).textContent =
    language.streamingListTitle;

  document.querySelector(
    ".streaming-list-caption"
  ).textContent =
    language.streamingListCaption;


  /* 원클릭 스트리밍 */

  document.querySelector(
    "#oneclick-streaming-page .small-text"
  ).textContent =
    language.oneClickSmall;

  document.querySelector(
    "#oneclick-streaming-page h2"
  ).textContent =
    language.oneClickTitle;


  /* 멜론 */

  const melonButtons =
    document.querySelectorAll(
      "#oneclick-streaming-page .oneclick-streaming-list a"
    );


  if (melonButtons.length >= 4) {

    melonButtons[0].textContent =
      language.melonAndroid1;

    melonButtons[1].textContent =
      language.melonAndroid2;

    melonButtons[2].textContent =
      language.melonAndroid3;

    melonButtons[3].textContent =
      language.melonAndroid4;

  }


  /* 멜론 iOS */

  const melonIOS =
    document.querySelector(
      "#oneclick-streaming-page .oneclick-streaming-group:nth-of-type(2) a"
    );

  if (melonIOS) {

    melonIOS.textContent =
      language.melonIOS;

  }


  /* 지니 */

  const genieAndroid =
    document.querySelector(
      "#oneclick-streaming-page .oneclick-streaming-group:nth-of-type(3) a"
    );

  const genieIOS =
    document.querySelector(
      "#oneclick-streaming-page .oneclick-streaming-group:nth-of-type(4) a"
    );


  if (genieAndroid) {

    genieAndroid.textContent =
      language.genieAndroid;

  }

  if (genieIOS) {

    genieIOS.textContent =
      language.genieIOS;

  }


  /* FANCHANT */

  document.querySelector(
    "#fanchant-page .small-text"
  ).textContent =
    language.fanchantSmall;


  document.querySelector(
    "#fanchant-detail-page .small-text"
  ).textContent =
    language.officialFanchant;


  fanchantSongImage.alt =
    language.fanchantAlt;


  /* 언어 메뉴 현재 선택 표시 */

  document.querySelectorAll(
    ".language-option"
  ).forEach((option) => {

    option.classList.toggle(
      "active",
      option.dataset.language === languageCode
    );

  });


  /* 선택 언어 저장 */

  localStorage.setItem(
    "h2h-language",
    languageCode
  );

}


/* ================================= */
/* 언어 메뉴 열기 / 닫기 */
/* ================================= */

languageToggle.addEventListener("click", (event) => {

  event.stopPropagation();

  languageMenu.classList.toggle("active");

});


/* 언어 선택 */

languageMenu.addEventListener("click", (event) => {

  const option =
    event.target.closest(".language-option");

  if (!option) {
    return;
  }

  const languageCode =
    option.dataset.language;

  applyLanguage(languageCode);

  languageMenu.classList.remove("active");

});


/* 메뉴 바깥 클릭 */

document.addEventListener("click", (event) => {

  if (!languageSelector.contains(event.target)) {

    languageMenu.classList.remove("active");

  }

});


/* ================================= */
/* 저장된 언어 불러오기 */
/* ================================= */

const savedLanguage =
  localStorage.getItem("h2h-language") || "ko";

applyLanguage(savedLanguage);