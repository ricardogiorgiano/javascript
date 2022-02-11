
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#ffefbc'
    } else if (hora >= 12 && hora <=18 ) {
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#b7836b'
    } else {
        img.src = 'imagens/noite1.png'
        document.body.style.background = '#081b1f'
    }
}

