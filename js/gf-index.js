function replaceUrl() {
    var inputUrl = document.getElementById('inputUrl').value;
    document.getElementById('errorMessage').textContent = '';
    document.getElementById('outputUrl').textContent = '';

    if (!inputUrl.includes('https://update.greasyfork.org/') && !inputUrl.includes('https://greasyfork.org/')) {
        document.getElementById('errorMessage').textContent = '链接不包含 Greasy Fork 脚本链接，本站仅对 Greasy Fork 的脚本提供资源加速服务！';
        return;
    }

    var outputUrl = inputUrl;
    if (inputUrl.includes('https://update.greasyfork.org/')) {
        outputUrl = outputUrl.replace('https://update.greasyfork.org/', 'https://yxd.dahi.edu.eu.org/');
    }
    if (inputUrl.includes('https://greasyfork.org/')) {
        outputUrl = outputUrl.replace('https://greasyfork.org/', 'https://yx.dahi.edu.eu.org/');
    }
    
    document.getElementById('outputUrl').textContent = outputUrl;
}
function handleSiteSearch() {
    const siteInput = document.getElementById('site-input').value.trim();

    if (!siteInput) {
alert('请输入站点域名！');
return;
    }

    const protocol = window.location.protocol;
    const host = window.location.host;

    const basePath = '/zh-hans/scripts/by-site/';
    const targetUrl = `${protocol}//${host}${basePath}${encodeURIComponent(siteInput)}`;

    window.location.href = targetUrl;
}