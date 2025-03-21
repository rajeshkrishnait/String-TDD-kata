export function add(numbers:string){
    if(!numbers)
        return 0
    let delimiter = /,|\n/
    if(numbers.startsWith('//')){
        const match = numbers.match(/^\/\/(.+)\n/);
        if (match) {
            delimiter = new RegExp(match[1]); 
            numbers = numbers.slice(match[0].length); 
        }
    }
    let numbersArray = numbers.split(delimiter).map(Number)
    let sum = 0;
    if(numbersArray.length == 1)
        return numbersArray[0]

    numbersArray.forEach((number)=>{
        sum+=number
    })
    return sum;
}
