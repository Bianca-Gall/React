# React
## Aplicação de Lista de Dados
Este é um projeto de uma aplicação que exibe uma lista de dados, onde é possível realizar pesquisas, excluir itens e favoritar. O tema do trabalho é a família Simpson, com as cores do mesmo tema, a estilização é simples porém agradável.

### Requisitos
- Dados: Array de objetos com pelo menos 10 itens.
- Componente de Input: Barra de pesquisa para filtrar os dados.
- Componente de Visualização: Lista que exibe os dados do array.
- Funcionalidades
- Exibição dos Dados
- A aplicação exibe os dados fornecidos em forma de lista, utilizando a função map para percorrer o array de objetos e renderizar cada item.

#### Pesquisa
A barra de pesquisa permite que o usuário digite um termo para filtrar os dados. A medida que o usuário digita, a lista de exibição é atualizada de acordo com o filtro aplicado. Isso é realizado através da vinculação do input com o estado (state) e utilizando o evento onChange para capturar as alterações do valor digitado.

#### Exclusão de Item
Cada item na lista possui um botão de excluir. Ao clicar nesse botão, o item correspondente é removido da lista. Essa funcionalidade utiliza uma função de filtro (filter) para criar uma nova lista sem o item selecionado.

#### Favoritar Item
Cada item na lista possui um botão de favoritar. Ao clicar nesse botão, uma característica do objeto correspondente é alterada para indicar que foi favoritado. Os itens favoritados são destacados visualmente, por exemplo, através de uma cor diferente. Isso é realizado através da renderização condicional, onde é aplicada uma classe CSS ou estilo diferente aos itens favoritados.


## Colaboradores 

### Alunos 🚀
- [Bianca](https://www.linkedin.com/in/bianca-gall-de-freitas-349b0175/) 

### Monitor 🚀
- [Zépa](https://github.com/moisesbaddini)

### Professor 🚀
- [João Felipe](https://www.linkedin.com/in/brjoaof/)
