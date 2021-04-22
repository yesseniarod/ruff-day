var $buttonList = document.querySelector('.button-list');
var $homePage = document.querySelector('.homepage');
var $homeIcon = document.querySelector('.fas.fa-home.home-icon.hidden');
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
var $more = document.querySelector('.more');
var $moreQuotes = document.querySelector('.more-quotes');

function introduction() {
  var names = ['Bella', 'Luna', 'Charlie', 'Lucy', 'Cooper', 'Max', 'Bailey', 'Daisy', 'Sadie', 'Maggie', 'Rocco', 'Lucky', 'Dozer'];

  var sayHi = ['Hi, ', 'Nice to meet you, ', 'Hello, ', 'Hey there, '];
  var randomName = names[Math.floor(Math.random() * names.length)];
  var randomGreeting = sayHi[Math.floor(Math.random() * sayHi.length)];
  return randomGreeting + 'my name is ' + randomName + '!';
}

var $img = document.createElement('img');

function getDogPicture() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.responseType = 'json';
  $spinner1.classList.remove('hide');
  xhr.addEventListener('load', function () {
    $spinner1.classList.add('hide');
    $img.setAttribute('src', xhr.response.message);
    $placeHolder.appendChild($img);
  });
  xhr.send();
}

function changeDogPicture() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.responseType = 'json';
  $spinner1.classList.remove('hide');
  xhr.addEventListener('load', function () {
    $spinner1.classList.add('hide');
    $img.setAttribute('src', xhr.response.message);
    $placeHolder.classList.remove('hide');
  });
  xhr.send();
}

var $h2 = document.createElement('h2');

function greeting() {
  $h2.textContent = introduction();
  $intro.appendChild($h2);
}

function changeGreeting() {
  $h2.textContent = introduction();
}

var $quoteHeading = document.createElement('h3');
var $quoteParagraph = document.createElement('p');

function getQuote() {
  var xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'https://api.quotable.io/random');
  xhr2.responseType = 'json';
  $spinner2.classList.remove('hide');
  xhr2.addEventListener('load', function () {
    $spinner2.classList.add('hide');
    $quoteHere.classList.remove('hide');

    $quoteHeading.textContent = xhr2.response.content;
    $quoteHere.appendChild($quoteHeading);

    $quoteParagraph.textContent = '- ' + xhr2.response.author;
    $quoteHere.appendChild($quoteParagraph);
  });
  xhr2.send();
}


function changeQuote() {
  var xhr2 = new XMLHttpRequest();
  xhr2.open('GET', 'https://api.quotable.io/random');
  xhr2.responseType = 'json';
  $spinner2.classList.remove('hide');
  xhr2.addEventListener('load', function () {
    $spinner2.classList.add('hide');
    $quoteHere.classList.remove('hide');
    $quoteHeading.textContent = xhr2.response.content;
    $quoteHere.appendChild($quoteHeading);
    $quoteParagraph.textContent = '- ' + xhr2.response.author;
    $quoteHere.appendChild($quoteParagraph);
  });
  xhr2.send();
}

$homeIcon.addEventListener('click', function (event) {
  $homePage.classList.remove('hide');
  $homeIcon.classList.add('hidden');
  $tailWags.classList.add('hide');
  $stayPawsitive.classList.add('hide');
  $reflect.classList.add('hide');
  $viewEntry.classList.add('hide');
});

$more.addEventListener('click', function (event) {
  $placeHolder.classList.add('hide');
  changeDogPicture();
  changeGreeting();
});

$moreQuotes.addEventListener('click', function (event) {
  $quoteHere.classList.add('hide');
  changeQuote();
});

$buttonList.addEventListener('click', function (event) {
  $homePage.classList.add('hide');

  if (event.target.getAttribute('class') === 'pictures') {
    $tailWags.classList.remove('hide');
    $homeIcon.classList.remove('hidden');
    getDogPicture();
    greeting();
  } else if (event.target.getAttribute('class') === 'quotes') {
    $stayPawsitive.classList.remove('hide');
    $homeIcon.classList.remove('hidden');
    getQuote();
  } else if (event.target.getAttribute('class') === 'thoughts') {
    $reflect.classList.remove('hide');
    $homeIcon.classList.remove('hidden');
  } else if (event.target.getAttribute('class') === 'entries') {
    $viewEntry.classList.remove('hide');
    $homeIcon.classList.remove('hidden');
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
  $li.appendChild($anchor);

  var $trash = document.createElement('i');
  $trash.setAttribute('class', 'fas fa-trash-alt');
  $anchor.appendChild($trash);

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
