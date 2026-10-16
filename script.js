

/* ================================= */
/* 페이지 요소 */
/* ================================= */

const mainPage =
  document.getElementById("main-page");

const guidePage =
  document.getElementById("guide-page");

const votePage =
  document.getElementById("vote-page");

const guideHomeButton =
  document.getElementById("guide-home-btn");

const voteHomeButton =
  document.getElementById("vote-home-btn");

const noticePage =
  document.getElementById("notice-page");

const streamingPage =
  document.getElementById("streaming-page");

const streamingListPage =
  document.getElementById("streaming-list-page");

const oneclickStreamingPage =
  document.getElementById("oneclick-streaming-page");

const fanchantPage =
  document.getElementById("fanchant-page");

const fanchantDetailPage =
  document.getElementById("fanchant-detail-page");
  
const noticeListPage =
  document.getElementById("notice-list-page");

const noticeListContainer =
  document.getElementById("notice-list-container");

const noticeListBackButton =
  document.getElementById("notice-list-back-btn");

const latestNoticeSection =
  document.querySelector(".latest-notice");

  const latestNoticePreview =
  document.getElementById("latest-notice-preview");


/* ================================= */
/* 상단 메뉴 */
/* ================================= */

const homeLink =
  document.getElementById("home-link");

const guideLink =
  document.getElementById("guide-link");

const streamingLinks =
  document.querySelectorAll(".streaming-link");

const fanchantLinks =
  document.querySelectorAll(".fanchant-link");

const voteLink =
  document.getElementById("vote-link");

const noticeLink =
  document.getElementById("notice-link");


/* ================================= */
/* NOTICE */
/* ================================= */

const latestNoticeButton =
  document.getElementById("latest-notice-button");

const latestNoticeDate =
  document.getElementById("latest-notice-date");

const latestNoticeLabel =
  document.getElementById("latest-notice-label");

const latestNoticeTitle =
  document.getElementById("latest-notice-title");

const noticeBackButton =
  document.getElementById("notice-back-btn");

const noticeDetailLabel =
  document.getElementById("notice-detail-label");

const noticeDetailDate =
  document.getElementById("notice-detail-date");

const noticeDetailTitle =
  document.getElementById("notice-detail-title");

const noticeDetailContent =
  document.getElementById("notice-detail-content");



/* ================================= */
/* STREAMING */
/* ================================= */

const streamingListButton =
  document.getElementById("streaming-list-btn");

const oneclickStreamingButton =
  document.getElementById("streaming-oneclick-btn");

const streamingHomeButton =
  document.getElementById("streaming-home-btn");

const streamingListBackButton =
  document.getElementById("streaming-list-back-btn");

const oneclickStreamingBackButton =
  document.getElementById("oneclick-streaming-back-btn");


/* STREAMING GUIDE → HOME */
if (streamingHomeButton) {
  streamingHomeButton.addEventListener("click", () => {
    showPage(mainPage);
  });
}


/* STREAMING LIST 열기 */
if (streamingListButton) {
  streamingListButton.addEventListener("click", () => {
    showPage(streamingListPage);
  });
}


/* STREAMING LIST → STREAMING GUIDE */
if (streamingListBackButton) {
  streamingListBackButton.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(streamingPage);
  });
}


/* ONE CLICK STREAMING 열기 */
if (oneclickStreamingButton) {
  oneclickStreamingButton.addEventListener("click", () => {
    showPage(oneclickStreamingPage);
  });
}


/* ONE CLICK STREAMING → STREAMING GUIDE */
if (oneclickStreamingBackButton) {
  oneclickStreamingBackButton.addEventListener("click", () => {
    showPage(streamingPage);
  });
}


/* ================================= */
/* FANCHANT */
/* ================================= */

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



/* ================================= */
/* 모든 페이지 숨기기 */
/* ================================= */

function hideAllPages() {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
}

/* ================================= */
/* 페이지 이동 */
/* ================================= */

function showPage(page) {
  if (!page) {
    console.error(
      "페이지 이동 실패: 대상 페이지를 찾을 수 없습니다."
    );
    console.trace("showPage 호출 위치");
    return;
  }

  hideAllPages();

  page.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}



