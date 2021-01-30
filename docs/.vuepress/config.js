module.exports = {
  title: 'blog', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'blog', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
      ['link', 
          { rel: 'icon', href: '/lollypop.png' }
          //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
      ],  
  ],

  themeConfig: { // 默认主题的相关配置，比如顶部顶部导航栏，侧边栏等等
    logo: '/lollypop.png', // 网页顶端导航栏左上角的图标，路径跟上面一样，第一个/会遍历public文件夹
    nav: [
      { text: '首页', link: '/'}, // 直接跳转，/为不添加路由，跳转到首页
      { text: 'Github', link: 'https://github.com/dairj', target: '_blank' }
    ],
    sidebar: [
      ['/pages/about/', '介绍'],
      {
        title: '框架',
        // path: '/pages/framework/',
        collapsable: false,
        children: [
          '/pages/framework/angular',
          '/pages/framework/react'
        ]
      },
    ]
  }
}