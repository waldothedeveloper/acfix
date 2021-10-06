// https://randomuser.me/api/
const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get random users
  const fetchRandomUsers = await fetch(
    `https://randomuser.me/api/?nat=us&results=4`
  )
  const users = await fetchRandomUsers.json()

  // create node for random users
  createNode({
    random_user: users,
    id: `random_users`,
    parent: null,
    children: [],
    internal: {
      type: `RandomUsers`,
      contentDigest: createContentDigest(users),
    },
  })
}
