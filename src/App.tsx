import React from 'react';
import { GlobalStyles} from './styles/globalStyles'
import  * as C from './styles/styles'
import {Button} from './components/Button'

function App() {
  return (
    <>
        <GlobalStyles />
        <C.Header> Oi</C.Header>
        <Button text='Inscreva-se agora' />
    </>
  );
}

export default App;
