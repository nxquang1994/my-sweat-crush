function animateWish() {
    $('.parent-img').animate({
        left: '3vh'
    }, 2000, () => {
        animatePresentText();
    });
}

function animateDetailWish() {
    $('.first-wish').animate({
        top: '16vh'
    }, 3000, () => {
        $('.second-wish').animate({
            left: '70vh',
            top: '38vh' 
        }, 2500, () => {
            $('.third-wish').animate({
                top: '60vh',
                left: '75vh'
            }, 2000)
        })
    });
}


function animatePresentText() {
    let presentText = 'Chúc em sẽ luôn:';
    var textArray = presentText.split('');
    var elementTextWish = $('.present-wish');
    textArray.forEach((character) => {
        var charElement = null;
        if (character == ' ') {
            charElement = $(`<span style="width: 10px;" class="up-down">${character}</span>`);
        } else {
            charElement = $(`<span class="up-down">${character}</span>`);
        }
        elementTextWish.append(charElement);
    });

    var charIndex = 0;
    var spanElement = $('span.up-down');
    var timer = setInterval(() => {
        $(spanElement[charIndex]).addClass('fade-animate');
        charIndex++;

        if (charIndex === textArray.length) {
            clearInterval(timer);
            timer = null;
            animateDetailWish();
            return;
        }
    }, 200);
}

$(document).ready(function() {
    animateWish();
});