import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SessionProvider } from './context/SessionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionProvider>

    <App />
  </SessionProvider>
)
