document.getElementById("sceptre").addEventListener("click", function (event) {
  var contacts = navigator.contacts || navigator.mozContacts;
  var cursor = contacts.getAll({});

  cursor.onsuccess = function () {
    if (cursor.result && cursor.result.name[0] !== "Loki" ) {
      cursor.result.additionalName.push(
        "loki",
        cursor.result.name[0],
        cursor.result.givenName[0],
        cursor.result.familyName[0],
        "unloki"
      );

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
