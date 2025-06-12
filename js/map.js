ymaps.ready(function () {
    var productionMap = new ymaps.Map('map__production', {
        center: [53.734496, 34.740790],
        zoom: 15,
        // Добавим панель маршрутизации.
    });

    var officeMap = new ymaps.Map('map__office', {
        center: [55.765351, 37.532098],
        zoom: 15,
        // Добавим панель маршрутизации.
    });

    var targetProduction = new ymaps.Placemark([53.734496, 34.740790], null,{
        iconLayout: 'default#image',
        iconImageHref: "/img/map_target.svg",
        iconImageSize: [28, 34],
        iconImageOffset: [-20, -44],
        hintContent: 'Производство Жиздра'
    });

    var targetOffice = new ymaps.Placemark([55.765351, 37.532098], null,{
        iconLayout: 'default#image',
        iconImageHref: "/img/map_target.svg",
        iconImageSize: [28, 34],
        iconImageOffset: [-20, -44],
        hintContent: 'Офис Москва'
    });

    productionMap.geoObjects.add(targetProduction);
    officeMap.geoObjects.add(targetOffice);
    
    productionMap.geoObjects.events.add('click', function (e) {
        window.location.href = 'https://yandex.ru/maps/-/CHSwNE-0'
    });

    officeMap.geoObjects.events.add('click', function (e) {
        window.location.href = 'https://yandex.ru/maps/-/CHSwNBIb'
    });
});
