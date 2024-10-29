
const whatappbuttonEL = document.querySelector(".whatappbutton");

whatappbuttonEL.addEventListener("mouseover", (event) =>{
    const x = (event.pageX - whatappbuttonEL.offsetLeft);
    const y = (event.pageY - whatappbuttonEL.offsetTop);

    whatappbuttonEL.style.setProperty("--xPos", x + "px");
    whatappbuttonEL.style.setProperty("--yPos", y + "px");

});