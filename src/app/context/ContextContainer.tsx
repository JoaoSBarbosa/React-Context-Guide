import {createContext, ReactNode, useState} from "react";

type countContextProps = {
    onlineCount: number;
    setOnlineCount: (value: number) => void;
}
export const CountContext = createContext<countContextProps | null>(null);


type CountContextComponentProps = {
    children: ReactNode
}
export const CountContextComponent = ({children}: CountContextComponentProps) => {
    const [onlineCount, setOnlineCount] = useState<number>(2);

    return (
        <CountContext.Provider value={{onlineCount, setOnlineCount}}>
            {children}
        </CountContext.Provider>
    )
}