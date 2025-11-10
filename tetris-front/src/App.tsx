import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Board } from "./components/Board";
import { colors } from "./constants/colors"
import { useTicTacToe } from "./hooks/useTicTacToe"
import { checkWinner } from "./hooks/useWinner";
import { WinnerModal } from "./components/WinnerModal";
import { Turn } from "./components/Turn";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WinnerCounts } from "./components/WinnersCount";
import { useGetApiHealth } from "./hooks/fetch";

function App() {

 


  const { board, handleBoardChange, turn, reset, isComplete } = useTicTacToe();
  const { getHistorial, saveNewWinner } = useLocalStorage();
  const winner = checkWinner(board);

  const historial = getHistorial();

  // Guardar ganador cuando cambie
  useEffect(() => {
    if (winner !== null) {
      saveNewWinner(winner);
    }
  }, [winner, saveNewWinner]);

  return (
    <main
      style={{ backgroundColor: colors.bgPrimary }}
      className="min-h-screen min-w-screen flex flex-col items-center justify-center space-y-2"
    >

      <div className="text-5xl">
        <h1
          style={{ color: colors.textPrimary }}
          className="font-semibold"
        >
          Tic Tac Toe in
          <span
            style={{ color: colors.textAccent }}
            className="font-bold mx-1"
          >
            React
          </span>
        </h1>
      </div>


      <Board
        board={board}
        handleBoardChange={handleBoardChange}
        turn={turn}
      />


      {
        !isComplete && (
          <Turn
            turn={turn}
          />
        )
      }

      <WinnerCounts
        historial={historial}
      />

      {
        isComplete && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: colors.warning,
              color: colors.bgPrimary
            }}
            className='px-6 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
            onClick={reset}
          >
            Reiniciar Partida
          </motion.button>
        )
      }


      {
        winner !== null && <WinnerModal winner={winner} reset={reset} />
      }


    </main>
  )
}

export default App
