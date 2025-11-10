/**
 * Función pura para detectar el ganador en un tablero de Tic Tac Toe
 * @param board - Tablero 3x3 con valores 0 (vacío), 1 (jugador 1), 2 (jugador 2)
 * @returns {number | null} - Retorna 1 o 2 si hay ganador, null si no hay ganador
 */
export const checkWinner = (board: number[][]): number | null => {
    
    // Verificar filas
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== 0 && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return board[row][0];
        }
    }

    // Verificar columnas
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== 0 && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return board[0][col];
        }
    }

    // Verificar diagonal principal (de arriba-izq a abajo-der)
    if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }

    // Verificar diagonal secundaria (de arriba-der a abajo-izq)
    if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }

    // No hay ganador
    return null;
};