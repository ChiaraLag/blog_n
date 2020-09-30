$(document).ready(function () {

    $(".btnComment").click(function () {
        var comment = $("#comment").val();
        var comments = $(".comments");
        var commentText = '<li class="list-group-item">' + comment + '</li>';
        comments.append(commentText);
    });



    $("#saveBtn").click(addPost);

    $("#remove-articles").click(removeAllPosts);

    $("#generate-articles").click(generatePosts);

});



function addPost() {
    var title = $("#postTitle").val();
    var content = $("#postContent").val();

    var post = new Post(title, content, true);

    var article = '<div class="col-md-4 card"><div class="card"><header class="card-header">'+ post.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">'+ post.title +
    '</h5><p class="card-text">'+ post.content + '</p></article><footer></footer></div>'

    $(".articles").append(article);
}

function removeAllPosts() {
    $('.card').remove();
}
   
function generatePosts(){
    var post1 = new Post("Je", "blablabla", true);
    var post2 = new Post("Ne", "blablabla", true);
    var post3 = new Post("Sais", "blablabla", true);
    var post4 = new Post("Pas", "blablabla", true);

    var posts = [post1, post2, post3, post4];

    var article1 = '<div class="col-md-4 card"><div class="card"><header class="card-header">' + post1.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post1.title + '</h5><p class="card-text">' + post1.content + '</p></article><footer></footer></div>'
    var article2 = '<div class="col-md-4 card"><div class="card"><header class="card-header">' + post2.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post2.title + '</h5><p class="card-text">' + post2.content + '</p></article><footer></footer></div>'
    var article3 = '<div class="col-md-4 card"><div class="card"><header class="card-header">' + post3.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post3.title + '</h5><p class="card-text">' + post3.content + '</p></article><footer></footer></div>'
    var article4 = '<div class="col-md-4 card"><div class="card"><header class="card-header">' + post4.title + '</header><img src="..." class="card-img-top" alt="..."><article class="card-text"><h5 class="card-title">' + post4.title + '</h5><p class="card-text">' + post4.content + '</p></article><footer></footer></div>'
    $(".articles").append(article1, article2, article3, article4);
}