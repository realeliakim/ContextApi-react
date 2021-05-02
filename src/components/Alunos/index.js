import Nome from '../Nome';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Alunos(){

    const { qtdAlunos } = useContext(UserContext);
    return (
        <div>
            <Nome />
            <br />
            <strong>Total de alunos: {qtdAlunos}</strong>
            
        </div>
    )
}

export default Alunos;