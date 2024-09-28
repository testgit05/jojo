h1 = document.querySelector('h1');

function chcolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
       
    });
}

chcolor("red", 1000)
    .then(() => {
        return chcolor("green", 1000);
    })
    .then(() => {
        chcolor("yellow", 1000);
    });

