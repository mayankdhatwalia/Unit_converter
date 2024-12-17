var feet = document.getElementById('feet'); // Get element with id feet
var inch = document.getElementById('inch');// Get element with id inch

feet.addEventListener('input', function() {
    let f = this.value; // In f, value of feet will be stored
    let i = f*12; // In i, we stored the value of Inches i.e. one feet is 12inches
    inch.value = i; 
});

inch.addEventListener('input', function() {
    let i = this.value; // In f, value of feet will be stored
    let f = i/12; // In i, we stored the value of Inches i.e. one feet is 12inches

    // We get a lot of after decimal value, lets fix that
    
    if(!Number.isInteger(f)){// To check in f(feet waale main)
        f = f.toFixed(2); // Shows the value till 2 decimal points
    };
    feet.value = f;
});