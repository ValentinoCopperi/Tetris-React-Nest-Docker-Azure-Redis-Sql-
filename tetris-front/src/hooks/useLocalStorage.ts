

interface useLocalStorageType {

    saveNewWinner: (winner: number) => void;
    getHistorial: () => Record<number, number>
}

const STORAGE_KEY = 'tic-tac-toe-history';


export const useLocalStorage = (): useLocalStorageType => {


    const saveNewWinner = (winner: number) => {

        const stored = getHistorial();

        const newHistorial = {
            ...stored,
            [winner]: (stored[winner] || 0) + 1
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistorial))

    }


    const getHistorial = (): Record<number, number> => {

        const stored = localStorage.getItem(STORAGE_KEY)

        return stored ? JSON.parse(stored) : { 1: 0, 2: 0 }


    }


    return {
        saveNewWinner,
        getHistorial
    }

}