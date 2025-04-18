import { Helmet } from 'react-helmet-async'
import { JSX } from 'react'

interface MetaTagsProps {
  metatitle: string
  metadescription: string
  metaurl: string
}

function MetaTags ({
  metatitle,
  metadescription,
  metaurl
}: MetaTagsProps): JSX.Element {
  return (
    <Helmet>
      <title>{metatitle}</title>
      <meta name='description' content={metadescription} />
      <link rel='canonical' href={metaurl} />
      <meta property='og:title' content={metatitle} />
      <meta property='og:description' content={metadescription} />
      <meta property='og:url' content={metaurl} />
    </Helmet>
  )
}

export default MetaTags
