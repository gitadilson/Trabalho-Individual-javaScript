//Exercicio 1ª

const livro = {
    titulo: "Chiquinho",
    autor: "Baltasar lopes",
    anoPublicacao: 1999,
  
    // Método para obter as informações do livro
    getInfo() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    },
  
    // Método para verificar se é um clássico
    isClassico() {
      return this.anoPublicacao < 1990;
    }
  };
  
  // Exemplo de uso
  console.log(livro.getInfo()); // Saída: Título: Dom Casmurro, Autor: Machado de Assis, Ano de Publicação: 1899
  console.log(livro.isClassico()); // Saída: true
  

  //Exercicio 2ª
  
  function criarPessoa(nome, idade, profissao) {
    return {
      nome: nome,
      idade: idade,
      profissao: profissao,
  
      // Método para saudar a pessoa
      saudar() {
        return `Olá, ${this.nome}! Seja bem-vindo(a)!`;
      },
  
      // Método para mostrar informações sobre a pessoa
      mostrarInfo() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`;
      }
    };
  }
  
  // Testando a função
  const pessoa1 = criarPessoa("Maria", 30, "Engenheira");
  const pessoa2 = criarPessoa("João", 25, "Professor");
  
  // Chamando os métodos para verificar o funcionamento
  console.log(pessoa1.saudar()); // Saída: Olá, Maria! Seja bem-vindo(a)!
  console.log(pessoa1.mostrarInfo()); // Saída: Nome: Maria, Idade: 30, Profissão: Engenheira
  
  console.log(pessoa2.saudar()); // Saída: Olá, João! Seja bem-vindo(a)!
  console.log(pessoa2.mostrarInfo()); // Saída: Nome: João, Idade: 25, Profissão: Professor
  

  /////Exercicio 3ª

  class Produto {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }
  
    // Método para aplicar desconto
    aplicarDesconto(percentual) {
      this.preco -= this.preco * (percentual / 100);
    }
  
    // Método para mostrar detalhes do produto
    mostrarDetalhes() {
      return `Produto: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\nCategoria: ${this.categoria}`;
    }
  }
  
  // Testando a classe
  const produto1 = new Produto("Notebook", 3000, "Eletrônicos");
  
  // Aplicando desconto e mostrando detalhes
  produto1.aplicarDesconto(10); // Aplica um desconto de 10%
  console.log(produto1.mostrarDetalhes()); 
  // Saída:
  // Produto: Notebook
  // Preço: R$2700.00
  // Categoria: Eletrônicos
 
  //Exercicio 4ª

 // Classe Produto
class carro {
    constructor(nome, preco, categoria) {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria;
    }
  
    // Método para aplicar desconto
    aplicarDesconto(percentual) {
      this.preco -= this.preco * (percentual / 100);
    }
  
    // Método para mostrar detalhes do produto
    mostrarDetalhes() {
      return `Produto: ${this.nome}\nPreço: R$${this.preco.toFixed(2)}\nCategoria: ${this.categoria}`;
    }
  }
  
  // Classe Eletronico que herda de Produto
  class Eletronico extends Produto {
    constructor(nome, preco, categoria, garantia) {
      super(nome, preco, categoria); // Chama o construtor da classe pai
      this.garantia = garantia; // Propriedade específica da classe Eletronico
    }
  
    // Sobrescreve o método mostrarDetalhes para incluir a garantia
    mostrarDetalhes() {
      return `${super.mostrarDetalhes()}\nGarantia: ${this.garantia} anos`;
    }
  }
  
  // Testando a herança
  const eletronico1 = new Eletronico("Smartphone", 2000, "Eletrônicos", 2);
  
  // Chamando os métodos
  eletronico1.aplicarDesconto(15); // Aplica um desconto de 15%
  console.log(eletronico1.mostrarDetalhes());
  // Saída:
  // Produto: Smartphone
  // Preço: R$1700.00
  // Categoria: Eletrônicos
  // Garantia: 2 anos
  

  //Exercicio 5ª

  class ContaBancaria {
    #saldo; // Propriedade privada
    #titular; // Propriedade privada
  
    constructor(titular, saldoInicial = 0) {
      this.#titular = titular;
      this.#saldo = saldoInicial;
    }
  
    // Método para depositar um valor na conta
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else {
        console.log("O valor do depósito deve ser positivo.");
      }
    }
  
    // Método para sacar um valor da conta
    sacar(valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
      } else if (valor > this.#saldo) {
        console.log("Saldo insuficiente para realizar o saque.");
      } else {
        console.log("O valor do saque deve ser positivo.");
      }
    }
  
    // Método para ver o saldo atual da conta
    verSaldo() {
      return `Saldo atual: R$${this.#saldo.toFixed(2)}`;
    }
  }
  
  // Testando a classe
  const conta1 = new ContaBancaria("Alice", 500);
  
  // Chamando os métodos
  console.log(conta1.verSaldo()); // Saída: Saldo atual: R$500.00
  conta1.depositar(200); // Saída: Depósito de R$200.00 realizado com sucesso.
  console.log(conta1.verSaldo()); // Saída: Saldo atual: R$700.00
  conta1.sacar(100); // Saída: Saque de R$100.00 realizado com sucesso.
  console.log(conta1.verSaldo()); // Saída: Saldo atual: R$600.00
  

  /// Exercicico 6ª

  // Classe Funcionario
class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  
    // Método para calcular o salário do funcionário
    calcularSalario() {
      return this.salario;
    }
  }
  
  // Subclasse Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
      super(nome, salario); // Chama o construtor da classe pai
      this.bonus = bonus; // Propriedade adicional para a subclasse Gerente
    }
  
    // Sobrescrita do método calcularSalario para incluir o bônus
    calcularSalario() {
      return this.salario + this.bonus;
    }
  }
  
  // Testando o polimorfismo
  const funcionario1 = new Funcionario("Carlos", 3000);
  const gerente1 = new Gerente("Ana", 5000, 2000);
  
  // Chamando o método calcularSalario para cada instância
  console.log(`${funcionario1.nome} - Salário: R$${funcionario1.calcularSalario().toFixed(2)}`); 
  // Saída: Carlos - Salário: R$3000.00
  
  console.log(`${gerente1.nome} - Salário: R$${gerente1.calcularSalario().toFixed(2)}`); 
  // Saída: Ana - Salário: R$7000.00

  
  ///Exercicio 7ª

  // Classe ItemInventario
