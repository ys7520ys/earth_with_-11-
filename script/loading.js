window.onload = () => {
  const loadingOverlay = document.getElementById("loadingOverlay");
  const pageContent = document.getElementById("pageContent");

  // 로딩 오버레이 제거
  loadingOverlay.style.display = "none";

  // 페이지 콘텐츠 표시
  pageContent.style.display = "block";

  // 애니메이션 효과 추가
  setTimeout(() => {
    pageContent.style.opacity = "1";
  }, 50); // 살짝 지연 후 애니메이션
};
