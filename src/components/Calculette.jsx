import React, {useCallback, useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Calculette = () => {

    const [total, setTotal] = useState ('');
    const [randomValue , setRandomValue] = useState (0.0);
    const [currentKey, setCurrentKey] = useState("")

    let reg = new RegExp("^[\\d\\W]+$");

    const caracterToAdd = (e) => {
        //Met à jour l'état total
        //console.log(total + e.target.innerHTML)
        setTotal(total + e.target.innerHTML)
    }


    const registerKeyPress = useCallback ((e) => {
        setRandomValue(Math.random());
        setCurrentKey(e.key);
    })

    const calc = () => {
        if (total !== "") {
            setTotal(eval(total).total());
        }
    }

    const resetTotal = () => {
        setTotal("");
    }

    const removeLastCaracter = () => {
        setTotal(total.slice(0, -1))
    }

    useEffect (() => {
        
        document.addEventListener("keyup", registerKeyPress)
                
    } , [])


    useEffect (() => {
        
        switch (currentKey) {
            case "Enter":
                calc(total)
                break;
            case "Backspace":
                removeLastCaracter()
                break;
            case "Delete":
                resetTotal() = "";
                break;
            default:
                if (reg.test(currentKey)){
                    setTotal(total + currentKey)
                }
                break;
                
        }    
    } , [randomValue])


    //Affichage

    return <>
    <div className='container mb-5 mt-5'>
        <h1 className='text-center'>CALCULATRICE </h1>
    </div>
    <div className='container mt-5'>
        <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">TOTAL</InputGroup.Text>
            <Form.Control value={total}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            />
        </InputGroup>
      </div>
      <div className='d-flex flex-column align-items-center gap-3"'>
            <div className='d-flex flex-row gap-2 col-5 mt-5' >
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">7</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">8</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">9</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="warning">+</Button>
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">6</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">5</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">4</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="warning">-</Button>
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">3</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">2</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">1</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="warning">*</Button>
            </div>
            <div className='d-flex flex-row gap-2 col-5'>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">.</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="info">0</Button>
                <Button onClick={resetTotal} className='col-3 m-2' variant="danger">C</Button>
                <Button onClick={caracterToAdd} className='col-3 m-2' variant="warning">/</Button>
            </div>
            <div className='"d-flex flex-row gap-4 col-5"'>
                <Button onClick={removeLastCaracter} className='m-2 ' variant="danger">DELETE</Button>
                <Button onClick={calc} className='m-2' variant="dark">=</Button>
            </div>
      </div>
</>



}

export default Calculette;