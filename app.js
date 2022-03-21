window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let goUp = document.getElementById('go-up');

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    goUp.style.display = 'block';
  } else {
    goUp.style.display = 'none';
  }


  goUp.addEventListener('click', () => {
    window.scrollTo(0,0);
  })
}






function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  



  const showContentOne = () => {
    let text = document.getElementById('content-one');
    let dots = document.getElementById('dots-one')
    dots.classList.toggle('content-hide');
    text.classList.toggle('content-show');
  };

  const showContentTwo = () => {
    let text = document.getElementById('content-two');
    let dots = document.getElementById('dots-two')
    dots.classList.toggle('content-hide');
    text.classList.toggle('content-show');
  };




