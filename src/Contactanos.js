import React from 'react'

const Contactanos = () => {
    const handleSetValueContact = (e) => {
        const label = e.target.parentNode.querySelector('label')
        if(e.target.value !== ''){
            label.style.top = '-16px'
            label.style.fontSize = '12px'
            label.style.color = '#2b1e49'
            label.style.transition = '0.3s'
        } else{
            label.style.top = '9px'
            label.style.color = '#aaa'
            label.style.letterSpacing = '0.5px'
            label.style.width = '100%'
            label.style.fontSize = '15px'
        }
    }
    return (
        <>
            <div className="contact-form-container">
                <h2>Contactanos</h2>
                <div className="col-3 input-effect">
                    <input onChange={handleSetValueContact} className="effect-16" type="text" placeholder="" />
                    <label>Name</label>
                    <span className="focus-border"></span>
                </div>
                <div className="col-3 input-effect">
                    <input onChange={handleSetValueContact} className="effect-16" type="text" placeholder="" />
                    <label>Email</label>
                    <span className="focus-border"></span>
                </div>
                <div className="col-3 input-effect">
                    <input onChange={handleSetValueContact} className="effect-16" type="text" placeholder="" />
                    <label>Message</label>
                    <span className="focus-border"></span>
                </div>
                <button className='button'>Enviar</button>
            </div>
            <div className="contact-info-container">
                <h3>Contacto</h3>
                <div><p>mesadepartes@ieslg.edu.pe</p></div>
                <h3>Ubicación</h3>
                <div>
                    <p>Ica Perú,</p>
                    <p>AV. Jose Matias Manzanilla N° 18</p>
                </div>
            </div>
        </>
    )
}

export default Contactanos