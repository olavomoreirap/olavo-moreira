---
title: 'Trabalhando com Strings - Java'
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

## Introdução

Strings são sequências de caracteres e uma das classes mais usadas em Java para manipular texto.
Em Java, String é uma classe imutável com muitos métodos úteis para acessar, comparar e manipular texto.

**O que é uma String?**

Uma String é um objeto que representa uma sequência de caracteres.

```java
String texto = "Olá, Java!";
```

Embora pareça um tipo primitivo, String sempre é um objeto da classe String em Java — não um tipo primitivo como int ou char.

## Pool de Strings

Java possui um “Pool de Strings” — uma área da memória onde Strings criadas como literais são armazenadas uma única vez.

Isso significa que, se você fizer:

```java
String a = "Java";
String b = "Java";
```

Ambas apontam para o mesmo objeto na memória, reutilizando o valor.

Por outro lado:

```java
String c = new String("Java");
```

Cria um novo objeto na memória, mesmo que o valor já exista no pool.

## Imutabilidade das Strings

Strings em Java não podem ser alteradas depois de criadas. Isso significa que, qualquer operação que pareça “modificar”
uma String, na verdade cria uma nova String.

```java
String s = "Hello";
s = s.toUpperCase(); // cria nova string, não modifica a original.
```

## Strings são Arrays de Caracteres

Embora String não seja literalmente um array, você pode pensar nela como uma sequência de caracteres que pode ser convertida em um char[]:

```java
char[] chars = texto.toCharArray();
```

**Isso é útil se quiser percorrer ou modificar cada caractere.**

## Acessando Caracteres Específicos

Você pode acessar um caractere em uma posição específica com `.charAt()`:

```java
String nome = "Java";
char primeira = nome.charAt(0); // J
```

> Lembre: índices começam em 0.

## Manipulando Strings

**Transformar para Maiúsculas**

```java
String maiusculas = texto.toUpperCase(); // "OLÁ, JAVA!"
```

**Transformar para Minúsculas**

```java
String minusculas = texto.toLowerCase(); // "olá, java!"
```

> Esses métodos não alteram a String original — retornam uma nova String.

## Dividindo Strings

Para dividir uma string em palavras ou partes, use .split():

```java
String frase = "Java é legal";
String[] palavras = frase.split(" "); // ["Java", "é", "legal"]
```

## Conversão entre Tipos

É comum receber dados como String e precisar converter pra outro tipo (por exemplo, número):

```java
int idade = Integer.valueOf("42");
double peso = Double.valueOf("72.5");
```

Também podemos converter valores para String com:

```java
String s = String.valueOf(123);
```

## Concatenando Strings

**NÃO recomendado (muito + custoso)**

```java
String resultado = a + b + c;
```

Quando tem muitas partes, isso cria várias Strings temporárias — ruim para performance.

## Usando StringBuilder (melhor alternativa)

Quando precisa concatenar muitas partes (loops, textos grandes):

```java
StringBuilder builder = new StringBuilder();
builder.append("Olá, ");
builder.append(nome);
builder.append("!");

String textoFinal = builder.toString();
```

StringBuilder permite adicionar texto sem criar muitas Strings intermediárias.

## Formando Strings Complexas com Placeholders

Java tem também o método String.format() (semelhante a printf) para criar textos formatados:

```java
String s = String.format("Olá, %s! Você tem %d anos.", nome, idade);
```

Outra forma moderna (desde Java 15+) é usar as text blocks (3 aspas duplas) para textos multilinha:

```java
String multiline = """
    Linha 1
    Linha 2
    Linha 3
    """;
```

## Métodos Úteis de String

| Método                     | O que faz                               |
| -------------------------- | --------------------------------------- |
| `length()`                 | Retorna o tamanho da string             |
| `charAt(int index)`        | Retorna o caractere no índice           |
| `equals(String)`           | Compara conteúdo de duas strings        |
| `equalsIgnoreCase(String)` | Compara ignorando maiúsculas/minúsculas |
| `indexOf(String)`          | Posição da primeira ocorrência          |
| `lastIndexOf(String)`      | Posição da última ocorrência            |
| `substring(int, int)`      | Substring entre índices                 |
| `replace(char, char)`      | Substitui caracteres                    |
| `split(String)`            | Divide por delimitador                  |
| `toUpperCase()`            | Tudo em maiúsculas                      |
| `toLowerCase()`            | Tudo em minúsculas                      |
| `trim()`                   | Remove espaços nas pontas               |
