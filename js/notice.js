// 检查是否已经显示过通知
if (!localStorage.getItem('notificationShown')) {
  // 远程 Markdown 文件的 URL
  const markdownUrl = 'https://cdn.smartcis.cn/gh/dahisea/re-greasyfork-assets@main/tos.md';

  // 加载并解析 Markdown 文件
  fetch(markdownUrl)
    .then(response => response.text())
    .then(markdown => {
      // 使用 marked 解析 Markdown 为 HTML
      const parsedHTML = marked.parse(markdown);

      // 创建模态框的 HTML 结构
      const modalHTML = `
        <div id="notification-modal" class="modal micromodal-slide" aria-hidden="false">
          <div class="modal__overlay" tabindex="-1" data-micromodal-close>
            <div class="modal__container" role="dialog" aria-modal="true">
              <header class="modal__header">
                <h3 class="modal__title" id="notification-modal-title">
                  公告
                </h3>
                <button class="modal__close" aria-label="关闭" data-micromodal-close></button>
              </header>
              <main class="modal__content">
                ${parsedHTML} <!-- 注入解析后的 HTML -->
              </main>
              <footer class="modal__footer">
                <button class="modal__btn modal__btn-primary" data-micromodal-close>
                  我知道了
                </button>
              </footer>
            </div>
          </div>
        </div>
      `;

      // 将模态框注入到 body 中
      document.body.insertAdjacentHTML('beforeend', modalHTML);

      // 显示模态框
      const modal = document.getElementById('notification-modal');
      modal.classList.add('is-open');

      // 关闭模态框的逻辑
      const closeModal = () => {
        modal.classList.remove('is-open');
        // 设置标记，表示通知已经显示过
        localStorage.setItem('notificationShown', 'true');
      };

      // 绑定关闭事件
      modal.querySelector('.modal__overlay').addEventListener('click', closeModal);
      modal.querySelector('.modal__close').addEventListener('click', closeModal);
      modal.querySelector('.modal__btn-primary').addEventListener('click', closeModal);
    })
    .catch(error => {
      console.error('加载公告内容失败:', error);
    });
}