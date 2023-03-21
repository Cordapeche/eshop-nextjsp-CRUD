import { useState } from "react";
import pic from '../../public/images/plant.jpg';

const Create = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handSubmit = (e) => {
        e.preventDefault();
        const article = { title, price, description };
        
        console.log('articles', article);

        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        };
        

        fetch('/api/admins/edit', options)
        .then(() => {

        });
    }

    return (
        <>
            <div className='formular'>
                <div className='form'>
                    
                    <form onSubmit={handSubmit}>
                    <h1>Modifier {title.id}</h1>
                        <Image src={pic} className='card-img-top' alt='some images' />
                        <label>Nom</label>
                        <input
                            type="text"
                            required
                            placeholder={title.id}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Commentaire</label>
                        <input
                            type="text"
                            required
                            placeholder={price.id}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <label>Description</label>
                        <input
                            type="text"
                            required
                            placeholder={description.id}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button
                            type="submit"
                        >
                            Editer
                        </button>
                    </form>
                </div>
            </div>
        </>
    )

    
}

export default Create;