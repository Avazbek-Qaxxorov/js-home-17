function generationAddress(address) {

    return address.split('.').join('[.]');

}

let address1 = "1.1.1.1";

let address2 = "255.100.50.0";

console.log(generationAddress(address1)); 

console.log(generationAddress(address2))