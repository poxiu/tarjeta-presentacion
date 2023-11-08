const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
})


/** descarga imagen */
function downloadFile() {
    const downloadInstnace = document.createElement('a');
    downloadInstnace.href = "./assets/img/nathaly-yovhio.jpg";
    downloadInstnace.target = "_blank";
    downloadInstnace.download = 'Nathaly Yovhio';

    document.body.appendChild(downloadInstnace);
    downloadInstnace.click();
    document.body.removeChild(downloadInstnace);
}

/**copia los datos al potapapeles */
const message = document.querySelector("#message");
document.querySelector('#clipboard').onclick = async () => {
    try {
        await navigator.clipboard.writeText('Nathaly Yohio Ortiz Red Mujer Mi Aliada Banco Económico S.A • Work cell: +591 67707842 • work phone: +591 3 3155864 • Personal cel: +591 75597888 • nyovhio@baneco.com.bo • nathalyyovhio@gmail.com • Calle Ayacucho #166 Santa Cruz, Bolivia 🇧🇴');
        //console.log('copiado');
        message.innerHTML = 'copiado al portapapeles';
        
        setTimeout(() => 
            message.innerHTML = "", 4000);
        
    } catch (error) {
        console.log(error);
    }
}



//message