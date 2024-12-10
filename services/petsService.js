const BASE_URL = 'http://localhost:3000/pets'

const index = async () => {
  const request = await fetch(BASE_URL)
  const pets = await request.json()
  return pets
}

const show = async (id) => {
  const request = await fetch(BASE_URL + `/${id}`)
  const pet = await request.json()
  return pet
}

export {
  index,
  show
}