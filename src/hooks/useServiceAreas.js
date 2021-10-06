import { useStaticQuery, graphql } from "gatsby"

export const useServiceAreas = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { name: { regex: "/areas/" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            name
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const rawData = data?.allFile?.edges
  const newData = rawData.map(area => {
    let currArea = area
    currArea.node.name = area.node.name
      .replace(/_/g, " ")
      .replace(/areas/g, "")
      .replace(/\s+$/, "")
      .toUpperCase()

    return currArea
  })
  return newData
}
