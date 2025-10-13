let url= "http://leaftaps.com/opentaps/control/login";
conv=url.replace("login","main")
console.log(conv)
//--------------------------------------------------------------------------------
function isPalindrome (str){
          let cleaned =str.toLowerCase();

          let reversed= cleaned.split("").reverse().join("")

          if(cleaned===reversed){
                    console.log(str+ "is palindrom")
}else{
    console.log(str+ "is not palindrome ")
}
}isPalindrome ("Madam")
//------------------------------------------------------------------------------------------



