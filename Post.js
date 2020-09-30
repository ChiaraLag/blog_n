function Post(title,content, public){
    this.title = title;
    this.content = content;
    this.public = public;
    this.postFull = postFull;
}



function postFull() { 
    return this.title + ', ' + this.content + ', ' + this.public
}