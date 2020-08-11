import React, {useState} from 'react'
import Select, {Range, Checkboxes, Button} from 'components/input'

const FilterForm = () =>{

    const payloadz = {
        locations : [
            {"name" : "Nairobi"}, {"name":"Kiambu"}, {"name":"Kisumu"}
        ],
        category : [
            {"name":"All"}, {"name": "Land"}, {"name":"Houses"},{"name":"Apartments"}
        ]
    }
    
    const [payload, setPayload] = useState(payloadz)
    
    const handleSize = (e) =>{
        var obj = {...payload}
        obj.size = e.target.value
        setPayload(obj)
    }

    const handlePrice = (e) => {
        var obj = {...payload}
        obj.price = e.target.value
        setPayload(obj)
    }

    const handleCategory = (e) => {
        var obj = {...payload}
        obj.setCategory = e.target.value
        setPayload(obj)
    }

    return(
        <>
            <form id="filterForm">
                <h3>Filter</h3>
                <Select label="Filter by Category:" onchange={handleCategory} options={payload.category} />
                <Range label="Filter by Price(Ksh):" value={payload.price} onchange={handlePrice} />
                <Range label="Filter by Size:" onchange={handleSize} value={payload.size} />
                <Checkboxes label="Filter by Locations:" options={payload.locations} />
                <Button title="Filter" />
            </form>

        </>
    )
}

export default FilterForm