class ItemInventario {
    constructor(nome, quantidade, preco) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
    }
  
    // Método para calcular o valor total do item
    calcularValorTotal() {
      return this.quantidade * this.preco;
    }
  }
  
  // Objeto inventario que contém várias instâncias de ItemInventario
  const inventario = {
    itens: [
      new ItemInventario("Caneta", 100, 1.5),
      new ItemInventario("Caderno", 50, 10),
      new ItemInventario("Lápis", 200, 0.5)
    ],
  
    // Método para calcular o valor total de todos os itens no inventário
    calcularValorTotalInventario() {
      return this.itens.reduce((total, item) => total + item.calcularValorTotal(), 0);
    }
  };
  
  // Testando o inventário
  console.log("Detalhes dos itens:");
  inventario.itens.forEach(item => {
    console.log(`Item: ${item.nome}, Quantidade: ${item.quantidade}, Preço Unitário: R$${item.preco.toFixed(2)}, Valor Total: R$${item.calcularValorTotal().toFixed(2)}`);
  });
  
  console.log(`Valor total do inventário: R$${inventario.calcularValorTotalInventario().toFixed(2)}`);
  // Saída esperada:
  // Detalhes dos itens:
  // Item: Caneta, Quantidade: 100, Preço Unitário: R$1.50, Valor Total: R$150.00
  // Item: Caderno, Quantidade: 50, Preço Unitário: R$10.00, Valor Total: R$500.00
  // Item: Lápis, Quantidade: 200, Preço Unitário: R$0.50, Valor Total: R$100.00
  // Valor total do inventário: R$750.00

  ///Exercicico 8ª

 // Classe base Funcionario
