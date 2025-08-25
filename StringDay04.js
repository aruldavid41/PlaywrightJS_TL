function angram(str1, str2){

    str1=str1.replace(/\s/g, "").toLowerCase()
    str2=str2.replace(/\s/g, "").toLowerCase()


    let sorted1=str1.split("").sort().join("")
    let sorted2=str2.split("").sort().join("")

    return sorted1=== sorted2
}
console.log(angram("listen", "silent"))
//--------------------------------------------------------------------------------------------
function lengthOfLastWord(s) {
    s = s.trim();//remove the space at the start and end 
    let words = s.split(" ")// spliting in to the words, if we given any letter means that will be split 2 
    let lastWord = words[words.length - 1]//we have to store the data using array then we've to choose which position word length 
    return lastWord.length
}

console.log(lengthOfLastWord("hello world"))
console.log(lengthOfLastWord(" fly me to the moon "))

