let apartments = []

export const useApartments = () => {
  return apartments
}

export const getApartments = () => {
  return fetch ("http://localhost:3000/savedLocations")
  .then(response => response.json())
  .then(
    parsed => {
      apartments = parsed.slice()
    }
  )
}

export const addApartment = apt => {
  return fetch ("http://localhost:3000/savedLocations/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apt)
  })
  .then(getApartments)
}
