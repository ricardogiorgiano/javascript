

let res = document.querySelector('div#res')
let user = document.getElementById('user')
let d = document.getElementById('reserva')
let disp = document.getElementById('disp')

d.addEventListener('click', clicar)




function usuario() {

    if (user.value.length == 0   ) {
        res.innerHTML = 'Digite um usuário válido!'}
        else {
        res.innerHTML = `<p>Olá <strong>${user.value}</strong> escolha os dias e horários disponíveis abaixo:</p>`
                              
    }
}
function clicar() {
    d.innerHTML = `${user.value}`
    d.style.background = 'grey'
    
         
}
function reserva() {
    disp.innerHTML = `${user.value}`
}

