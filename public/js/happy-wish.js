
$(document).ready(function() {
    leftText1 = $('.left-wish-1').text();
    leftText2 = $('.left-wish-2').text();
    leftText3 = $('.left-wish-3').text();
    rightText1 = $('.right-wish-1').text();
    rightText2 = $('.right-wish-2').text();
    rightText3 = $('.right-wish-3').text();

    promise1 = new Promise((resolve, reject) => {
        $('.left-wish-1').text('');
        animatePresentText(leftText1,'left-wish-1', 'tl-1', 'up-down', resolve);
    });

    promise2 = new Promise((resolve, reject) => {
        $('.left-wish-2').text('');
        setTimeout(() => animatePresentText(leftText2,'left-wish-2', 'tl-2', 'up-down', resolve), 2000);
    });

    promise3 = new Promise((resolve, reject) => {
        $('.left-wish-3').text('');
        setTimeout(() => animatePresentText(leftText3,'left-wish-3', 'tl-3', 'up-down', resolve), 5000);
    });

    const startTime = 7000;

    promiseRight1 = new Promise((resolve, reject) => {
        $('.right-wish-1').text('');
        setTimeout(() => animatePresentText(rightText1,'right-wish-1', 'tr-1', 'down-up', resolve), startTime + 1000);
    });

    promiseRight2 = new Promise((resolve, reject) => {
        $('.right-wish-2').text('');
        setTimeout(() => animatePresentText(rightText2,'right-wish-2', 'tr-2', 'down-up', resolve), startTime + 3000);
    });

    promiseRight3 = new Promise((resolve, reject) => {
        $('.right-wish-3').text('');
        setTimeout(() => animatePresentText(rightText3,'right-wish-3', 'tr-3', 'down-up', resolve), startTime + 5000);
    });

    promise1.then((res1) => {
        return promise2;
    }).then((res2) => {
        return promise3;
    }).then((res3) => {
        return promiseRight1;
    }).then((res4) => {
        return promiseRight2;
    }).then((res5) => {
        return promiseRight3;
    }).then((res6) => {
        console.log('Anh rất thích em Hiền à');
        console.log('Những lúc làm việc và anh không tương tác bởi anh không thể ngưng nghĩ về em');
        console.log('Nhưng dù như thế em luôn thâu tóm tâm trí anh !!!!!');
        $('.symetic-wish').animate({
            top: '10vh'
        }, 2000, () => {
            $('h1.concluse-happy').addClass('display-conclusion');
            setTimeout(() => {
                $('a.next-ltr').addClass('execute-move');
            }, 5000);
        });
    });
});