var sonidos = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i1ykMhERJ/model.json", listo);
navigator.mediaDevices.getUserMedia({ audio: true });

function listo() {
    console.log("estoy listo");
    sonidos.classify(respuesta);

}
function respuesta(error, resultados) {
    if (!error) {
        console.log(resultados);
        sonidos = resultados[0].label;
        Imagen1 = document.getElementById("img1")
        Imagen2 = document.getElementById("img2")
        Imagen3 = document.getElementById("img3")
        Imagen4 = document.getElementById("img4")
        Imagen5 = document.getElementById("img5")
        if (sonidos == "silbido") {
            Imagen1.src = "panda.gif"
            Imagen2.src = "imageedit_1_9080471815.png"
            Imagen3.src = "snorlas.png"
            Imagen4.src = "golteon (1).png"
            Imagen5.src = "venasur.png"
        }
        else if (sonidos == "Ruido de fondo") {
            Imagen1.src = "panda_minecraft.png"
            Imagen2.src = "jolteon.png2.gif"
            Imagen3.src = "snorlas.png"
            Imagen4.src = "jolteon.png2.gif"
            Imagen5.src = "venasur.png"
        }
        else if (sonidos == "teclas") {
            Imagen1.src = "panda_minecraft.png"
            Imagen2.src = "jolteon.png2."
            Imagen3.src = "snorlax.gif"
            Imagen4.src = "golteon (1).png"
            Imagen5.src = "venasur.png"
        }
        else if (sonidos == "trompetas de pokemon") {
            Imagen1.src = "panda_minecraft.png"
            Imagen2.src = "golteon (1).png"
            Imagen3.src = "snorlas.png"
            Imagen4.src = "imageedit_1_9080471815.png"
            Imagen5.src = "venasur.png"
        }
        else if (sonidos == "Ruido de fondo") {
            Imagen1.src = "panda_minecraft.png"
            Imagen2.src = "golteon (1).png"
            Imagen3.src = "snorlas.png"
            Imagen4.src = "Charizar.png"
            Imagen5.src = "venusar.gif"
        }
    }
}