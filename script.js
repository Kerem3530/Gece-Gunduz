var ibasilabilir = true;
var kbasilabilir = true;
var Puan = 0;

function iyi_hava() {
    if (ibasilabilir == true) {
        Kanli_ay(30);
        Dolarli_ay(50);
        Turkis_ay(70);
        document.getElementById("cisim").innerHTML = "Güneş";
        document.querySelector("#gok-cismi").style.background = "yellow";
        document.querySelector("#gok-cismi").style.border = "solid 3px orange";
        document.querySelector("body").style.background = "skyblue";
        document.querySelector("#bulut").style.background = "rgb(163, 230, 215)";
        document.querySelector("#bulut2").style.background = "rgb(163, 230, 215)";
        document.querySelector("#cim").style.background = "limegreen"
        Puan += 2;
        document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        basilabilir = false;

        if (kanliay == 4) {
            alert("Kanlı Güneş");
            document.getElementById("cisim").innerHTML = "Kanlı Güneş";
            document.querySelector("#gok-cismi").style.background = "red";
            document.querySelector("#gok-cismi").style.border = "solid 3px darkred";
            Puan += 15;
            document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        }

        if (dolarliay == 5) {
            alert("Dolarlı Güneş")
            document.getElementById("cisim").innerHTML = "Dolarlı Güneş";
            document.getElementById("gok-cismi").style.backgroundImage = 'url("Dolar.png")';
            Puan += 25;
            document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        }

        if ( turkisay == 6 ) {
            alert("Liralı Güneş")
            document.getElementById("cisim").innerHTML = "Liralı Güneş";
            document.getElementById("gok-cismi" ).style.backgroundImage = 'url("türkİŞ lira.png")';
            Puan += 30;
            document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        }
        ibasilabilir = false;
    }
    if(ibasilabilir == false){
        document.querySelector("#iyi-hava").style.background = "gray";
        document.querySelector("#kotu-hava").style.background = "darkslategray";

        document.getElementById("iyi-hava").innerHTML.disabled = true;
        document.getElementById("kotu-hava").innerHTML.disabled = false;
        kbasilabilir = true;
    }
}

function Kanli_ay(max) {
    return kanliay = Math.floor(Math.random()*max)
}

function Dolarli_ay(max) {
    return dolarliay = Math.floor(Math.random()*max)
}

function Turkis_ay(max) {
    return turkisay = Math.floor(Math.random()*max)
}


function kotu_hava() {
    if (kbasilabilir == true){
        document.getElementById("cisim").innerHTML = "Ay";
        Kanli_ay(10);
        Dolarli_ay(30);
        Turkis_ay(50);
        document.querySelector("#gok-cismi").style.background = "gray";
        document.querySelector("#gok-cismi").style.border = "solid 3px darkslategray";
        document.querySelector("body").style.background = "rgb(0,0,79)";
        document.querySelector("#bulut").style.background = "rgb(0, 0, 120)";
        document.querySelector("#bulut2").style.background = "rgb(0, 0, 120)";
        document.querySelector("#kotu-hava").style.left = "-50";
        document.querySelector("#cim").style.background = "rgb(0, 102, 0)";
        Puan += 1;
        document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        if (kanliay == 1){
            alert("Kanlı Ay");
            document.getElementById("cisim").innerHTML = "Kanlı Ay";
            document.querySelector("#gok-cismi").style.background = "red";
            document.querySelector("#gok-cismi").style.border = "solid 3px darkred";
            Puan += 5;
            document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        }

        if (dolarliay == 2) {
            alert("Dolarlı Ay")
            document.getElementById("cisim").innerHTML = "Dolarlı Ay";
            document.getElementById("gok-cismi").style.backgroundImage = 'url("Dolar.png")';
            Puan += 15;
            document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        }

        if ( turkisay == 3 ) {
            alert("Liralı Ay")
            document.getElementById("cisim").innerHTML = "Liralı Ay";
            document.getElementById("gok-cismi" ).style.backgroundImage = 'url("türkİŞ lira.png")'
            Puan += 25
            document.getElementById("puan").innerHTML = Puan + " " + "Puan!"
        }
        kbasilabilir = false;
        if(kbasilabilir==false){
            document.querySelector("#kotu-hava").style.background = "gray";
            document.querySelector("#iyi-hava").style.background = "yellow";


            document.getElementById("kotu-hava").innerHTML.disabled = true;
            document.getElementById("iyi-hava").innerHTML.disabled = false;
            ibasilabilir = true;
        }
    }
}