// Classe base Funcionario
class Medico {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    getInfo() {
        return `${this.nome} - Salário: R$${this.salario}`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Medico{
    constructor(nome, salario, projetoAtual) {
        super(nome, salario);
        this.projetoAtual = projetoAtual;
    }

    getInfo() {
        return `${super.getInfo()}, Projeto Atual: ${this.projetoAtual}`;
    }
}

// Classe Designer que herda de Funcionario
class Designer extends Medico {
    constructor(nome, salario, portfolio) {
        super(nome, salario);
        this.portfolio = portfolio;
    }

    getInfo() {
        return `${super.getInfo()}, Portfólio: ${this.portfolio}`;
    }
}

// Classe Departamento que armazena funcionarios
class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome !== nome);
    }

    listarFuncionarios() {
        console.log(`Funcionários do departamento ${this.nome}:`);
        this.funcionarios.forEach(funcionario => {
            console.log(funcionario.getInfo());
        });
    }
}

// Exemplo de uso
const departamento = new Departamento("Desenvolvimento");

const dev1 = new Desenvolvedor("Alice", 7000, "Projeto X");
const dev2 = new Desenvolvedor("Bob", 7500, "Projeto Y");
const designer1 = new Designer("Charlie", 6000, "Portfólio A");

departamento.adicionarFuncionario(dev1);
departamento.adicionarFuncionario(dev2);
departamento.adicionarFuncionario(designer1);

departamento.listarFuncionarios();

departamento.removerFuncionario("Alice");

console.log("\nFuncionários após remover Alice:");
departamento.listarFuncionarios();

//// Exercicio 9ª

// Classe base Quarto
class Quarto {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
        this.reservado = false; // Indica se o quarto está reservado
    }

    reservar() {
        if (!this.reservado) {
            this.reservado = true;
            return true; // Reserva bem-sucedida
        }
        return false; // Quarto já reservado
    }

    cancelar() {
        if (this.reservado) {
            this.reservado = false;
            return true; // Cancelamento bem-sucedido
        }
        return false; // Quarto não estava reservado
    }

    isDisponivel() {
        return !this.reservado; // Retorna true se o quarto estiver disponível
    }

    // Método que será sobrescrito nas subclasses
    getPreco() {
        return 0; // Implementação padrão
    }
}

// Classe QuartoSimples que herda de Quarto
class QuartoSimples extends Quarto {
    constructor(numero) {
        super(numero, "Simples");
    }

    getPreco() {
        return 100; // Preço para Quarto Simples
    }
}

// Classe SuiteLuxo que herda de Quarto
class SuiteLuxo extends Quarto {
    constructor(numero) {
        super(numero, "Suite Luxo");
    }

    getPreco() {
        return 300; // Preço para Suite Luxo
    }
}

// Classe Hotel
class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = [];
    }

    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
    }

    realizarReserva(numeroQuarto) {
        const quarto = this.quartos.find(q => q.numero === numeroQuarto);
        if (quarto && quarto.isDisponivel()) {
            quarto.reservar();
            console.log(`Quarto ${quarto.numero} reservado com sucesso!`);
        } else {
            console.log(`Quarto ${numeroQuarto} não disponível.`);
        }
    }

    cancelarReserva(numeroQuarto) {
        const quarto = this.quartos.find(q => q.numero === numeroQuarto);
        if (quarto && !quarto.isDisponivel()) {
            quarto.cancelar();
            console.log(`Reserva do quarto ${quarto.numero} cancelada com sucesso!`);
        } else {
            console.log(`Quarto ${numeroQuarto} não está reservado.`);
        }
    }

    verificarDisponibilidade() {
        console.log(`Disponibilidade dos quartos no Hotel ${this.nome}:`);
        this.quartos.forEach(quarto => {
            console.log(`Quarto ${quarto.numero} (${quarto.tipo}) - ${quarto.isDisponivel() ? 'Disponível' : 'Reservado'}`);
        });
    }

    listarPrecos() {
        console.log(`Preços dos quartos no Hotel ${this.nome}:`);
        this.quartos.forEach(quarto => {
            console.log(`Quarto ${quarto.numero} (${quarto.tipo}) - R$${quarto.getPreco()}`);
        });
    }
}

