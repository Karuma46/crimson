import React from 'react'
import {Row, Col} from 'react-bootstrap'

export const Input = (props) =>{
    return(
        <>
            <Row className="inputWrap">
                <Col xs="12">
                    <label className="labels"> {props.label}:</label>
                    <input type="text" className="textInput" value={props.value} onChange={props.onchange} name={props.name} placeholder={props.ph} />
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
                   <textarea className="textarea" onChange={props.onchange} value={props.value}  name={props.name} placeholder={props.ph}>
                   </textarea>
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
                    <select onChange={props.onchange} name={props.name}>
                        {props.options ? (
                            props.options.map(option => (
                                <option value={option.name} key={option.name}>{option.name}</option>
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
                    <input type="range" className="slider" name="price" min="1" max="100" value={props.value} onChange={props.onchange} name={props.name} />
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
        <button className="button">{props.title}</button>
    )
}

export default Select