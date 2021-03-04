var $buttonList = document.querySelector('.button-list');
var $homePage = document.querySelector('.homepage');
var $menuIcon = document.querySelector('.fas.fa-home.hidden');
var $placeHolder = document.querySelector('.place-holder');
var $tailWags = document.querySelector('.tailwags');
var $intro = document.querySelector('.full-col.intro');
var $stayPawsitive = document.querySelector('.stay-pawsitive');
var $quoteHere = document.querySelector('.quote-here');
var $form = document.querySelector('form');
var $reflect = document.querySelector('.reflect');
var $viewEntry = document.querySelector('.view-entry');
var $modal = document.querySelector('.modal');
var $deleteButton = document.querySelector('.button-delete');
var $spinner1 = document.querySelector('div.spinner');
var $spinner2 = document.querySelector('div.spinner2');

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
  $spinner1.classList.remove('hide');
  xhr.addEventListener('load', function () {
    $spinner1.classList.add('hide');
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

function getQuote() {
  var xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'https://api.quotable.io/random');
  xhr2.responseType = 'json';
  $spinner2.classList.remove('hide');
  xhr2.addEventListener('load', function () {
    $spinner2.classList.add('hide');
    $quoteHere.classList.remove('hide');
    var $h3 = document.createElement('h3');
    $h3.textContent = xhr2.response.content;
    $quoteHere.appendChild($h3);
    var $p = document.createElement('p');
    $p.textContent = '- ' + xhr2.response.author;
    $quoteHere.appendChild($p);
  });
  xhr2.send();
}

$menuIcon.addEventListener('click', function (event) {
  $homePage.classList.remove('hide');
  $menuIcon.classList.add('hidden');
  $tailWags.classList.add('hide');
  $stayPawsitive.classList.add('hide');
  $reflect.classList.add('hide');
  $viewEntry.classList.add('hide');
  window.location.reload();
});

$buttonList.addEventListener('click', function (event) {
  $homePage.classList.add('hide');

  if (event.target.getAttribute('class') === 'pictures') {
    $tailWags.classList.remove('hide');
    $menuIcon.classList.remove('hidden');
    getDogPicture();
    greeting();
  } else if (event.target.getAttribute('class') === 'quotes') {
    $stayPawsitive.classList.remove('hide');
    $menuIcon.classList.remove('hidden');
    getQuote();
  } else if (event.target.getAttribute('class') === 'thoughts') {
    $reflect.classList.remove('hide');
    $menuIcon.classList.remove('hidden');
  } else if (event.target.getAttribute('class') === 'entries') {
    $viewEntry.classList.remove('hide');
    $menuIcon.classList.remove('hidden');
  } else {
    $homePage.classList.remove('hide');
  }
});

$form.addEventListener('submit', function () {
  event.preventDefault();
  var entry = {
    reflect: $form.elements.reflect.value
  };

  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $ul.prepend(entriesList(entry));
  $form.reset();

});

$deleteButton.addEventListener('click', deleteEntry);

function entriesList(entry) {
  var $li = document.createElement('li');
  $li.setAttribute('data-id', entry.entryId);

  var $div = document.createElement('div');
  $div.setAttribute('class', 'text');
  $li.appendChild($div);

  var $p = document.createElement('p');
  $p.setAttribute('class', 'input');
  $p.textContent = entry.reflect;
  $div.appendChild($p);

  var $anchor = document.createElement('a');
  $anchor.setAttribute('href', '#');
  $anchor.textContent = 'delete';
  $li.appendChild($anchor);

  $anchor.addEventListener('click', function () {
    $modal.classList.add('modal-active');
    var $li = event.target.closest('li');
    data.deleteId = parseInt($li.dataset.id);
  });

  return $li;
}

function deleteEntry(event) {
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === data.deleteId) {
      data.entries.splice(i, 1);
      document.querySelector('[data-id="' + data.deleteId + '"]').remove();
    }
  }
}

var $ul = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < data.entries.length; i++) {
    var input = entriesList(data.entries[i]);
    $ul.appendChild(input);
  }
});

var $saveButton = document.querySelector('.save');
$saveButton.addEventListener('click', function () {
  $reflect.classList.add('hide');
  $viewEntry.classList.remove('hide');
});

var $modalResponse = document.querySelector('.modal-response');
$modalResponse.addEventListener('click', function () {
  $modal.classList.remove('modal-active');
});
