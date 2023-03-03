   onload = function PageController(){
 
    age = prompt("Before you can access this page, enter your age");
    // alert(age)
    if (age >=18) {
        alert('You can see the site')
    }
    else{
        alert("You are not welcome here because you are under age, but i'll allow you")
    }
}