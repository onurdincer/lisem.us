
function ac(){
    var nesne =document.getElementById("solkisim");
    nesne.style.left="0px";
    nesne.style.backgroundColor="#5b5373";
    nesne.style.webkitTransitionDuration="0.1s";
    var nesne2=document.getElementById("icon");
    nesne2.style.left="123px";
    nesne2.style.backgroundImage="url('icon/abc.png')";
    nesne2.style.transition = "all 0.1s"
    //setTimeout('kapa()', 10000)
    //nesne.style.overflow="auto";
    setTimeout('ozelaciliskapan("ac")', 100)
    
}

function ozelaciliskapan(x){
    if(x=="ac"){
        var nesne =document.getElementById("solkisim");
        nesne.style.height="400px";
    }
    else{
        var nesne =document.getElementById("solkisim");
        nesne.style.left="-130px";
        var nesne2=document.getElementById("icon");
        nesne2.style.left="0px";
        nesne2.style.backgroundImage="url('icon/abcabc.png')";
        nesne2.style.transition = "all 0.1s"
    }
    

}
function kapa(){
    var nesne =document.getElementById("solkisim");
    nesne.style.backgroundColor="#5b5373";
    nesne.style.height="50px";
    nesne.style.webkitTransitionDuration="0.1s";
    setTimeout('ozelaciliskapan("kapa")', 100)
}

function ackapa(){
    var nesne =document.getElementById("solkisim");
    if(nesne.style.left=="-130px"){
        ac();
    }
    else{
        kapa();
    }
}
function ayarcek(){
    var nesne =document.getElementById("solkisim");
    var nesne2 =document.getElementById("girisyap");
    nesne2.style.top="-45px";
    nesne.style.left="0px";
    setTimeout('ackapa()', 500);
    //yaziyaz();
}
function yaziyaz(){
    var yazi="öklemek : hayvanların ipini uzun bağlamak, yayılsın diye ispahan sehen tabak pırtmak ansıtmak mehmil müzevirci devrisi gün hışmınan geldi geçti külef ";
    nesne =document.getElementById("BilgiYazi");
    for(var i=0;i<=10;i=i+1){
        yazi+=yazi;
    }
    nesne.innerHTML=nesne.innerHTML+yazi;
}
function gonder(){
    window.location = "index.html";
}
function uyari() {
    alert('yapım aşamasında, kusura bakmayın');
}
function kaydol(){

    
}
function giriskapa(){
    var nesne =document.getElementById("girisyap");
    nesne.style.top="-45px";
    nesne.style.right="-420px";
    nesne.style.webkitTransitionDuration="0.2s";

}
function girisac(){
    var nesne =document.getElementById("girisyap");
    nesne.style.top="0px";
    nesne.style.right="0px";
    nesne.style.webkitTransitionDuration="0.2s";



}

