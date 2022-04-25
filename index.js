// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    return Math.abs(42-pickUp)
}
function distanceFromHqInFeet(pickUp){
    return distanceFromHqInBlocks(pickUp)*264
}

function distanceTravelledInFeet(start, destination){
    return (Math.abs(start-destination))*264
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<=400){
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<=2000){
        return (distanceTravelledInFeet(start, destination)-400)*.02;
    }
    else if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<=2500){
        return 25
    }
    else if (distanceTravelledInFeet(start, destination)>2500){
        return "cannot travel that far"
    }
}