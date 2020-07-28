document.querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
})


ScrollReveal().reveal('.nav-main');
ScrollReveal().reveal('.showcase',  {delay: 500} );
ScrollReveal().reveal('.cheems-cards',  {delay: 1000} );
ScrollReveal().reveal('.cards-banner-one',  {delay: 500} );
ScrollReveal().reveal('.cards-banner-two',  {delay: 500} );

function stringPermutations(str){
    var array = getPermutations(str);
    array = removeDuplicates(array);
    return array.sort();
}

function getPermutations(str){
    var permutations = [],
        nextWord = [],
        chars = [];

    if (typeof str === 'string') chars = str.split('');
    else if (typeof str === 'number'){
        str = str + "";
        chars = str.split('');
    }

    permutate(chars);

    return permutations;

    function permutate(chars){
        if (chars.length === 0) permutations.push(nextWord.join(''));
        for (var i=0; i < chars.length; i++){
            chars.push(chars.shift());
            nextWord.push(chars[0]);
            permutate(chars.slice(1));
            nextWord.pop();
        }
    }
}

removeDuplicates = array => array.filter((item, index) => array.indexOf(item) == index)

s = "CBA"

console.log(stringPermutations(s));


function stringPermutations(str){
    var array = getPermutations(str);
    array = removeDuplicates(array);
    return array.sort();
}

function getPermutations(str){
    var permutations = [],
        nextWord = [],
        chars = [];

    if (typeof str === 'string') chars = str.split('');
    else if (typeof str === 'number'){
        str = str + "";
        chars = str.split('');
    }

    permutate(chars);

    return permutations;

    function permutate(chars){
        if (chars.length === 0) permutations.push(nextWord.join(''));
        for (var i=0; i < chars.length; i++){
            chars.push(chars.shift());
            nextWord.push(chars[0]);
            permutate(chars.slice(1));
            nextWord.pop();
        }
    }
}

removeDuplicates = array => array.filter((item, index) => array.indexOf(item) == index)

s = "CBA"

let freq = {}
        const mostFrequentSum = (t) => {
            const getAllSums = (tree) => {
                if (!tree) {
                    return 0
                }
                
                const sum = getAllSums(tree.left) + getAllSums(tree.right) + tree.value
                freq[sum] = (freq[sum] || 0) +1
                return sum
            }
            
            getAllSums(t)
            const maxFreq = Object.values(freq).reduce((mx, cur) => Math.max(mx, cur), 0)
            return Object.keys(freq)
                .filter(key => freq[key] === maxFreq)
                .map(key => parseInt(key))
                .sort((a,b) => a - b)
                
            
        }
        var t = { "value ": 1, "left": { "value": 2, "left" : null, "right": null},
                "right": { "value ": 3, "left": null, "right": null}}
                mostFrequentSum(t)
                console.log(t)

const nextLarger = (a) => {
    const res = [];
    for (let i = 0; i< a.length ; i++){
        let currNum = a[i];
        for (let n = i; n < a.length; n++){
            if(a[n] > currNum) {
                res.push(a[n]);
                break;
            } else if (n === a.length - 1){
                res.push(-1);
            }
        }
    }
    return res
}

console.log(nextLarger([6, 7, 3, 8]))

function makeArrayConsecutive2(statues) {
    var sorted = statues.sort((a, b) => a - b)
    var full = sorted[sorted.length - 1] - sorted[0] + 1;
    return full - sorted.length
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))