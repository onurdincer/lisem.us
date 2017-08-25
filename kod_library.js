
function suslu_acil_kapan(nesne_ad,yavru_ad,yavru_sayi,yavru_kapali_top,yatay_acik_konum,dikey_acik_yukseklik,sagsolkonum){

    var nesne =document.getElementById(nesne_ad);
    var kapali_konum_px=suslu_kapali_konum_getir(nesne_ad);
    



    if(sagsolkonum=="sag"){
        if(nesne.style.right==kapali_konum_px){
            suslu_ac_genel(nesne_ad,yavru_ad,yavru_sayi,yatay_acik_konum,dikey_acik_yukseklik,sagsolkonum);  
        }
        else{
            suslu_kapa_genel(nesne_ad,yavru_ad,yavru_sayi,yavru_kapali_top,kapali_konum_px,sagsolkonum);
        }
    }
    else{
        if(nesne.style.left==kapali_konum_px){
            suslu_ac_genel(nesne_ad,yavru_ad,yavru_sayi,yatay_acik_konum,dikey_acik_yukseklik,sagsolkonum);  
        }
        else{
            suslu_kapa_genel(nesne_ad,yavru_ad,yavru_sayi,yavru_kapali_top,kapali_konum_px,sagsolkonum);
        }        
    }
}
function suslu_ac_genel(nesne_ad,yavru_ad,yavru_sayi,yatay_acik_konum,dikey_acik_yukseklik,sagsolkonum){
    var nesne =document.getElementById(nesne_ad);
    nesne.style.webkitTransitionDuration="0.3";
    if(sagsolkonum=="sag"){
        nesne.style.right=yatay_acik_konum;
        nesne.style.webkitTransitionDuration="0.1s";
        setTimeout("bekle_acil("+"'"+nesne_ad+"'"+","+"'"+yavru_ad+"'"+","+"'"+yavru_sayi+"'"+","+"'"+yatay_acik_konum+"'"+","+"'"+dikey_acik_yukseklik+"'"+")", 300);
    }
    else{
        nesne.style.left=yatay_acik_konum;
        nesne.style.webkitTransitionDuration="0.1s";
        setTimeout("bekle_acil("+"'"+nesne_ad+"'"+","+"'"+yavru_ad+"'"+","+"'"+yavru_sayi+"'"+","+"'"+yatay_acik_konum+"'"+","+"'"+dikey_acik_yukseklik+"'"+")", 300);
    }
}
function suslu_kapa_genel(nesne_ad,yavru_ad,yavru_sayi,yavru_kapali_top,kapali_konum_px,sagsolkonum){
    var nesne =document.getElementById(nesne_ad);
    //nesne.style.height="43px";
    nesne.style.webkitTransitionDuration="0.3s";


    if(nesne_ad==yavru_ad){
        nesne.style.top=yavru_kapali_top;


        setTimeout("bekle_kapan("+"'"+nesne_ad+"'"+","+"'"+kapali_konum_px+"'"+","+"'"+sagsolkonum+"'"+")", 300)
    }
    else{
        var i=yavru_sayi;
        for (i = 0; i < 5; i++) {
            nesne.getElementsByClassName(yavru_ad)[i].style.top = yavru_kapali_top;
        }


        setTimeout("bekle_kapan("+"'"+nesne_ad+"'"+","+"'"+kapali_konum_px+"'"+","+"'"+sagsolkonum+"'"+")", 100)

    }




}

function bekle_acil(nesne_ad,yavru_ad,yavru_sayi,yatay_acik_konum,dikey_acik_yukseklik){
    var nesne =document.getElementById(nesne_ad);
    //nesne.style.height=dikey_acik_yukseklik;
    nesne.style.webkitTransitionDuration="0.3";

    if(nesne_ad==yavru_ad){
        nesne.style.top="45px";
        
    }
    else{
        var i;
        for (i = yavru_sayi; i < 5; i++) {
            nesne.getElementsByClassName(yavru_ad)[i].style.top = "0px";
        }
        
    }




}


function bekle_kapan(nesne_ad,kapali_konum_px,sagsolkonum){
    var nesne =document.getElementById(nesne_ad);
    nesne.style.webkitTransitionDuration="0.3";

    if(sagsolkonum=="sag"){
        nesne.style.right=kapali_konum_px;

    }
    else{
        nesne.style.left=kapali_konum_px;

    }

}
function suslu_kapali_konum_getir(nesne_ad){
    var nesne =document.getElementById(nesne_ad);
    var genislik=nesne.style.width;
    genislik="-"+genislik;
    return genislik;
}
