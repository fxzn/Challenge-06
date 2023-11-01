import { useNavigate } from 'react-router';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import NavigationBar from '../components/navigation/NavigationBar';
import { useDispatch } from 'react-redux';
import Google from '../components/auth/google';
import { login } from '../redux/actions/authActions';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch =useDispatch();


    const loginHandler = async (e) => {
        e.preventDefault();
            let data = JSON.stringify({
                email,
                password,
            });

            dispatch(login(data, navigate));
          };

    const goToRegister = () => {
        navigate('/register');
    };

    return (
        <>
        <div className="vh-100">
        <NavigationBar />

        <Container className="p-5 mt-5">
          <h1 className="text-center text-white mb-4 mt-4">Login Into Your Account</h1>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            
            <Row>
              <Col className="text-center pt-1">
                <Button className="w-25" variant="danger" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-center pt-3" >
                <p style={{ color: "#020202"}} className="text-light py-2" onClick={goToRegister}>Not a member? register now </p>
               
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Google   />
              </Col>
            </Row>
          </Form>
        </Container>
        </div>
    </>
    );
}

export default Login;
