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

