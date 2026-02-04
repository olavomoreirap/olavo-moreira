---
title: 'Trabalhando com Collections - Java'
description: 'Entenda como utilizar Collections em Java para gerenciar grupos de objetos de forma eficiente.'
date: '2026-01-13'
category: 'java-inicial'
tags:
  - programação
  - oop
  - java
authors: ['olavo']
image: './header.png'
---

## Introdução

No desenvolvimento de software, frequentemente precisamos gerenciar grupos de objetos relacionados.

Em Java, as Collections fornecem uma maneira poderosa e flexível de armazenar, organizar e manipular esses grupos.
Neste artigo, exploraremos os principais tipos de Collections em Java e como utilizá-los efetivamente.

## Arrays vs Collections

| Arrays                         | Collections                                      |
| ------------------------------ | ------------------------------------------------ |
| Tamanho fixo                   | Tamanho dinâmico                                 |
| Trabalham com tipos primitivos | Trabalham com objetos                            |
| Poucos métodos utilitários     | Muitos métodos prontos (add, remove, sort, etc.) |

```java
// Array (tamanho fixo)
String[] nomes = new String[3];

// Collection (tamanho cresce automaticamente)
List<String> nomes = new ArrayList<>();
```

> O ArrayList aumenta sua capacidade automaticamente quando necessário.

## Interface List e ArrayList

`ArrayList` é a implementação mais usada da interface `List`.

```java
List<String> frutas = new ArrayList<>();
```

**Por que declarar como `List`?**

Boa prática de orientação a interfaces, você pode trocar a implementação depois sem mudar o resto do código.

```java
List<String> frutas = new LinkedList<>(); // Troca fácil
```

### ➕ Adicionando elementos

```java
List<String> nomes = new ArrayList<>();

nomes.add("Ana");
nomes.add("Bruno");
nomes.add("Carlos");
```

**Inicializando já com valores:**

```java
List<String> nomes = new ArrayList<>(Arrays.asList("Ana", "Bruno", "Carlos"));
```

> List.of() cria uma lista imutável, então usamos new ArrayList<>(...) para torná-la mutável.

### 🔍 Acessando elementos (GET)

```java
List<String> nomes = new ArrayList<>(Arrays.asList("Ana", "Bruno", "Carlos"));

System.out.println(nomes.get(0)); // Ana
```

⚠ Se acessar um índice inválido:

```java
nomes.get(10); // IndexOutOfBoundsException
```

### ✏️ Inserir e Atualizar

Inserir em posição específica

```java
nomes.add(1, "Beatriz"); // Insere "Beatriz" na posição` 1
```

Atualizar elemento

```java
nomes.set(2, "Carla"); // Atualiza índice 2 para "Carla"
```

### ❌ Remover

Remover por valor:

```java
nomes.remove("Bruno"); // Remove por valor
```

Remover por índice:

```java
nomes.remove(0); // Remove por índice
```

### 📏 Tamanho da lista

```java
int tamanho = nomes.size(); // Retorna o tamanho da lista
```

### 🔁 Percorrendo a lista

Podemos percorrer usando for tradicional, foreach ou streams:

**🔹For tradicional**

```java
List<String> nomes = new ArrayList<>(Arrays.asList("Ana", "Bruno", "Carlos"));

for (int i = 0; i < nomes.size(); i++) {
    System.out.println(nomes.get(i));
}
```

**🔹For-each**

```java
for (String nome : nomes) {
    System.out.println(nome);
}
```

**🔹forEach com lambda**

```java
nomes.forEach(nome -> System.out.println(nome));
```

**🔹Usando Iterator**

Útil quando precisa remover durante a iteração.

```java
Iterator<String> it = nomes.iterator();

while (it.hasNext()) {
    String nome = it.next();
    if (nome.equals("Bruno")) {
        it.remove();
    }
}
```

### 🔄 Ordenando a lista

```java
Collections.sort(nomes); // Ordena em ordem alfabética
```

**Ordem reversa**

```java
Collections.sort(nomes, Collections.reverseOrder());
```

**Ordenar objetos por campo**

```java
nomes.sort(Comparator.comparing(String::length));
```

### 🔄 Conversão entre Array e List

Array → List

```java
String[] array = {"A", "B", "C"};
List<String> lista = new ArrayList<>(Arrays.asList(array));
```

List → Array

```java
String[] novoArray = lista.toArray(new String[0]);
```

## 🗺 Trabalhando com Map e HashMap

Map armazena dados no formato chave → valor.

```java
Map<String, String> usuarios = new HashMap<>();
```

### ➕ Adicionar elementos

```java
usuarios.put("joao", "João Silva");
usuarios.put("maria", "Maria Souza");
```

### 🔍 Buscar valor pela chave

```java
System.out.println(usuarios.get("joao"));
```

### ✏️ Atualizar valor

```java
usuarios.put("joao", "João Pereira"); // substitui o valor antigo
```

### ❌ Remover

```java
usuarios.remove("maria");
```

### 📏 Tamanho do Map

```java
int tamanho = usuarios.size();
```

### 🔁 Iterando no Map

**🔹Apenas chaves**

```java
for (String chave : usuarios.keySet()) {
    System.out.println(chave);
}
```

**🔹Apenas valores**

```java
for (String valor : usuarios.values()) {
    System.out.println(valor);
}
```

**🔹Chave e valor (mais completo)**

```java
for (Map.Entry<String, String> entry : usuarios.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}
```

## 🧠 Quando usar cada estrutura?

| Estrutura  | Use quando...                                       |
| ---------- | --------------------------------------------------- |
| ArrayList  | Precisa de lista com acesso rápido por índice       |
| LinkedList | Muitas inserções/remoções no meio (raro na prática) |
| HashSet    | Não quer elementos repetidos                        |
| HashmMap   | Precisa buscar valores rapidamente por chave        |

## Resumão Brabo

- ✔ Collections são dinâmicas
- ✔ List mantém ordem e permite repetidos
- ✔ Map trabalha com chave única → valor
- ✔ ArrayList e HashMap são as implementações mais usadas
- ✔ Sempre prefira declarar pela interface (List, Map)
