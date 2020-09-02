import React, {useState, useEffect} from 'react'
import Select, {Input, Text, Button} from 'components/input' 
import api from 'config/api'

const Edit = ({props}) => {

    

    const options = [{name:"Select a Category"},{name:"house"}, {name:"land"}, {name:"apartment"}]

    const [list, setList] = useState({})
    // const [images, setImages] = useState([])
    // const [imgRes, setImgRes] = useState([])
    const [isNew, setIsNew] = useState(true)

    // const handleImgs = (e) => {
    //     var arr = [...images]
    //     let arrRes = [...imgRes]

    //     for(var i=0; i<e.target.files.length; i++){
    //         arr.push(e.target.files[i])
    //         var reader = new FileReader()
    //         reader.onloadend = function(e) {
    //             arrRes.push(e.target.result)    
    //         }
    //         reader.readAsDataURL(e.target.files[i]);
    //     }
    //     setImages(arr)
    //     setImgRes(arrRes)
    //     console.log(arrRes)
    // }

    const handleInput = (e) =>{
        var obj = {...list}
        obj[e.target.name] = e.target.value
        setList(obj)
        console.log(obj)
    }

    const submitForm = (e) =>{
        e.preventDefault()
        var payload = {...list}
        
        delete payload.id
        delete payload.category

        if(isNew){
            api[list.category].post(payload)
            .then(res=>{
                
            })
            .catch(error=>{
                
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
            if(props.location.state){
                setList(props.location.state)
            }
            let arr = props.match.path.split('/')
            if(arr[3] === 'edit'){
                setIsNew(false)
            } else if(arr[3] === 'new'){
                setIsNew(true)
            }           
        }
    },[props])

    return(
        <>
            <form onSubmit={submitForm}>
                <Input label="Title" name="title" value={list.title} onChange={handleInput} />
                <Select label="Category" name="category" value={list.category} options={options} onChange={handleInput} />
                <Text label="Description" name="desc" value={list.desc} onChange={handleInput} />
                <Text label="Features (Separate items with '|')" name="features" value={list.features} ph="e.g. Feature 1 | Feature 2 | Feature 3"  onChange={handleInput} />
                <Input label="Town" ph="town" name="town" value={list.town} onChange={handleInput} />
                <Input label="County" ph="county" name="county" value={list.county} onChange={handleInput} />
                <Input label="Map Link" ph="Map Location Pin" name="mapLink" value={list.mapLink} onChange={handleInput} />
                <Input label="Images" ph="Select Images" name="images" value={list.images} onChange={handleInput} />
                <Input label="Price(Ksh)" ph="Amount in Ksh" name="price" value={list.price} onChange={handleInput} />
                <Button title="Save" id="submitBtn"/>
            </form>

        </>
    )
}

export default Edit