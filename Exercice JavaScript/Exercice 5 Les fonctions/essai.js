function canDrive (age, pays){ //paramètre entre ()
    if (
        (age > 18 && pays === "FR") ||
        (age > 16 && pays === "US")
    ) {
        return true
    }
    return false
}

console.log(canDrive (13, 'FR'))