/* ================================= */
/* HOME */
/* ================================= */

function goHome() {

  showPage(mainPage);

}

homeLink.addEventListener("click", (event) => {

  event.preventDefault();

  goHome();

});

guideLink.addEventListener("click", (event) => {

  event.preventDefault();

  showPage(guidePage);

});



/* ================================= */
/* 메인 메뉴 카드 */
/* ================================= */

const guideCard =
  document.getElementById("guide-card");

const streamingCard =
  document.getElementById("streaming-card");

const fanchantCard =
  document.getElementById("fanchant-card");

const voteCard =
  document.getElementById("vote-card");


guideCard.addEventListener("click", (event) => {
  event.preventDefault();
  showPage(guidePage);
});

streamingCard.addEventListener("click", (event) => {
  event.preventDefault();
  showPage(streamingPage);
});

fanchantCard.addEventListener("click", (event) => {
  event.preventDefault();
  showPage(fanchantPage);
});

voteCard.addEventListener("click", (event) => {
  event.preventDefault();
  showPage(votePage);
});


/* ================================= */
/* GUIDE · VOTE → HOME */
/* ================================= */

guideHomeButton.addEventListener("click", () => {
  showPage(mainPage);
});

voteHomeButton.addEventListener("click", () => {
  showPage(mainPage);
});

/* ================================= */
/* STREAMING 메뉴 */
/* ================================= */

streamingLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(streamingPage);
  });
});

/* ================================= */
/* STREAMING GUIDE → HOME */
/* ================================= */

if (streamingHomeButton) {
  streamingHomeButton.addEventListener("click", () => {
    showPage(mainPage);
  });
}

/* ================================= */
/* STREAMING LIST */
/* ================================= */

if (streamingListButton) {
  streamingListButton.addEventListener("click", () => {
    showPage(streamingListPage);
  });
}


/* ================================= */
/* ONE CLICK STREAMING */
/* ================================= */

if (oneclickStreamingButton) {
  oneclickStreamingButton.addEventListener("click", () => {
    showPage(oneclickStreamingPage);
  });
}


/* ================================= */
/* ONE CLICK STREAMING → STREAMING GUIDE */
/* ================================= */

if (oneclickStreamingBackButton) {
  oneclickStreamingBackButton.addEventListener("click", () => {
    showPage(streamingPage);
  });
}


/* ================================= */
/* FANCHANT 메뉴 */
/* ================================= */

fanchantLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(fanchantPage);
  });
});


/* ================================= */
/* FANCHANT 목록 → HOME */
/* ================================= */

if (fanchantHomeButton) {
  fanchantHomeButton.addEventListener("click", () => {
    showPage(mainPage);
  });
}

/* ================================= */
/* 곡 버튼 → 응원법 이미지 */
/* ================================= */

fanchantSongButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const songName =
      button.dataset.song;

    const songTitle =
      button.dataset.title;

    fanchantSongTitle.textContent =
      songTitle;

    fanchantSongImage.src =
      `images/${songName}-fanchant.jpg`;

    fanchantSongImage.alt =
      `${songTitle} 공식 응원법`;

    showPage(fanchantDetailPage);

  });

});


/* ================================= */
/* 응원법 이미지 → FANCHANT 목록 */
/* ================================= */

fanchantBackButton.addEventListener("click", () => {

  showPage(fanchantPage);

});


/* ================================= */
/* NOTICE 데이터 */
/* ================================= */

/*
[  새 공지를 추가할 때는
  가장 위에 새로운 공지를 넣으면 됩니다.

  예:

  {
    date: "2026.10.01",
    title: {
      ko: "새로운 공지 제목",
      en: "New Notice",
      id: "Judul Pengumuman Baru"
    },
    content: {
      ko: "공지 내용을 입력하세요.",
      en: "Enter the notice here.",
      id: "Masukkan isi pengumuman."
  },

*/

