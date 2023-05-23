if(document.querySelector('#map') && document.querySelector('#map').dataset.coordinates ){
    let coord = document.querySelector('#map').dataset.coordinates;

    ymaps.ready(function () {
        let myMap = new ymaps.Map('map', {
                center: coord.split(','),
                zoom: 14
            },{
                //suppressMapOpenBlock: true
            }),
    
            // Создаём макет содержимого.
           myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './src/images/map-icon.svg',
                // Размеры метки.
                iconImageSize: [50, 50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-25, -50]
            });
    
    
        myMap.geoObjects
            .add(myPlacemark)
    });

}