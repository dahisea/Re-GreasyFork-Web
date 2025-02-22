(function(){
    let siteId = 4;
    eval(`window.site${siteId}()`);

    let links = document.querySelectorAll('a[href="https://www.greasyfork.us.kg/"]');

    links.forEach(link => {
        link.href = "https://greasyfork.zh-cn.eu.org/";
    });
})();