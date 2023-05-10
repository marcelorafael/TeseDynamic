import { useRouter } from 'next/router'

// export async function getStaticProps(context) {
//   const { params } = context

//   const data = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${params.id}`
//   )

//   const user = await data.json()

//   return {
//     props: { user }
//   }
// }

// export async function getStaticPaths() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

//   const data = await response.json()

//   const paths = data.map((user) => {
//     return {
//       params: {
//         id: `${user.id}`
//       }
//     }
//   })

//   return { paths, fallback: true }
// }

export default function UsersEdit() {
  const { query } = useRouter()

  const uesrId = query?.id

  console.log('query: ', query)
  return (
    <>
      <h2>User Edit</h2>
      <p>Olha o ID do cabra: {uesrId}</p>
      {/* <p>Title: {uesrId.title}</p> */}
    </>
  )
}
