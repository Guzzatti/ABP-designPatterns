# Projeto: Sistema de Montagem de Computadores Personalizados

Este projeto foi desenvolvido como parte da disciplina de **Design Patterns**, ministrada pelo Prof.° **Mateus Martinelli Paegle**. O objetivo é aplicar padrões de projeto para resolver um problema real de forma modular, escalável e reutilizável.

## 👤 Integrantes

- [Gabriel Guzzatti](https://github.com/Guzzatti)
- [Eliandra Motta Cardoso](https://github.com/ardnaile)
- [Rafael Rodrigues Vieira de Carvalho](https://github.com/rafael230125)
- [Wallace da Silva Mendes](https://github.com/WallaceB2)

## 🛠️ Problema 

Na vida real, ao montar um computador personalizado, o usuário pode escolher diferentes combinações de peças — como CPU, memória RAM, armazenamento, fonte, gabinete, etc. No entanto, nem toda combinação é válida. Por exemplo:

- Não adianta escolher uma CPU sem definir uma fonte de energia compatível.

- Um computador sem memória RAM ou sem armazenamento mínimo não funcionará.

- Sem gabinete, não há estrutura física para montar o PC.

O grande desafio é garantir que o usuário tenha liberdade para personalizar seu computador, mas que a configuração final atenda a requisitos mínimos obrigatórios para o funcionamento do sistema.

## 💡 Descrição

O foco do projeto é mostrar como um mesmo problema pode ser resolvido de formas diferentes. Os padrões escolhidos para demonstrar isso foram os seguintes:

### [Chain of Responsibility](https://github.com/Guzzatti/ABP-designPatterns/tree/c2af12f9fb242cce2cd1bd8af98a137ef1163af3/src/comportamentais/chain_of_responsability)

Para o Chain of responsability, foi criada uma cadeia de validadores, onde cada um verifica um componente específico. Se um componente estiver ausente ou inadequado, o validador adiciona um erro à lista. A requisição (objeto ComputerComponents) passa por toda a cadeia até o fim.

Cada validador:

- Implementa uma interface comum (ComponentValidator)
- Herda de uma classe base (BaseValidator) que permite encadeamento dinâmico
- Trata apenas a sua responsabilidade (ex: CPUValidator valida só a CPU)

Cadeia usada:
CPU → RAM → Armazenamento → Fonte → Gabinete

Para rodar - npx ts-node src/comportamentais/chain_of_responsability/main.ts

### Abstract Factory

Permite criar **famílias completas de componentes compatíveis** (Intel ou AMD), sem que o cliente conheça os detalhes internos:

- **`ComputerFactory`** define a interface abstrata com métodos como `createProcessor()`, `createMotherboard()` etc.
- **`IntelFactory`** e **`AmdFactory`** implementam `ComputerFactory`, cada uma produzindo componentes específicos.
- A função **`createComputer(factory)`** monta um computador a partir da factory fornecida.
- **Vantagens**: garante compatibilidade entre componentes, mantém cliente desacoplado das implementações concretas, facilita a extensão para novas famílias sem alterações no cliente

### [Builder](https://github.com/Guzzatti/ABP-designPatterns/tree/c2af12f9fb242cce2cd1bd8af98a137ef1163af3/src/criacionais/builder)

Para o padrão builder foi criada a interface `IComputadorBuilder` e a partir dela dois builders concretos. Ambos retornam um objeto `Computador()`: 

- `ComputadorBuilder` cria o pc de forma completamente personalizável. A partir dos setters é possível simular a escolha das peças. Se uma peça obrigatória não é escolhida, o programa retorna erro;
- `PresetComputadorBuilder` cria o pc a partir de configurações pré definidas (GAMER, BASICO E SERVIDOR).

### Composite
- Componente.ts
Define a interface Componente, base do padrão Composite. Declara métodos que os componentes simples e compostos devem implementar, como exibirInformacoes().

- ComponenteSimples.ts
Implementa a interface Componente representando itens simples (como memória, HD, etc.). Exibe seu nome e preço individual.

- ComponenteComposto.ts
Também implementa Componente, mas representa estruturas que contêm outros componentes (simples ou compostos). Possui métodos para adicionar/remover componentes e calcular o preço total.

- Computador.ts
Subclasse de ComponenteComposto. Representa um computador como um conjunto de peças, reutilizando a lógica do componente composto com o nome "Computador".

- KitComponentes.ts
Outro tipo de ComponenteComposto que representa um "kit" com múltiplos componentes. Serve para demonstrar a flexibilidade do padrão composite.

## ⚙ Como executar o projeto

Após rodar o comando `npm install` para instalar as dependências, rode o seguinte comando para rodar o arquivo main.ts sem compilar o projeto:

```
npx ts-node src/main.ts
```
Dessa forma, é possível ver o retorno dos exemplos de uso de cada padrão!
