const title = 'car drive'
const url = 'https://car-drive-practice.vercel.app/'
const description = 'Experience the thrill of driving in this immersive Three.js NEXT game. Enhance your driving skills while emphasizing the value of safe and meaningful journeys. Join us in promoting the importance of driving for connectivity and safety'
const author = 'mr.chu'
const keywords = 'driving simulation game, improve driving skills, safe driving awareness, meaningful journeys, Three.js NEXT project, driving practice game, enhance road safety, connect through driving, value of driving, driving game deployment link'

export default function Head() {
  return (
    <>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* google */}
      <meta name="google-site-verification" content="mtYE_cYSNMHVF7KJPjly8GIJXgXfrbCG67BzEi3OY3c" />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content={keywords}
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='site' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={'/icons/share.png'} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />

      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' color='#000000' href='/icons/safari-pinned-tab.svg' />
      <link rel='apple-touch-startup-image' href='/startup.png' />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/icons/apple-touch-icon.png' />


      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="white"/>
      <meta name="apple-mobile-web-app-title" content="Notentool"/>  
      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:card' content='summary' />
      <link rel="icon" href="/icons/favicon.ico" />
    </>
  )
}
