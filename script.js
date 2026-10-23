

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

const chartPage =
  document.getElementById("chart-page");

const chartHomeButton =
  document.getElementById("chart-home-btn");

const chartViewAllButton =
  document.getElementById("chart-view-all-btn");

const fanchantPage =
  document.getElementById("fanchant-page");

const fanchantDetailPage =
  document.getElementById("fanchant-detail-page");

  const fanchantDescription =
  document.getElementById("fanchant-description");
  
const noticeListPage =
  document.getElementById("notice-list-page");

const noticeListContainer =
  document.getElementById("notice-list-container");

const noticeListBackButton =
  document.getElementById("notice-list-back-btn");

const latestNoticeSection =
  document.querySelector(".latest-notice");

  console.log(
  "전체보기 버튼:",
  chartViewAllButton
);

console.log(
  "차트 페이지:",
  chartPage
);

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
/* 상단 메뉴 - 투표 페이지 이동 */
/* ================================= */

if (voteLink) {
  voteLink.addEventListener("click", function (event) {
    event.preventDefault();

    const mobileMenu = document.getElementById("mobile-menu-links");
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const votePage = document.getElementById("vote-page");

    // 모바일 메뉴 닫기
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }

    if (menuToggle) {
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    // 다른 페이지 숨기기
    document.querySelectorAll(".page").forEach(function (page) {
      page.classList.remove("active");
    });

    // 투표 페이지 표시
    if (votePage) {
      votePage.classList.add("active");
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  });
}

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
  
const homeOneclickPlatformButtons =
  document.querySelectorAll(
    ".home-oneclick-platform-btn"
  );

const oneclickPlatformDetails =
  document.querySelectorAll(
    ".oneclick-platform-detail"
  );

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


/* ONE CLICK STREAMING → HOME */
if (oneclickStreamingBackButton) {
  oneclickStreamingBackButton.addEventListener("click", () => {
    showPage(mainPage);
  });
}

/* ================================= */
/* CHART */
/* ================================= */

document.addEventListener("click", (event) => {
  const button = event.target.closest("#chart-view-all-btn");

  if (button) {
    console.log("전체보기 클릭 감지");
    console.log("차트 페이지:", chartPage);

    showPage(chartPage);
  }

  const homeButton = event.target.closest("#chart-home-btn");

  if (homeButton) {
    showPage(mainPage);
  }
});

/* ================================= */
/* 차트 순위 데이터 표시 */
/* ================================= */


const chartRankElements = {
  "Lemon Tang": {
    TOP100: document.getElementById("chart-lemon-tang-top100"),
    HOT100: document.getElementById("chart-lemon-tang-hot100"),
    GENIE: document.getElementById("chart-lemon-tang-genie"),
    BUGS: document.getElementById("chart-lemon-tang-bugs"),
    FLO: document.getElementById("chart-lemon-tang-flo"),
    VIBE: document.getElementById("chart-lemon-tang-vibe"),
  },
  "15-LOVE": {
    TOP100: document.getElementById("chart-15-love-top100"),
    HOT100: document.getElementById("chart-15-love-hot100"),
    GENIE: document.getElementById("chart-15-love-genie"),
    BUGS: document.getElementById("chart-15-love-bugs"),
    FLO: document.getElementById("chart-15-love-flo"),
    VIBE: document.getElementById("chart-15-love-vibe"),
  },
  "처음투성이 (Baby Steps)": {
    TOP100: document.getElementById("chart-first-top100"),
    HOT100: document.getElementById("chart-first-hot100"),
    GENIE: document.getElementById("chart-first-genie"),
    BUGS: document.getElementById("chart-first-bugs"),
    FLO: document.getElementById("chart-first-flo"),
    VIBE: document.getElementById("chart-first-vibe"),
  },
  "heart emoji (♡)": {
    TOP100: document.getElementById("chart-heart-emoji-top100"),
    HOT100: document.getElementById("chart-heart-emoji-hot100"),
    GENIE: document.getElementById("chart-heart-emoji-genie"),
    BUGS: document.getElementById("chart-heart-emoji-bugs"),
    FLO: document.getElementById("chart-heart-emoji-flo"),
    VIBE: document.getElementById("chart-heart-emoji-vibe"),
  },
  "Secret Recipe": {
    TOP100: document.getElementById("chart-secret-recipe-top100"),
    HOT100: document.getElementById("chart-secret-recipe-hot100"),
    GENIE: document.getElementById("chart-secret-recipe-genie"),
    BUGS: document.getElementById("chart-secret-recipe-bugs"),
    FLO: document.getElementById("chart-secret-recipe-flo"),
    VIBE: document.getElementById("chart-secret-recipe-vibe"),
  },
};


const homeMelonTop100Rank =
  document.getElementById("home-melon-top100-rank");

const homeMelonHot100Rank =
  document.getElementById("home-melon-hot100-rank");

const homeGenieRank =
  document.getElementById("home-genie-rank");

const homeBugsRank =
  document.getElementById("home-bugs-rank");

const homeFloRank =
  document.getElementById("home-flo-rank");

const homeVibeRank =
  document.getElementById("home-vibe-rank");
  
const homeChartUpdated =
  document.getElementById("home-chart-updated");


function getChartSong(charts, chartName, songTitle) {
  const chart = charts?.find(
    (item) => item.chart === chartName
  );

  if (!chart || chart.success !== true) {
    return { status: "error", rank: null };
  }

  // 추출된 곡이 너무 적으면 수집 데이터가 불완전한 것으로 처리
  if (
    !Number.isInteger(chart.extractedCount) ||
    chart.extractedCount < 50
  ) {
    return { status: "error", rank: null };
  }

  const song = chart.songs?.find(
    (item) => item.title === songTitle
  );

  if (!song) {
    return { status: "error", rank: null };
  }

  if (Number.isInteger(song.rank) && song.rank > 0) {
    return { status: "ranked", rank: song.rank };
  }

  return {
    status: "not-ranked",
    rank: null,
  };
}

function formatRank(current, previous) {
  const language =
    languageData[currentLanguage] || languageData.ko;

  const unit = language.chartRankUnit;
  const errorText = language.chartRankError;
  const newText = language.chartRankNew;

  if (current.status === "error") {
    return errorText;
  }

  if (current.status === "not-ranked") {
    return "-";
  }

  const rankText =
    currentLanguage === "ko"
      ? `${current.rank}${unit}`
      : currentLanguage === "id"
        ? `${current.rank}`
        : `${current.rank}${unit}`;

  if (previous.status !== "ranked") {
    return rankText;
  }

  const difference = previous.rank - current.rank;

  if (difference > 0) {
    return `${rankText} ↑ ${difference}`;
  }

  if (difference < 0) {
    return `${rankText} ↓ ${Math.abs(difference)}`;
  }

  return `${rankText} -`;
}

function renderRank(element, current, previous) {
  if (!element) return;

  element.replaceChildren();

  const rankMain = document.createElement("span");
  rankMain.className = "rank-main";

  const rankChange = document.createElement("span");
  rankChange.className = "rank-change";

  if (current.status !== "ranked") {
    rankMain.textContent = formatRank(current, previous);
    element.appendChild(rankMain);
    return;
  }

  const language =
  languageData[currentLanguage] || languageData.ko;

rankMain.textContent =
  currentLanguage === "id"
    ? `${current.rank}`
    : `${current.rank}${language.chartRankUnit}`;

  if (!previous || previous.status !== "ranked") {
    rankMain.textContent = formatRank(current, previous);
    element.appendChild(rankMain);
    return;
  }

  const difference = previous.rank - current.rank;

  if (difference > 0) {
    rankChange.classList.add("rank-up");
    rankChange.textContent = `↑ ${difference}`;
  } else if (difference < 0) {
    rankChange.classList.add("rank-down");
    rankChange.textContent = `↓ ${Math.abs(difference)}`;
  } else {
    rankChange.classList.add("rank-same");
    rankChange.textContent = "-";
  }

  element.append(rankMain, rankChange);
}

async function loadChartRanks() {
  const updatedElement =
    document.getElementById("chart-data-updated");

  try {
    const response = await fetch(
  "https://h2h-chart-collector.vgong-oo5.workers.dev/chart-data",
  { cache: "no-store" }
);

    if (!response.ok) {
      throw new Error("차트 데이터를 불러오지 못했습니다.");
    }

    const data = await response.json();
    const latest = data.latest;
    const previous = data.previous;

    if (!latest || !Array.isArray(latest.charts)) {
      throw new Error("차트 데이터 형식이 올바르지 않습니다.");
    }

    for (const [songTitle, elements] of Object.entries(chartRankElements)) {
     
for (const chartName of [
  "TOP100",
  "HOT100",
  "GENIE",
  "BUGS",
  "FLO",
  "VIBE",
]) {

        const element = elements[chartName];

        if (!element) continue;

        const current = getChartSong(
          latest.charts,
          chartName,
          songTitle
        );

        const prior = previous
          ? getChartSong(previous.charts, chartName, songTitle)
          : null;

        renderRank(element, current, prior);
      }
    }

    const lemonTop100 = getChartSong(
      latest.charts, "TOP100", "Lemon Tang"
    );

    const lemonHot100 = getChartSong(
      latest.charts, "HOT100", "Lemon Tang"
    );

    
if (homeMelonTop100Rank) {
  renderRank(
    homeMelonTop100Rank,
    lemonTop100,
    previous
      ? getChartSong(previous.charts, "TOP100", "Lemon Tang")
      : null
  );
}


    
if (homeMelonHot100Rank) {
  renderRank(
    homeMelonHot100Rank,
    lemonHot100,
    previous
      ? getChartSong(previous.charts, "HOT100", "Lemon Tang")
      : null
  );
}


        // 지니
const lemonGenie = getChartSong(
  latest.charts,
  "GENIE",
  "Lemon Tang"
);


if (homeGenieRank) {
  renderRank(
    homeGenieRank,
    lemonGenie,
    previous
      ? getChartSong(previous.charts, "GENIE", "Lemon Tang")
      : null
  );
}


// 벅스
const lemonBugs = getChartSong(
  latest.charts,
  "BUGS",
  "Lemon Tang"
);


if (homeBugsRank) {
  renderRank(
    homeBugsRank,
    lemonBugs,
    previous
      ? getChartSong(previous.charts, "BUGS", "Lemon Tang")
      : null
  );
}


// FLO
const lemonFlo = getChartSong(
  latest.charts,
  "FLO",
  "Lemon Tang"
);


if (homeFloRank) {
  renderRank(
    homeFloRank,
    lemonFlo,
    previous
      ? getChartSong(previous.charts, "FLO", "Lemon Tang")
      : null
  );
}


  // VIBE
const lemonVibe = getChartSong(
  latest.charts,
  "VIBE",
  "Lemon Tang"
);


if (homeVibeRank) {
  renderRank(
    homeVibeRank,
    lemonVibe,
    previous
      ? getChartSong(previous.charts, "VIBE", "Lemon Tang")
      : null
  );
}

     const languageCode =
      localStorage.getItem("h2h-language") || "ko";

    const language =
      languageData[languageCode] || languageData.ko;

    const localeMap = {
      ko: "ko-KR",
      en: "en-US",
      id: "id-ID",
    };

    const locale = localeMap[languageCode] || "ko-KR";

    const updatedText = latest.checkedAt
      ? language.chartLastUpdated +
        new Date(latest.checkedAt).toLocaleString(locale, {
          timeZone: "Asia/Seoul",
        })
      : language.chartTimeUnavailable;

    if (updatedElement) {
      updatedElement.textContent = updatedText;
    }

    if (homeChartUpdated) {
      homeChartUpdated.textContent = updatedText;
    }
  } catch (error) {
    console.error("차트 순위 불러오기 오류:", error);

    const languageCode =
      localStorage.getItem("h2h-language") || "ko";

    const language =
      languageData[languageCode] || languageData.ko;

    if (updatedElement) {
      updatedElement.textContent = language.chartLoadError;
    }

    if (homeChartUpdated) {
      homeChartUpdated.textContent = language.chartLoadError;
    }
  }
}

loadChartRanks();

// 5분마다 저장된 최신 차트 데이터 확인
setInterval(loadChartRanks, 5 * 60 * 1000);




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
/* 메인 플랫폼 버튼 → 플랫폼별 원클릭 화면 */
/* ================================= */

homeOneclickPlatformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPlatform =
      button.dataset.streamingPlatform;

    // 모든 플랫폼 상세 화면 숨기기
    oneclickPlatformDetails.forEach((detail) => {
      detail.classList.remove("active");
    });

    // 선택한 플랫폼 상세 화면만 표시
    const selectedDetail =
      document.querySelector(
        `.oneclick-platform-detail[data-streaming-platform="${selectedPlatform}"]`
      );

    if (selectedDetail) {
      selectedDetail.classList.add("active");
      showPage(oneclickStreamingPage);
    } else {
      console.error(
        "플랫폼 상세 화면을 찾을 수 없습니다:",
        selectedPlatform
      );
    }
  });
});