const notices = [

  {
    date: "2026.09.29",

    title: {
      ko: "[공지사항 제목]",
      en: "[notice title]",
      id: "[judul pengumuman]"
    },

    content: {
      ko:
        "[공지사항 내용 1줄 미리보기]",

      en:
        "Please enter the notice here.",

      id:
        "Silakan masukkan isi pengumuman di sini."
      }  }

];


/* ================================= */
/* 현재 보고 있는 공지 */
/* ================================= */

let currentNotice =
  notices[0];



/* ================================= */
/* 최신 공지 확인 상태 */
/* ================================= */

function getNoticeKey(notice) {
  if (!notice) {
    return "";
  }

  return `${notice.date}|${notice.title.ko || notice.title.en || ""}`;
}

/* ================================= */
/* 공지별 읽음 상태 */
/* ================================= */

function getReadNotices() {
  try {
    return JSON.parse(
      localStorage.getItem("h2h-read-notices") || "[]"
    );
  } catch (error) {
    return [];
  }
}

function isNoticeRead(notice) {
  return getReadNotices().includes(
    getNoticeKey(notice)
  );
}

function markNoticeAsRead(notice) {
  if (!notice) {
    return;
  }

  const readNotices = getReadNotices();
  const noticeKey = getNoticeKey(notice);

  if (!readNotices.includes(noticeKey)) {
    readNotices.push(noticeKey);

    localStorage.setItem(
      "h2h-read-notices",
      JSON.stringify(readNotices)
    );
  }

  updateNoticeUnreadDots();
}

/* 공지 관련 버튼의 빨간 점 갱신 */
function updateNoticeUnreadDots() {
  const hasUnreadNotice = notices.some(
    (notice) => !isNoticeRead(notice)
  );

  /* 메인 화면 최신 공지 버튼 */
  if (latestNoticeButton) {
    latestNoticeButton.classList.toggle(
      "notice-unread",
      currentNotice
        ? !isNoticeRead(currentNotice)
        : hasUnreadNotice
    );
  }

  /* 공지 목록의 개별 공지 버튼 */
  document
    .querySelectorAll(".notice-list-item")
    .forEach((button) => {
      const noticeKey = button.dataset.noticeKey;

      button.classList.toggle(
        "notice-unread",
        !!noticeKey &&
          !getReadNotices().includes(noticeKey)
      );
    });
}


/* ================================= */
/* 최신 공지 표시 */
/* ================================= */


function updateLatestNotice() {
  if (!currentNotice) {
    return;
  }

  
if (latestNoticeTitle) {
  const noticeTitleText =
    currentNotice.title[currentLanguage] ||
    currentNotice.title.ko ||
    "";

  latestNoticeTitle.innerHTML =
    `<span class="notice-megaphone">✉</span>` +
    `<span class="notice-title-text"></span>`;

  latestNoticeTitle.querySelector(
    ".notice-title-text"
  ).textContent = noticeTitleText;
}

  if (latestNoticePreview) {
    const content =
      currentNotice.content[currentLanguage] ||
      currentNotice.content.ko ||
      "";

    latestNoticePreview.textContent =
      content.replace(/\s+/g, " ").trim();
  }

  const seenNoticeKey =
    localStorage.getItem("h2h-seen-notice");

  const currentNoticeKey =
    getNoticeKey(currentNotice);

  if (latestNoticeSection) {
    latestNoticeSection.style.display =
      seenNoticeKey === currentNoticeKey
        ? "none"
        : "";
  }
}


/* ================================= */
/* NOTICE 목록 */
/* ================================= */

let currentNoticePage = 1;

const noticesPerPage = 5;


/* ================================= */
/* NOTICE 목록 렌더링 */
/* ================================= */

function renderNoticeList(page = 1) {

  if (!noticeListContainer) {
    return;
  }

  const totalPages = Math.ceil(
    notices.length / noticesPerPage
  );

  currentNoticePage = Math.max(
    1,
    Math.min(page, Math.max(totalPages, 1))
  );

  noticeListContainer.innerHTML = "";

  if (notices.length === 0) {

    const emptyMessage =
      document.createElement("div");

    emptyMessage.className = "notice-list-empty";
    emptyMessage.textContent =
      currentLanguage === "en"
        ? "There are no notices yet."
        : currentLanguage === "id"
        ? "Belum ada pengumuman."
        : currentLanguage === "ja"
        ? "お知らせはまだありません。"
        : currentLanguage === "zh"
        ? "暂无公告。"
        : "등록된 공지사항이 없습니다.";

    noticeListContainer.appendChild(emptyMessage);

    return;
  }

  const startIndex =
    (currentNoticePage - 1) * noticesPerPage;

  const pageNotices = notices.slice(
    startIndex,
    startIndex + noticesPerPage
  );

  pageNotices.forEach((notice) => {

    const item =
      document.createElement("button");

    item.type = "button";
    item.className = "notice-list-item";
    item.dataset.noticeKey = getNoticeKey(notice);

    const top =
      document.createElement("div");

    top.className = "notice-list-item-top";

    const date =
      document.createElement("span");

    date.className = "notice-list-item-date";
    date.textContent = notice.date;

    const arrow =
      document.createElement("span");

    arrow.className = "notice-list-item-arrow";
    arrow.textContent = "›";

    top.append(date, arrow);

    const title =
      document.createElement("h3");

    title.className = "notice-list-item-title";
    title.textContent =
      notice.title[currentLanguage] ||
      notice.title.ko ||
      "";

    const preview =
      document.createElement("div");

    preview.className = "notice-list-item-preview";

    const content =
      notice.content[currentLanguage] ||
      notice.content.ko ||
      "";

    preview.textContent =
      content.replace(/\s+/g, " ").trim();

    item.append(top, title, preview);

    item.addEventListener("click", () => {
      openNotice(notice);
    });

    noticeListContainer.appendChild(item);
    updateNoticeUnreadDots();
  });

  /* 페이지네이션 */

  if (totalPages > 1) {

    const pagination =
      document.createElement("div");

    pagination.className = "notice-pagination";

    for (let i = 1; i <= totalPages; i++) {

      const pageButton =
        document.createElement("button");

      pageButton.type = "button";
      pageButton.className = "notice-page-btn";

      pageButton.textContent = i;

      if (i === currentNoticePage) {
        pageButton.classList.add("active");
        pageButton.setAttribute(
          "aria-current",
          "page"
        );
      }

      pageButton.addEventListener("click", () => {

        renderNoticeList(i);

      });

      pagination.appendChild(pageButton);

    }

    noticeListContainer.appendChild(pagination);

  }

}


/* ================================= */
/* NOTICE 목록 열기 */
/* ================================= */

function openNoticeList() {

  renderNoticeList(currentNoticePage);

  showPage(noticeListPage);

}


/* ================================= */
/* NOTICE 상세 표시 */
/* ================================= */

function openNotice(notice) {

  if (!notice) {
    return;
  }

  currentNotice = notice;
  markNoticeAsRead(notice);
  noticeDetailDate.textContent =
    notice.date;

  noticeDetailTitle.textContent =
    notice.title[currentLanguage] ||
    notice.title.ko ||
    "";

  noticeDetailContent.textContent =
    notice.content[currentLanguage] ||
    notice.content.ko ||
    "";

  showPage(noticePage);

}


/* ================================= */
/* NOTICE 메뉴 클릭 */
/* ================================= */

noticeLink.addEventListener("click", () => {

  currentNoticePage = 1;

  openNoticeList();

});


/* ================================= */
/* 메인 최신 공지 클릭 */
/* ================================= */

latestNoticeButton.addEventListener("click", () => {

  currentNoticePage = 1;

  openNoticeList();

});


/* ================================= */
/* NOTICE 목록 → HOME */
/* ================================= */

noticeListBackButton.addEventListener("click", () => {

  showPage(mainPage);

});


/* ================================= */
/* NOTICE 상세 → 목록 */
/* ================================= */

noticeBackButton.addEventListener("click", () => {

  openNoticeList();

});


/* ================================= */
/* 언어 데이터 */
/* ================================= */

