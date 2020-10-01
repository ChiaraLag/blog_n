var posts = [];

posts.push(new Post("Je", "blablabla", true, false))
posts.push(new Post("Ne", "blablabla", true, false))
posts.push(new Post("Sais", "blablabla", true, false))
posts.push(new Post("Pas", "blablabla", true, false))


var postContainer;
var modal;
var saveBtn;


$(document).ready(function () {

    $("#saveBtn").click(addPost);

    showPosts(posts);

});


function closeModal() {
    $("#exampleModal").modal("hide");
}

function resetModal() {
    $("#postTitle").val("");
    $("#postContent").val("");

}

function addPost() {

    closeModal();

    var title = $("#postTitle").val();
    var content = $("#postContent").val();
    var public = $('#publiCheck').is(":checked");
    var featured = $('#featuredCheck').is(":checked");

    resetModal();

    var post = new Post(title, content, public, featured);
    posts.push(post);

    generatePosts(post);

    return posts;
}

function generatePosts(post) {

    if(post.public===true&&post.featured===true){
        var article = '<div class="row my-6"><div class="col-md-12 card" style="background-color:#ef9a9a"><div class="card"><header class="card-header">' + post.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post.title + '</h5><p class="card-text">' + post.content + '</p></article><footer><p>Public</p></footer></div></div>'
        $(".articles").prepend(article);}
    else if(post.public===true&&post.featured===false){
        var article = '<div class="row my-6"><div class="col-md-12 card"><div class="card"><header class="card-header">' + post.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post.title + '</h5><p class="card-text">' + post.content + '</p></article><footer><p>Public</p></footer></div></div>'
        $(".articles").append(article);
    }
    else if(post.public===false){
        var article = '<div class="row my-6"><div class="col-md-12 card"><div class="card"><header class="card-header">' + post.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post.title + '</h5><p class="card-text">' + post.content + '</p></article><footer><p>Draft</p></footer></div></div>'
        $(".articles").append(article);
    }
    else{
        var article = '<div class="my-6"><div class="row y-6"><div class="col-md-12 card"><div class="card"><header class="card-header">' + post.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post.title + '</h5><p class="card-text">' + post.content + '</p></article><footer><p>Draft</p></footer></div></div></div>'
        $(".articles").append(article);
    }

}

function publicPosts(post){

}

function showPosts(posts) {

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        if (post.public === true) {
            generatePosts(post);
        }

    }

}