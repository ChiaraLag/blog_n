//$(document).ready(function () {

    // $(".btnComment").click(function () {
    //    var comment = $("#comment").val();
    //    var comments = $(".comments");
    //    var commentText = '<li class="list-group-item">' + comment + '</li>';
    //    comments.append(commentText);
    //  });

var posts = [];

posts.push(new Post("Je", "blablabla", true, false))
posts.push(new Post("Ne", "blablabla", true, false))
posts.push(new Post("Sais", "blablabla", true, false))
posts.push(new Post("Pas", "blablabla", true, false))
    


$(document).ready(function () {

    $("#saveBtn").click(addPost);

    showPosts(posts);

});


    
//});
