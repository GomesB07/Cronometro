import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, DivCronometro, Cronometro, SpanPrincipal, DivButtons, Buttons, DivHistorico } from "./styles/styles";


function App() {
  const [minutos, setMinutos] = useState(0)
  const [segundos, setSegundos] = useState(0)
  const [milissegundos, setMilissegundos] = useState(0)
  const [timers, setTimers] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const historicoRef = useRef()


  let timer;

  useEffect(() => {

    if (isRunning) {
      // eslint-disable-next-line
      timer = setInterval(() => {
        setMilissegundos((milissegundos) => milissegundos + 10)
        if (milissegundos === 1000) {
          setSegundos((segundos) => segundos + 1)
          setMilissegundos(0)
        }
        if (segundos === 60) {
          setMinutos((minutos) => minutos + 1)
          setSegundos(0)
        }
      }, 10)
      return () => clearInterval(timer)
    }
    // eslint-disable-next-line
  }, [isRunning, milissegundos, segundos, minutos])


  function start() {
    setIsRunning(true)
  }
  function stop() {
    const crono = [minutos, segundos, milissegundos]
    setIsRunning(false)
    setTimers([...timers, crono])

    if(historicoRef.current){
      setTimeout(() => {
        historicoRef.current.scrollTop = historicoRef.current.scrollHeight

      }, 10)
    }
  }
  function restart(){
    setMilissegundos(0)
    setSegundos(0)
    setMinutos(0)
    setTimers([])
  }


  return (
    <Container>

      <DivCronometro>

        <Cronometro>
          <SpanPrincipal><span>{minutos.toString().padStart(2, '0')}</span>:<span>{segundos.toString().padStart(2, '0')}</span>:<span>{milissegundos.toString().padStart(2, '0')}</span></SpanPrincipal>
          <DivButtons>
            {isRunning ? <Buttons onClick={stop}>Stop</Buttons> : <Buttons onClick={start} $start>Start</Buttons>}
            <Buttons onClick={restart} $restart>Restart</Buttons>
          </DivButtons>
        </Cronometro>

        <DivHistorico>
          <ul ref={historicoRef}>
            {timers.map((time) => (
              <li key={Math.random()}>
                {`${time[0].toString().padStart(2, '0')}:${time[1].toString().padStart(2, '0')}:${time[2].toString().padStart(2, '0')}`}
              </li>
            ))
            }
          </ul>
        </DivHistorico>
        
      </DivCronometro>

    </Container>

  );
}

export default App;
