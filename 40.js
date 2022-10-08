function make_album(artistName, albumTitle, trackNumbers) {
  let obj = {
    artistName: { artistName },
    albumTitle: { albumTitle },
  };

  if (trackNumbers != "undefined") {
    obj.trackNumbers = { trackNumbers };
  }

  return obj;
}

var firstObj = make_album("Justin Biber", "Baby");
console.log(firstObj);

var secObj = make_album("Qurat ul ain Baloch", "Wo Hamsafar Tha", 5);
console.log(secObj);

var thirdObj = make_album("Sahir Ali Bagga", "Kahen Deep Jaly", 2);
console.log(thirdObj);
