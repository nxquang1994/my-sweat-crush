function animateWish() {
    $('.parent-img').animate({
        left: '3vh'
    }, 4000, () => {
        animatePresentText();
    });
}

function animateDetailWish() {
    $('.first-wish').animate({
        top: '8vh'
    }, 5000, () => {
        $('.second-wish').animate({
            left: '40vw',
        }, 6000, () => {
            $('.third-wish').animate({
                top: '66vh',
            }, 7000, () => {
                setTimeout(() => {
                    $('a.next-normal').addClass('display-btn');
                }, 4000);
            })
        });
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