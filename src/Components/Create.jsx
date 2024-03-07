import React, { useState } from 'react';
import { addUser } from '../UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [identity, setIdentity] = useState('');
  const [phone, setPhone] = useState('');

  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name || !phone) {
      alert('Por favor, no olvide llenar el nombre y teléfono.'); // Alerta si el nombre o el teléfono están vacíos
      return;
    }

    dispatch(addUser({ id: users[users.length - 1].id + 1, name, identity, email, phone }));
    navigate('/');
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='bg-light text-dark p-5'>
        <h3>Solicitud de Tarjeta de Crédito</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input type="text" name="name" className='form-control' placeholder='Nombre' onChange={e => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="identity" className="form-label">Documento de Identidad:</label>
            <input type="text" name="identity" className='form-control' placeholder='Documento de Identidad' inputMode="numeric" pattern="[0-9]*" onChange={e => setIdentity(e.target.value)} />
          </div>  
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Correo Electrónico:</label>
            <input type="email" name="email" className='form-control' placeholder='Correo Electrónico' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="form-label">Teléfono:</label>
            <input type="text" name="phone" className='form-control' placeholder='Teléfono' inputMode="text" pattern="[0-9+ ]*" onChange={e => setPhone(e.target.value)} />
          </div>

          <br />
          <button className='btn btn-info'>Aceptar</button>

        </form>
      </div>
    </div>
  );
}

export default Create;
