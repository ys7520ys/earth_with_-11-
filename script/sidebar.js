// 도엊ㄱ
function sidebarChange() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarOpenBtn = document.querySelector('.menuBtn');
  const viewportWidth = window.innerWidth;

  sidebar.classList.remove('.mobile-class','.desktop-class');


  if(viewportWidth >= 320 && viewportWidth <= 768) {
    $('.menuBtn').on('click',function(){
      $('.sidebar').css({
        'width':'100%',
        'right':'0%'
      })
    });
    $('.menuCloseBtn').on('click',function(){
      $('.sidebar').css({
        'right':'-100%'
      })
      $('.subCategory').fadeOut()
      $('.subMain').fadeIn()
    })
  } else if(viewportWidth > 768) {
    $('.menuBtn').on('click',function(){
      $('.sidebar').css({
        'width':'40%',
        'right':'0%'
      })
    });
    $('.menuCloseBtn').on('click',function(){
      $('.sidebar').css({
        'right':'-40%'
      })
      $('.subCategory').fadeOut()
      $('.subMain').fadeIn()
    })
  }
  

}

sidebarChange();

window.addEventListener('resize',sidebarChange);