function age() {
    var alertt = alert('Welcome to exotic plants');
    console.log(age);
    // input

    //processing
    var age = prompt('Please enter your age');
    if (age < 18) {
        alert('How did you find this website');
    } else if (age > 18) {
        alert('Welcome to your plants website');
    } else {
        alert('Something went wrong');
    }
    var order = prompt('What would you like to order fig plant or daisy');

    while (order !== 'daisy' && order !== 'fig plant') {
        order = prompt('what would you like to order fig plant or daisy');
    }
    var imageNumber = prompt('How many images you want');
    for (var i = 1; i <= imageNumber; i++) {
        if (order == 'daisy') {
            order = order + '<img src ="https://i.pinimg.com/originals/17/a5/d1/17a5d17b2f30c1ad24b6fd182dc89c59.jpg" >';
        } else if (order == 'fig plant') {
            order = order + '<img src ="https://www.whiteflowerfarm.com/mas_assets/cache/image/5/a/6/2/23138.Jpg" >';
        }
        
        document.write('<p>' + order + '</p>');
    }

    //output
    /*document.write("<h1>" + greeting + "</h1>");*/
}

age();



















