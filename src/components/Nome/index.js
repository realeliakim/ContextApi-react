import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Nome(){
    const { alunos, setAlunos } = useContext(UserContext);

    return (
        <div>
            <span style={{ color: '#ff0000' }}>Bem vindo: {alunos} </span>
            &nbsp;&nbsp;
            <button onClick={()=> setAlunos('Kobe Bryant')}>Trocar Nome</button>
        </div>
    )
}

export default Nome;