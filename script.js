// Função para gerar o array de blocos
function generatearray() {
    let container = document.getElementById("array");
    for (let i = 0; i < 20; i++) {
 
        // Retornar um valor de 1 a 100 (ambos incluídos)
        let value = Math.ceil(Math.random() * 100);
 
        // Criando elemento div
        let array_ele = document.createElement("div");
 
        // Adicionando classe 'block' ao div
        array_ele.classList.add("block");
 
        // Adicionando estilo ao div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;
 
         // Criando elemento de rótulo para exibição
         // tamanho do bloco específico
        let array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
 
        // Anexando elementos criados a index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}
 
// Função para gerar os índices
let count_container = document.getElementById("count");
function generate_idx() {
    for (let i = 0; i < 20; i++) {
 
        // Criando elemento div
        let array_ele2 = document.createElement("div");
 
        // Adicionando classe 'block2' ao div
        array_ele2.classList.add("block2");
 
        // Adicionando estilo ao div
        array_ele2.style.height = `${20}px`;
        array_ele2.style.transform = `translate(${i * 30}px)`;
 
        // Dando índices
        let array_ele_label2 = document.createElement("label");
        array_ele_label2.classList.add("block_id3");
        array_ele_label2.innerText = i;
 
        // Anexando elementos criados a index.html
        array_ele2.appendChild(array_ele_label2);
        count_container.appendChild(array_ele2);
    }
}
 
// Função Heapify assíncrona crescente
async function HeapifyCrescent(n, i) {
    let blocks = document.querySelectorAll(".block");
    let largest = i; // Inicialize o maior como raiz
    let l = 2 * i + 1; // esquerda = 2*i + 1
    let r = 2 * i + 2; // direita = 2*i + 2
 
    // Se o filho a esquerda for maior que a raiz
    if (
        l < n &&
        Number(blocks[l].childNodes[0].innerHTML) >
        Number(blocks[largest].childNodes[0].innerHTML)
    )
        largest = l;
 
    // Se o filho a direita for maior que o maior até agora
    if (
        r < n &&
        Number(blocks[r].childNodes[0].innerHTML) >
        Number(blocks[largest].childNodes[0].innerHTML)
    )
        largest = r;
 
    // Se o maior não for raiz
    if (largest != i) {
        let temp1 = blocks[i].style.height;
        let temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[largest].style.height;
        blocks[largest].style.height = temp1;
        blocks[i].childNodes[0].innerText = blocks[largest].childNodes[0].innerText;
        blocks[largest].childNodes[0].innerText = temp2;
 
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );
 
        // Hapify recursivamente a subárvore afetada
        await HeapifyCrescent(n, largest);
    }
}
 
// Função HeapSort assíncrona crescente
async function HeapSortCrescent(n) {
    let blocks = document.querySelectorAll(".block");
 
    // Construir heap (reorganizar array)
    for (let i = n / 2 - 1; i >= 0; i--) {
        await HeapifyCrescent(n, i);
    }
 
    // Um por um, extraia um elemento do heap
    for (let i = n - 1; i > 0; i--) {
 
        // Mover a raiz atual para o final
        let temp1 = blocks[i].style.height;
        let temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[0].style.height;
        blocks[0].style.height = temp1;
        blocks[i].childNodes[0].innerText = blocks[0].childNodes[0].innerText;
        blocks[0].childNodes[0].innerText = temp2;
 
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );
 
        // Chame max Heapify no heap reduzido
        await HeapifyCrescent(i, 0);
    }
}

function GenerateArrayIndicesAndHeapCres() {
    document.getElementById("array").innerHTML = ""; // Limpa o conteúdo atual
    generatearray();
    generate_idx();
    HeapSortCrescent(20);
}

// MODIFICAÇÃO PARA SE TORNAR DECRESCENTE

// Função Heapify assíncrona Decrescente
async function HeapifyDecrescent(n, i) {
    let blocks = document.querySelectorAll(".block");
    let smallest = i; // Inicialize o menor como raiz
    let l = 2 * i + 1; // esquerda = 2*i + 1
    let r = 2 * i + 2; // direita = 2*i + 2

    // Se o filho a esquerda for menor que a raiz
    if (
        l < n &&
        Number(blocks[l].childNodes[0].innerHTML) <
        Number(blocks[smallest].childNodes[0].innerHTML)
    )
        smallest = l;

    // Se o filho a direita for menor que o menor até agora
    if (
        r < n &&
        Number(blocks[r].childNodes[0].innerHTML) <
        Number(blocks[smallest].childNodes[0].innerHTML)
    )
        smallest = r;
    // Se o menor não for raiz
    if (smallest != i) {
        let temp1 = blocks[i].style.height;
        let temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[smallest].style.height;
        blocks[smallest].style.height = temp1;
        blocks[i].childNodes[0].innerText = blocks[smallest].childNodes[0].innerText;
        blocks[smallest].childNodes[0].innerText = temp2;

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );

        // Hapify recursivamente a subárvore afetada
        await HeapifyDecrescent(n, smallest);
    }
}

// Função HeapSort assíncrona
async function HeapSortDecrescent(n) {
    let blocks = document.querySelectorAll(".block");

    // Construir heap (reorganizar array)
    for (let i = n / 2 - 1; i >= 0; i--) {
        await HeapifyDecrescent(n, i);
    }

    // Um por um, extraia um elemento do heap
    for (let i = n - 1; i > 0; i--) {

        // Mover a raiz atual para o final
        let temp1 = blocks[i].style.height;
        let temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[0].style.height;
        blocks[0].style.height = temp1;
        blocks[i].childNodes[0].innerText = blocks[0].childNodes[0].innerText;
        blocks[0].childNodes[0].innerText = temp2;

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );

        // Chame Heapify mínimo no heap reduzido
        await HeapifyDecrescent(i, 0);
    }
}

function GenerateArrayIndicesAndHeapDecres() {
    document.getElementById("array").innerHTML = ""; // Limpa o conteúdo atual
    generatearray();
    generate_idx();
    HeapSortDecrescent(20);
}
