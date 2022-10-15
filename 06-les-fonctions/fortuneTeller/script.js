/*let numberOfChildren = 3;
let partnersName = "Scooby";
let geographicLocation = "Dumbcity";
let jobTitle = "Fortune Teller";*/

//Write a function name fortuneTeller with 4 arguments.
// Output the forture to the screen
function fortuneTeller(
    numberOfChildren,
    partnersName,
    geographicLocation,
    jobTitle
) {
    console.log(
        'You will be a ' +
            jobTitle +
            ' in ' +
            geographicLocation +
            ', married to ' +
            partnersName +
            ' with ' +
            numberOfChildren +
            ' kids.'
    );
}

//Call that function 3 times with 3 different values for the arguments.
fortuneTeller(3, 'Scooby', 'Dumbcity', 'Fortune Teller');
fortuneTeller(2, 'Jacky', 'Hawaï', 'Golfer');
fortuneTeller(15, 'Paloma', 'MimiSiku', 'Gardener');
