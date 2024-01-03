export const BodyContext = () => {
    return (
        <div className={"max-w-screen-sm mx-auto my-4 border border-b-gray-700 p-6"}>
            <h1 className={"text-4xl font-bold my-4"}>
                Aula de Context
            </h1>
            <h2 className={"text-2xl my-2"}>
                Uso e funcionalidades
            </h2>
            <p>
                O Context API é uma funcionalidade do React que fornece uma forma de
                compartilhar dados entre componentes, sem a necessidade de passar explicitamente as props manualmente
                por todos os níveis da árvore de componentes. Isso é
                particularmente útil em situações em que diversos componentes precisam acessar o
                mesmo conjunto de dados, como o tema do aplicativo, informações de autenticação,
                preferências do usuário, entre outros.
            </p>

        </div>
    )
}