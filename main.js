import {mappy} from "./mapbox.js"
import {getApartments} from "./aptDataProvider.js"


getApartments().then(
  () => {
    mappy()
  }
)
