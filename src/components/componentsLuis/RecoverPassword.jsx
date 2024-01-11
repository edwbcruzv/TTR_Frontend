import React from 'react';
import "../../../public/styles/formrecover.css"
const RecoverPassword = () =>{
    
    let label = document.querySelectorAll('label').forEach(label =>{
        label.innerHTML = label.innerText.split('').map((letters,i) => <span style = "transition-delay: ${i * 50}ms">${letters}</span>).join('');
    })


    return(
        <>
            <form className='form-recover'>
                <h1>Recupera tu contraseña</h1>
                <p>Para recuperar tu contraseña es necesario tu correo electronico que ingrsaste al registrarte al sistema</p>
                <div className="input-box">
                    <input type="text" name="" id="" className='input-data'/>
                    <label>Ingresa tu correo</label>
                    <button className='btn-recover'>Enviar</button>
                </div>
            </form>
        </>
    )
}

export default RecoverPassword;