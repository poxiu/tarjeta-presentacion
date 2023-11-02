const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
})

//const botonDescargar = document.querySelector("#boton-descargar");

function downloadFile() {
    const downloadInstnace = document.createElement('a');
    downloadInstnace.href = "./assets/img/nathaly-yovhio.jpg";
    downloadInstnace.target = "_blank";
    downloadInstnace.download = 'Nathaly Yovhio';

    document.body.appendChild(downloadInstnace);
    downloadInstnace.click();
    document.body.removeChild(downloadInstnace);
}