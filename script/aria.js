function updateAriaHidden() {
  const desktopContent = document.querySelector('.desktop-content');
  const mobileContent = document.querySelector('.mobile-content');
  if (window.innerWidth <= 768) {
    desktopContent.setAttribute('aria-hidden', 'true');
    mobileContent.setAttribute('aria-hidden', 'false');
  } else {
    desktopContent.setAttribute('aria-hidden', 'false');
    mobileContent.setAttribute('aria-hidden', 'true');
  }
}
updateAriaHidden();
window.addEventListener('resize', updateAriaHidden);