// Exemplo de uso
const hotel = new Hotel("Hotel Exemplar", "São Paulo");

const quarto1 = new QuartoSimples(101);
const quarto2 = new SuiteLuxo(102);
const quarto3 = new QuartoSimples(103);

hotel.adicionarQuarto(quarto1);
hotel.adicionarQuarto(quarto2);
hotel.adicionarQuarto(quarto3);

hotel.verificarDisponibilidade(); // Mostra a disponibilidade dos quartos
hotel.listarPrecos(); // Lista os preços dos quartos

hotel.realizarReserva(101); // Reserva o quarto 101
hotel.realizarReserva(102); // Reserva a Suite Luxo

hotel.verificarDisponibilidade(); // Mostra a disponibilidade após reservas
hotel.cancelarReserva(101); // Cancela a reserva do quarto 101
hotel.verificarDisponibilidade(); // Mostra a disponibilidade após cancelamento


///Exercicio 10ª

// Classe Livro
class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true; // Indica se o livro está disponível
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false; // O livro não está mais disponível
            return true; // Empréstimo bem-sucedido
        }
        return false; // Livro já emprestado
    }

    devolver() {
        this.disponivel = true; // O livro está disponível novamente
    }

    isDisponivel() {
        return this.disponivel; // Retorna true se o livro estiver disponível
    }
}

// Classe Biblioteca
class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = []; // Lista de livros na biblioteca
    }

    adicionarLivro(livro) {
        this.livros.push(livro); // Adiciona um livro à lista
    }

    emprestarLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (livro && livro.emprestar()) {
            console.log(`Livro '${livro.titulo}' emprestado com sucesso!`);
        } else {
            console.log(`Livro '${titulo}' não disponível para empréstimo.`);
        }
    }

    devolverLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (livro) {
            livro.devolver();
            console.log(`Livro '${livro.titulo}' devolvido com sucesso!`);
        } else {
            console.log(`Livro '${titulo}' não encontrado.`);
        }
    }

    livrosDisponiveis(genero) {
        const livrosFiltrados = this.livros.filter(l => l.isDisponivel() && (!genero || l.genero === genero));
        return livrosFiltrados; // Retorna a lista de livros disponíveis filtrados por gênero
    }

    listarLivrosDisponiveis(genero) {
        const livros = this.livrosDisponiveis(genero);
        if (livros.length > 0) {
            console.log(`Livros disponíveis${genero ? ` do gênero '${genero}'` : ''}:`);
            livros.forEach(livro => {
                console.log(`- ${livro.titulo} por ${livro.autor}`);
            });
        } else {
            console.log(`Nenhum livro disponível${genero ? ` do gênero '${genero}'` : ''}.`);
        }
    }
}

// Exemplo de uso
const biblioteca = new Biblioteca("Biblioteca Central");

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia");
const livro2 = new Livro("1984", "George Orwell", "Ficção Científica");
const livro3 = new Livro("A Revolução dos Bichos", "George Orwell", "Ficção");
const livro4 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);

biblioteca.listarLivrosDisponiveis(); // Lista todos os livros disponíveis

biblioteca.emprestarLivro("1984"); // Empresta o livro "1984"
biblioteca.emprestarLivro("Harry Potter e a Pedra Filosofal"); // Empresta o livro "Harry Potter"

biblioteca.listarLivrosDisponiveis(); // Lista livros disponíveis após empréstimos

biblioteca.devolverLivro("1984"); // Devolve o livro "1984"

biblioteca.listarLivrosDisponiveis(); // Lista livros disponíveis após devolução

biblioteca.listarLivrosDisponiveis("Fantasia"); // Lista livros disponíveis do gênero Fantasia
