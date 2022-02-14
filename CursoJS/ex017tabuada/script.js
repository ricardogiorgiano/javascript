function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.lenght == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        // limpar o select
        tab.innerHTML = ''
        while (c <= 10) {
            //criando elementos em um select
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++

        }
        
    }
    

}