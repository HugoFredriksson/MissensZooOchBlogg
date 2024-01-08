var jsonObjekt1 = { value: 10 };
var jsonObjekt2 = { value: 20 };
var jsonObjekt3 = { value: 30 };

// Hämta referenser till befintliga a-taggar med id
var aTag1 = document.getElementById('feed');
var aTag2 = document.getElementById('animal');
var aTag3 = document.getElementById('Miscellaneous');

// Placera integer-värdena inuti a-taggar
aTag1.textContent = 'Foder: ' + jsonObjekt1.value;
aTag2.textContent = 'Djur: ' + jsonObjekt2.value;
aTag3.textContent = 'Övrigt: ' + jsonObjekt3.value;