async function main() {
    await ping();
}

async function ping() {
    for (var i = 0; i < 10; i++) {
        await servicioRemoto(300);
        console.log("ping");
    }
}

function servicioRemoto(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

main();
console.log('Final del programa!!!');