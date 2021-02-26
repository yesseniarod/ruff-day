/* exported data */
var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

var pastData = localStorage.getItem('data-storage');
if (pastData !== null) {
  data = JSON.parse(pastData);
}

window.addEventListener('unload', function () {
  var dataEntry = JSON.stringify(data);
  localStorage.setItem('data-storage', dataEntry);
});
