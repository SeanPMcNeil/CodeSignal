function solution(s) {
    s = s.split('')
    let i = 0
    let stack = []
    while (i < s.length) {
        if (s[i] == '(') {
            stack.push(i)
        }
        else if (s[i] == ')') {
            let index = stack.pop()
            // reverse the string inside the (...)
            let reverse = s.splice(index + 1, i - index - 1).reverse()

            // omit the ( ) and insert the reversed part back to the string
            s.splice(index, 2, ...reverse)
            i -= 2
        }
        i++
    }

    return s.join('')

}