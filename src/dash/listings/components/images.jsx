import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileUpload, faCheck, faTimes, faTrash, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import Api from 'config/api'

const ImageForm = ({props}) => {

    const [img, setImg] = useState({
        image: [],
        url: ''
    })
    
    const [imgs, setImgs] = useState([])

    const handleImg = (e) => {
        let reader = new FileReader();
        let files = e.target.files;
        reader.onloadend = () => {
            setImg({
                image: files[0],
                url: reader.result
            });
        }
        reader.readAsDataURL(files[0])
    }

    const cancelUpload = () => {
        setImg({
            file: '',
            url: ''
        })
    }

    const confirmUpload = () => {
        var fd = new FormData();
        fd.append('image', img.image)
        fd.append('listing_id', props.match.params.id)
        
        Api.images.post(fd)
        .then(res => {
            var np = [...imgs,...res.data];
            setImgs(np)
            setImg({image:[], url:''})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteImage = (id) => {
        Api.images.delete(`/${id}`)
        .then(
            Api.listings.get(`/${props.match.params.id}`)
            .then(res=>{
                setImgs(res.data.images);
            })
        )
    }

    useEffect(() => {
        Api.listings.get(`/${props.match.params.id}`)
        .then(res=>{
            setImgs(res.data.images);
        })
    },[props])

    return(
        <>
            <div className="imagesUploadWrap">
                <h3>Images</h3>
                <div className="wrap">
                    <div className="imgspan">
                        {
                            img.url !== '' ? (
                                <>
                                    <img src={img.url} alt='' />

                                    <span id="confirmImg" onClick={confirmUpload}>
                                        <FontAwesomeIcon icon={faCheck}  />
                                    </span>

                                    <span id="cancelImg" onClick={cancelUpload}>
                                        <FontAwesomeIcon icon={faTimes}  />
                                    </span>
                                </>
                            ) : (
                                <form id="imageForm">
                                    <label htmlFor="imageInput">
                                        <FontAwesomeIcon icon={faFileUpload} />
                                    </label>
                                    <input type="file" id="imageInput" accept="image/png, image/jpeg" onChange={handleImg} hidden/>
                                </form>
                            )
                        }
                    </div>
                    {
                        imgs.length>=1 ? (
                            <>
                                {
                                    imgs.map(i => (
                                        <div className="imgspan">
                                            <span class="trashBtn" onClick={()=>deleteImage(i.id)}><FontAwesomeIcon icon={faTrashAlt} /></span>
                                            <img src={`http://localhost:8000/storage/${i.url}`} alt=""/>
                                        </div>
                                    ))
                                }
                            </>
                        ): ('')
                    }

                </div>
            </div>
        </>
    )
}

export default ImageForm