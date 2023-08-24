const fs = require('fs')

fs.readFile('texto.txt', 'utf8', (erro, data) => {
    if(erro) {
        console.log(erro)
        return
    }

    console.log(data)
})