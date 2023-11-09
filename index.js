// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42 
    } 
    else{ 
        return 42 - someValue
    }

}

function  distanceFromHqInFeet(someValue) {
    if (someValue > 42) {
        return (someValue - 42) * 264
    } 
    else{ 
        return (42 - someValue) * 264
    }
}
    
function distanceTravelledInFeet(start, destination) { 
    if (start && destination) { 
        return Math.abs(start - destination) * 264;
    }
    else{ 
        return (destination - start) * 264
    }
    
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264

    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far'
    }

}  
 
    






 

 