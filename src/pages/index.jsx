import { useState, useEffect, useMemo } from 'react';


const Teste = () => {

    const [age, setAge] = useState(26);

    const handleChangeName = () => {
        setAge(prev => prev ===26? 32: 26)
    }


    const calculo = useMemo(() => {
        console.log('calculou', age)
    }, [age])
    
    console.log('renderizou', calculo);

    //useMemo (armazena variaveis)
    //useMemo (armazena funções completas)

  return (
    <div>
        <p>
            {age}
        </p>
        <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export { Teste };
