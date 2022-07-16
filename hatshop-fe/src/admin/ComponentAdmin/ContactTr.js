import React, { Component } from 'react';

class ContactTr extends Component {
    render() {
        return (

            <tr>
                <td>{this.props.number}</td>
                <td>{this.props.email}</td>
                <td>{this.props.date}</td>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
               <td> <button className='btn btn-success'>
                    Trả lời
                </button>
                </td>
                <td><button className='btn btn-danger'>
                    Xóa
                </button>
                </td>
            </tr>

        );
    }
}

export default ContactTr;