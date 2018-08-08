var myImage = document.querySelector('img') ; // store a reference to <img> element in myImage var
myImage.onclick = function (){    // onclick event handler propoerty equal to no name
    var mySrc = myImage.getAttribute('src');  // retreve a valuae of src attribute
    if(mySrc === 'images/cheetah1.jpeg') {   // set conditional to check if src value is equal to the path 
        myImage.setAttribute('src','images/cheetah2.jpeg') ; // if true change value of path to second image
    }else {
        myImage.setAttribute('src','images/cheetah2.jpeg');  // if not swaps back to original path
    }
}

var myButton = document.querySelector('button'); // store refence to button in var
var myHeading = document.querySelector('h1');   // store reference to heading in var

function setUserName() {         
    var myName = prompt('Please enter your name.'); // asks user for name, storing it in variable 
    localStorage.setItem('name',myName);  //  Call on localStorage which allows us to store called 'name' setting its value to myName
    myHeading.textContent = 'Cheetahs are Cool, '+myName; // Set textContent of heading to a string
}

if (!localStorage.getItem('name')) {     // Check if 'name' data exists, If not the function will run to create it
    setUserName(); // 
} else {
    var storedName = localStorage.getItem('name'); // If it exists we get it
    myHeading.textContent = 'Cheetahs are cool, ' + storedName; // and set the textContent
}

myButton.onclick = function () {    // Set event handler to run function when button is clicked
    setUserName();
}