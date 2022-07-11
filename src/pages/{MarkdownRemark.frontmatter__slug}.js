import React from "react"
import Image from "../components/image"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div
      className="container"
      style={{
        margin: "50px",
        fontFamily: "Arial, Helvetica, sans-serif;",
      }}
    >
      <div
        style={{
          maxWidth: `600px`,
        }}
      >
        <Image />
      </div>
      <h1>{frontmatter.title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
