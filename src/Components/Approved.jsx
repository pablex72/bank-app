import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAmount } from "../UserReducer";

function Approved() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleAmountChange = (id, amount) => {
        dispatch(updateUserAmount({ id: id, amount: amount }));
        console.log(`ID: ${id}, Nuevo monto: ${amount}`);
    }

    // Filtrar solo los usuarios con isApproved igual a true
    const approvedUsers = users.filter(user => user.isApproved);

    return (
        <div className='container'>
            <div className="row">
                <div className='col-12 bg-light text-dark p-5'>
                    <h3>Tarjetas Aprobadas</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Cliente</th>
                                <th>Celular</th>
                                <th>Monto tarjeta Aprobado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvedUsers.map((user, index) => (
                                <tr key={index}>
                                    {/* <td>{user.id}</td> */}
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <input
                                            type="text"
                                            pattern="[0-9]*"
                                            value={user.amount || ''}
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                if (/^\d*\.?\d*$/.test(inputValue)) { // Verifica si el valor es un número válido
                                                    handleAmountChange(user.id, inputValue); // Si es válido, llama a handleAmountChange
                                                }
                                            }} />


                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Approved;
