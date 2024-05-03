const articleListURL = 'https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/49ddd7c2636fb722912d91107aff55c79ddf05a8/articles.json';

document.addEventListener('DOMContentLoaded', function () {
    initArticleList();
})

function initArticleList() {
    const promiseResponse = fetch(articleListURL);
    promiseResponse.then(function (response) {
        const dataPromise = response.json();
        dataPromise.then(function (dataResponse) {
            renderArticleList(dataResponse.articles)
        });
    });
}

function renderArticleList(articles) {
    const articleListElement = document.querySelector('[data-js-generate-articlelist]');
    console.log(articleListElement);
    console.log(articles);
    const cards = articles.map(article => {
        return `<li>
            <figure>    
                <img src="./reset-images/${article.teaserImg}"></img>
                <h3>${article.title}</h3>
                <address>${article.author}</address>
            </figure>
        </li>
        <ul>${renderTagList(article)}</ul>`
    }).join('');
    console.log(cards)
    articleListElement.innerHTML = cards;
}

function renderTagList(article) {
    console.log(article.tags.keywords);
    return article.tags.keywords.map(keyword => {
        return `<li>
        ${keyword}
        </li>`
    }).join('')
}


console.log('UL: ' + document.querySelectorAll('ul'))