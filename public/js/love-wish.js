function displayLoveWish() {
    loveText1 = 'Mong em sẽ luôn yêu';
    loveText2 = 'Và .....';
    loveText3 = 'Luôn luôn được yêu';

    promiseLove1 = new Promise((resolve, reject) => {
        $('.love-wish-1').text('');
        animatePresentText(loveText1,'love-wish-1', 'tl-1', 'up-down', resolve);
    });

    promiseLove2 = new Promise((resolve, reject) => {
        $('.love-wish-2').text('');
        setTimeout(() => animatePresentText(loveText2,'love-wish-2', 'tl-2', 'down-up', resolve), 8000);
    });

    promiseLove3 = new Promise((resolve, reject) => {
        $('.love-wish-3').text('');
        setTimeout(() => animatePresentText(loveText3,'love-wish-3', 'tl-3', 'up-down', resolve), 14000);
    });

    promiseLove1.then((res1) => {
        return promiseLove2;
    }).then((res2) => {
        return promiseLove3;
    }).then((res3) => {
        setTimeout(() => {
            $('a.next-normal').addClass('display-btn');
        }, 3000);

        console.log('Anh thich em Hien ah');
        console.log('Anh la mot ke rat tinh cam nhung doi luc anh lai khong biet phai lam sao de the hien dieu do tot');
        console.log('Du the nao anh cung chuc em luon luon va mai mai hanh phuc');
    })
}


$(document).ready(function() {
    $('.love-img').animate({
        right: '10vw'
    }, 6000, () => {
        displayLoveWish();
    });
});