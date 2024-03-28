import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Calculette = () => {

    //Etat
    const [display, setDisplay] = useState ('');
    const [result, setResult] = useState('');

    //Comportement

     //Cliquer pour choisir une touche
     const clickOnButton = (e) => {

        console.log(e.target.innerHTML);
    }
            
    //Calculer le résultat
        const calculateResult = (CalculToDo) => {
            result.value = eval(CalculToDo)
        }
        // Supprimer avec la touche C 
        const clearDisplay = () => {

        }


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
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">7</Button>{''}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">8</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">9</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="warning">+</Button>{' '}
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">6</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">5</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">4</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="warning">-</Button>{' '}
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">3</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">2</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">1</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="warning">*</Button>{' '}
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">.</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="info">0</Button>{' '}
                <Button onClick={clearDisplay} className='col-3 m-2' variant="danger">C</Button>{' '}
                <Button onClick={clickOnButton} className='col-3 m-2' variant="warning">/</Button>{' '}
            </div>
            <div className='"d-flex flex-row gap-4 col-5"'>
                <Button className='m-2 ' variant="danger">DELETE</Button>{' '}
                <Button onClick={calculateResult} className='m-2' variant="dark">=</Button>{' '}
            </div>
      </div>
</>


}


export default Calculette;