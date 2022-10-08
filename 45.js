function carInfo(manufacturer, model, feature) {
    let car = {
        manufacturer: { manufacturer },
        model: { model },
        feature: { feature },
    };

    return car;
}

var firstCall = carInfo("Civic", "2021", "white");
console.log(firstCall);

var secCall = carInfo("Ford", "1998ss", "Yellow");
console.log(secCall);

var thirdCall = carInfo("Fearari", "2020", "Gray");
console.log(thirdCall);
