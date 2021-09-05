const doSomethingAsync = () => {  /* Crear promesa y enviar resolve y reject */
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'),3000)
        : reject(new Error('Test Error'))
    })
}


const doSomething = async () => { /* Conexion asincrona */
    const something = await doSomethingAsync(); /* Espera a respuesta */
    console.log(something);
}

console.log('Before'); //1
doSomething(); /* El resultado es despues del settimeout */ //3
console.log('After'); //2

const anotherFunction = async () => {
    try { /* Manejo de errores */
        const something = await doSomethingAsync();
        console.log(something);

    }catch (err){
        console.log(err);
    }
}

console.log('Before 1'); //1
anotherFunction(); /* El resultado es despues del settimeout */ //3
console.log('After 1'); //2