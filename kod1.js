function ac(){
    var nesne =document.getElementById("solkisim");
    nesne.style.left="0px";
    //nesne.style.backgroundColor="#f1f1f1";
    nesne.style.webkitTransitionDuration="0.1s";
    var nesne2=document.getElementById("icon");
    nesne2.style.left="123px";
    nesne2.style.backgroundImage="url('icon/abc.png')";
    nesne2.style.transition = "all 0.1s"
    //setTimeout('kapa()', 10000)
    //nesne.style.overflow="auto";
    setTimeout('ozelaciliskapan("ac")', 100);
    
}
function kapa(){
    var nesne =document.getElementById("solkisim");
    //nesne.style.backgroundColor="#5f5f5f";
    nesne.style.height="43px";
    nesne.style.webkitTransitionDuration="0.1s";

    var i;
    for (i = 0; i < 5; i++) {
        nesne.getElementsByClassName("lileri")[i].style.top = "-180px";
    }


    setTimeout('ozelaciliskapan("kapa")', 100)

}


function ozelaciliskapan(x){
    if(x=="ac"){
        var nesne =document.getElementById("solkisim");
        nesne.style.height="230px";
            var i;
            for (i = 0; i < 5; i++) {
                nesne.getElementsByClassName("lileri")[i].style.top = "47px";
            }


    }
    else{
        var nesne =document.getElementById("solkisim");
        nesne.style.left="-130px";
        var nesne2=document.getElementById("icon");
        nesne2.style.left="-5px";
        nesne2.style.backgroundImage="url('icon/abcabc.png')";
        nesne2.style.transition = "all 0.1s"
    }
    

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
    var nesne3 =document.getElementById("sagkisim");
    nesne3.style.right= "-500px";
    nesne3.style.width="500px";
    //nesne3.style.top="-271px";
    nesne3.style.top="45px";
    //nesne3.style.height="43px";


    nesne2.style.top="-45px";
    nesne.style.left="0px";
    setTimeout('ackapa()', 500);
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

function gonder2(){
    window.location = "index.html";
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




function ac_kapa_genel(nesne_ad,acik_konum_px,sagsolkonum){
    var nesne =document.getElementById(nesne_ad);
    var kapali_konum_px=kapali_konum_getir(nesne);
    



    if(sagsolkonum=="sag"){
        if(nesne.style.right==kapali_konum_px){
            ac_genel(nesne,acik_konum_px,sagsolkonum);  
        }
        else{
            kapa_genel(nesne,kapali_konum_px,sagsolkonum);
        }
    }
    if(sagsolkonum=="sol"){
        if(nesne.style.left==kapali_konum_px){
            ac_genel(nesne,acik_konum_px,sagsolkonum);  
        }
        else{
            kapa_genel(nesne,kapali_konum_px,sagsolkonum);
        }        
    }
}

function ac_genel(nesne,acik_konum_px,sagsolkonum){
    if(sagsolkonum=="sag"){
        nesne.style.right=acik_konum_px;
        nesne.style.webkitTransitionDuration="0.1s";
    }
    if(sagsolkonum=="sol"){
        nesne.style.left=acik_konum_px;
        nesne.style.webkitTransitionDuration="0.1s";
    }

}
function kapa_genel(nesne,kapali_konum_px,sagsolkonum){
    if(sagsolkonum=="sag"){
        nesne.style.right=kapali_konum_px;
        nesne.style.webkitTransitionDuration="0.1s";
    }
    if(sagsolkonum=="sol"){
        nesne.style.left=kapali_konum_px;
        nesne.style.webkitTransitionDuration="0.1s";
    }

}

function kapali_konum_getir(nesne){
    var genislik=nesne.style.width;
    genislik="-"+genislik;
    return genislik;
}



















