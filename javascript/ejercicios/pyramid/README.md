# Algoritmo de Generación de Pirámides en JavaScript

## Visión General

Este módulo contiene la función `pyramid`, diseñada para generar patrones geométricos piramidales formateados como cadenas de texto. Permite configurar el carácter de relleno, la cantidad de filas y la orientación del vértice (hacia arriba o hacia abajo) mediante parámetros de entrada.

---

## Firma de la Función

```javascript
function pyramid(str, numInt, bool)
```

### 1. Cálculo Espacial (`espacios`)

En cada fila $i$, los espacios a la izquierda se determinan mediante `numInt - i`. Esto garantiza que la primera fila (vértice) tenga el máximo margen de alineación y la última fila termine pegada al margen izquierdo.

### 2. Cálculo del Patrón Impar (`bloques`)

Se utiliza la fórmula matemática de números impares $2i - 1$:

- **Fila 1:** $2(1) - 1 = 1$ carácter.
- **Fila 2:** $2(2) - 1 = 3$ caracteres.
- **Fila 3:** $2(3) - 1 = 5$ caracteres.

### 3. Inversión Condicional (`bool`)

Si el argumento `bool` se evalúa como `true`, se invierte el orden del arreglo de filas con `.reverse()`, transformando la estructura ascendente en una descendente.

### 4. Delimitación de Saltos de Línea

Se concatenan los caracteres `\n` en los extremos (`"\n" + ... + "\n"`) y se unen los elementos internos del arreglo con `.join("\n")` para cumplir estrictamente con los requerimientos de formato.
