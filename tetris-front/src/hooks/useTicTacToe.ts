import { useMemo, useState } from "react";


type Turns = 1 | 2


interface useTicTacToeType {
    board: number[][];
    handleBoardChange: (row: number, col: number, value: number) => void;
    turn: Turns;
    reset: () => void;
    isComplete : boolean
}

const initialBoard: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

export const useTicTacToe = (): useTicTacToeType => {

    const [board, setBoard] = useState<number[][]>(initialBoard);

    const [turn, setTurn] = useState<Turns>(1)

    const reset = () => {

        setBoard(initialBoard)
        setTurn(1)

    }

    const handleBoardChange = (row: number, col: number, value: number) => {

        if (board[row][col] === 0) {
            setBoard(prev => {

                const newBoard = prev.map(rowArray => [...rowArray]);

                newBoard[row][col] = value;

                return newBoard;
            })

            setTurn(prev => prev === 1 ? 2 : 1)
        }

    }

    const isComplete = useMemo(() => {

        let count = 0;

        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 3; j++) {

                if (board[i][j] !== 0) {
                    count++
                }

            }

        }

        return count === 9;

    }, [board])



    return {
        board,
        handleBoardChange,
        turn,
        reset,
        isComplete
    };
}