let color
const randomColor = () =>{
    let val1 = Math.floor(Math.random()*255);
    let val2 = Math.floor(Math.random()*255);
    let val3 = Math.floor(Math.random()*255);
    color =    `rgb(${val1}, ${val2}, ${val3})`
}
const fun = () => {
    // let randomNum  = Math.floor(Math.random()*16777215);
    // let randomCode = "#"+randomNum.toString(16);
    // let cont = document.querySelector(".container")
    // cont.style.backgroundColor = randomCode;
    // document.querySelector("#hexCode").innerText = randomCode;
    
    randomColor();
    let cont = document.querySelector(".container")
    cont.style.backgroundColor = color;
    document.querySelector("#hexCode").innerText = color;

}

let btn = document.getElementById("btn");
btn.addEventListener("click", fun)

