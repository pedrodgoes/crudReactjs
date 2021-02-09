import React, { Component } from 'react'

class Customer extends Component {

    onDelete =()=>{
        this.props.onDelete(this.props.customer.id)
    }

    onEdit = ()=>{
        this.props.onEdit(this.props.customer)
    }

    render() {

        const {id, nome, matricula, email} = this.props.customer;

        return (
            <tr>
                <td style={{ textAlign: 'center' }}>{id}</td>
                <td>{`${nome}`}</td>
                <td>{matricula}</td>
                <td>{email}</td>
                <td style={{ textAlign: 'center' }}>
                    <button className="mini ui yellow button" onClick={this.onEdit}>Editar</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Customer