const languageData = {

  ko: {

    name: "한국어",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",
    navNotice: "NOTICE",

    guideDescription:
      "각종 가이드를 확인해 보세요",

    streamingDescription:
      "MV/음원 스트리밍 가이드",

    fanchantDescription:
      "하츠투하츠 공식 응원법 모음",

    voteDescription:
      "하츠투하츠 각종 투표 안내",

    footer:
      "SNS: https://linktr.ee/h2h_strm",

    noticeLabel:
      "NOTICE",

    streamingSmall:
      "MV/음원 스트리밍 가이드",

    streamingList:
      "스트리밍 리스트",

    oneClick:
      "원클릭 스트리밍",

    streamingListSmall:
      "스트리밍리스트",

    streamingListTitle:
      "STREAMING LIST",

    streamingListCaption:
      "아이코닉 하트 스트리밍 리스트",

    oneClickSmall:
      "음원 원클릭 스트리밍",

    oneClickTitle:
      "ONE CLICK STREAMING",

    melonAndroid1:
      "멜론 (안드로이드) 1",

    melonAndroid2:
      "멜론 (안드로이드) 2",

    melonAndroid3:
      "멜론 (안드로이드) 3",

    melonAndroid4:
      "멜론 (안드로이드) 4",

    melonIOS:
      "멜론 (iOS)",

    genieAndroid:
      "지니뮤직 (안드로이드)",

    genieIOS:
      "지니뮤직 (iOS)",

    flo:
      "FLO MUSIC",

    fanchantSmall:
      "하츠투하츠 공식 응원법 모음",

    officialFanchant:
      "OFFICIAL FANCHANT"

  },


  en: {

    name: "English",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",
    navNotice: "NOTICE",

    guideDescription:
      "Guides for fan activities",
      
    voteDescription:
      "Hearts2Hearts voting guide",

    streamingDescription:
      "MV / music streaming guide",

    fanchantDescription:
      "Official fanchant collection",

    footer:
      "Made by H2H 음원총공팀",

    noticeLabel:
      "NOTICE",

    streamingSmall:
      "MV / music streaming guide",

    streamingList:
      "Streaming List",

    oneClick:
      "One-Click Streaming",

    streamingListSmall:
      "Recommended streaming list provided by H2H 음원총공팀",

    streamingListTitle:
      "STREAMING LIST",

    streamingListCaption:
      "Iconic Heart Streaming List",

    oneClickSmall:
      "One-click music streaming",

    oneClickTitle:
      "ONE CLICK STREAMING",

    melonAndroid1:
      "Melon (Android) 1",

    melonAndroid2:
      "Melon (Android) 2",

    melonAndroid3:
      "Melon (Android) 3",

    melonAndroid4:
      "Melon (Android) 4",

    melonIOS:
      "Melon (iOS)",

    genieAndroid:
      "Genie Music (Android)",

    genieIOS:
      "Genie Music (iOS)",

    flo:
      "FLO MUSIC",

    fanchantSmall:
      "Official fanchants provided by H2H 음원총공팀",

    officialFanchant:
      "OFFICIAL FANCHANT"

  },


  id: {

    name: "Bahasa Indonesia",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",
    navNotice: "NOTICE",

    guideDescription:
      "Panduan untuk aktivitas penggemar",

    voteDescription:
      "Panduan voting Hearts2Hearts",

    streamingDescription:
      "Panduan streaming MV / musik",

    fanchantDescription:
      "Kumpulan fanchant resmi",

    footer:
      "Made by H2H 음원총공팀",

    noticeLabel:
      "NOTICE",

    streamingSmall:
      "Panduan streaming MV / musik",

    streamingList:
      "Daftar Streaming",

    oneClick:
      "Streaming Sekali Klik",

    streamingListSmall:
      "Daftar streaming rekomendasi dari H2H 음원총공팀",

    streamingListTitle:
      "STREAMING LIST",

    streamingListCaption:
      "Daftar Streaming Iconic Heart",

    oneClickSmall:
      "Streaming musik sekali klik",

    oneClickTitle:
      "ONE CLICK STREAMING",

    melonAndroid1:
      "Melon (Android) 1",

    melonAndroid2:
      "Melon (Android) 2",

    melonAndroid3:
      "Melon (Android) 3",

    melonAndroid4:
      "Melon (Android) 4",

    melonIOS:
      "Melon (iOS)",

    genieAndroid:
      "Genie Music (Android)",

    genieIOS:
      "Genie Music (iOS)",

    flo:
      "FLO MUSIC",

    fanchantSmall:
      "Fanchant resmi dari H2H 음원총공팀",

    officialFanchant:
      "OFFICIAL FANCHANT"

  }
};


