import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
  render () {
    return (
      <div className='blog-social'>
        <ul>
          <li>
            <a href={config.siteFacebookUrl}><i className='fa fa-facebook' /></a>
          </li>
          <li>
            <a href={config.siteTwitterUrl}><i className='fa fa-twitter' /></a>
          </li>
          <li>
            <a href={config.siteEmailUrl}><i className='fa fa-envelope-o' /></a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SiteLinks
