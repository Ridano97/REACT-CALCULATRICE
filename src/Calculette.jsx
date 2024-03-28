import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Calculette = () => {

    //Etat

    //Comportement

    console.log(Calculette);

    //Affichage

    return <>
    <div className='container mb-5 mt-5'>
        <h1 className='text-center'>CALCULATRICE </h1>
    </div>
    <div className='container mt-5'>
        <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">TOTAL</InputGroup.Text>
            <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            />
        </InputGroup>
      </div>
      <div className='d-flex flex-column align-items-center gap-3"'>
            <div className='d-flex flex-row gap-2 col-5 mt-5' >
                <Button className='col-3 m-2' variant="info">7</Button>{' '}
                <Button className='col-3 m-2' variant="info">8</Button>{' '}
                <Button className='col-3 m-2' variant="info">9</Button>{' '}
                <Button className='col-3 m-2' variant="warning">+</Button>{' '}
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button className='col-3 m-2' variant="info">6</Button>{' '}
                <Button className='col-3 m-2' variant="info">5</Button>{' '}
                <Button className='col-3 m-2' variant="info">4</Button>{' '}
                <Button className='col-3 m-2' variant="warning">-</Button>{' '}
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button className='col-3 m-2' variant="info">3</Button>{' '}
                <Button className='col-3 m-2' variant="info">2</Button>{' '}
                <Button className='col-3 m-2' variant="info">1</Button>{' '}
                <Button className='col-3 m-2' variant="warning">*</Button>{' '}
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button className='col-3 m-2' variant="info">.</Button>{' '}
                <Button className='col-3 m-2' variant="info">0</Button>{' '}
                <Button className='col-3 m-2' variant="danger">C</Button>{' '}
                <Button className='col-3 m-2' variant="warning">/</Button>{' '}
            </div>
            <div className='"d-flex flex-row gap-4 col-5"'>
                <Button className='m-2 ' variant="danger">DELETE</Button>{' '}
                <Button className='m-2' variant="dark">=</Button>{' '}
            </div>
      </div>
</>


}


export default Calculette;