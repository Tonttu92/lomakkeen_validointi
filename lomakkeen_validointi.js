let form = document.getElementById("lomake");                                   
let error = document.getElementById("error");

document.getElementById("submit").addEventListener("click", function(event) { 
    event.preventDefault();
    vahvistalomake();
});

function vahvistalomake() {

    let tunnus = document.getElementById("username").value; 
    let salasana = document.getElementById("password").value;
    let nimi = document.getElementById("name").value;
    let osoite = document.getElementById("address").value;
    let postinro = document.getElementById("postnumber").value;
    let email = document.getElementById("email").value;
    let maa = document.getElementById("country").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let kieli = document.querySelector('input[name="language"]:checked');   
    let pattern = /^(?=.*\d)(?=.*[!@£$€&%#])(?=.*[A-Z]).{6,}$/;             // Regex salasanalle
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                        // Regex sähköpostille


    // Tyhjennetään mahdolliset virheilmoitukset
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("postnumError").innerText = "";
    document.getElementById("nameError").innerText = "";
    document.getElementById("addressError").innerText = "";
    document.getElementById("countryError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("languageError").innerText = "";

    // Tarkistetaan, että kaikki kentät on täytetty
    if (tunnus === "" || salasana === "" || nimi === "" || osoite === "" || postinro === "" || email === "" || maa === "" || !gender || !kieli) {
        error.innerText = "* Täytä kaikki pakolliset kentät";
        console.log("Virheellinen lomake");
        error.style.color = "red";

        if (tunnus === "") {
            document.getElementById("usernameError").innerText = "*";
        }
        if (salasana === "") {
            document.getElementById("passwordError").innerText = "*";
        }
        if (nimi === "") {
            document.getElementById("nameError").innerText = "*";
        }
        if (osoite === "") {
            document.getElementById("addressError").innerText = "*";
        }
        if (postinro === "") {
            document.getElementById("postnumError").innerText = "*";
        }
        if (email === "") {
            document.getElementById("emailError").innerText = "*";
        }
        if (maa === "") {
            document.getElementById("countryError").innerText = "*";
        }
        if (!gender) {
            document.getElementById("genderError").innerText = "*";
        }
        if (!kieli) {
            document.getElementById("languageError").innerText = "*";
        }
        return false;
    }

    // Tunnus validointi
    if (tunnus.length < 6) {
        error.innerText = "* Tarkista lomake";
        console.log("Tunnuksen validointi epäonnistui");
        document.getElementById("usernameError").innerText = "* Tunnuksen pituus on oltava vähintään 6 merkkiä";
        error.style.color = "red";
        return false;
    }

    // Salasanan validointi
    if (!pattern.test(salasana)) {                  
        error.innerText = "* Tarkista lomake";
        console.log("Salasanan validointi epäonnistui");
        document.getElementById("passwordError").innerText = "* Tunnuksen täytyy sisältää vähintään 6 merkkiä, yksi iso kirjain, yksi numero ja yksi erikoismerkki";
        error.style.color = "red";
        return false;
    }

    // Postinumeron validointi

    if (postinro.length !== 5 || isNaN(postinro)) {
        error.innerText = "* Tarkista lomake";
        console.log("Postinumeron validointi epäonnistui");
        error.style.color = "red";
        document.getElementById("postnumError").innerText = "* Postinumeron tulee sisältää 5 numeroa";
        return false;
    }

    // Sähköpostin validointi
    if (!emailPattern.test(email)) {
        error.innerText = "* Tarkista lomake";
        console.log("Sähköpostiosoitteen validointi epäonnistui");
        error.style.color = "red";
        document.getElementById("emailError").innerText = "* Sähköposti ei ole kelvollinen";
        return false;
    }
    // Jos kaikki kentät on täytetty oikein, lomake lähetetään
    error.innerText = "Lomake lähetetty onnistuneesti!";
    console.log("Lomake lähetetty onnistuneesti!");
    error.style.color = "green";
    return true;
}