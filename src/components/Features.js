import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import paragraphs from 'lines-to-paragraphs'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-weight-semibold" style={{ marginBottom: '10pt' }}>
            {item.title}
          </div>
          <div style={{ width: '280px', display: 'inline-block', marginBottom: '20pt' }} >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

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
