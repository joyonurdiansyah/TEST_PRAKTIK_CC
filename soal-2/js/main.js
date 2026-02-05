function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

document.getElementById("calculateBtn").addEventListener("click", function () {
    const input = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");

    if (input === "" || input < 0) {
        resultElement.textContent = "Masukkan angka valid (>=0)";
        return;
    }

    const number = parseInt(input);
    const hasil = factorial(number);
    resultElement.textContent = `Faktorial dari ${number} adalah ${hasil}`;
});

