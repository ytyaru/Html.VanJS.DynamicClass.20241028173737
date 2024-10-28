window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.DynamicClass.20241028173737/`}, 'DynamicClass')),
        p('Classを動的生成する。'),
//        p('Dynamically generate Class.'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

