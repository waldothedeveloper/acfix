import { useStaticQuery, graphql } from "gatsby"

export const usePartnerLicensedDetails = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPartnersDetailes(
        filter: { title: { regex: "/Licensed/" } }
      ) {
        edges {
          node {
            title
            image {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
            description {
              description
            }
            imageQuoteCustomer
            imageQuoteMessage
            id
          }
        }
      }
    }
  `)
  return data.allContentfulPartnersDetailes.edges[0].node
}
