var $buttonList = document.querySelector('.button-list');
var $homePage = document.querySelector('.homepage');
var $menuIcon = document.querySelector('.fas.fa-bars.hidden');
var $placeHolder = document.querySelector('.place-holder');

function getDogPicture() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var $img = document.createElement('img');
    $img.setAttribute('src', xhr.response.message);
    $placeHolder.appendChild($img);

  });
  xhr.send();

}

$buttonList.addEventListener('click', function (event) {
  if (event.target.getAttribute('class') === 'pictures') {
    $homePage.classList.add('hide');
    $menuIcon.classList.remove('hidden');
    getDogPicture();
  }
});
