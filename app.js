function whiteBtn(){
    document.getElementById('whiteColl').style.display='block';
    document.getElementById('blackColl').style.display='none';
    document.getElementById('whiteBtn').style.backgroundColor='black';
    document.getElementById('whiteBtn').style.color='white';
    document.getElementById('blackBtn').style.backgroundColor='transparent';
    document.getElementById('blackBtn').style.color='black';
}
function blackBtn(){
    document.getElementById('blackColl').style.display='block';
    document.getElementById('whiteColl').style.display='none';
    document.getElementById('blackBtn').style.backgroundColor='black';
    document.getElementById('blackBtn').style.color='white';
    document.getElementById('whiteBtn').style.backgroundColor='transparent';
    document.getElementById('whiteBtn').style.color='black';
}
var click=0;
function viewAll(){
    click++;
    document.getElementById('viewAll').style.display='none';
    document.getElementById('recomMask').style.display='none';
    document.getElementById('recomGrid').style.height='auto';
    document.getElementById('recomGrid').style.overflow='visible';
    document.getElementById('goTop').style.display='block';
}
document.getElementById(('recomGridMother')).addEventListener('mouseenter',function(){
    document.getElementById('recomMask').style.display='none'
})
document.getElementById(('recomGridMother')).addEventListener('mouseleave',function(){
    if(click==0){
        document.getElementById('recomMask').style.display='block'
    }
    else{
        document.getElementById('recomMask').style.display='none'
    }
    
})
function goTop(){
    document.getElementById('viewAll').style.display='block';
    document.getElementById('recomMask').style.display='block';
    document.getElementById('recomGrid').style.height='200vh';
    document.getElementById('recomGrid').style.overflow='hidden';
    click=0;

    setTimeout(function(){
        document.getElementById('goTop').style.display='none';
   }, 2000); 
    
}