---
title: "Princípios de Programação Orientada a Objetos"
description: "Entenda os pilares fundamentais da POO."
date: "2026-01-08"
tags:
  - programação
  - oop
  - java
authors: ['olavo']
image: './header.png'
---

---

## Pilares de Programação Orientada a Objetos (POO)

Temos quatro pilares essenciais na POO:

1. **Encapsulamento**: Agrupamento de dados e métodos que operam sobre esses dados em uma única unidade (classe). Isso protege o estado interno do objeto, permitindo acesso controlado através de métodos públicos.
2. **Abstração**: Foco nos aspectos essenciais de um objeto, ignorando detalhes desnecessários. Isso simplifica a interação com objetos complexos, expondo apenas o que é relevante.
3. **Herança**: Mecanismo que permite criar novas classes baseadas em classes existentes, promovendo reutilização de código e estabelecimento de hierarquias entre classes.
4. **Polimorfismo**: Capacidade de objetos de diferentes classes responderem a mesma mensagem (método) de maneiras diferentes. Isso permite flexibilidade e extensibilidade no código.

![img.png](img.png)

Iremos agora, abordar cada um desses pilares com mais detalhes e exemplos práticos em Java.

### 1. Encapsulamento

O objetivo do encapsulamento é esconder detalhes internos de um objeto, expondo somente a interface do mesmo, exemplo:

![img_1.png](img_1.png)

Imaginemos um carro. O motorista é o usuário deste carro e com isso, ele pode interagir com o carro.

Entretanto, ele só interage com as interfaces disponíveis neste carro, como o volante, os pedais e o câmbio.

O motorista não precisa entender como o motor funciona para dirigir o carro, isso são detalhes ocultos, detalhes **encapsulados.**

Portanto, não é nada interessante que a gente deixe todos os objetos da nossa aplicação com atributos públicos e expostos,
pois assim qualquer outro objeto poderia alterar o estado interno deste objeto, quebrando a lógica de negócio.

O AirBag, por exemplo, não deve ser ativado pelo usuário quando bem quiser... e ainda entra os modificadores de acesso.

#### Modificadores de Acesso - Atributos

Quais atributos e métodos devem ser públicos, privados ou protegidos?

Conforme citamos assim, volante e pedal é ok ser público e acessado quando bem entender. Já o airbag e o motor, não.

Para os visíveis (públicos), podemos usar o modificador `public` -> `public String volante`.

Para os privados, usamos o modificador `private` -> `private String motor`.

O private permitirá acessar os atributos somente dentro da própria classe.

#### Modificadores de Acesso - Métodos Getters e Setters

No geral, dificilmente teremos atributos públicos. A maioria sempre será private e acessaremos os mesmos com Getters e Setters.

Eles nos permitem buscar o atributo em questão (get) e settar algum valor neles (setter).

#### Modificadores de Acesso - Classes

As classes também podem ter modificadores de acesso. Podemos ter classes públicas e privadas.

#### Encapsulamento no Construtor da Classe

No construtor da classe, podemos definir quais atributos serão obrigatórios para criar um objeto daquela classe.

Nesse construtor, é onde inicializamos os atributos.

Ele pode até ser private, o problema é que isso impediria a criação de objetos fora da própria classe.

```java
public Carro() {
    this.motor = new Motor(); // Inicializando o motor no construtor
    this.volante = "Volante";
    this.pedal = "Pedais";
}
```

### 2. Abstração

Em resumo, seria esconder e exibir dados e comportamentos.

Isso é extremamente importante, pois é comum o desenvolvedor esconder detalhes dos objetos, para facilitar o seu uso.

Uma TV, por exemplo: ela é muito complexa, quase ninguém sabe construir uma televisão, mas ela é entregue para você
com uma interface simples, com poucos botões, para que você possa usá-la facilmente.

Para abstrair um objeto, basta criarmos métodos de utilização deste objeto. No caso da TV, seria por exemplo, criar
métodos de aumentar e diminuir o volume, trocar de canal, ligar e desligar.

