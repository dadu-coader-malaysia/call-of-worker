import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AuthProvider } from "./components/AuthContext";
createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <App />
    </AuthProvider>
  
)
