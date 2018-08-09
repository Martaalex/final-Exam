let toTop = document.querySelector('.toTop');
toTop.addEventListener('click', function(){
  console.log(window.scrollY);
  window.scroll({top:0, right:0, behavior:'smooth'});
});

window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (window.scrollY>60) {
      toTop.style.display = 'block';
    }
    else {
      toTop.style.display = 'none';
    }
});

let mbutton = document.querySelector('.navburger');

mbutton.addEventListener('click', toggleNav);

let closeButton = document.querySelector('.close');
closeButton.addEventListener('click', close);

function toggleNav(){
    let barState = document.querySelector('.mobile-nav').style.height;

    document.querySelector('.navburger').classList.toggle('open');
    if (barState === '100%') {
        return close();
    }

    return open();
}
function open() {
    document.querySelector('.mobile-nav').style.height = '100%';
    document.querySelector('.close').style.display = 'block';
}
function close() {

     document.querySelector('.mobile-nav').style.height = '0';
     document.querySelector('.close').style.display = 'none';
}
