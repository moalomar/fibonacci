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


//.replace(/\D/g, '')