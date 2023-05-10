import Users from 'components/Users'

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/')

  const usersList = await data.json()

  return {
    props: { usersList }
  }
}

function UsersPage({ usersList }) {
  return (
    <>
      {/* <h1>users</h1> */}
      <Users usersList={usersList} />
    </>
  )
}

export default UsersPage
