console.log("hello world, I'm Working Now")
let sec_main= document.getElementById("sec_lat_con")
let f_B= document.getElementById("B");
let f_E= document.getElementById("E");
let f_T= document.getElementById("T");
let f_H= document.getElementById("H");
let f_se_E= document.getElementById("se_E");
let f_th_E= document.getElementById("th_E");
let f_N= document.getElementById("N");
let f_fo_E= document.getElementById("fo_E");
let f_R= document.getElementById("R");
let f_G= document.getElementById("G");
let f_Y= document.getElementById("Y");


let latters = [f_B,f_E,f_T,f_H,f_se_E,f_th_E,f_N,f_fo_E,f_R,f_G,f_Y];

let timer = 1;
for (let i = 0; i < latters.length; i++) {
    sec_main.style.color="aliceblue"
    let showTag = latters[i];
    console.log(showTag)
    timer += 0.2;
    let timer_count = timer.toString();
    showTag.style.fontSize = "40px";
    showTag.style.color = "aliceblue";
    showTag.style.transition = `all 1s ease ${timer_count}s`;
}

let sec_latter = [
    document.getElementById("se_Y"),
    document.getElementById("O"),
    document.getElementById("U"),
    document.getElementById("W"),
    document.getElementById("A"),
    document.getElementById("sec_N"),
    document.getElementById("sec_T"),
    document.getElementById("th_T"),
    document.getElementById("sec_O"),
    document.getElementById("sec_A"),
    document.getElementById("fo_T"),
    document.getElementById("fi_T"),
    document.getElementById("th_A"),
    document.getElementById("C"),
    document.getElementById("six_T"),
    // document.getElementById("sec_lat_para"),

]
let sec_1_but = document.getElementById("sec_but_latter")
let sec_timer = 3.2;

for (let i = 0; i < sec_latter.length; i++) {
    let sec_latterdiv = sec_latter[i];
    console.log(sec_latterdiv)
    sec_timer += 0.2;
    sec_timer_count = sec_timer.toString();
    sec_latterdiv.style.fontSize = "30px";
    sec_latterdiv.style.color="aliceblue"
    sec_latterdiv.style.transition = `all 1s ease ${sec_timer_count}s`;
    sec_1_but.style.border = "1px solid aliceblue";
}
