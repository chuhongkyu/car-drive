module.exports = {
    siteUrl: process.env.SITE_URL || 'https://car-drive-practice.vercel.app/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}