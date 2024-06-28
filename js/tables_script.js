function toggleFun() {
    document.body.classList.toggle('dark-mode');
const button = document.getElementById('mode');
if (document.body.classList.contains('dark-mode')) {
    button.textContent = 'Light Mode';
    button.style.backgroundColor = 'grey';
    button.style.color = 'black';
} else {
    button.textContent = 'Dark Mode';
    button.style.backgroundColor = 'grey';
    button.style.color = 'white';
}
};

// function timeFun(){
//     const button=document.getElementById("time");
//     if(button.textContent.contains("India")){
//         button.textContent="";
//     }else{
//         button.textContent=Date();
//     }
// }
function timeFun() {
    const button = document.getElementById("time");
    if (button.textContent.includes("India")) {
        button.textContent = "";
    } else {
        button.textContent = new Date();
    }
}

function stick(pos){
    var pic;
    if(pos=='jump'){
        pic="../images/sJump.webp"
    }
    else if(pos=='dance'){
        pic="../images/sDance.webp"
    }
    else if(pos=='run'){
        pic="../images/sRunn.webp"
    }
    else if(pos=='fight'){
        pic="../images/sFight.webp"
    }
    else{
        pic="../images/sStart.webp"
    }
    document.getElementById("stickman").src=pic;
}