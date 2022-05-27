const firebaseConfig = {
    apiKey: "AIzaSyD8Jhasc_-IBB9UWxyljW0xzEAvlCmN3t0",
    authDomain: "lntfinalproject-51a03.firebaseapp.com",
    projectId: "lntfinalproject-51a03",
    storageBucket: "lntfinalproject-51a03.appspot.com",
    messagingSenderId: "1012658646763",
    appId: "1:1012658646763:web:57702ba1981e35747d18ae",
    measurementId: "G-MBBV9YZYFE"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  let rakRegisform = db.collection("regisform")
  let newRegis = {
      name: "lorem",
      email: "ipsum",
      number: "12345678",
      event: "dolor"
  }

  let Regisformbaru = []

  $(document).ready(()=> 
    {
        $("#registration").submit(()=>{
            event.preventDefault()
            newRegis = {
                name: $("#name").val(),
                email: $("#email").val(),
                number: $("#number").val(),
                event: $("#event").val(),
            }
            rakRegisform.add(newRegis).then((response) => response.get()).then((response) => {
                console.log(response)
            })
        })
    })
