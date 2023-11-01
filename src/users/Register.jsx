import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/navigation/NavigationBar';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Google from '../components/auth/google';
import { register } from '../redux/actions/authActions';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      // Send data as JSON
      let data = JSON.stringify ({
        name,
        email,
        password,
      });

      dispatch(register(data, navigate))

    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };

  return (
    <div className="vh-100">
      <NavigationBar />
      <Container className="p-5 mt-5">
        <h1 className="text-center text-white mb-4 mt-4">Register Your Account</h1>
        <Form onSubmit={registerHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-light">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
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
          <Row className='pt-4'>
            <Col className="text-center">
              <Google  />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
