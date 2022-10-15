function marlgw() {
    var marl = document.getElementById("usern").value;
    console.log(marl)
    var marl2 = document.getElementById("cass1").value;
    console.log(marl2)


    if (marl == "cassandra" && marl2 == "love123") {
        location.href = 'home.html'
    } else {
        alert("Wrong Username or Password");
    }
}