E nesses métodos, a gente sempre trabalha com os atributos privados do objeto, sem expor eles diretamente. Para isso,
usamos o `this`, para EVIDENCIAR que é o atributo da classe, exemplo:

```java
public class Tv {
    private int volume;
    private int canal;

    public void aumentarVolume() {
        this.volume++; // Aqui usamos o this para evidenciar que é o atributo da classe
    }

    public void diminuirVolume() {
        this.volume--;
    }

    public void trocarCanal(int novoCanal) {
        this.canal = novoCanal;
        // usando o this para referenciar ao atributo da classe, e trocando seu valor para o que
        // está no parâmetro.
    }
}
```

### 3. Herança

Herança seria o reuso de código. Podemos criar uma classe base, que terá atributos e métodos comuns a outras classes,
evitando o desperdício de código.

Ou seja, nós centralizamos a lógica num lugar só, e as outras classes herdam essa lógica, tornando tudo mais acessível.

![img_3.png](img_3.png)

Basicamente nós teremos uma classe pai (superclasse) e uma classe filha (subclasse).

A classe pai terá atributos e métodos a serem herdados pelas classes filhas.

Vamos imaginar um exemplo de super-heróis. Em um pacote podemos ter várias classes:

- HomemAranha
- Tempestade
- HomemDeFerro

Não é correto criarmos diversos métodos passando um super-herói como parâmetro. O correto seria criar uma superclasse chamada SuperHeroi,
contendo nela tudo o que um super-herói tem em comum, como por exemplo, nome, poder, fraqueza e métodos como atacar() e defender().

Ok, e as classes filhas? Como aplicar isso?

Nós simplesmente vamos até a classe filha e usamos a palavra reservada `extends`, exemplo:

```java
public class HomemAranha extends SuperHeroi {
    // A classe HomemAranha herda todos os atributos e métodos da classe SuperHeroi

    public HomemAranha() {
        super();
    }
}
```

#### Super

E esse super aí no construtor, o que é? Bom, o `super()` serve para chamar o construtor da superclasse (classe pai) e
inicializar os atributos herdados.

#### Sobrescrita de Métodos

Além disso, dentro da classe filha, também podemos sobrepor métodos herdados da superclasse, exemplo:

```java
@Override
public void atacar() {
    System.out.println("Homem-Aranha ataca com suas teias!");
}
```

#### Modificador Protected

Como os atributos da classe pai estão private, não conseguimos acessá-los diretamente na classe filha. Para isso,
podemos usar protected ou criar métodos getters e setters na superclasse.

Se for optado por utilizar o protected, somente quem está no pacote ou é subclasse (classe filha) poderá acessar o atributo.

Lembre-se: tudo é objeto! Até mesmo classes, elas herdam métodos, atributos e comportamentos do Object do Java.

#### Classes Abstratas

Se a classe SuperHeroi fosse abstrata, não poderíamos criar objetos dela diretamente, exemplo:

```java
new SuperHeroi("meu traje", new String[] {"contar piada"});
```

A partir do momento que definimos a classe pai como ‘Abstract’, não é mais possível criar uma instância da classe pai sem definir um nome a ela.

Bom, mas os métodos dessa classe também podem ser abstratos.

E isso significa que esse método ficará vazio! Sem corpo, sem definição, sem nenhum bloco de comando. Somente com o seu retorno e parâmetro, assim:

```java
public abstract void usarSuperPoder(int index);
```

Bom, o que acontece, é que as classes, com esse método que se tornou abstrato implementado, vai precisar que a gente (de forma obrigatória), defina o seu corpo e os seus blocos de comando (o que de fato ele irá fazer).

Usaremos o @Override e implementaremos o que a gente quer.

#### Interface

Uma classe abstrata pode ter atributos/métodos protected e atributos/métodos abstract.

