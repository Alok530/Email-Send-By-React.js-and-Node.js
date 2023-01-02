import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const Home = () => {
    const [Email, setEmail] = useState("");

    const [show, setShow] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        document.getElementById("btn").disabled = true;
        try {
            console.log(Email);
            const response = await axios.post('http://localhost:5000/api/sendemail', { 'email': Email });
            if (!response.data || response.data.status === 401) {
                console.log("error")
            } else {
                setEmail("")
                setShow(true);
                console.log("Email sent")
            }
        } catch (error) {
            console.log(error);
        }
        document.getElementById("btn").disabled = false;
    }

    return (
        <>
            {
                show ? <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    Your Email Succesfully Send
                </Alert> : ""
            }
            <div className="container mt-4">
                <div className="d-flex justify-content-center">
                    <h2>Send Mail with React and NodeJs</h2>
                    <img className="ms-2" src="/gmaillogo.png" alt="not fount" style={{ width: '50px' }} />
                </div>
                <div className='d-flex justify-content-center'>
                    <Form className='mt-2 col-lg-6'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control type="email" name='email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>
                        <Button id='btn' variant="primary" type="submit" onClick={sendEmail}>
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Home;