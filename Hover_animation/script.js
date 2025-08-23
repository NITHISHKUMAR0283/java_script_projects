let container=document.getElementById("container");
const colors = ["#056CF2", "#05AFF2", "#F2E205", "#F28705", "#A62103"];

function random_colors(){
    let index=(Math.floor(Math.random()*colors.length));
    return (colors[index]);
}
function change(paragraph){
    let color=random_colors();
    paragraph.textcontent="out";
    paragraph.style.background=color;
    
    paragraph.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function remove(paragraph){
    paragraph.style.background='rgb(28, 30, 29)';
    paragraph.style.boxShadow=`0px 0 20px rgba(28, 30,29)`
}

let squares=500;
for (let i=0;i<squares;i++){
    let box=document.createElement('div');
    box.addEventListener("mouseover",()=>change(box));
    box.addEventListener("mouseout",()=>remove(box));
    container.appendChild(box);
}