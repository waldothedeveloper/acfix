import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedCustomer = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/customer-1/" } }) {
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
          }
        }
      }
    }
  `)
  return data?.allFile?.edges[0]?.node
}
