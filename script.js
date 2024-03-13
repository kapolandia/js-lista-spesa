const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

let divSpesa = document.getElementById("spesa");
let i = 0;
while(i < list.length-1){
    i++;
    divSpesa.innerHTML += list[i] + "<br>";
}