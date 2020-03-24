import React from 'react'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import styles from './TwitterFeed.module.scss'

// DEMO
// <div class='embedsocial-hashtag' data-ref="0c8c555c7fd05ace23e45f49997f1d246b36fead" ></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));</script>

// const demoProps = {
//   scriptContent: `(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);})(document, "script", "EmbedSocialHashtagScript")`,
//   containerConfiguration: {
//     className: 'embedsocial-hashtag',
//     dataRef: '0c8c555c7fd05ace23e45f49997f1d246b36fead',
//   },
// }

// NB! adding this component makes the page resize really slowly due to unthrottled resize handler in dep
const TwitterFeed = ({
  scriptContent,
  containerConfiguration: { className, dataRef },
}) => {
  return (
    <>
      <Helmet>
        <script>{scriptContent}</script>
      </Helmet>
      <div
        className={classnames(styles.container, className)}
        data-ref={dataRef}
      ></div>
    </>
  )
}

export default TwitterFeed
