import React, { Component } from 'react'

class MyForm extends Component {

    state = {
        form: {
            nome: '',
            matricula: '',
            email: '',
            isEdit: false
        },
        btnName: "Salvo",
        btnClass: "ui primary button submit-button"
    }

    isEmpty(obj){
        return Object.entries(obj).length ===0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props && !this.isEmpty(this.props.customer)){
            this.state({
                form: {...this.props.customer, isEdit: true},
                btnName: 'Atualizado',
                btnClass: 'ui orange button submit-button'
            })
        }
    }

    handleChange = event =>{
        const {nome, value} = event.target
        let form = this.state.form
        form[nome] = value;
        this.setState({form})
    }

    onFormSubmit = event =>{
        event.preventDefaul()
        if(this.formValidation()){
            this.props.onFormSubmit(this.state.form)
        }
        this.clearFormFields()
    }

    formValidation = () =>{
        if(document.getElementsByName('nome')[0].value === ''){
            alert('Entre com seu nome')
            return false
        }

        if(document.getElementsByName('matricula')[0].value === ''){
            alert('Entre com sua matricula')
            return false
        }

        if(document.getElementsByName('email')[0].value === ''){
            alert('Entre com seu email')
            return false
        }
    }

    clearFormFields = ()=>{
        this.setState({
            form: {
                nome: '',
                matricula: '',
                email: '',
                isEdit: false
            }
        })

        this.setState({
            btnName: 'Salvo',
            btnClass: 'ui primary button submit-button'
        })
        document.querySelector('.form').resete()
    }

    render() {
        return (
            <div>
                <text>Formulário Aluno</text>

                <form className="ui form">
                    <div className="fields">
                        <div className="four wide field">
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="Nome" 
                            onChange={this.handleChange}
                            value={this.state.nome}/>
                        </div>
                        <div className="four wide field">
                            <label>Matricula</label>
                            <input type="text" name="matricula" placeholder="Matricula"
                            onChange={this.handleChange} 
                            value={this.state.matricula}/>
                        </div>
                        <div className="four wide field">
                            <label>E-mail</label>
                            <input type="email" name="email" placeholder="E-mail" 
                            onChange={this.handleChange}
                            value={this.state.email}/>
                        </div>
                        <div className="four wide field">
                            <button className={this.state.btnClass}
                            onClick={this.onFormSubmit}
                            >{this.state.btnName}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MyForm;