/* ================================= */
/* 현재 언어 */
/* ================================= */

let currentLanguage =
  localStorage.getItem("h2h-language") || "ko";


if (!languageData[currentLanguage]) {

  currentLanguage = "ko";

}


/* ================================= */
/* 언어 적용 */
/* ================================= */

function applyLanguage(languageCode) {

  const language =
    languageData[languageCode];

  if (!language) {
    return;
  }


  currentLanguage =
    languageCode;


  document.documentElement.lang =
    languageCode;


  /* 상단 메뉴 */

  homeLink.textContent =
    language.navHome;

  guideLink.textContent =
    language.navGuide;

  document.querySelectorAll(
    ".streaming-link"
  ).forEach((element) => {

    if (element.tagName === "A") {

      element.textContent =
        language.navStreaming;

    }

  });


  document.querySelectorAll(
    ".fanchant-link"
  ).forEach((element) => {

    if (element.tagName === "A") {

      element.textContent =
        language.navFanchant;

    }

  });

document.querySelector(
  "#vote-card p"
).textContent =
  language.voteDescription;

  noticeLink.querySelector(
    ".notice-nav-text"
  ).textContent =
    language.navNotice;


  /* 메인 카드 */

  document.querySelector(
    "#guide-card p"
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

/* GUIDE · VOTE 페이지 설명 */

const guidePageDescription =
  document.getElementById("guide-page-description");

if (guidePageDescription) {
  guidePageDescription.textContent =
    language.guideDescription;
}

const votePageDescription =
  document.getElementById("vote-page-description");

if (votePageDescription) {
  votePageDescription.textContent =
    language.voteDescription;
}

  /* 푸터 */

  document.querySelector(
    "footer p"
  ).textContent =
    language.footer;


  /* NOTICE */

  latestNoticeLabel.textContent =
    language.noticeLabel;

  noticeDetailLabel.textContent =
    language.noticeLabel;

  /* STREAMING */

  const streamingSmallText =
    document.querySelector("#streaming-page .small-text");

  if (streamingSmallText) {
    streamingSmallText.textContent = language.streamingSmall;
  }

  const streamingTitle =
    document.querySelector("#streaming-page h2");

  if (streamingTitle) {
    streamingTitle.textContent = "STREAMING GUIDE";
  }

  if (streamingListButton) {
    streamingListButton.textContent = language.streamingList;
  }

  if (oneclickStreamingButton) {
    oneclickStreamingButton.textContent = language.oneClick;
  }


  /* STREAMING LIST */

  const streamingListSmallText =
    document.querySelector("#streaming-list-page .small-text");

  if (streamingListSmallText) {
    streamingListSmallText.textContent = language.streamingListSmall;
  }

  const streamingListTitle =
    document.querySelector("#streaming-list-page h2");

  if (streamingListTitle) {
    streamingListTitle.textContent = language.streamingListTitle;
  }

  const streamingListCaption =
    document.querySelector(".streaming-list-caption");

  if (streamingListCaption) {
    streamingListCaption.textContent = language.streamingListCaption;
  }


  
  /* ONE CLICK STREAMING */

  const oneclickSmallText =
    document.querySelector("#oneclick-streaming-page .small-text");

  if (oneclickSmallText) {
    oneclickSmallText.textContent = language.oneClickSmall;
  }

  const oneclickTitle =
    document.querySelector("#oneclick-streaming-page h2");

  if (oneclickTitle) {
    oneclickTitle.textContent = language.oneClickTitle;
  }

  /* ONE CLICK BUTTONS */

  const oneclickButtons = document.querySelectorAll(
    "#oneclick-streaming-page .oneclick-streaming-list a"
  );

  if (oneclickButtons.length >= 8) {
    oneclickButtons[0].textContent = language.melonAndroid1;
    oneclickButtons[1].textContent = language.melonAndroid2;
    oneclickButtons[2].textContent = language.melonAndroid3;
    oneclickButtons[3].textContent = language.melonAndroid4;
    oneclickButtons[4].textContent = language.melonIOS;
    oneclickButtons[5].textContent = language.genieAndroid;
    oneclickButtons[6].textContent = language.genieIOS;
    oneclickButtons[7].textContent = language.flo;
  }


  /* 현재 공지 다시 표시 */

  updateLatestNotice();

  noticeDetailDate.textContent =
    currentNotice.date;

  noticeDetailTitle.textContent =
    currentNotice.title[currentLanguage];

  noticeDetailContent.textContent =
    currentNotice.content[currentLanguage];

  updateNoticeUnreadDots();


  /* 언어 메뉴 */

  document.querySelectorAll(
    ".language-option"
  ).forEach((option) => {

    option.classList.toggle(
      "active",
      option.dataset.language === currentLanguage
    );

  });


  /* 언어 저장 */

  localStorage.setItem(
    "h2h-language",
    currentLanguage
  );

}


/* ================================= */
/* 언어 변환 메뉴 */
/* ================================= */

const languageToggle =
  document.getElementById("language-toggle");

const languageMenu =
  document.getElementById("language-menu");

const languageSelector =
  document.querySelector(".language-selector");


languageToggle.addEventListener("click", (event) => {

  event.stopPropagation();

  const isOpen =
    languageMenu.classList.toggle("active");

  languageToggle.setAttribute(
    "aria-expanded",
    isOpen ? "true" : "false"
  );

});


/* ================================= */
/* 언어 선택 */
/* ================================= */

document.querySelectorAll(
  ".language-option"
).forEach((option) => {

  option.addEventListener("click", () => {

    const languageCode =
      option.dataset.language;

    applyLanguage(languageCode);

    languageMenu.classList.remove("active");

    languageToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


/* ================================= */
/* 언어 메뉴 바깥 클릭 */
/* ================================= */

document.addEventListener("click", (event) => {

  if (!languageSelector.contains(event.target)) {

    languageMenu.classList.remove("active");

    languageToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


/* ================================= */
/* 최초 실행 */
/* ================================= */

applyLanguage(currentLanguage);

updateLatestNotice();


/* ================================= */
/* 모바일 햄버거 메뉴 기능 */
/* ================================= */

const mobileMenuToggle =
  document.getElementById("mobile-menu-toggle");

const mobileMenuLinks =
  document.getElementById("mobile-menu-links");


function closeMobileMenu() {
  if (!mobileMenuToggle || !mobileMenuLinks) {
    return;
  }

  mobileMenuLinks.classList.remove("active");

  mobileMenuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileMenuToggle.setAttribute(
    "aria-label",
    "메뉴 열기"
  );
}


function toggleMobileMenu() {
  if (!mobileMenuToggle || !mobileMenuLinks) {
    return;
  }

  const isOpen =
    mobileMenuLinks.classList.toggle("active");

  mobileMenuToggle.setAttribute(
    "aria-expanded",
    isOpen ? "true" : "false"
  );

  mobileMenuToggle.setAttribute(
    "aria-label",
    isOpen ? "메뉴 닫기" : "메뉴 열기"
  );
}


/* 햄버거 버튼 클릭 */
if (mobileMenuToggle && mobileMenuLinks) {
  mobileMenuToggle.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      toggleMobileMenu();
    }
  );

  /* 메뉴 항목 선택 후 닫기 */
  mobileMenuLinks.addEventListener(
    "click",
    (event) => {
      if (event.target.closest("a")) {
        closeMobileMenu();
      }
    }
  );

  /* 메뉴 바깥을 누르면 닫기 */
  document.addEventListener(
    "click",
    (event) => {
      if (
        !mobileMenuLinks.contains(event.target) &&
        !mobileMenuToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    }
  );

  /* 컴퓨터 화면으로 바뀌면 메뉴 닫기 */
  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 700) {
        closeMobileMenu();
      }
    }
  );
}