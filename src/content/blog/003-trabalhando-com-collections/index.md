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

<div class="my-6 rounded-r-lg border-l-4 border-primary bg-muted/50 p-4 shadow-sm dark:bg-muted/10">
  <div class="mb-2 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
    <span class="text-lg font-bold text-primary">Disclaimer</span>
  </div>
  <p class="text-muted-foreground text-sm leading-relaxed">
    O conteúdo desse estudo foi feito durante o <strong>Curso de Desenvolvimento Java</strong>, lecionado pela Giuliana Silva Bezerra.
  </p>
  <p class="mt-2 text-muted-foreground text-sm leading-relaxed">
    Aconselho veemente que você utilize este material como um <em>complemento</em> ao curso, e não como substituto do mesmo.
    A didática dela é incrível e você aprenderá muito mais seguindo o curso oficial.
  </p>
  <div class="mt-4 flex flex-col gap-3 sm:flex-row">
    <a href="https://www.udemy.com/course/curso-de-desenvolvimento-java/" target="_blank" class="inline-flex items-center gap-1 font-medium text-primary hover:underline">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Curso Oficial (Udemy)
    </a>
    <a href="https://www.youtube.com/@giulianabezerra" target="_blank" class="inline-flex items-center gap-1 font-medium text-primary hover:underline">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
      Canal Giu Bezerra
    </a>
  </div>
</div>

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
