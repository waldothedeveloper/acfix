import { useStaticQuery, graphql } from "gatsby"

export const useHero = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHero(filter: { heroTitle: { regex: "/contractors/" } }) {
        edges {
          node {
            id
            heroTitle
            heroFinish
            heroBold
          }
        }
      }
    }
  `)
  return data?.allContentfulHero?.edges[0]?.node
}
