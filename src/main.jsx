import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import DataContext from './components/Context/DataContext.jsx'
import BasketContext from './components/Context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContext>
      <BasketContext>
        <App />
      </BasketContext>
    </DataContext>
  </BrowserRouter>
)