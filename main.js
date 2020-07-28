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