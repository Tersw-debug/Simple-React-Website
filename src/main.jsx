import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import StaticPage from './App'

const root = createRoot(document.getElementById('root')).render(
  <StaticPage ></StaticPage>
)