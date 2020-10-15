import React, {useState, useEffect} from 'react'
import Select, {Input, Text, Button, Number, formFxn} from 'components/input' 
import api from 'config/api'

const Edit = ({props}) => {
    const options = [
        {name:"Select a Category"},
        {name:"House"},
        {name:"Land"},
        {name:"Apartment"}
    ]

    const [list, setList] = useState({})
    const [isNew, setIsNew] = useState(true)

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

        var btn = document.getElementById('submitBtn')

        if(isNew){
            formFxn(btn).hangForm()
            api.listings.post(payload)
            .then(res=>{
            })
            .catch(error=>{
            })
        } else {
            formFxn(btn, 'Saving...').hangForm()
            api.listings.put(`/${props.match.params.id}`, payload)
            .then(res=>{
                formFxn(btn, 'Save').freeForm()
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if(props){
            let arr = props.match.path.split('/')
            if(arr[3] === 'edit'){
                setIsNew(false)
                api.listings.get(`/${props.match.params.id}`)
                .then(res => {
                    setList(res.data)
                })
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
                <Number label="Price(Ksh)" ph="Amount in Ksh" name="price" value={list.price} onChange={handleInput} />
                <Text label="Description" name="description" value={list.description} onChange={handleInput} />
                <Text label="Features (Separate items with '|')" name="features" value={list.features} ph="e.g. Feature 1 | Feature 2 | Feature 3" onChange={handleInput} />
                <Input label="Town" ph="town" name="town" value={list.town} onChange={handleInput} />
                <Input label="County" ph="county" name="county" value={list.county} onChange={handleInput} />
                <Input label="Map Link" ph="Map Location Pin" name="mapLink" value={list.mapLink} onChange={handleInput} />
                <Button title="Save" id="submitBtn"/>
            </form>
        </>
    )
}

export default Edit