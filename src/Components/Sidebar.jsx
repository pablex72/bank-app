import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar d-flex flex-column justify-content-space-between bg-light text-dark p-4' style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '250px' }}>
      <a href='/' className='d-flex align-items-center'>
      </a>
      <hr className='text-secondary mt-2' />
      <ul className='nav nav-pills flex-column p-0 m-0'>
        <li className='nav-item p-1'>
          <NavLink exact={true.toString()} to='/' className='nav-link text-dark'>
            <i className='bi bi-card-heading me-2 fs-5'></i>
            <span className='fs-5'>Solicitud de Tarjetas</span>
          </NavLink>
        </li>
        <li className='nav-item p-1'>
          <NavLink to='/solicitudes' className='nav-link text-dark'>
            <i className='bi bi-card-list me-2 fs-5'></i>
            <span className='fs-5'>Tarjetas Solicitadas</span>
          </NavLink>
        </li>
        <li className='nav-item p-1'>
          <NavLink to='/aprobados' className='nav-link text-dark'>
            <i className='bi bi-card-checklist me-2 fs-5'></i>
            <span className='fs-5'>Tarjetas Aprobadas</span>
          </NavLink>
        </li>
      </ul>
      <div>
        <hr className='text-secondary' />
      </div>
    </div>
  );
}

export default Sidebar;
