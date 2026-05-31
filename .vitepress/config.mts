import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: 'https://open.undz.cn'
  },
  title: "AyOpenPlatform",
  description: "简单、可靠、为个人开发者打造的API服务平台",
  base: '/',
  lastUpdated: true,
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: '/logo.uhd.png' }],
  ],
  themeConfig: {
    logo: '/logo.uhd.png',
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2026-至今 韵典'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API 参考', link: '/api/' },
      { text: '关于', link: '/about' },
      {
        text: '相关链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/AeYunDian/open_platform' },
          { text: '主站', link: 'https://undz.cn' },
        ]
      }
    ],
    sidebar: {
      // 指南侧边栏（/guide/ 下的文件）
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        },
        {
          text: 'API文档',
          link: "/api/" 
        },
        {
          text: '关于',
          link: "/about" 
        }
        // 如果你还有更多指南文档，可以继续添加分组
      ],
      '/about': [
        {
          text: '开始',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        },
        {
          text: 'API文档',
          link: "/api/" 
        },
        {
          text: '关于',
          link: "/about" 
        }
        // 如果你还有更多指南文档，可以继续添加分组
      ],
      // API 侧边栏（/api/ 下的文件）
      '/api/': [
        {
          text: '核心 API',
          items: [
            { text: '总览', link: '/api/' },                // 对应 api/index.md
            { text: 'IP 归属地', link: '/api/ip' },
            { text: '添加 QQ 好友', link: '/api/add-qq-friend' },
            { text: '短链解析', link: '/api/short-link/short-link-resolve' },
            { text: '创建短链', link: '/api/short-link/short-link-create' }
          ]
        },
        {
          text: '文本分享 (AyPass)',
          items: [
            { text: '保存文本', link: '/api/pass-text/pass-text-save' },
            { text: '删除文本', link: '/api/pass-text/pass-text-delete' }
          ]
        },
        {
          text: '其他服务',
          items: [
            { text: '邮件验证码', link: '/api/verifymail' },
            { text: '聊天室', link: '/api/chatroom' },
            { text: 'Crossfire: Ys', link: '/api/crossfire' },
            { text: '网络代理', link: '/api/proxy' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AeYunDian/open_platform' }
    ]
  }
})
