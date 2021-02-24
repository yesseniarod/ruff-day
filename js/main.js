var $buttonList = document.querySelector('.button-list');
var $homePage = document.querySelector('.homepage');
var $menuIcon = document.querySelector('.fas.fa-bars.hidden');
var $placeHolder = document.querySelector('.place-holder');
var $tailWags = document.querySelector('.tailwags');
var $intro = document.querySelector('.full-col.intro');

function introduction() {
  var names = ['Bella', 'Luna', 'Charlie', 'Lucy', 'Cooper', 'Max', 'Bailey', 'Daisy', 'Sadie', 'Maggie', 'Rocco', 'Lucky', 'Dozer'];

  var sayHi = ['Hi, ', 'Nice to meet you, ', 'Hello, ', 'Hey there, '];
  var randomName = names[Math.floor(Math.random() * names.length)];
  var randomGreeting = sayHi[Math.floor(Math.random() * sayHi.length)];
  return randomGreeting + 'my name is ' + randomName + '!';
}

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

function greeting() {
  var $h2 = document.createElement('h2');
  $h2.textContent = introduction();
  $intro.appendChild($h2);
}

$buttonList.addEventListener('click', function (event) {
  if (event.target.getAttribute('class') === 'pictures') {
    $tailWags.classList.remove('hide');
    $homePage.classList.add('hide');
    $menuIcon.classList.remove('hidden');
    getDogPicture();
    greeting();
  }
});
