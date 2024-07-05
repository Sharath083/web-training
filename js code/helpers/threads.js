function myDisplayer(some) {
    console.log(3.1)
    console.log(some)
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  console.log("1========================")
  // The producing code (this may take some time)
  
    if (x == 10) {
      myResolve("OK");
    } else {
        myResolve("OK");
        console.log("2.1.1")
       myReject("Error");
       console.log("2.1.2")

    }
  });
  
  myPromise.then(
    function(value) {
        console.log(2.1)
        myDisplayer(value);},
    function(error) {
        console.log(2.1 )
        myDisplayer(error);}
  );