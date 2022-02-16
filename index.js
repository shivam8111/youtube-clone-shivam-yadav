let div = document.getElementById("videodiv");

async function display(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let video = document.getElementById("video").value; // Search String/ Query Stri

//search for videos
let res = await fetch(('https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25
')
let data = await res.json();

for({
id:{videoId}}of data.items){
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)

}

}
display();
 
async function searchvideos(){
    document.getElementById("videodiv").innerHTML=""; // Empty 

    let video = document.getElementById("video").value; // Search String/ Query Stri

//search for videos
let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${video}&type=video&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25`);
let data = await res.json();

for({
id:{videoId}}of data.items){
let videodiv= document.createElement("iframe")
videodiv.setAttribute("class","mons")
videodiv.src = `https://www.youtube.com/embed/${videoId}`;
videodiv.allow = 'fullscreen'
div.append(videodiv)

}

}
