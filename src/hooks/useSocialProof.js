import { useStaticQuery, graphql } from "gatsby"

export const useSocialProof = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/ready/" } }) {
        edges {
          node {
            name
            id
            publicURL
          }
        }
      }
    }
  `)
  return data.allFile.edges
}
