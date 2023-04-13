function moveStar() {
    
    const star = document.querySelector('.star');
    sleep(3000);
    star.classList.add('move')
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
moveStar()