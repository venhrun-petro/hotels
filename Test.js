/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { StaticQuery, graphql } from "gatsby"
// import store from '~r/store'
// import { changesecondName } from '~r/actions'

// const dispatch = useDispatch()

// console.log(store.getState());

// store.dispatch(changesecondName("true"))

// console.log(store.getState());


const wrapProvider = require('./src/redux/wrapProvider')

module.exports = { wrapRootElement : wrapProvider }

// export const wrapRootElement = wrapProvider



class Test extends React.Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
            query Test{
              allMarkdownRemark(limit: 1000) {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    },
                    frontmatter{
                      templateKey
                    }
                  }
                }
              },
              markdownRemark(
                fields: { 
                  langKey: { eq: "uk" } 
                }
                frontmatter: {
                  templateKey: { eq: "home" } }
              ){
                fields {
                  langKey
                }
                frontmatter {
                  templateKey
                  metaTitle
                  metaDescription
                }
              }
            }
          `}
          render={data => {
            const newdata = data.allMarkdownRemark.edges
            let newKey = newdata.map((edge, i) => {
                // console.log(edge.node.fields)
                // newKey.push(edge.node.fields.langKey)
                return(
                    <div key={i}>
                        <p>| {edge.node.fields.langKey} |</p>
                    </div>
                )
              }
            )
            console.log(newKey)
            return(
              <div>
                <p>//</p>
                <p>//</p>
                <p>//</p>
                <p>//</p>
                <p>//</p>
                <p>{this.props.name}/</p>
                <p></p>
                <div>Content:
                {newKey}
                </div>
                <h2>key:  
                {/* {data.markdownRemark.fields.langKey} */}
                </h2>
                <p>/</p>
                {/* {data.markdownRemark.frontmatter.metaTitle} */}
             </div>
            )
          }
        }
      />
    )
  }
}


export default Test


