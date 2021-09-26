import { useStaticQuery, graphql } from "gatsby"

export const useReviews = () => {
  const data = useStaticQuery(graphql`
    {
      allRandomUsers {
        edges {
          node {
            random_user {
              results {
                name {
                  first
                  last
                  title
                }
                picture {
                  medium
                }
                id {
                  value
                }
              }
            }
            id
          }
        }
      }
    }
  `)
  return data?.allRandomUsers?.edges[0]?.node?.random_user?.results
}
