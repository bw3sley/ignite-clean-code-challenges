// Nomenclatura de variáveis

const categories = [
  {
    title: 'User',
    minimumFollowers: 5
  },
  {
    title: 'Friendly',
    minimumFollowers: 50,
  },
  {
    title: 'Famous',
    minimumFollowers: 500,
  },
  {
    title: 'Super Star',
    minimumFollowers: 1000,
  },
]

export default async function getData(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const API_RESPONSE = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (API_RESPONSE.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubProfileInfo = await API_RESPONSE.json()

  const orderedCategories = categories.sort((categoryA, categoryB) =>  categoryB.minimumFollowers - categoryA.minimumFollowers); 

  const githubUserCategory = orderedCategories.find(category => githubProfileInfo.minimumFollowers > category.minimumFollowers)

  const userTitle = {
    githubUsername,
    githubUserCategoryTitle: githubUserCategory?.title
  }

  return userTitle
}

getData({ query: {
  username: 'bw3sley'
}}, {})