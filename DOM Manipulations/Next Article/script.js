function getArticleGenerator(articles) {
    let divArticles = document.getElementById("content");   
    let counter = 0;
    
     return () => {
        if(counter > articles.length -1) return
        let article = document.createElement("article")
            article.innerHTML = `${articles[counter]}`
        divArticles.appendChild(article)
        counter++
     }
}
