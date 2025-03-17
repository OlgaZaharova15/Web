// JavaScript source code
//console.log(switch_btn.src.split('/').at(-1));

function switch_button() {
    let switch_btn = document.getElementById("switch");
    let image = switch_btn.src.split('/').at(-1);

    let timeS = document.getElementById("timeSet");

    //if (switch_btn.src.split('/').at(-1) === `sun.png`) switch_btn.src = "img/moon.png";
    //else switch_btn.scr = "img/sun.png";

    //switch_btn.src = switch_btn.src.split('/').at(-1) === 'sun.png' ? 'img/moon.png' : 'img/sun.png';

    switch_btn.style.opacity = 0; // Сначала скрываем текущее изображение

    setTimeout(() => {
        // Меняем изображение после того, как оно стало невидимым
        switch_btn.src = `img/${image === 'sun.png' ? 'moon.png' : 'sun.png'}`;
        switch_btn.style.opacity = 1; // Показываем новое изображение
    }, parseInt(timeS.value)); // Задержка, чтобы дождаться завершения анимации
    console.log(parseInt(timeS.value));
    document.body.style.backgroundColor = image === 'moon.png' ? '#323232' : 'white';
    document.body.style.color = image === 'sun.png' ? '#323232' : 'white';

    document.body.style.transition = `background-color 3s, color 3s`;
    //switch_btn.


}
