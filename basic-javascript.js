// 1. Radian To Degree Convert
function radianToDegree(radian){
    const degree = radian * 57.2958;
    const degreeDecimal = degree.toFixed(2);
    return degreeDecimal;
}

const radianAmount = 10;
const degreeAmount = radianToDegree(radianAmount);
console.log(degreeAmount);

// 2. Is JavaScrit File
function isJavaScriptFile(nameOfFile){
    if(InputnameOfFile.endsWith('.js')){
        return true
    }
    else{
        return false
    }
    
}

const InputnameOfFile = 'math.js';
const nameOfFile = isJavaScriptFile(InputnameOfFile);
console.log(nameOfFile);

// 3. Oil Price
function oilPrice(diesel, petrol, octane){
    const dieselPrice = diesel * 114;
    const petrolPrice = petrol * 130;
    const octanePrice = octane * 135;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice
}
const iNeedDiesel = 0;
const iNeedPetrol = 2;
const iNeedOctane = 3;
const iNeedOils = oilPrice(iNeedDiesel, iNeedPetrol, iNeedOctane)
console.log(iNeedOils);

// 4. Public Bus Fare 
function publicBusFare(fare){
    
    const reserveBusSit = 50;
    const PeopleGoviaReserveBus = reserveBusSit;
    const reserveBusPeopleRemaining = peoples - PeopleGoviaReserveBus;


    const microBusSit = 13;
    const PeopleGoviaMicroBus = microBusSit;
    const microBusPeopleRemaining = reserveBusPeopleRemaining - PeopleGoviaMicroBus;

    const PeopleGoviaPublicBus = microBusPeopleRemaining;
    const totalFare = PeopleGoviaPublicBus * fare;
    return totalFare;
    
    
}

const peoples = 235;



const publicBusTicketFare = publicBusFare(250);

console.log(publicBusTicketFare);