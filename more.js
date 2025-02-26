(function() {
    const config = {
        adSelector: '.adsbygoogle',  // 自动广告的选择器
        adClient: 'ca-pub-3758644447684310'      // AdSense 客户端ID
    };

    // 广告管理器
    function AdController() {
        this.ads = [];
        this.init();
    }

    AdController.prototype = {
        init() {
            // 启动广告检测
            this.startDetection();
        },

        // 启动广告检测
        startDetection() {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    const newAds = [...mutation.addedNodes].filter(node => 
                        node.nodeType === 1 && node.matches(config.adSelector)
                    );
                    if (newAds.length) {
                        newAds.forEach(ad => {
                            if (this.isValidAd(ad)) {
                                this.bindAd(ad);
                                this.simulateCloseAd(ad); // 模拟关闭广告
                            }
                        });
                    }
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        },

        // 判断广告是否为有效的AdSense广告（只验证data-ad-client）
        isValidAd(adElement) {
            const adClient = adElement.getAttribute('data-ad-client');
            return adClient === config.adClient;
        },

        // 绑定广告实例
        bindAd(ad) {
            if (!ad.dataset.initialized) {
                ad.dataset.initialized = true;
            }
        },

        // 模拟点击关闭广告
        simulateCloseAd(adElement) {
            setTimeout(() => {
                // 如果广告没有关闭按钮，隐藏广告
                adElement.classList.add('ad-hidden'); // 直接将广告隐藏
                
                // 移除广告
                setTimeout(() => adElement.remove(), 500);
            }, 600); // 等待广告加载后再模拟关闭
        }
    };

    // 初始化广告控制器
    const adController = new AdController();
})();
