    // 获取当前页面的语言部分
    const currentLanguage = window.location.pathname.split('/')[1];

    // 定义语言选项
    const languages = [
      { code: 'zh-CN', name: '简体中文 (zh-CN)' },
      { code: 'en', name: 'English (en)' },
      { code: 'fr', name: 'Français (fr)' },
      { code: 'de', name: 'Deutsch (de)' },
      { code: 'es', name: 'Español (es)' },
      { code: 'ja', name: '日本語 (ja)' },
      { code: 'ko', name: '한국어 (ko)' },
      { code: 'ru', name: 'Русский (ru)' },
      { code: 'pt-BR', name: 'Português (pt-BR)' },
      { code: 'zh-TW', name: '繁體中文 (zh-TW)' },
      { code: 'it', name: 'Italiano (it)' },
      { code: 'ar', name: 'العَرَبِيةُ (ar)' },
      { code: 'tr', name: 'Türkçe (tr)' },
      { code: 'vi', name: 'Tiếng Việt (vi)' },
    ];

    // 动态填充语言选择器
    const languageSelector = document.getElementById('language-selector');
    const mobileLanguageSelector = document.getElementById('mobile-language-selector');
    languages.forEach(lang => {
      const option = document.createElement('option');
      option.value = `/${lang.code}`;
      option.textContent = lang.name;
      if (lang.code === currentLanguage) {
        option.selected = true;
      }
      languageSelector.appendChild(option.cloneNode(true));
      mobileLanguageSelector.appendChild(option);
    });

    // 更新页面中的链接
    const updateLinks = (lang) => {
      document.getElementById('scripts-link').href = `/${lang}/scripts`;
      document.getElementById('forum-link').href = `/${lang}/discussions`;
      document.getElementById('help-link').href = `/${lang}/help`;

      // Dropdown Links
      document.getElementById('advanced-search-link').href = `/${lang}/search`;
      document.getElementById('users-list-link').href = `/${lang}/users`;
      document.getElementById('libraries-link').href = `/${lang}/scripts/libraries`;
      document.getElementById('moderator-log-link').href = `/${lang}/moderator_actions`;

      // Mobile Links
      document.getElementById('scripts-mobile-link').href = `/${lang}/scripts`;
      document.getElementById('forum-mobile-link').href = `/${lang}/discussions`;
      document.getElementById('help-mobile-link').href = `/${lang}/help`;
      document.getElementById('advanced-search-mobile-link').href = `/${lang}/search`;
      document.getElementById('users-list-mobile-link').href = `/${lang}/users`;
      document.getElementById('libraries-mobile-link').href = `/${lang}/scripts/libraries`;
      document.getElementById('moderator-log-mobile-link').href = `/${lang}/moderator_actions`;

      // Sign-in Link
      document.getElementById('sign-in-link').href = `/${lang}/users/sign_in?return_to=%2F${lang}`;
      document.getElementById('sign-in-mobile-link').href = `/${lang}/users/sign_in?return_to=%2F${lang}`;
    };

    // 语言切换
    const changeLanguage = (event) => {
      window.location.href = event.target.value;
    };

    // 页面初始化时更新所有链接
    updateLinks(currentLanguage);

    document.addEventListener('DOMContentLoaded', function() {
      // 初始化下拉菜单和折叠菜单
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { coverTrigger: false });
      M.Sidenav.init(document.querySelectorAll('.sidenav'));

      // 监听语言选择器变化
      document.getElementById('language-selector').addEventListener('change', changeLanguage);
      document.getElementById('mobile-language-selector').addEventListener('change', changeLanguage);
    });