import React from 'react'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import { config } from 'config'
import Helmet from 'react-helmet'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        let cloudinary = 'https://res.cloudinary.com/dgbjwyspu/image/upload/'

        if (layout != 'page') {
            template = <SitePost {...this.props}/>
        } else {
            template = <SitePage {...this.props}/>
        }

        return (
            <div>
              <Helmet
                title={`${post.title} - ${config.siteTitle}`}
                meta={[
                  {
                    name: 'title',
                    content: `${post.title}`,
                  },
                  {
                    name: 'description',
                    content: `${post.description}`,
                  },
                  // Open Graph data
                  {
                    property: 'fb:app_id',
                    content: '1864819570421578',
                  },
                  {
                    property: 'fb:smart_publish:robots',
                    content: 'noauto',
                  },
                  {
                    property: 'og:title',
                    content: `${post.title} - ${post.category}`,
                  },
                  {
                    name: 'og:type',
                    content: 'article',
                  },
                  {
                    property: 'og:url',
                    content: `http://alvisng.me${post.path}`,
                  },
                  {
                    property: 'og:image',
                    content: `${cloudinary}${post.image_path}`,
                  },
                  {
                    property: 'og:description',
                    content: `${post.description}`,
                  },
                  {
                    property: 'og:site_name',
                    content: 'Alvis Ng',
                  },
                  {
                    name: 'article:published_time',
                    content: `${post.date}`,
                  },
                  {
                    name: 'article:section',
                    content: `${post.category}`,
                  },
                  {
                    name: 'fb:admins',
                    cotent: '385884901751008',
                  },
                  // Twitter Card data
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
                    cotent: `${post.title}`,
                  },
                  {
                    name: 'twitter:description',
                    content: `${post.description}`,
                  },
                  {
                    name: 'twitter:creator',
                    content: '@alvis_bp',
                  },
                  {
                    name: 'twitter:label1',
                    content: `${post.category}`,
                  },
                  {
                    name: 'twitter:img:src',
                    content: `${cloudinary}${post.image_path}`,
                  },
                  // Schema.org markup for Google+
                  {
                    itemprop: 'name',
                    content: `${post.title}`,
                  },
                  {
                    itemprop: 'description',
                    content: `${post.description}`,
                  },
                  {
                    itemprop: 'image',
                    content: `${cloudinary}${post.image_path}`,
                  },
                  {
                    name: 'author',
                    content: 'https://medium.com/@AlvisNg',
                  },
                  {
                    property: 'article:publisher',
                    content: 'https://www.facebook.com/alvisng.me',
                  },
                  {
                    property: 'article:author',
                    content: 'https://medium.com/@AlvisNg',
                  },
                  {
                    name: 'robots',
                    content: 'index follow',
                  },
                ]}
                link={[
                  {
                    rel: 'publisher',
                    href: 'https://plus.google.com/u/2/106889811751625519690',
                  },
                  {
                    rel: 'author',
                    href: `${config.siteAuthor}`,
                  },
                ]}
              />
              { template }
            </div>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
