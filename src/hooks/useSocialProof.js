import { useStaticQuery, graphql } from "gatsby"

export const useSocialProof = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/ready/" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                formats: AUTO
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
            id
          }
        }
      }
    }
  `)
  return data.allFile.edges
}
