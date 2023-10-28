import '../public/styles/style.css'
import ReactDOM from 'react-dom/client'
import validacionCampos from './components/validations/validacion_email'
import App from './App.jsx'

let btnLogin = document.querySelector(".btn-login")
document.addEventListener("click",(e)=>{
    if(e.target.matches(btnLogin))
        validacionCampos(".form-login")
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
