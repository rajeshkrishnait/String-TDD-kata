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
    const negatives = numbersArray.filter(num => num < 0);
    if(negatives.length > 0){
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`)
    }
    numbersArray.forEach((number)=>{
        sum+=number
    })
    return sum;
}
