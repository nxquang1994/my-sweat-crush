function animatePresentText(presentText, selectHeadding, selectSpan, customSpanClass, resolveFunc) {
    let textArray = presentText.split('');
    let elementTextWish = $(`.${selectHeadding}`);
    textArray.forEach((character) => {
        var charElement = null;
        if (character === ' ') {
            charElement = $(`<span style="width: 10px;" class="${selectSpan} ${customSpanClass}">${character}</span>`);
        } else {
            charElement = $(`<span class="${selectSpan} ${customSpanClass}">${character}</span>`);
        }
        elementTextWish.append(charElement);
    });

    var charIndex = 0;
    var spanElement = $(`span.${selectSpan}.${customSpanClass}`);
    var timer = setInterval(() => {
        $(spanElement[charIndex]).addClass('fade-animate');
        charIndex++;

        if (charIndex === textArray.length) {
            clearInterval(timer);
            timer = null;
            resolveFunc(true);
            return;
        }
    }, 200);
}
