/* the scrollto function which allows direct scrolling to a particular section
when the appropriate icon in the navbar is clicked */
function scrollto(div)
{
 $('html,body').animate(
 {
  scrollTop: $("#"+div).offset().top
 },'slow');
}

// instantiating relevant variables
choose = document.getElementById("choose");
about = document.getElementById('about');
day = document.getElementById('day');
work = document.getElementById('work');
headings = document.getElementsByClassName('heading');
abouttext = document.getElementsByClassName('about-text');
workheadings = document.getElementsByClassName('work-heading');
footers = document.getElementsByTagName('footer');

/* this function allows to expand and close the vertical navbar using
the hamburger on smaller screens by changing the classname of the navbar */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// declaring variables for the colored dots
yellow = document.getElementById('yellow-dot');
green = document.getElementById('green-dot');
blue = document.getElementById('blue-dot');
purple = document.getElementById('purple-dot');

tags = document.getElementsByTagName("a");

/* making changes to the css of certain elements on the page when the
yellow dot is clicked such as text color, text decoration, background color etc*/
yellow.addEventListener('click', () =>{
    document.body.style.backgroundColor = "#FFDE59";
    tags[0].style.color = "#B42A2A";
    tags[0].style.textDecorationColor = "#B42A2A";
    tags[1].style.color = "#B42A2A";
    tags[1].style.textDecorationColor = "#B42A2A";
    tags[2].style.color = "#B42A2A";
    tags[2].style.textDecorationColor = "#B42A2A";
    tags[3].style.color = "#B42A2A";
    tags[3].style.textDecorationColor = "#B42A2A";
    tags[4].style.color = "#B42A2A";
    tags[4].style.textDecorationColor = "#B42A2A";
    tags[5].style.color = "#B42A2A";
    tags[5].style.textDecorationColor = "#B42A2A";
    headings[0].style.color = "#F48D19";
    headings[1].style.color = "#F48D19";
    headings[2].style.color = "#F48D19";
    footers[0].style.backgroundColor = "#F48D19";
    abouttext[0].style.color = "#B42A2A";
    workheadings[0].style.color = "#B42A2A";
    workheadings[1].style.color = "#B42A2A";
    workheadings[2].style.color = "#B42A2A";
    workheadings[3].style.color = "#B42A2A";
})

/* making changes to the css of certain elements on the page when the
green dot is clicked */
green.addEventListener('click', () =>{
    document.body.style.backgroundColor = "#C9E265";
    tags[0].style.color = "#365246";
    tags[0].style.textDecorationColor = "#365246";
    tags[1].style.color = "#365246";
    tags[1].style.textDecorationColor = "#365246";
    tags[2].style.color = "#365246";
    tags[2].style.textDecorationColor = "#365246";
    tags[3].style.color = "#365246";
    tags[3].style.textDecorationColor = "#365246";
    tags[4].style.color = "#365246";
    tags[4].style.textDecorationColor = "#365246";
    tags[5].style.color = "#365246";
    tags[5].style.textDecorationColor = "#365246";
    headings[0].style.color = "#70841F";
    headings[1].style.color = "#70841F";
    headings[2].style.color = "#70841F";
    footers[0].style.backgroundColor = "#70841F";
    abouttext[0].style.color = "#365246";
    workheadings[0].style.color = "#365246";
    workheadings[1].style.color = "#365246";
    workheadings[2].style.color = "#365246";
    workheadings[3].style.color = "#365246";
})

/* making changes to the css of certain elements on the page when the
blue dot is clicked */
blue.addEventListener('click', () =>{
    document.body.style.backgroundColor = "#DAEDF4";
    tags[0].style.color = "#03989E";
    tags[0].style.textDecorationColor = "#03989E";
    tags[1].style.color = "#03989E";
    tags[1].style.textDecorationColor = "#03989E";
    tags[2].style.color = "#03989E";
    tags[2].style.textDecorationColor = "#03989E";
    tags[3].style.color = "#03989E";
    tags[3].style.textDecorationColor = "#03989E";
    tags[4].style.color = "#03989E";
    tags[4].style.textDecorationColor = "#03989E";
    tags[5].style.color = "#03989E";
    tags[5].style.textDecorationColor = "#03989E";
    headings[0].style.color = "#7393B3";
    headings[1].style.color = "#7393B3";
    headings[2].style.color = "#7393B3";
    footers[0].style.backgroundColor = "#7393B3";
    abouttext[0].style.color = "#03989E";
    workheadings[0].style.color = "#03989E";
    workheadings[1].style.color = "#03989E";
    workheadings[2].style.color = "#03989E";
    workheadings[3].style.color = "#03989E";
})

/* making changes to the css of certain elements on the page when the
purple dot is clicked */
purple.addEventListener('click', () =>{
    document.body.style.backgroundColor = "#DBBDFF";
    tags[0].style.color = "#004AAD";
    tags[0].style.textDecorationColor = "#004AAD";
    tags[1].style.color = "#004AAD";
    tags[1].style.textDecorationColor = "#004AAD";
    tags[2].style.color = "#004AAD";
    tags[2].style.textDecorationColor = "#004AAD";
    tags[3].style.color = "#004AAD";
    tags[3].style.textDecorationColor = "#004AAD";
    tags[4].style.color = "#004AAD";
    tags[4].style.textDecorationColor = "#004AAD";
    tags[5].style.color = "#004AAD";
    tags[5].style.textDecorationColor = "#004AAD";
    headings[0].style.color = "#8C52FF";
    headings[1].style.color = "#8C52FF";
    headings[2].style.color = "#8C52FF";
    footers[0].style.backgroundColor = "#8C52FF";
    abouttext[0].style.color = "#004AAD";
    workheadings[0].style.color = "#004AAD";
    workheadings[1].style.color = "#004AAD";
    workheadings[2].style.color = "#004AAD";
    workheadings[3].style.color = "#004AAD";
})

navBar = document.getElementById("myTopnav");

/* if vertical navbar (on smaller screens) is open and an icon is clicked,
this section will close the navbar */
tags[2].addEventListener('click', () =>{
    scrollto('about');
    if (navBar.className === "topnav") {
    }
    else{
    	navBar.className = "topnav";
    }
})


tags[3].addEventListener('click', () =>{
    scrollto('day');
    if (navBar.className === "topnav") {
    }
    else{
    	navBar.className = "topnav";
    }
})

tags[4].addEventListener('click', () =>{
    scrollto('work');
    if (navBar.className === "topnav") {
    }
    else{
    	navBar.className = "topnav";
    }

})