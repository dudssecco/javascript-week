class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas){
            alert('Formulário Enviado')
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true
        const senha = this.formulario.querySelector('.senha')
        const confSenha = this.formulario.querySelector('.conf-senha')

        if(senha.value !== confSenha.value){
            this.criaErro(senha, 'Campos "Senha" e "Repeter Senha" precisam ser iguais')
            this.criaErro(confSenha, 'Campos "Senha" e "Repeter Senha" precisam ser iguais')
            valid = false
        }

        return valid
    }

    camposSaoValidos(){
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let campos of this.formulario.querySelectorAll('.validar')){
            const label = campos.previousElementSibling.innerText

            if(!campos.value){
                this.criaErro(campos, `Preencha o campo "${label}"`)
                valid = false
            }

            if(campos.classList.contains('cpf')){
                if(!this.ValidaCPF(campos)) valid = false
            }

            if(campos.classList.contains('usuario')){
                if(!this.ValidaUsuario(campos)) valid = false
            }

            if(campos.classList.contains('senha')){
                if(!this.ValidaSenha(campos)) valid = false
            }
        }

        return valid
    }


    ValidaSenha(campos){
        const senha = campos.value
        if(senha.length < 6 || senha.length > 12){
            this.criaErro(campos, 'A senha deve ter entre 6 e 12 caracteres')
            return false
        }
        return true
    }

    ValidaUsuario(campos){
        let valid = true
        const usuario = campos.value

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campos, 'O usuario deve ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!usuario.match(/[a-zA-Z0-9]+/g)){
            this.criaErro(campos, 'Nome de usuario deve conter apenas letras e/ou números')
            valid = false
        }

        return valid
    }

    ValidaCPF(campos){
        const cpf = new ValidaCpf(campos.value)
        if(!cpf.valida()){
            this.criaErro(campos, 'Cpf Inválido')
            return false
        }
        return true
    }

    criaErro(campos, msg){
        const div = document.createElement('div')
        div.classList.add('error-text')
        div.innerHTML = msg 
        campos.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()