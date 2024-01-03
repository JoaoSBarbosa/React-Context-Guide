# Guia Rápido: React Context API

## O que é o Context no React?

O Context é uma funcionalidade do React que simplifica a propagação de dados através da árvore de componentes, permitindo o compartilhamento de informações sem a necessidade de passar manualmente props entre cada componente.

## Como Usar o Context

### Configuração Inicial

1. Instale as dependências do projeto:

```
bash
npm install
```

1. Crie um arquivo para o seu contexto (por exemplo, `ContextContainer.tsx`):

```
jsx
import { createContext, ReactNode, useState } from "react";

type CountContextProps = {
  onlineCount: number;
  setOnlineCount: (value: number) => void;
};

export const CountContext = createContext<CountContextProps | null>(null);

type CountContextComponentProps = {
  children: ReactNode;
};

export const CountContextComponent = ({ children }: CountContextComponentProps) => {
  const [onlineCount, setOnlineCount] = useState<number>(2);

  return (
    <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
      {children}
    </CountContext.Provider>
  );
};
```

### Consumindo o Context

Em qualquer componente que deseja consumir o contexto, utilize o hook `useContext`:

```
jsx
import { useContext } from "react";
import { CountContext } from "@/app/context/ContextContainer";

const MeuComponente = () => {
  const countContext = useContext(CountContext);

  // Exemplo de como utilizar o contexto
  const handleBanAll = () => {
    countContext?.setOnlineCount(0);
  };

  // Outras operações com o contexto...
};
```

## Resumo

O React Context é uma ferramenta poderosa para gerenciar o estado global em sua aplicação, eliminando a necessidade de passar props manualmente. Ao criar e consumir um contexto, você pode compartilhar dados de forma eficiente em toda a sua aplicação.

Espero que este guia seja útil para entender e começar a usar o React Context! 🚀
