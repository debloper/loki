document.getElementById("sceptre").addEventListener("click", function (event) {
  var contacts = navigator.contacts || navigator.mozContacts;
  var cursor = contacts.getAll({});

  cursor.onsuccess = function () {
    if (cursor.result) {
      cursor.result.name = ["Loki"];
      cursor.result.givenName = ["Loki"];
      cursor.result.familyName = [];

      contacts.save(cursor.result);
      cursor.continue();
    }
  };

  cursor.onerror = function() {
    alert("This usually works! :-/");
  };
});
