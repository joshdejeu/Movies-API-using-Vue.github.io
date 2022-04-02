// Code by Josh Dejeu

// creating Vue object for big movie picture
const movie = new Vue({
    el: "#bigPic",
    data:{
        pageTitle: "Upcoming Movies",
        image: "images/wardogs.png",
        title: "War Dogs",
        rating: "9.4/10",
        desc: "This movie goated",
        movies:
        [
            {image: "images/21.png", title: "21 Jump Street", rating: "9.5/10", desc: "This movie goofy"},
            {image: "images/central.png", title: "Central Intelligence", rating: "6.8/10", desc: "This movie goofy x2"},
            {image: "images/jumanji.png", title: "Jumanji", rating: "8.6/10", desc: "This movie mid"},
            {image: "images/wardogs.png", title: "War Dogs", rating: "9.4/10", desc: "This movie goated"},
            {image: "images/yet.png", title: "Are We There Yet?", rating: "10/10", desc: "This movie goated x2"},
            {image: "images/ted.png", title: "Ted", rating: "7.6/10", desc: "This movie mid x2"}
        ]
    },
    methods:{
        method(){
            console.log("this a method");
        }
    }
})

// change big picture when small picture is clicked
function updateMovie(theObj){
    imgLink = getLink(theObj);
    movie.image = imgLink;
    movie.title = movie.movies[theObj.id].title;
    movie.rating = movie.movies[theObj.id].rating;
    movie.desc = movie.movies[theObj.id].desc;
    rate(movie.rating.slice(0,-3));
}

// reformat from backgroundImage to img:src
function getLink(laObj){
    laLink = laObj.style.backgroundImage;
    console.log("\nOld Link: ", laLink);
    laLink = laLink.slice(5);
    laLink = laLink.slice(0,-2);
    console.log("New Link: ", laLink);
    return laLink;
}

//create divs based on items in movies array
for(i=0;i<movie.movies.length;i++){
    var smallPic = document.createElement('div');
    smallPic.className = "smallPic";
    smallPic.id = i;
    document.getElementById('smallPicCont').appendChild(smallPic);
    smallPic.style.backgroundImage = `url('${movie.movies[i].image}')`;
    smallPic.addEventListener('click', function(){
        updateMovie(this);
    });
}

// changing innerHTML of star based on rating of movie
var star = document.getElementById('stars');
function rate(rating){
    rating = Math.round(rating);
    star.innerHTML = "";
    for(i=0;i<rating;i++){
        star.innerHTML = star.innerHTML+"★";
    }
    for(i=rating;i<10;i++){
        star.innerHTML = star.innerHTML+"☆";
    }
}

// callback getting Promise from API
/* var obj;
getting movie info from link
var link;
axios.get(link)
.then((resolve)=>{
    obj = resolve;
})
.catch(error=>{
    console.log(error);
})*/



















// change light mode (not related to assignment)
var body = document.body;
const theToggle = new Vue({
    el: "#night",
    data:{
        tog: 0,
        status: "On"
    },
    methods:{
        changeMode(){
            if(this.tog==0){styleDay(this, this.$el, this.$el.firstChild);}
            else{styleNight(this, this.$el, this.$el.firstChild);}
        }
    }
})

// change to light mode
function styleDay(that, parent, child){
    that.tog=1;
    body.style.background = "linear-gradient(45deg, #01181f, rgb(8, 22, 34) 30%,rgb(32, 39, 44) 80%,#1b1f20)";
    parent.style.border = "3px solid rgb(15, 15, 15)";
    parent.style.backgroundColor = "#2b2b2b";
    child.style.marginLeft = "21px";
    child.style.backgroundColor = "rgb(10,10,10)";
    child.style.color = "white";
    that.status = "Off";
}

//change to night mode
function styleNight(that, parent, child){
    that.tog=0;
    body.style.background = "linear-gradient(45deg, #052e3b, rgb(13, 67, 114) 30%,rgb(8, 99, 28) 80%,#5c7406)";
    parent.style.border = "3px solid rgba(255, 255, 255, 0.664)";
    parent.style.backgroundColor = "#99919196";
    child.style.marginLeft = "";
    child.style.backgroundColor = "rgb(166, 182, 165)";
    child.style.color = "black";
    that.status = "On";
}


// hovering on movie to get info
var poster = document.getElementById('moviePic');
var desc = document.getElementById('movieInfo');
poster.addEventListener('mouseover', function(){
    poster.style.transform = "scale(1.2)";
    desc.style.top = '0%';
});
poster.addEventListener('mouseout', function(){
    poster.style.transform = "";
    desc.style.top = '100%';
});
desc.addEventListener('mouseover', function(){
    poster.style.transform = "scale(1.2)";
    desc.style.top = '0%';
});
desc.addEventListener('mouseout', function(){
    poster.style.transform = "";
    desc.style.top = '100%';
});

