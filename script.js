function contar() {

    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 ) { //|| passo.value.length == 0
        res.innerHTML = ('Impossivel Contar!')
        //window.alert('[ERROR] Faltam dados!!')
    } else {
        res.innerHTML = 'Contando:  <p>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0 || p == null){
            window.alert('Passo inválido! Considerando PASSO 1!')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`  //contragem crescente
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}` //contagem decrescente
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }



}