Mas uma classe com interface, é completamente diferente! A gente só pode ter **definição de métodos**, ela não terá atributos,
nem definições de corpo de método.

Por exemplo, uma interface Avenger. O que a gente espera que uma classe que terá essa interface tenha?

```java
public interface Avenger {
    void reunirVingadores();
    void salvarMundo();
}
```
E aí, qualquer classe que implementar essa interface, vai precisar obrigatoriamente implementar esses métodos.

```java
public class HomemDeFerro implements Avenger {
    @Override
    public void reunirVingadores() {
        System.out.println("Homem de Ferro reunindo os Vingadores!");
    }
}
```

#### Modificador Final

O final impede que uma classe seja usada para herança, que alguem herde ela.

Isso ajuda a impedir o nosso codigo de ser utilizado para especificações ou modificações por outras pessoas. Ele será utilizada da forma que está.

Outro uso dele pode ser para criar constantes que não serão alteradas. Elas podem ser acessadas sim! Mas permanecerão iguais.
É comum deixar essas constantes statics também.

Porque no fim vão ser sempre as mesmas, não é preciso instanciar elas.

Por fim, sempre que declarmos um final, a gente precisa iniciar ele assim que o declaramos.

### 4. Polimorfismo

![img_4.png](img_4.png)

Pensemos no verbo **trabalhar**. Todo trabalhador, independente da profissão, trabalha. Mas cada um trabalha de uma forma diferente.

Ou seja, dependendo de onde o método for chamado, ele vai se comportar de uma forma diferente.

Cabe destacar que o polimorfismo está muito ligado a herança. Isso tudo nos permite o conceito de "uma interface, múltiplas formas".

Seguindo o exemplo de trabalho, criaremos uma interface Trabalhador, com o método trabalhar():

```java
public interface Trabalhador {
    void trabalhar();
}
```

E criaremos outras classes para implementar essa interface e cumprir esse "contrato". Essas classes podem ser: Médico, Cozinheiro, Programador..

E ao invés de instanciarmos a classe criada, nós iremos referenciar a interface.

```java
Trabalhador medico = new Medico();
Trabalhador cozinheiro = new Cozinheiro();
Trabalhador programador = new Programador();
```

E elas se comportarão de formas diferentes, mesmo sendo chamadas da mesma forma.

#### Casting de Polimorfismo

Às vezes, precisamos acessar métodos ou atributos específicos de uma classe filha, mesmo que a referência seja da superclasse ou interface.

Para isso, usamos o casting, que é basicamente "transformar" a referência de um tipo para outro.

```java
Medico medicoEspecifico = (Medico) medico;
medicoEspecifico.realizarCirurgia();
```

#### Sobrecarga de Métodos

A sobrecarga de métodos é quando temos vários métodos com o mesmo nome, mas com diferentes listas de parâmetros (tipos ou quantidade).

```java
public class Calculadora {
    public int somar(int a, int b) {
        return a + b;
    }
    public double somar(double a, double b) {
        return a + b;
    }
    public int somar(int a, int b, int c) {
        return a + b + c;
    }
}
```

#### Atributos no Polimorfismo

No polimorfismo, os atributos não são polimórficos. Ou seja, o tipo do atributo é determinado pela referência, não pelo objeto real.

Imagine a classe empregado que possui o atribute nome:

```java
public class Empregado {
    public String nome = "Empregado Genérico";
}
```

Se extendermos essa classe na Programador, mas a referência for do tipo Empregado, o atributo acessado será o da classe Empregado, não o da classe Programador.

```java
public class Programador extends Empregado {
    public String nome = "Programador Específico";
}
```

Ao instanciar os objetos:

```java
Empregado emp = new Empregado();
System.out.println(emp.nome); // Saída: Empregado Genérico

Programador prog = new Programador();
System.out.println(prog.nome); // Saída: Programador Específico

Empregado prog = new Programador();
System.out.println(prog.nome); // Saída: Empregado Genérico
```