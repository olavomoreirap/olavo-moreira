---
title: 'Trabalhando com Exceptions - Java'
description: 'Entenda como manipular Strings em Java para realizar operações comuns de forma eficiente.'
date: '2026-01-27'
category: 'java-inicial'
tags:
  - programação
  - oop
  - java
authors: ['olavo']
image: './header.png'
---

# Trabalhando com Exceptions

Referência: **Curso de Desenvolvimento Java, Giuliana Silva Bezerra** (Udemy)

Este estudo aborda os conceitos fundamentais de **exceções em Java**, incluindo:

- o que são exceções
- como tratá-las
- como lançá-las
- diferenças entre checked e unchecked exceptions
- criação de exceções personalizadas
- boas práticas

---

## O que são exceções?

Quando escrevemos um programa, precisamos nos preparar para algo dar errado: erro de programação, entrada inválida do
usuário, falhas externas (rede/IO), etc. Em Java, essas falhas são representadas por **exceções**.

Exemplo simples (usando `List`, não “array”):

```java
import java.util.ArrayList;
import java.util.List;

public class App {
  public static void main(String[] args) {
    List<String> nomes = new ArrayList<>();
    nomes.add("Pedro");

    System.out.println(nomes.get(1)); // índice inválido -> IndexOutOfBoundsException
  }
}
```

Nesse caso, o programa tenta acessar uma posição inexistente da lista, resultando em uma exceção em tempo de execução.

## Tratando com try/catch (exemplo correto e compilável)

Para evitar que o programa seja interrompido, podemos tratar a exceção usando try/catch.

```java
import java.util.ArrayList;
import java.util.List;

public class App {

  public static void main(String[] args) {
    List<String> nomes = getNomes();

    try {
      System.out.println(nomes.get(1));
    } catch (IndexOutOfBoundsException e) {
      System.out.println("O índice informado não é válido.");
    }
  }

  private static List<String> getNomes() {
    List<String> nomes = new ArrayList<>();
    nomes.add("Pedro");
    return nomes;
  }
}
```

O bloco try contém o código que pode gerar erro, enquanto o catch captura e trata a exceção.

## Stack Trace

Quando uma exceção não é tratada, o Java imprime no console o stack trace, que mostra:

- qual exceção ocorreu
- onde ocorreu
- a sequência de chamadas até o erro

Em aplicações reais, o stack trace deve ser registrado em logs, e não apenas exibido no console.

## Capturando exceções específicas

Sempre que possível, capture exceções específicas em vez de usar Exception genérico.

```java
try {
  System.out.println(nomes.get(1));
} catch (IndexOutOfBoundsException e) {
  System.out.println("O índice informado não é válido.");
}
```

Isso torna o código mais legível e previsível.

## Múltiplos blocos catch

É possível tratar diferentes exceções de forma independente.

```java
try {
  System.out.println(nomes.get(1)); // IndexOutOfBoundsException

  int resultado = 10 / 0;           // ArithmeticException
  System.out.println(resultado);
} catch (IndexOutOfBoundsException e) {
  System.out.println("O índice informado não é válido.");
} catch (ArithmeticException e) {
  System.out.println("Erro em operação aritmética.");
}
```

## Multi-catch

Quando o tratamento é o mesmo, é possível usar multi-catch:

```java
try {
  // código
} catch (IndexOutOfBoundsException | ArithmeticException e) {
  System.out.println("Erro ao executar operação.");
}
```

## throw vs throws

- `throw` é usado para lançar explicitamente uma exceção.
- `throws` é usado na assinatura do método para declarar que ele pode lançar uma exceção.

## Exceções checked

- Subclasses de Exception (exceto RuntimeException)
- Devem ser tratadas ou declaradas
- Normalmente usadas para falhas recuperáveis

Exemplo:

```java
public class App {

  public static void main(String[] args) {
    try {
      System.out.println(dividir(10, 0));
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }

  private static int dividir(int i, int j) throws Exception {
    if (j == 0) {
      throw new Exception("Não é possível realizar divisão por zero.");
    }
    return i / j;
  }
}
```

## Exceções unchecked

- Subclasses de RuntimeException
- Não exigem declaração em throws
- Normalmente indicam erro de programação

Exemplo:

```java
private static int dividir(int i, int j) {
  if (j == 0) {
    throw new IllegalArgumentException("Não é possível realizar divisão por zero.");
  }
  return i / j;
}
```

## Exceções personalizadas

Criar exceções personalizadas melhora a semântica do código e a clareza do domínio.

**Exemplo de exceção customizada (unchecked):**

```java
public class DivisaoPorZeroException extends RuntimeException {

  public DivisaoPorZeroException(String message) {
    super(message);
  }

  public DivisaoPorZeroException(String message, Throwable cause) {
    super(message, cause);
  }
}
```

Uso:

```java
private static int dividir(int i, int j) {
  if (j == 0) {
    throw new DivisaoPorZeroException("Não é possível realizar divisão por zero.");
  }
  return i / j;
}
```

## Boas práticas

- Evite catch (Exception e) genérico sem necessidade
- Nunca deixe um catch vazio
- Preserve a causa original da exceção:

```java
catch (IOException e) {
  throw new MinhaException("Erro ao processar arquivo", e);
}
```

- Não use exceções como controle de fluxo
- Prefira exceções específicas e bem nomeadas
- Em APIs, trate exceções em um ponto central (ex.: camada de controller)

## Conclusão

Exceções são um mecanismo essencial para tornar aplicações Java mais seguras, previsíveis e fáceis de manter. Saber
quando tratar, lançar ou propagar uma exceção é parte fundamental do desenvolvimento profissional em Java.
