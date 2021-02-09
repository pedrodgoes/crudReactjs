import React, {Component} from 'react'
import Customer from './Customer'

class CustomerList extends Component{

    onDelete = id =>{
        this.props.onDelete(id)
    }

    onEdit = data =>{
        this.props.onEdit(data)
    }

    render(){

    const customers = this.props.customers
        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{width: '50px', textAlign: 'center'}}>#</th>
                            <th style={{width: '220px', textAlign: 'center'}}>Nome</th>
                            <th style={{width: '150px', textAlign: 'center'}}> Matrículal</th>
                            <th style={{width: '220px', textAlign: 'center'}}>E-mail</th>
                            <th style={{width: '120px', textAlign: 'center'}}>Opções</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            customers && customers.map(customer=>{
                                return(
                                    <Customer customer={customer} key={customer.id} 
                                    onDelete={this.onDelete}
                                    onEdit={this.onEdit}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerList