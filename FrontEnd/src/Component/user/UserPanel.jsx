import React from 'react'
import { useMoralis } from 'react-moralis';
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../Home/NavBar'
import PanelSwitcher from './PanelSwitcher';

export default function UserPanel() {
  var { action } = useParams();
  var navigate = useNavigate();

  var { account, user, authenticate } = useMoralis();
  if (!account || !user) {
    authenticate();
  }

  return (
    <div className="">
      <NavBar></NavBar>
      <div className='container mt-4'>
        <div className="row">
          <div className="col-4 col-md-3">
            <h4>MI CUENTA</h4>
            <ul className='list-group mb-3'>
              <a href="#" className="text-decoration-none mb-2 rounded" onClick={() => { navigate('/user') }}><li className='list-group-item'>Mis Datos</li></a>
              <a href="#" className="text-decoration-none mb-2 rounded" onClick={() => { navigate('/user/messages') }}><li className='list-group-item'>Mensages</li></a>
            </ul>
            <h4>PEDIDOS</h4>
            <ul className='list-group mb-3'>
              <a href="#" className="text-decoration-none mb-2 rounded" onClick={() => { navigate('/user/orders') }}><li className='list-group-item'>Pedidos</li></a>
              <a href="#" className="text-decoration-none mb-2 rounded" onClick={() => { navigate('/user/canceledOrders') }}><li className='list-group-item'>Pedidos Cancelados</li></a>
            </ul>
            <h4>PAGOS</h4>
            <ul className='list-group mb-3'>
              <a href="#" className="text-decoration-none mb-2 rounded" onClick={() => { navigate('/user/history') }}><li className='list-group-item'>Historial de Pagos</li></a>
              <a href="#" className="text-decoration-none mb-2 rounded" onClick={() => { navigate('/user/historyReturns') }}><li className='list-group-item'>Historial de Devoluciones</li></a>
              <a href="#" className="text-decoration-none mb-2 rounded" onClick={() => { navigate('/user/vinculed') }}><li className='list-group-item'>Carteras Vinculadas Vinculadas</li></a>
            </ul>
          </div>
          <div id="mail-panel" className="col-md-9 border border-2 border-secondary">
            <PanelSwitcher action={action}></PanelSwitcher>
          </div>
        </div>
      </div>
    </div>

  )
}
