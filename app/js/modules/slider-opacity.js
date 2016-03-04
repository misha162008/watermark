var $slider = $('.slider');

var sliderInit = function () {

    var rangeSlider = document.getElementById('slider-range');

    noUiSlider.create(rangeSlider, {
        start: [ 60 ],
        range: {
            'min': [  0 ],
            'max': [ 100 ]
        },
        connect: 'lower'
    });

    var rangeSliderValueElement = document.getElementById('slider-range-value');

    rangeSlider.noUiSlider.on('update', function( values, handle ) {
        rangeSliderValueElement.value = parseInt(values[handle]);
    });

}

module.exports = {

    init: function() {

        if ($slider.length) {
            sliderInit();
        }

    }

}
