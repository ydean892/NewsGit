//console.log("shivam news");
//f926db49716f4b15b6117ab6cc1ceb6c
//https://gnews.io/api/v4/top-headlines?country=in&token=7ab6c3af51d0195239dd2d3211f436aa&lang=en
let source = 'NDTV News';
let apiKey = '7ab6c3af51d0195239dd2d3211f436aa';
//got the news container
let newsAccordian = document.getElementById('newsAccordian');

//created the get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?country=in&source=${source}&token=${apiKey}&lang=hi`, true);
console.log(apiKey);


let newsHTML="";
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);

      articles.forEach(function(element,index){

     
            
            let news = `       <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <b>Breaking News ${index+1} :</b> ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordian">
                <div class="accordion-body">
                    <strong>${element["description"]}.<a href="${element["url"]}" target="_blank" >Read more here</a>
                </div>
            </div>
            </div>`
            newsHTML+=news;
        })
        newsAccordian.innerHTML=newsHTML;
        //console.log(json);
    } else {
        console.log("some error occured");
    }
}

xhr.send();

