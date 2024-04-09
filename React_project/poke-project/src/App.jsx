import './App.css'

function App() {

  return (
    <>
    <div className="main-container">
    <h1>Hola mundo</h1>

    <div className='layout-game'>
      <div className='screen-container'>
        <div className='screen-layout'>
          <div className='screen-display'></div>
        </div>
      </div>
      
      <div className='buttons-container'>
        <div className='container-dpad'>
          <div className='up-container'>
            <button className='up-button'></button>
          </div>
          <div className='sides-container'>
            <button className='left-button'></button>
            <div className='center-button'></div>
            <button className='right-button'></button>
          </div>
          <div className='down-container'>
            <button className='down-button'></button>
          </div>
        </div>

        <div className='container-select'>
          <div className='button-select-container'>
            <button className='button-select'></button>
            <div>select</div>
          </div>
          <div className='button-start-container'>
            <button className='button-start'></button>
            <div>start</div>
          </div>
        </div>

        <div className='container-action'>
          <div className='button-b-all'>
            <div className='button-b-container'>
              <button className='button-b'></button>
              <div>B</div>
            </div>
          </div>
          
          <div className='button-a-all'>
            <div className='button-a-container'>
              <button className='button-a'></button>
              <div>A</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default App
