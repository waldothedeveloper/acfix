import { useStaticQuery, graphql } from "gatsby"

export const usePartnersExpertsDetails = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPartnersDetailes(filter: { title: { regex: "/Experts/" } }) {
        nodes {
          description {
            description
          }
          title
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `)
  return data.allContentfulPartnersDetailes.nodes[0]
}
