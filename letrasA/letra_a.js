function encontrarIndice(palavra){
    const indices = [];
    let indiceAtual = palavra.indexOf('a');

    while(indiceAtual !== -1){
        indices.push(indiceAtual);
        indiceAtual = palavra.indexOf('a', indiceAtual + 1);
    }

    console.log(indices.length);
    return indices;
}

const palavra = 'paralelepipedo';
console.log(encontrarIndice(palavra));