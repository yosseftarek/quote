var test;
function get_quotes() {
    var quote = ["“Be yourself; everyone else is already taken.”",
                 "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
                 "“So many books, so little time.”",
                 "“A room without books is like a body without a soul.”",
                 "“You only live once, but if you do it right, once is enough.”"];

    var name = ["--Oscar Wilde", "― Albert Einstein", "― Frank Zappa", "― Marcus Tullius Cicero", "― Mae West"];
    
    var ind = Math.floor(Math.random() * 4);
    while(ind==test){
        ind = Math.floor(Math.random() * 4);
    }
    document.getElementById("quote").innerHTML=quote[ind];
    document.getElementById("name").innerHTML=name[ind];
    test=ind;
}