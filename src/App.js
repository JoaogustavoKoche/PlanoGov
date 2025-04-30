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
            <div className="items-wrapper">
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
        </div>
        <div className='imgcontainer'>
          <img 
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/5dcm279j16cldak/07542b2658ae495e87e5edfa9f5faaa7/optimized/plano-de-governo.avif" 
            alt="Ilustração do plano de governo" 
          />
        </div> 
      </div>

      <div className="GestaoContainer">
        <div className='imgcontainer'>
          <img 
            src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/5dcm279j16cldak/de6f83f002454281acfd3571e337eecf/optimized/nova-gestao-administratativa.avif" 
            alt="Nova Gestao" 
          />
        </div>
        <div className="text-content">
          <div className='title'>
            <h1>Nova Gestão Administrativa</h1>
          </div>

          <div className='containerContent'>

            <div className="right-items">
              <div className="icon-shape">  
                <svg className="colorable-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" data-icon="user" data-prefix="fal" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                  <path d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="content">
              <strong>Critérios Técnicos</strong>
              <p>Estabelecer critérios objetivos para escolha de Secretários e cargos comissionados.</p>
            </div>
          </div>

           <div className='containerContent'>

            <div className="right-items">
              <div className="icon-shape">  
              <svg class="colorable-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="badge" data-prefix="fal" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
              <path d="M256 32c-28.3 0-53 15.9-65.4 39.4c-3.6 6.8-11.5 10.1-18.8 7.8c-25.4-7.8-54.1-1.6-74.1 18.4s-26.2 48.7-18.4 74.1c2.3 7.3-1 15.2-7.8 18.8C47.9 203 32 227.7 32 256s15.9 53 39.4 65.4c6.8 3.6 10.1 11.5 7.8 18.8c-7.8 25.4-1.6 54.1 18.4 74.1s48.7 26.2 74.1 18.4c7.3-2.3 15.2 1 18.8 7.8C203 464.1 227.7 480 256 480s53-15.9 65.4-39.4c3.6-6.8 11.5-10.1 18.8-7.8c25.4 7.8 54.1 1.6 74.1-18.4s26.2-48.7 18.4-74.1c-2.3-7.3 1-15.2 7.8-18.8C464.1 309 480 284.3 480 256s-15.9-53-39.4-65.4c-6.8-3.6-10.1-11.5-7.8-18.8c7.8-25.4 1.6-54.1-18.4-74.1s-48.7-26.2-74.1-18.4c-7.3 2.3-15.2-1-18.8-7.8C309 47.9 284.3 32 256 32zM168.9 45.6C188 18.1 219.9 0 256 0s68 18.1 87.1 45.6c33-6 68.3 3.8 93.9 29.4s35.3 60.9 29.4 93.9C493.9 188 512 219.9 512 256s-18.1 68-45.6 87.1c6 33-3.8 68.3-29.4 93.9s-60.9 35.3-93.9 29.4C324 493.9 292.1 512 256 512s-68-18.1-87.1-45.6c-33 6-68.3-3.8-93.9-29.4s-35.3-60.9-29.4-93.9C18.1 324 0 292.1 0 256s18.1-68 45.6-87.1c-6-33 3.8-68.3 29.4-93.9s60.9-35.3 93.9-29.4z" fill="currentColor"></path></svg>
              </div>
            </div>

            <div className="content">
              <strong>Valorização do Servidor</strong>
              <p>Redução dos cargos em comissão e novo plano de cargos e salários.</p>
            </div>
          </div>

          <div className='containerContent'>

            <div className="right-items">
              <div className="icon-shape">  
              <svg class="colorable-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="chart-line-up-down" data-prefix="fal" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
              <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V400c0 44.2 35.8 80 80 80H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48V48zM368 96h57.4L288 233.4l-68.7-68.7c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 198.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0L448 118.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0 288h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v57.4l-68.7-68.7-22.6 22.6L425.4 352H368c-8.8 0-16 7.2-16 16s7.2 16 16 16z" fill="currentColor"></path></svg>
              </div>
            </div>

            <div className="content">
              <strong>Qualificação dos Gastos</strong>
              <p>Aprimoramento dos controles de custos e otimização dos recursos públicos.</p>
            </div>
          </div>

          <div className='containerContent'>

            <div className="right-items">
              <div className="icon-shape">  
              <svg class="colorable-icon" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" data-icon="building" data-prefix="fal" aria-hidden="true" style={{ width: '16px', height: '16px' }}>
              <path d="M64 32C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32h64V416c0-35.3 28.7-64 64-64s64 28.7 64 64v64h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zM224 416c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h64V416zm-96 96H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H256 224 160 128zM64 120c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24V120zm32 8v32h32V128H96zM248 96h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H248c-13.3 0-24-10.7-24-24V120c0-13.3 10.7-24 24-24zm8 64h32V128H256v32zM64 248c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24V248zm32 8v32h32V256H96zm152-32h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H248c-13.3 0-24-10.7-24-24V248c0-13.3 10.7-24 24-24zm8 64h32V256H256v32z" fill="currentColor"></path></svg>
              </div>
            </div>

            <div className="content">
              <strong>Eficiência Pública</strong>
              <p>Tornar a gestão um modelo em eficiência voltada para eficácia no atendimento.</p>
            </div>
          </div>

         
        </div>
      </div>

    </div>
  );
}


 
           

export default App;
