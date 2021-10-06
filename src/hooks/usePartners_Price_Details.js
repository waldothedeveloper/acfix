import { useStaticQuery, graphql } from "gatsby"

export const usePartnersPriceDetails = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPartnersDetailes(filter: { title: { regex: "/Price/" } }) {
        nodes {
          description {
            description
          }
          title
          imageQuoteCustomer
          imageQuoteMessage
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `)
  return data.allContentfulPartnersDetailes.nodes[0]
}
