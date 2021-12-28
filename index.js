console.log("Hello World");

let apikey = 'e1597d4771ea4b659702d4eff527b201'


// grab the news container
let newsAccordian = document.getElementById('newsAccordian');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);

xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newshtml = "";

        articles.forEach(function(element, index) {
            // console.log(element, index);
            // console.log(articles[news]);

            let news = `<div class="accordion" id="newsAccordian">
                            <div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link btn-block collapsed text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                            ${element["title"]}
                                            </button>
                                    </h2>
                                </div>

                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                                    <div class="card-body">
                                         ${element["description"]}. <a href="${element['url']}" target = "_blank"> Read More </a>.
                                    </div>
                                </div>
                            </div>
                        </div> `;

            newshtml += news;
        });
        newsAccordian.innerHTML = newshtml;
    } else {
        console.log("Some Error Occured");
    }
}

xhr.send();