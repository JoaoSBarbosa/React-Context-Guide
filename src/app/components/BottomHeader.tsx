import {useContext} from "react";
import {CountContext, CountContextComponent} from "@/app/context/ContextContainer";

export const BottomHeader = () => {
    const countContext = useContext(CountContext);
    const handleBanAll = () => {
        countContext?.setOnlineCount(0);
    }
    const handleAllowAccess = () => {
        countContext?.setOnlineCount(countContext?.onlineCount + 10)
    }
    const handleBanTen = () => {
        if (countContext?.onlineCount === undefined) {
            return
        }
        if (countContext?.onlineCount <= 10) {
            countContext?.setOnlineCount(0);
        } else {
            countContext?.setOnlineCount(countContext?.onlineCount - 10);
        }
    }
    return (
        <div className={"m-2"}>
            <p className={"text-xs"}>
                {countContext?.onlineCount} {countContext?.onlineCount !== 1 ? 'usuários' : 'usuário'} <span
                className={"text-green-600"}>online!</span> 🚀
            </p>
            <div className={"flex gap-4 my-1"}>
                <button
                    className="bg-red-600  rounded-md py-1 px-2"
                    onClick={handleBanAll}>
                    Banir todos 🚫
                </button>
                <button
                    className="bg-red-400 text-red-900 rounded-md py-1 px-2"
                    onClick={handleBanTen}>
                    Banir 10 ⛔
                </button>
                <button
                    className="bg-green-400 text-green-950 rounded-md py-1 px-2"
                    onClick={handleAllowAccess}>Permitir +10 🌐
                </button>
            </div>
        </div>
    )
}