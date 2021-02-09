import React, {Component} from 'react'
import axios from 'axios'
import MyForm from './MyForm'
import CustomerList from './CustomerList'
import "./app.css"
import Loader from './Loader'

class App extends Component{

    state={
        customers:[],
        customer: {},
        loader: false,
        url: 'http://localhost/apiLaravel/public/api/customers'
    }

    getCustomers = async ()=>{
        this.setState({loader: true})
        const customers = await axios.get(this.state.url)
        this.setState({customers: customers.data, loader: false})
    }

    deleteCustomer = async id =>{
        this.setState({loader: true})
        await axios.delete(`${this.state.url}/${id}`)

        this.getCustomers()
    }

    createCustomer = async(data)=>{
        this.setState({loader: true})

        await axios.post(this.state.url,{
            nome: data.nome,
            matrciula: data.matrciula,
            email: data.email
        })
        this.getCustomers()
    }

    editCustomer = async(data) =>{
        this.getCustomers({customer: {}, loader: true})
        await axios.put(`${this.state.url}/${data.id}`,{
            nome: data.nome,
            matricula: data.matricula,
            email: data.email
        })

        this.getCustomers()
    }

    componentDidMount(){
        this.getCustomers();
    }

    onDelete= id=>{
        this.getCustomers()
    }

    onEdit= data=>{
        this.setState({customer: data})
    }

    onFormSubmit = (data)=>{
        if(data.isEdit){
            this.editCustomer(data)
        }else{
            this.createCustomer(data)
        }
    }

    render(){
        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container"> 
                        <a href="/#" className="header item">
                            Teste Dev PHP
                        </a>
                    </div>
                </div>

                <div className="ui main container">
                    <MyForm customer={this.state.customer}
                    onFormSubmit={this.onFormSubmit}
                    />

                    <CustomerList customers={this.state.customers} 
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}/>
                </div>
            </div>
        )
    }
}

export default App;