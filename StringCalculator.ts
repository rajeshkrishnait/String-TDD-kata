export function add(numbers:string){
    if(!numbers)
        return 0
    let delimeter = ','
    let numbersArray = numbers.split(delimeter).map(Number)
    if(numbersArray.length == 1)
        return numbersArray[0]
}