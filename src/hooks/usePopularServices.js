import { useStaticQuery, graphql } from "gatsby"

export const usePopularServices = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPopularServices(sort: { fields: name }) {
        edges {
          node {
            name
            imageSrc {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              id
            }
            id
          }
        }
      }
    }
  `)
  return data?.allContentfulPopularServices?.edges
}
