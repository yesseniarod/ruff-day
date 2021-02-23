var $buttonList = document.querySelector('.button-list');
var $homePage = document.querySelector('.homepage');
var $menuIcon = document.querySelector('.fas.fa-bars.hidden');

$buttonList.addEventListener('click', function (event) {
  if (event.target.getAttribute('class') === 'pictures') {
    $homePage.classList.add('hide');
    $menuIcon.classList.remove('hidden');
  }
});
