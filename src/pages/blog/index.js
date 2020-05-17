import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h1>StoryPurpose Resources</h1>
                <h3 className="mt-1">StoryPurpose solves specific usecases based on Jira issues to help teams deliver world-class software</h3>
              </div>
            </div>
            <hr />
            <div className="columns">
              <div className="column is-8 is-offset-1">
                <BlogRoll />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
