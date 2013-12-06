document.getElementById("sceptre").addEventListener("click", function (event) {
	var contacts = navigator.contacts || navigator.mozContacts;
	var cursor = contacts.getAll({});

	cursor.onsuccess = function () {
		if (cursor.result) {
			alert(cursor.result.name.join(" "));
			cursor.continue();
		}
	};

	cursor.onerror = function() {
		alert("This usually works! :-/");
	};
});