/* ================================= */
/* 원클릭 플랫폼 상세 → HOME */
/* ================================= */

if (oneclickStreamingBackButton) {
  oneclickStreamingBackButton.addEventListener("click", () => {
    showPage(mainPage);
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
    date: "2026.10.23",

    title: {
      ko: "[하츠투하츠 음원총공팀 홈페이지 오픈]",
      en: "[Hearts2Hearts Strm Website Launch]",
      id: "[Peluncuran Situs Web Tim Streaming Hearts2Hearts]"
    },

    content: {
      ko: `하츄(S2U) 여러분, 안녕하세요!

하츠투하츠 음원총공팀 홈페이지 오픈 소식을 전해드립니다.
앞으로 보다 편리하고 다양한 정보를 업데이트할 예정이니 많은 관심 부탁드립니다.
감사합니다.

하츠투하츠 음원총공팀`,

      en: `Hello, S2U!

We're excited to announce the launch of the Hearts2Hearts Streaming Support Team website!
We plan to keep updating the website with useful and diverse information, and we hope you'll continue to show your support.
Thank you.

Hearts2Hearts Streaming Support Team`,

      id: `Halo, S2U!

Dengan senang hati kami mengumumkan peluncuran situs web Tim Streaming Hearts2Hearts!
Kami akan terus memperbarui situs web dengan berbagai informasi yang bermanfaat. Kami berharap kalian terus mendukung kami.
Terima kasih.

Tim Streaming Hearts2Hearts`
    }
  }
];

if (notices.length > 0 && latestNoticeDate) {
  latestNoticeDate.textContent = notices[0].date;
}

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
    `<span class="notice-title-text"></span>`;

  latestNoticeTitle.querySelector(
    ".notice-title-text"
  ).textContent = noticeTitleText;
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

    /* 미리보기 없이 날짜와 제목만 표시 */
    item.append(top, title);

    item.addEventListener("click", () => {
      openNotice(notice);
    });

    noticeListContainer.appendChild(item);

  });

  /* 읽지 않은 공지 표시 갱신 */
  updateNoticeUnreadDots();

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

      pageButton.addEventListener("click", (event) => {

        event.stopPropagation();
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


/* ================================= */
/* NOTICE 상세 표시 */
/* ================================= */

function openNotice(notice) {

  if (!notice || !noticePage) {
    return;
  }

  currentNotice = notice;

  markNoticeAsRead(notice);

  if (noticeDetailDate) {
    noticeDetailDate.textContent =
      notice.date || "";
  }

  if (noticeDetailTitle) {
    noticeDetailTitle.textContent =
      notice.title[currentLanguage] ||
      notice.title.ko ||
      "";
  }

  if (noticeDetailContent) {
    noticeDetailContent.textContent =
      notice.content[currentLanguage] ||
      notice.content.ko ||
      "";
  }

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
    navVote: "VOTE",
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
      "OFFICIAL FANCHANT",

      homeChartTitle: "실시간 차트 순위",

      chartViewAll: "전체보기 →",

chartPageTitle: "실시간 음원 차트",

      chartPlatformDescription:
  "플랫폼을 선택해 하츠투하츠의 현재 순위를 확인해 보세요!",

chartPlatformMelon: "멜론",
chartPlatformGenie: "지니뮤직",
chartPlatformBugs: "벅스",
chartPlatformFlo: "플로",
chartPlatformVibe: "바이브",

chartLastUpdated: "마지막 집계: ",
chartTimeUnavailable: "집계 시각 확인 불가",
chartLoadError: "차트 데이터를 불러오지 못했습니다.",

chartRankUnit: "위",
chartRankError: "집계 오류",
chartRankNew: "NEW",

homeOneclickTitle: "♬ Lemon Tang 원클릭 스트리밍",
homeOneclickMelon: "멜론",
homeOneclickGenie: "지니뮤직",
homeOneclickFlo: "플로",
homeOneclickBugs: "벅스",

  },


  en: {

    name: "English",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",
    navVote: "Vote",
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
      "SNS: https://linktr.ee/h2h_strm",

    noticeLabel:
      "NOTICE",

    streamingSmall:
      "MV / music streaming guide",

    streamingList:
      "Streaming List",

    oneClick:
      "One-Click Streaming",

    streamingListSmall:
      "Recommended streaming list provided by H2H strm",

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
      "Official fanchants provided by H2H strm",

    officialFanchant:
      "OFFICIAL FANCHANT",

      homeChartTitle: "Real-Time Chart Rankings",
chartPageTitle: "Real-Time Music Charts",
      chartViewAll: "View All →",

      chartPlatformDescription:
  "Select a platform to check Hearts2Hearts' current rankings!",

chartPlatformMelon: "Melon",
chartPlatformGenie: "Genie Music",
chartPlatformBugs: "Bugs",
chartPlatformFlo: "FLO",
chartPlatformVibe: "VIBE",

chartLastUpdated: "Last updated: ",
chartTimeUnavailable: "Update time unavailable",
chartLoadError: "Failed to load chart data.",
chartRankUnit: "th",
chartRankError: "Chart error",
chartRankNew: "NEW",

homeOneclickTitle: "♬ Lemon Tang One-Click Streaming",
homeOneclickMelon: "Melon",
homeOneclickGenie: "Genie Music",
homeOneclickFlo: "FLO",
homeOneclickBugs: "Bugs",
  },

  id: {

    name: "Bahasa Indonesia",

    navHome: "HOME",
    navGuide: "GUIDE",
    navStreaming: "STREAMING",
    navFanchant: "FANCHANT",
    navVote: "Vote",
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
      "SNS: https://linktr.ee/h2h_strm",

    noticeLabel:
      "NOTICE",

    streamingSmall:
      "Panduan streaming MV / musik",

    streamingList:
      "Daftar Streaming",

    oneClick:
      "Streaming Sekali Klik",

    streamingListSmall:
      "Daftar streaming rekomendasi dari H2H strm",

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
      "Fanchant resmi dari H2H strm",

    officialFanchant:
      "OFFICIAL FANCHANT",

      homeChartTitle: "Peringkat Tangga Lagu Real-Time",

      chartPageTitle: "Tangga Lagu Musik Real-Time",

      chartViewAll: "Lihat Semua →",

      chartPlatformDescription:
  "Pilih platform untuk melihat peringkat Hearts2Hearts saat ini!",

chartPlatformMelon: "Melon",
chartPlatformGenie: "Genie Music",
chartPlatformBugs: "Bugs",
chartPlatformFlo: "FLO",
chartPlatformVibe: "VIBE",

chartLastUpdated: "Pembaruan terakhir: ",
chartTimeUnavailable: "Waktu pembaruan tidak tersedia",
chartLoadError: "Gagal memuat data tangga lagu.",

chartRankUnit: "th",
chartRankError: "Kesalahan data",
chartRankNew: "BARU",

homeOneclickTitle: "♬ Streaming Sekali Klik Lemon Tang",
homeOneclickMelon: "Melon",
homeOneclickGenie: "Genie Music",
homeOneclickFlo: "FLO",
homeOneclickBugs: "Bugs",

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
// 홈 화면 원클릭 스트리밍 제목
const homeOneclickTitle =
  document.getElementById("home-oneclick-title");

if (homeOneclickTitle) {
  homeOneclickTitle.textContent =
    language.homeOneclickTitle;
}

// 홈 화면 원클릭 스트리밍 플랫폼 이름
const homeOneclickPlatforms = {
  melon: "home-oneclick-melon",
  genie: "home-oneclick-genie",
  flo: "home-oneclick-flo",
  bugs: "home-oneclick-bugs"
};

Object.entries(homeOneclickPlatforms).forEach(
  ([platform, elementId]) => {
    const element =
      document.getElementById(elementId);

    if (element) {
      const key =
        "homeOneclick" +
        platform.charAt(0).toUpperCase() +
        platform.slice(1);

      element.textContent = language[key];
    }
  }
);
  if (fanchantDescription) {
  const descriptions = {
    ko: "하츠투하츠 공식 응원법",
    en: "Hearts2Hearts Official Fan Chant",
    id: "Fan Chant Resmi Hearts2Hearts"
  };

  fanchantDescription.textContent =
    descriptions[currentLanguage] || descriptions.ko;
}

// 전체 차트 페이지 안내 문구
const chartPageDescription = document.querySelector(
  ".chart-page-description"
);

if (chartPageDescription) {
  chartPageDescription.textContent =
    language.chartPlatformDescription;
}
const homeChartTitle =
  document.getElementById("home-chart-title");

if (homeChartTitle) {
  homeChartTitle.textContent = language.homeChartTitle;
}
const chartViewAllBtn =
  document.getElementById("chart-view-all-btn");

if (chartViewAllBtn) {
  chartViewAllBtn.textContent = language.chartViewAll;
}

// 전체 차트 페이지 제목
const chartPageTitle = document.querySelector(
  "#chart-page .chart-page-title"
);

if (chartPageTitle) {
  chartPageTitle.textContent = language.chartPageTitle;
}

// 플랫폼별 버튼 제목
const platformKeys = [
  "chartPlatformMelon",
  "chartPlatformGenie",
  "chartPlatformBugs",
  "chartPlatformFlo",
  "chartPlatformVibe"
];

const platformButtons = document.querySelectorAll(
  "#chart-page .chart-platform-btn"
);

platformButtons.forEach((button, index) => {
  const title = button.querySelector("span");
  const key = platformKeys[index];

  if (title && key && language[key]) {
    title.textContent = language[key];
  }
});

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

/* ===================================== */
/* 실시간 차트 전체보기 - 플랫폼별 필터 */
/* ===================================== */

(() => {
  const selector = document.querySelector(".chart-platform-selector");
  const chartPage = document.getElementById("chart-page");

  if (!selector || !chartPage) return;

  const buttons = selector.querySelectorAll(".chart-platform-btn");

  // 기존 순위 항목의 ID와 레이블을 유지하면서 플랫폼 구분
  const platformMap = {
    "TOP100": "melon",
    "HOT100": "melon",
    "GENIE": "genie",
    "BUGS": "bugs",
    "FLO": "flo",
    "VIBE": "vibe"
  };

  chartPage.querySelectorAll(".chart-song-ranks p").forEach((item) => {
    const label = item.firstChild?.textContent?.trim().toUpperCase();

    // 레이블이 별도 텍스트 노드로 구성된 기존 HTML 기준
    const platform = platformMap[label];

    if (platform) {
      item.dataset.chartPlatform = platform;
    }
  });

  function selectChartPlatform(platform) {
    buttons.forEach((button) => {
      const isActive = button.dataset.chartPlatform === platform;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    chartPage.querySelectorAll(".chart-song-ranks p").forEach((item) => {
      const itemPlatform = item.dataset.chartPlatform;

      item.classList.toggle(
        "chart-rank-hidden",
        itemPlatform !== platform
      );
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectChartPlatform(button.dataset.chartPlatform);
    });
  });

  // 처음 열었을 때 멜론 순위 표시
  selectChartPlatform("melon");
})();

console.log("script.js 실행 완료");


document.addEventListener("click", (event) => {
  console.log("클릭 대상:", event.target);
  console.log(
    "전체보기 버튼 내부 클릭:",
    event.target.closest("#chart-view-all-btn")
  );
}, true);
