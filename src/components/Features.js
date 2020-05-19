import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import paragraphs from 'lines-to-paragraphs'
import Content, { HTMLContent } from '../components/Content'

const FeatureGrid = ({ gridItems }) => {
  const PostContent = HTMLContent || Content

  return (
    <div style={{ marginTop: '40pt' }}>
      {gridItems.map(item => (
        <section>
          <div className="columns is-multiline" style={{ marginBottom: '48pt' }}>
            <div key={item.text} className="column is-6">
              <div className="has-text-weight-semibold" style={{ marginBottom: '10pt' }}>
                {item.title}
              </div>
              {item.text}
              {/* <p className="content" dangerouslySetInnerHTML={{ __html: paragraphs(item.text) }} /> */}
            </div>
            <div className="column is-6">
              <div style={{ width: '480px', display: 'inline-block', marginBottom: '20pt' }} >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
