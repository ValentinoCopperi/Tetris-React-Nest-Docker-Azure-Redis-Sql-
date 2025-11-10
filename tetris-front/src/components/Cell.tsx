import { colors } from "../constants/colors";
import { useTicTacToe } from "../hooks/useTicTacToe";

interface CellProps {

    value: number;
    rowIndex: number;
    collIndex: number;
    onClick: (row: number, col: number) => void
}


export const Cell = ({ value, rowIndex, collIndex, onClick }: CellProps) => {



    const handleClickCell = () => {

        onClick(rowIndex, collIndex)

    }
    
    return (
        <div
            className="flex items-center justify-center min-w-[120px] min-h-[120px] m-0.5 border border-[#3c4a6b] bg-[#1e2742] hover:bg-[#253054] transition-all duration-150 ease-in-out"
            onClick={handleClickCell}
        >
            <p
                className={`text-4xl font-semibold ${value === 1 ? 'text-[#ff5252]' : 'text-[#4dd0e1]'}`}
            >
                {value !== 0 && (value === 1 ? "X" : "O")}
            </p>
        </div>
    )

}