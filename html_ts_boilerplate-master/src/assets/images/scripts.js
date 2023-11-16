


document.addEventListener('DOMContentLoaded', function() {
    
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');
    var button5 = document.getElementById('button5');
    var colors = ['red', 'blue', 'green', 'yellow', 'pink'];
    var currentColorIndex = 0;
    var button6 = document.getElementById('button6');
    var intervalId; // to keep track of the interval

    var button7 = document.getElementById('button7');
    

    
    button1.addEventListener('click', function() {
        
        var box1 = document.getElementById('box1');

        
        box1.style.backgroundColor = 'yellow';
    });

    
    button2.addEventListener('click', function() {
        
        var box2 = document.getElementById('box2');

        box2.textContent = 'SUCCESS';
    });

    button3.addEventListener('click', function() {
        var box3 = document.getElementById('box3'); 
        box3.style.visibility = 'hidden'; 
    });



    button4.addEventListener('click', function() {
        var box4 = document.getElementById('box4');
        if (box4.style.visibility === 'hidden') {
            box4.style.visibility = 'visible';
        } else {
            box4.style.visibility = 'hidden';
        }
    });



    button5.addEventListener('click', function() {
        var box5 = document.getElementById('box5');
        box5.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });

    
    

    button6.addEventListener('click', function() {
        console.log('Button 6 clicked'); // Debugging line

        var box6 = document.getElementById('box6');
        var number = parseInt(box6.textContent, 10); // Make sure to parse as a base-10 integer

        // Clear any previous intervals to avoid multiple counts
        clearInterval(intervalId);

        if (isNaN(number)) {
            console.error('Box6 does not contain a number.');
            return; // Exit the function if the content is not a number
        }

        intervalId = setInterval(function() {
            number++;
            box6.textContent = number.toString();

            console.log('Number incremented to: ' + number); // Debugging line

            if (number >= 10) {
                clearInterval(intervalId);
                console.log('Interval cleared'); // Debugging line
            }
        }, 3000);

    });



    

    if (button7) { // Check if button7 actually exists
        button7.addEventListener('click', function() {
            var boxes = document.querySelectorAll('.box');
            if (boxes.length === 0) {
                console.error('No elements with class .box found.');
                return;
            }

            boxes.forEach(function(box) {
                box.style.backgroundColor = '#18D5E1';
            });

            document.body.style.backgroundColor = '#000000';
        });
    } else {
        console.error('Button 7 not found.');
    }



    var box1 = document.getElementById('box1');
    if (box1) { // Check if box1 actually exists
        box1.addEventListener('mouseover', function() {
            box1.style.backgroundColor = 'red';
        });
    } else {
        console.error('Box 1 not found.');
    }

    
    box1.addEventListener('mouseout', function() {
        box1.style.backgroundColor = '';
    });




    var box5 = document.getElementById('box5');
    var count = 0;
    var intervalId;

    if (box5) {
        box5.addEventListener('mouseover', function() {
            // Clear any existing interval
            clearInterval(intervalId);
            count = 0; // Reset count on mouseover
            // Start a new interval
            intervalId = setInterval(function() {
                count++;
                box5.textContent = count.toString();
                if (count >= 10) {
                    clearInterval(intervalId); // Stop the timer at 10
                }
            }, 1000); // Increment count every 1000 milliseconds (1 second)
        });

        box5.addEventListener('mouseout', function() {
            // Reset count and stop interval on mouseout
            clearInterval(intervalId);
            count = 0;
            box5.textContent = '0';
        });
    } else {
        console.error('Box 5 not found.');
    }



    var inputField = document.getElementById('myInput');
    var outputDiv = document.getElementById('output');

    if (inputField && outputDiv) { // Check if both elements exist
        inputField.addEventListener('input', function() {
            outputDiv.textContent = inputField.value; // Update the text content with the input value
        });
    } else {
        console.error('Input field or output div not found.');
    }
    
});