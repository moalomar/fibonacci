function fibonacci(n)
{
    a = b = c = BigInt(1)
    for (i = 2; i < n; i++)
    {
        c = a + b
        a = b
        b = c
    }
    return c
}


function main()
{
    n = document.querySelector('input').value
    n = BigInt(n)
    output = localStorage.getItem(n)
    if (output == null)
    {
        output = fibonacci(n)
        localStorage.setItem(n, output)
    }
    document.querySelector('p').textContent = output
}


const INPUT = document.querySelector('input')
const P = document.querySelector('p')


function main2() {
    
    INPUT.value = INPUT.value.replace(/\D/g, '')
    P.textContent = ''

    if (INPUT.value.length == 0) return
    
    n = BigInt(INPUT.value)
    fibonacci_n = localStorage.getItem(n)

    if (fibonacci_n == null) {
        fibonacci_n = fibonacci(n)
        localStorage.setItem(n, fibonacci_n)
    }

    P.textContent = fibonacci_n

}