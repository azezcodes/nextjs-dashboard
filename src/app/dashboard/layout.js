import React from 'react'
import Template from './Template'
import { AppContextProvider } from '@/context/Context';
const layout = ({children}) => {
  return <AppContextProvider>

    <Template children={children}/>
       </AppContextProvider>
}

export default layout