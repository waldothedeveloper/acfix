import { useStaticQuery, graphql } from "gatsby"

export const useAllServices = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAllServices {
        childContentfulAllServicesServiceJsonNode {
          allServices {
            service
          }
        }
      }
    }
  `)
  return data.contentfulAllServices.childContentfulAllServicesServiceJsonNode
    .allServices
}
