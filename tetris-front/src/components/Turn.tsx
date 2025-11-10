
import { colors } from './../constants/colors';

interface TurnProps {

    turn : number;

}

export const Turn = ( { turn } : TurnProps ) => {

    const turnText = turn === 1 ? "O" : "X"
    const textColor = turn === 1 ? colors.playerO : colors.playerX


    return (
        <div 
            style={{backgroundColor : colors.cardBg , color : colors.textPrimary}}
            className='p-3 rounded-3xl'
        >
            Turno de Jugador : <span style={{color : textColor}}>{turnText}</span>
        </div>
    )
    
}