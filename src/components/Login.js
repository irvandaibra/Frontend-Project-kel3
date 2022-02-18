import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      history.push("/product");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <div style={{ marginTop: '6rem' }}>
      <section className="">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div class="p-5 mb-4 bg-light rounded-3">
                  <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Selamat Datang di WEB Backend</h1>
                    <p class="col-md-8 fs-4">Silahkan Login Untuk Mengakses CRUD Daftar Guru</p>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <br />
                <form onSubmit={Auth} className="box">
                  <p className="has-text-centered">{msg}</p>
                  <div className="field mt-5">
                    <label className="label">Email or Username</label>
                    <div className="controls">
                      <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="controls">
                      <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button className="button is-success is-fullwidth">Login</button>
                  </div>
                  <div>don't have an account? <a href='/register'>create new account</a></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login



  //  <Container>
  //    <Row>
  //      <Col>
  //        <Form onSubmit={Auth} style={{ marginTop: '10rem' }}>
  //          <Form.Group className="mb-3" controlId="formBasicEmail">
  //            <Form.Label>Email address</Form.Label>
  //            <Form.Control type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
  //            <Form.Text className="text-muted">
  //              We'll never share your email with anyone else.
  //            </Form.Text>
  //          </Form.Group>
  //          <p className="has-text-centered">{msg}</p>
  //          <Form.Group className="mb-3" controlId="formBasicPassword">
  //            <Form.Label>Password</Form.Label>
  //            <Form.Control type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
  //          </Form.Group>
  //          <Button variant="outline-primary">Confirm</Button>
  //          <br />
  //        </Form>
  //        <p className='mt-3'>Don't have an account? <a href="/register">Create an account</a></p>
  //      </Col>
  //      <Col style={{ marginTop: '10rem' }}>
  //        <div className="jumbotron">
  //          <h1 className="display-4">Hello, world!</h1>
  //          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  //          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

  //          <Button></Button>
  //        </div>
  //      </Col>
  //    </Row>
  //  </Container>
