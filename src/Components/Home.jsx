import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../UserReducer';

function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [isApproved, setIsApproved] = useState({});

    // Actualiza el estado local cuando los usuarios cambian
    useEffect(() => {
        const initialIsApproved = {};
        users.forEach(user => {
            initialIsApproved[user.id] = user.isApproved;
        });
        setIsApproved(initialIsApproved);
    }, [users]);

    const handleChange = (userId, value) => {
        setIsApproved(prevState => ({
            ...prevState,
            [userId]: value
        }));
        dispatch(updateUser({ id: userId, isApproved: value }));
    }

    return (
        <div className='container'>
            <div className="row">
                <div className='col-12 '>
                    <div className='bg-light text-dark p-5'>
                        <h3>Tarjetas Solicitadas</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Cliente</th>
                                    <th>Teléfono</th>
                                    <th>Aprobado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        {/* <td>{user.id}</td> */}
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                                                <input type="radio" id={`yes-${user.id}`} value="true" checked={isApproved[user.id] === true} onChange={() => handleChange(user.id, true)} />
                                                <label htmlFor={`yes-${user.id}`} style={{ marginLeft: '5px' }}>Si</label>
                                            </div>
                                            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                                                <input type="radio" id={`no-${user.id}`} value="false" checked={isApproved[user.id] === false} onChange={() => handleChange(user.id, false)} />
                                                <label htmlFor={`no-${user.id}`} style={{ marginLeft: '5px' }}>No</label>
                                            </div>

                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
