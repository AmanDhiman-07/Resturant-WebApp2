import React from 'react'
import { data } from '../Pages/rest.Api.json'

const Qualities = () => {

    return (
        <section className='qualities' id='qualities'>
            <div className='container'>
                {data[0].ourQualities.map((element) => {
                    return (
                        <div className='card' key={element.id}>
                            <img src={element.image} alt={element.image} />
                            <p className='title'>{element.title}</p>
                            <p className='description'>{element.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Qualities