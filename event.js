document.getElementById('btn-upadate').addEventListener('click',upadate)
function upadate() {
    const inputitem=document.getElementById('input-fild')
    const inputtext= inputitem.value;
    const p =document.getElementById('inputfildvalue');
    p.innerText=inputtext;
}