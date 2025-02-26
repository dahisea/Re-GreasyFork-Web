(function() {
    // 广告管理器
    function AdController() {
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
                        node.nodeType === 1 && node.matches('ins.adsbygoogle') // 锁定ins元素
                    );
                    if (newAds.length) {
                        newAds.forEach(ad => {
                            this.checkAndCloseAd(ad); // 检查广告状态并模拟关闭
                        });
                    }
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        },

        // 检查广告状态并模拟关闭广告
        checkAndCloseAd(adElement) {
            // 检查广告是否已显示
            const checkAdStatus = () => {
                const status = adElement.getAttribute('data-anchor-status');
                if (status === 'displayed') {
                    // 广告已经显示，等待1秒后删除
                    setTimeout(() => {
                        adElement.classList.add('ad-hidden'); // 隐藏广告
                        setTimeout(() => adElement.remove(), 500); // 移除广告
                    }, 1000); // 等待1秒
                }
            };

            // 如果广告立即有 data-anchor-status，可以立即检查
            checkAdStatus();

            // 监听属性变化以便检测广告显示
            const observer = new MutationObserver(() => {
                checkAdStatus();
            });

            observer.observe(adElement, {
                attributes: true,
                attributeFilter: ['data-anchor-status'] // 监听状态变化
            });
        }
    };

    // 初始化广告控制器
    const adController = new AdController();
})();
