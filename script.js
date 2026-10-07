const mainShoe = document.querySelector(".main-shoe img");

const floatingShoes = document.querySelectorAll(".floating-shoe");

document.addEventListener("mousemove", (event) => {

    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    if (mainShoe) {
        mainShoe.style.marginLeft = `${-x}px`;
        mainShoe.style.marginTop = `${-y}px`;
    }

    floatingShoes.forEach((shoe, index) => {

        const strength = (index + 1) * 0.5;

        shoe.style.marginLeft = `${x * strength}px`;
        shoe.style.marginTop = `${y * strength}px`;

    });

});