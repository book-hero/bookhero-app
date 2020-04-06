import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faList, faSearch, faPlus, faEllipsisV, faBooks } from '@fortawesome/pro-regular-svg-icons'

function init () {
  library.add(faUserCircle, faList, faSearch, faPlus, faEllipsisV, faBooks)
}

export default {
  init
}
