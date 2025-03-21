export function add(numbers:string){
    if(!numbers)
        return 0
    let delimeter = ','
    let numbersArray = numbers.split(delimeter).map(Number)
    let sum = 0;
    if(numbersArray.length == 1)
        return numbersArray[0]
    else{
        numbersArray.forEach((number)=>{
            sum+=number
        })
    }
    return sum;
}