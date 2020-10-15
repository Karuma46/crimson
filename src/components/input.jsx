import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const Input = (props) =>{
    return(
        <>
            <Row className="inputWrap">
                <Col xs="12">
                    <label className="labels"> {props.label}:</label>
                    {/* <input type={props.type} className="textInput" value={props.value} onChange={props.onchange} name={props.name} placeholder={props.ph} /> */}
                    <input className="textInput" {...props}/>
                </Col>
            </Row>
        </>
    )
}


export const Text = (props) =>{
    return(
        <>
            <Row className="inputWrap">
                <Col xs="12">
                    <label className="labels">{props.label}:</label>
                    <textarea className="textarea" {...props}>
                    </textarea>
                </Col>
            </Row>
        </>
    )
}

export const Number = (props) =>{
    return(
        <>
            <Row>
                <Col>
                    <label className="labels">{props.label}:</label>
                    <input type="number" className="textInput" min="0" step="1000" {...props}/>
                </Col>
            </Row>
        </>
    )
}


const Select = (props) =>{
    return(
        <>
            <Row className="inputWrap">
                <Col xs="12">
                    <label className="labels"> {props.label} </label>
                    <select onChange={props.onChange} name={props.name}>
                        {props.options ? (
                            props.options.map(option => (
                                <option value={option.name} key={option.name} selected={true ? props.value === option.name: false} >{option.name}</option>
                            ))
                        ) : (
                            ''
                        )}
                    </select>
                </Col>
            </Row>
        </>
    )
}

export const Range = (props) =>{
    return(
        <>
            <Row className="inputWrap">
                <Col>
                    <label className="labels"> {props.label} </label>
                    <input type="range" className="slider" min={props.min} max={props.max} value={props.value} onChange={props.onchange} name={props.name} />
                    <div className="rangeOutput">
                        <span className="minRange"> 0 - 100</span>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export const Checkboxes = (props) => {
    return(
        <>
            <Row className="checkBoxWrap">
                <Col>
                <label className="labels">{props.label}</label>
                
                <div className="checkBoxScroll">
                    {
                        props.options ? (
                                props.options.map(option => (
                                <div className="checkBoxDiv" key={option.name}>
                                    <input type="checkbox" className="checkbox" value={option.name} onChange={props.onchange} name={props.name} />
                                    <span>{option.name}</span>   
                                </div>
                            ))
                        ) : (
                            ''
                        )
                    }

                </div>
                </Col>
            </Row>
        </>
    )
}

export const Images = (props) =>{
    return(
        <>
            <Row className="inputWrap">
                <Col xs="12">
                    <label className="labels"> {props.label}:</label>
                    <input type="file" accept="image/png, image/jpeg" className="textInput" files={props.files} multiple onChange={props.onchange} placeholder={props.ph} />
                </Col>
            </Row>
        </>
    )
}


export const Button = (props) =>{
    return(
        <button className="button" {...props}>{props.title}</button>
    )
}

export const FormStatus = (props) =>{

    const hideME = () =>{
        document.getElementById('formStatus').style.display = 'none';
    }

    return(
        <div id="formStatus" className={props.class}>
            <span>
                {props.message}
            </span>
            <span id="close" onClick={hideME}>
                <FontAwesomeIcon icon={faTimes} />
            </span>
        </div>
    )
}

export const formFxn = (btn, text) => {
    return {

        hangForm : () => {
            btn.disabled = 'disabled';
            btn.style.cursor = 'wait';
            btn.innerText = text;
        },
        freeForm : () => {
            btn.disabled = '';
            btn.style.cursor = 'pointer';
            btn.innerText = text;
        }
    }
}


export default Select