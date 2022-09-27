// <![CDATA[
    window.onload = function() {
        var cgu = document.getElementById('cgu');
        var submitButton = document.getElementById('submitButton');
        
        cgu.onchange = function() {
            submitButton.style.display = (cgu.checked == true) ? 'inline' : 'none';
        };
    };
    // ]]>

    function validateForm() {
        let x = document.forms["myForm"].value;
      }

    function Submit(){

        lastname = document.getElementById("name");
        firstname = document.getElementById("firstname");
        tel = document.getElementById("tel");
        mail = document.getElementById("email");
        birth = document.getElementById("birth");
        adresse = document.getElementById("adresse");
        city = document.getElementById("city");
    
        // Si tout les champs sont remplis validation
    
        if (lastname.value != "" && firstname.value != "" && tel.value != "" && mail.value != "" && birth.value != ""  && adresse.value != "" && city.value != ""){
            document.location.href = "./validate.html";
        };
    
    }