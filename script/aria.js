// function updateAriaexpanded() {
//   const menuBtn = document.querySelector('.menuBtn');
//   const sidebar = document.querySelector('.sidebar');
//   const sidebarBtn = document.querySelector('.sidebar > button');
//   const sidebarLink = sidebar.querySelectorAll('a')

//   menuBtn.addEventListener('click',function () {
//     const currentExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
//     menuBtn.setAttribute('aria-expanded', currentExpanded.toString());
//     sidebarBtn.removeAttribute('tabindex');
//     sidebar.removeAttribute('tabindex');
//     sidebar.removeAttribute('aria-hidden','false');
//     sidebarLink.forEach(link => link.removeAttribute('tabindex'))
//     console.log(currentExpanded)
//   })

//   const closeBtn = document.querySelector('.menuCloseBtn');
//   closeBtn.addEventListener('click',function () {
//     const currentExpanded = menuBtn.getAttribute('aria-expanded') === 'false';
//     menuBtn.setAttribute('aria-expanded', currentExpanded.toString());
//     sidebarBtn.setAttribute('tabindex','-1')
//     sidebar.setAttribute('tabindex','-1');
//     sidebar.setAttribute('aria-hidden','true');
//     sidebarLink.forEach(link => link.setAttribute('tabindex','-1'))
//     console.log(currentExpanded)
//   })
// }
// updateAriaexpanded();