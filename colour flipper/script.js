let button=document.getElementById('btn')
let wrap=document.getElementById('wrap')
let span=document.getElementById('color')

function random_hex(){
    let hex_digit=Math.floor((Math.random()*16))
    return hex_digit
}   
function colour_change(){
    let hex='#'
    let hex_arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

    for(let i=1;i<=6;i++){

        hex+=hex_arr[random_hex()]
    }
    wrap.style.backgroundColor=hex
    span.innerHTML=hex

}




button.addEventListener('click',colour_change)


