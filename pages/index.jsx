import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SitePost from '../components/SitePost'
import SiteSidebar from '../components/SiteSidebar'

class SiteIndex extends React.Component {
    render() {
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')

                pageLinks.push(
                    <div className='blog-post'>
                      <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                        { moment(datePublished).format('MMMM YYYY') }
                      </time>
                      <span style={ {    padding: '5px'} }></span>
                      <span className='blog-category'>{ category }</span>
                      <h2><Link style={ {    borderBottom: 'none',} } to={ prefixLink(page.path) } > { title } </Link></h2>
                      <p dangerouslySetInnerHTML={ {    __html: description} } />
                      <Link className='readmore' to={ prefixLink(page.path) }> Read
                      </Link>
                    </div>
                )
            }
        })

        return (
            <div>
              <Helmet
                title={config.siteTitle}
                meta={[
                  {
                    name: 'title',
                    content: `${config.siteTitle}`,
                  },
                  {
                    name: 'description',
                    content: 'A father and husband. Co-founder and front-end hacker at Expade.com. Big fan of minimalism and deep work.',
                  },
                  {
                    property: 'fb:app_id',
                    content: '1864819570421578',
                  },
                  {
                    property: 'og:title',
                    content: `${config.siteTitle}`,
                  },
                  {
                    name: 'og:type',
                    content: 'website',
                  },
                  {
                    property: 'og:url',
                    content: 'http://alvisng.me',
                  },
                  {
                    property: 'og:image',
                    content: 'https://res.cloudinary.com/dgbjwyspu/image/upload/v1482054088/Blog/15356506_385890965083735_8627881344722748331_n_q5i4x9.jpg',
                  },
                  {
                    property: 'og:description',
                    content: 'A father and husband. Co-founder and front-end hacker at Expade.com. Big fan of minimalism and deep work.',
                  },
                  {
                    property: 'og:site_name',
                    content: 'Alvis Ng',
                  },
                  {
                    name: 'fb:admins',
                    cotent: '385884901751008',
                  },
                  {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                  },
                  {
                    name: 'twitter:site',
                    content: '@alvis_bp',
                  },
                  {
                    name: 'twitter:title',
                    cotent: `${config.siteTitle}`,
                  },
                  {
                    name: 'twitter:description',
                    content: 'A father and husband. Co-founder and front-end hacker at Expade.com. Big fan of minimalism and deep work.',
                  },
                  {
                    name: 'twitter:creator',
                    content: '@alvis_bp',
                  },
                  {
                    name: 'twitter:img:src',
                    content: 'https://res.cloudinary.com/dgbjwyspu/image/upload/v1482054088/Blog/15356506_385890965083735_8627881344722748331_n_q5i4x9.jpg',
                  },
                  {
                    itemprop: 'name',
                    content: `${config.siteTitle}`,
                  },
                  {
                    itemprop: 'description',
                    content: 'A father and husband. Co-founder and front-end hacker at Expade.com. Big fan of minimalism and deep work.',
                  },
                  {
                    itemprop: 'image',
                    content: 'https://res.cloudinary.com/dgbjwyspu/image/upload/v1482054088/Blog/15356506_385890965083735_8627881344722748331_n_q5i4x9.jpg',
                  },
                ]}
              />
              <SiteSidebar {...this.props}/>
              <div className='content'>
                <div className='main'>
                  <div className='main-inner'>
                    { pageLinks }
                  </div>
                </div>
              </div>
            </div>
              )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
