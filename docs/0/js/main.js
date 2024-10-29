window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        van.tags.h1(van.tags.a({href:`https://github.com/${author}/Html.VanJS.DynamicClass.20241028173737/`}, 'DynamicClass')),
        van.tags.p('Classを動的生成する。'),
//        p('Dynamically generate Class.'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())

    const a = new Assertion()
    a.t(Type.isCls(Class))
    a.t(Type.isFn(Class.of))
    a.t(Type.isCls(Class.of('C').make()))
    a.t(Type.isCls(Class.of('D', 'C').make()))
    a.fin()
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

