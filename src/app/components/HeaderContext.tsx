import {BottomHeader} from "@/app/components/BottomHeader";

export const HeaderContext = () => {
    return (
        <header className={"max-w-screen-sm mx-auto my-4 border border-b-gray-700 p-6"}>
            <div className={"flex justify-between items-center"}>
                <div>
                    <img src="https://uploaddeimagens.com.br/images/004/702/183/full/Component_19.png?1704243470" alt=""
                         className={"max-w-16"}/>
                </div>
                <div>
                    <ul className={"flex gap-4 uppercase"}>
                        <li>
                            <a href="https://github.com/JoaoSBarbosa" target={"_blank"}
                               title={"Visite o meu GitHub"}>Git</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/devjbarbosa/" target={"_blank"}
                               title={"Visite o meu LinkedIn"}>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>

            <BottomHeader/>
        </header>
    )
}