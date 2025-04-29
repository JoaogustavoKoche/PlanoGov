import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="NavContainer">
        <div className="text-content">
          <h1>
            <span className="linha1">Rio Negro em</span><br />
            <span className="linha2">PRIMEIRO LUGAR</span>
          </h1>
          <p>
            Tornar Rio Negro uma das melhores cidades para se viver, com honestidade e dedicação, gerando conforto e qualidade de vida para as famílias rio-negrenses.
          </p>
        </div>
        <img src="https://media.rmix.com.br/2024/12/a56db918-seminario-prefeitura-rio-negro.png" alt="Prefeitura de Rio Negro"/>
      </div>

    <div className="PlanoContainer">
      <div className="text-content">
        <h2>Plano de Governo</h2>
        <div className="item">
          <svg class="colorable-icon" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" data-icon="handshake" data-prefix="fal" aria-hidden="true"><path d="M263.9 64c-33.9 0-66.7 12-92.6 33.7L144 120.7v39.1c2.7-.5 5.3-1.7 7.4-3.5l40.5-34c13.3-11.2 28.9-19 45.5-23.1L272.6 64h-8.7zM112 352.3c8.9 1 17.2 5 23.6 11.4l28.6 28.6 15.4 15.4 .1 .1 24.3 24.3c25.1 25.1 65.4 26.2 91.8 2.6c.8-.7 1.6-1.4 2.3-2.2c26.3 21.3 65.3 18.6 88.4-7.3c6-6.7 10.3-14.4 13-22.5c19.2 4 40-.8 55.7-14.8c11.3-10.1 18.2-23.2 20.6-37H528V368c0 26.5 21.5 48 48 48h16c26.5 0 48-21.5 48-48V160c0-17.7-14.3-32-32-32H560 528v32V318.8H473.1c-3.1-8.7-8.1-17-15.1-24l-85.6-85.6 8.1-7.5c6.5-6 6.9-16.1 .9-22.6s-16.1-6.9-22.6-.9l-76.1 70.2c-13.2 12.2-33.6 12.4-47 .4c-15.4-13.7-15.7-37.5-.8-51.6l79.4-75C332.2 105.4 355.8 96 380.4 96c22.7 0 44.6 8 61.9 22.6l44.8 37.7c2.5 2.1 5.6 3.4 8.8 3.7V121.8L462.9 94.1C439.8 74.6 410.6 64 380.4 64c-32.8 0-64.3 12.5-88.1 35l-79.4 75c-28.6 27-27.9 72.7 1.5 98.8c25.8 22.9 64.7 22.5 90-.8l44.5-41 86.5 86.5c13 13 12.4 34.3-1.4 46.5c-10.9 9.7-26.7 10.6-38.6 3c-5-3.3-11.4-3.4-16.6-.5s-8.3 8.6-8 14.6c.4 8.1-2.3 16.3-8.1 22.9c-12.3 13.9-33.8 14.5-46.9 1.4l-8.1-8.1c-3.6-3.6-8.7-5.3-13.7-4.5s-9.4 3.9-11.8 8.4c-1.9 3.6-4.4 6.9-7.6 9.8c-13.8 12.3-34.8 11.7-47.8-1.3l-39.9-39.8-28.6-28.6c-12.4-12.4-28.9-19.8-46.3-20.9V160 128H80 32c-17.7 0-32 14.3-32 32V368c0 26.5 21.5 48 48 48H64c26.5 0 48-21.5 48-48V352.3zM80 160V368c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160H80zm528 0V368c0 8.8-7.2 16-16 16H576c-8.8 0-16-7.2-16-16V160h48z" fill="currentColor"></path></svg>
          <div>
            <strong>Compromisso Público</strong>
            <p>Firmamos compromisso com a população focando no bem-estar dos cidadãos rio-negrenses.</p>
          </div>
        </div>
        <div className="item">
          <svg class="colorable-icon" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" data-icon="clipboard" data-prefix="fal" aria-hidden="true"><path d="M192 32c-22.3 0-41.2 15.3-46.5 36c-1.8 7.1-8.2 12-15.5 12H112c-8.8 0-16 7.2-16 16v32h96 96V96c0-8.8-7.2-16-16-16H254c-7.3 0-13.7-4.9-15.5-12c-5.3-20.7-24.1-36-46.5-36zM118.7 48C131 19.8 159.2 0 192 0s61 19.8 73.3 48H272c20.9 0 38.7 13.4 45.3 32H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V144c0-35.3 28.7-64 64-64h2.7C73.3 61.4 91.1 48 112 48h6.7zM320 128c0 17.7-14.3 32-32 32H192 96c-17.7 0-32-14.3-32-32V112c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32v16zM192 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" fill="currentColor"></path></svg>
          <div>
            <strong>Plano Concreto</strong>
            <p>Administração focada em um plano viável e eficiente.</p>
          </div>
        </div>
        <div className="item">
          <svg class="colorable-icon" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" data-icon="star" data-prefix="fal" aria-hidden="true"><path d="M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z" fill="currentColor"></path></svg>
          <div>
            <strong>Ações Sólidas</strong>
            <p>Baseado na realidade do município e construído com expectativa de avanços.</p>
          </div>
        </div>
      </div>
      <div className='imgcontainer'>
      <img 
        src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/5dcm279j16cldak/07542b2658ae495e87e5edfa9f5faaa7/optimized/plano-de-governo.avif" 
        alt="Ilustração do plano de governo" 
      />
      </div>
      
    </div>

    </div>
  );
}





export default App;
