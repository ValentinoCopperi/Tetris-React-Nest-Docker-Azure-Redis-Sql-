import { colors } from "../constants/colors"

interface WinnerProps {

    historial: Record<number, number>

}

export const WinnerCounts = ({ historial }: WinnerProps) => {


    return (
        <div
            style={{ backgroundColor: colors.cardBg, color: colors.textPrimary }}
            className="absolute top-3 left-3 flex text-xl items-center justify-center rounded-3xl p-2"
        >



            {
                Object.entries(historial).map(([player, wins]) => {

                    const playerText = Number(player) === 1 ? "X" : "O"
                    const textColor = Number(player) === 1 ? colors.playerX : colors.playerO

                    return (
                        <p
                            key={player}
                            className="mx-3"
                        >
                            <span style={{color : textColor}}>{playerText} </span>: {wins}
                        </p>
                    )


                })
            }


        </div>
    )


}