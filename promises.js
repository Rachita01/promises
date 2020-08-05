const Articles = [
    {title:'Article One',body:'This is first post'},
    {title:'Article Two',body:'This is second post'}
];

function getArticles(){
    setTimeout(() => {
        let output = '';
        Articles.forEach((article,index) => {
            output+= `<li>${article.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(article){
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => {
            Articles.push(article)
            const error = false;
            if(!error){
                resolve();
            }
            else
            {
                reject('Error:Something Went Wrong');
            }
        },3000);
    });
    
}

createPost({title:'Article Three',body:'This is third post'}).then(getArticles).catch(err => console.log(err));