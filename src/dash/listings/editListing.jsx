import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Input, Text, Button, Images} from 'components/input' 
import api from 'config/api'

const Edit = ({props}) => {

    const listEx = {
        title: '',
        description: '',
        features: '',
        price: '',
        category: ''
    }

    const [list, setList] = useState(listEx)
    const [images, setImages] = useState([])
    const [imgRes, setImgRes] = useState([])
    const [isNew, setIsNew] = useState(true)

    const handleImgs = (e) => {
        var arr = [...images]
        let arrRes = [...imgRes]

        for(var i=0; i<e.target.files.length; i++){
            arr.push(e.target.files[i])
            var reader = new FileReader()
            reader.onloadend = function(e) {
                arrRes.push(e.target.result)    
            }
            reader.readAsDataURL(e.target.files[i]);
        }
        setImages(arr)
        setImgRes(arrRes)
        console.log(arrRes)
    }

    const handleInput = (e) =>{
        var obj = {...list}
        obj[e.target.name] = e.target.value
        setList(obj)
    }

    const submitForm = (e) =>{
        e.preventDefault()
        var payload = {...list}
        delete payload.id

        if(isNew){
            api[list.category].post(payload)
            .then(res=>{
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
        } else {
            api[list.category].put(props.location.state.id, payload)
            .then(res=>{
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if(props){
           setList(props.location.state)
           setIsNew(false)
        }
    },[])

    return(
        <>
            <form onSubmit={submitForm}>
                <Input label="Title" name="title" value={list.title}  onchange={handleInput} />
                <Text label="Description" name="description" value={list.description} onchange={handleInput} />
                <Text label="Features (Separate items with '|')" name="features" value={list.features} ph="e.g. Feature 1 | Feature 2 | Feature 3"  onchange={handleInput} />
                <Input label="Price(Ksh)" ph="Amount in Ksh" name="price" value={list.price} onchange={handleInput} />
                {/* <Images label="Upload Images" files={images} onchange={handleImgs} />

                <Row className="inputWrap imgUpload">
                    {
                        imgRes.length>0 ? (
                            imgRes.map(img => (
                                <Col className="imgWrapUp" key={img}>
                                    <img src={img} />
                                    <p>img</p>
                                </Col>
                            ))
                        ) : (
                            ''
                        )
                    }
                </Row> */}

                <Button title="Save"/>
            </form>

        </>
    )
}

export default Edit