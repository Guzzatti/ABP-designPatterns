# Projeto: Sistema de Montagem de Computadores Personalizados

Este projeto foi desenvolvido como parte da disciplina de **Design Patterns**, ministrada pelo Prof.° **Mateus Martinelli Paegle**. O objetivo é aplicar padrões de projeto para resolver um problema real de forma modular, escalável e reutilizável.

## 👤 Integrantes

- [Gabriel Guzzatti](https://github.com/Guzzatti)
- [Eliandra Motta Cardoso](https://github.com/ardnaile)
- [Rafael Rodrigues Vieira de Carvalho](https://github.com/rafael230125)
- [Wallace da Silva Mendes](https://github.com/WallaceB2)

## 🛠️ Problema 

Na vida real, ao montar um computador personalizado, o usuário pode escolher diferentes combinações de peças — como CPU, memória RAM, armazenamento, fonte, gabinete, etc. No entanto, nem toda combinação é válida. Por exemplo:

Não adianta escolher uma CPU sem definir uma fonte de energia compatível.

Um computador sem memória RAM ou sem armazenamento mínimo não funcionará.

Sem gabinete, não há estrutura física para montar o PC.

O grande desafio é garantir que o usuário tenha liberdade para personalizar seu computador, mas que a configuração final atenda a requisitos mínimos obrigatórios para o funcionamento do sistema.

## 💡 Descrição

O foco do projeto é mostrar como um mesmo problema pode ser resolvido de formas diferentes. Os padrões escolhidos para demonstrar isso foram os seguintes:

### [Chain of Responsibility](https://github.com/Guzzatti/ABP-designPatterns/tree/c2af12f9fb242cce2cd1bd8af98a137ef1163af3/src/comportamentais/chain_of_responsability)

### Abstract Factory

### [Builder](https://github.com/Guzzatti/ABP-designPatterns/tree/c2af12f9fb242cce2cd1bd8af98a137ef1163af3/src/criacionais/builder)

Para o padrão builder foi criada a interface `IComputadorBuilder` e a partir dela dois builders concretos. Ambos retornam um objeto `Computador()`: 

- `ComputadorBuilder` cria o pc de forma completamente personalizável. A partir dos setters é possível simular a escolha das peças. Se uma peça obrigatória não é escolhida, o programa retorna erro;
- `PresetComputadorBuilder` cria o pc a partir de configurações pré definidas (GAMER, BASICO E SERVIDOR).

### Composite

## ⚙ Como executar o projeto

Após rodar o comando `npm install` para instalar as dependências, rode o seguinte comando para rodar o arquivo main.ts sem compilar o projeto:

```
npx ts-node main.ts
```
Dessa forma, é possível ver o retorno dos exemplos de uso de cada padrão!
