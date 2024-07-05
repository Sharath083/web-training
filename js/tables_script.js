function toggleFun() {
    document.body.classList.toggle('dark-mode');
const button = document.getElementById('mode');
if (document.body.classList.contains('dark-mode')) {
    button.textContent = 'Light Mode';
    button.style.backgroundColor = 'grey';
    button.style.color = 'black';
} else {
    button.textContent = 'Dark Mode';
    button.style.backgroundColor = 'grey';
    button.style.color = 'white';
}
};

// function timeFun(){
//     const button=document.getElementById("time");
//     if(button.textContent.contains("India")){
//         button.textContent="";
//     }else{
//         button.textContent=Date();
//     }
// }
function timeFun() {
    const button = document.getElementById("time");
    if (button.textContent.includes("India")) {
        button.textContent = "";
    } else {
        button.textContent = new Date();
    }
}

function stick(pos){
    var pic;
    if(pos=='jump'){
        pic="../images/sJump.webp"
    }
    else if(pos=='dance'){
        pic="../images/sDance.webp"
    }
    else if(pos=='run'){
        pic="../images/sRunn.webp"
    }
    else if(pos=='fight'){
        pic="../images/sFight.webp"
    }
    else{
        pic="../images/sStart.webp"
    }
    document.getElementById("stickman").src=pic;
}
const form = document.getElementsByClassName('reg_cointainer');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const name = document.getElementById('name').value;
//   const age = document.getElementById('age').value;
//   const mobileNumber = document.getElementById('mobile').value;
//   const email = document.getElementById('email').value;
//   const gender = document.querySelector('input[name="Gender_Type"]:checked').value;
//   const password = document.getElementById('password').value;


//   const userData = {
//     name,
//     age,
//     mobileNumber,
//     email,
//     gender,
//     password
//   };

//   fetch('http://localhost:8080/user/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userData)
//   })
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(error => console.error(error));
// });

// script.js
async function submitForm() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const userData = {
        name,
        password,
        email,
        age,
        mobileNumber: mobile,
        gender
    };

    try {
        const response = await fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        document.getElementsByClassName("body").style.animation="play 1s steps(10) infinite"

        if (response.ok) {
            document.getElementById("response").innerHTML = 'Registered successfully!';
            alert('User registered successfully!');
        } else {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            alert('Failed to register user: ' + errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("response").innerHTML = 'An error occurred while registering the user.';
        alert('An error occurred while registering the user. ' + error.message);
    }
}

