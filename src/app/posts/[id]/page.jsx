export default function Post({ params }) {
  const { id } = params
  return (
    <div>
      <h1> Este es mi post {id} </h1>
    </div>
  )
}
