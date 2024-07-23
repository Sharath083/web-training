// let a=[1,23,4,5,6,-2,45,-455,-454335,-4,34]
// let aa=a.reduce(data=>{
//     data>0
// })
// console.log(aa)
async function submitForm() {
    // const name = document.getElementById('name').value;
    // const password = document.getElementById('password').value;
    // const email = document.getElementById('email').value;
    // const age = document.getElementById('age').value;
    // const mobile = document.getElementById('mobile').value;
    // const gender = document.querySelector('input[name="gender"]:checked').value;

    const userData = {
        age: "29",
email
: 
"sharath.r@marketsimplfied.com",
gender
: 
"MALE",
mobileNumber
: 
7780170129,
name
: 
"sharath12",
password
: 
"12345678",
    };
    try {
        const response = await fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        console.log(response)
        // document.getElementsByClassName("body").style.animation="play 1s steps(10) infinite"

        if (response.ok) {
            // document.getElementById("response").innerHTML = 'Registered successfully!';
            console.log(Object.values(response.json()))
            // alert('User registered successfully!');
        } else {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            // alert('Failed to register user: ' + errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        // document.getElementById("response").innerHTML = 'An error occurred while registering the user.';
        // alert('An error occurred while registering the user. ' + error.message);
    }
}

submitForm()


