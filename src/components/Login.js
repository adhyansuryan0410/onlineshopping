import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import './css/login.css'

function Login() {
  const [showLogin, setShowLogin] = useState(false)
  const handleClose = () => setShowLogin(false)
  const handleShow = () => setShowLogin(true)

  return (
    <div>
      <button className="btn" id="login" onClick={handleShow}>Login</button>
      <Modal show={showLogin} 
             aria-labelledby="contained-modal-title-vcenter" 
             centered
             onHide={handleClose}>
        <Modal.Body>
          <div className="container-fluid">
            <form className="form-group loginform">
              <input type="text" className="form-control" placeholder="Username"/><br/>
              <input type="password" className="form-control" placeholder="Password"/><br/>
              <a className="form-control-inline">Forgot Password?</a>
              <button type="submit" className="btn btn-success form-control">Login</button>
            </form>    
          </div>         
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Login
