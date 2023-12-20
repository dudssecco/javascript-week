class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: false,
            configurable: false,
        })
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequence()) return false
        
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const primeiroDigito = this.criaDigito(cpfParcial)
        const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito)
        const novoCpf = cpfParcial + primeiroDigito + segundoDigito

        return novoCpf === this.cpfLimpo
    }

    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1
        
        const total = cpfArray.reduce((ac, valor) => {
            ac += (regressivo * Number(valor))
            regressivo--
            return ac
        }, 0)

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    isSequence(){
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo  
    }
}

const novoCpf = new ValidaCpf('705.484.450-52')
console.log(novoCpf.valida())