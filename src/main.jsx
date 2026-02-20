import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Box from './Box'
import './style.css'
import Wrap from './Wrap'
import Parent from './Parent'
import PropsClass from './PropsClass'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wrap/>
   

  </StrictMode>,
)
