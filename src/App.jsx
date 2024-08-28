import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Custom Hooks Lab</h1>
      <div className='card'>
        <p>
          <span>Custom Hooks Lab</span> es un proyecto diseñado para probar y optimizar
          los hooks personalizados de React. Este entorno proporciona un espacio
          controlado y bien organizado para evaluar a fondo el comportamiento, el
          rendimiento y la fiabilidad de los hooks. Ayuda a identificar y resolver
          problemas de forma eficiente para garantizar que los hooks funcionan de forma
          óptima en cualquier situación.
        </p>
      </div>
    </>
  );
}

export default App;
