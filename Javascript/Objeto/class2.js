class Avo {
    constructor(sobreNomeVo = 'Mendes') {
        this.sobreNomeVo = sobreNomeVo
    }
}

class Pai extends Avo {
    constructor(sobreNomeVo, sobreNomePai = 'Sousa') {
        super(sobreNomeVo)
        this.sobreNomePai = sobreNomePai
    }
}

class Filho extends Pai {
    constructor(sobreNomeVo, sobreNomePai, nome = 'Gabriel') {
        super(sobreNomeVo, sobreNomePai)
        this.nome = nome
    }
}

const filho = new Filho
console.log(filho)