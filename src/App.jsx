/* eslint no-eval: 0 */
import React, { useState } from 'react';
import words from 'lodash.words';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [stack, setStack] = useState('');

  // retorna un array de numeros sin los signos
  const items = words(stack, /[^-^+^*^/]+/g);
  // Lo que ejecuta la función
  console.log('Renderización de App', items);

  return (
    <main className='react-calculator'>
      <Result value={items[items.length - 1]} />
      <Numbers
        onClickNumber={(number) => {
          console.log('Click en number', number);
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log('Content Clear');
          setStack('');
        }}
        onDelete={() => {
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            console.log('onDelete', newStack);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log('Operation:', operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log('Equal:', equal);
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

export default App;
