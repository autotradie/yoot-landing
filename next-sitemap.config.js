/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yootfirst.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/resources', '/compare', '/guides'],
}
