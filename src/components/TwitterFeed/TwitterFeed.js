import React from 'react'
import classnames from 'classnames'
import styles from './TwitterFeed.module.scss'

// DEMO
// <div class='embedsocial-hashtag' data-ref="xyz" ></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));</script>

// const demoProps = {
//   scriptContent: `(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);})(document, "script", "EmbedSocialHashtagScript")`,
//   containerConfiguration: {
//     className: 'embedsocial-hashtag',
//     dataRef: 'xyz',
//   },
// }

class TwitterFeed extends React.Component {
  componentDidMount() {
    if (window && window.document) {
      const doc = window.document
      const script = doc.createElement('script')
      script.innerHTML = this.props.scriptContent
      doc.getElementsByTagName('head')[0].appendChild(script)
    }
  }

  componentWillUnmount() {
    if (window && window.document) {
      const iframeId = 'EmbedSocialIFrame'
      const scriptId = 'EmbedSocialHashtagScript'
      const lightFrameId = 'EmbedSocialIFrameLightboxCSS'
      const ids = [iframeId, scriptId, lightFrameId]
      ids.forEach(id => {
        const elem = document.getElementById(id)
        if (elem) {
          elem.parentNode.removeChild(elem)
        }
      })
    }
  }

  render() {
    const { dataRef, className } = this.props
    return (
      <div
        className={classnames(styles.container, className)}
        data-ref={dataRef}
      />
    )
  }
}

export default TwitterFeed
