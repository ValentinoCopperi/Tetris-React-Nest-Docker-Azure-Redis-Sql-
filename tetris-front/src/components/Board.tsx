import { Cell } from "./Cell"


interface BoardProps {

    board: number[][],
    handleBoardChange: (row: number, col: number, value: number) => void,
    turn: number

}


export const Board = ({ board, handleBoardChange, turn }: BoardProps) => {

    const onClick = (row: number, col: number) => {

        const newTurn = turn === 1 ? 2 : 1;
        handleBoardChange(row, col, newTurn)

    }

    return (

        <div className="flex flex-col">

            {
                board.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} className="flex">
                            {row.map((cellValue, colIndex) => {
                                return <Cell key={colIndex} onClick={onClick} rowIndex={rowIndex} collIndex={colIndex} value={cellValue} />
                            })}
                        </div>
                    )
                })
            }

        </div>

    )


}