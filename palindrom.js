let str= 'eye'
function palindrome(str){
    let arrayString = str.split('').reverse('').join('');
    if(arrayString ==str){
        console.log('is Palindrom')
    }else{
        console.log('is not Palindrome')
    }
}
palindrome(str)