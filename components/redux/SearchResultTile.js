import { connect } from 'react-redux'
import { addToBookList } from '../../store/bookList/actions'
import { BookTileWithButton } from '../BookTile'

function mapDispatchToProps (dispatch) {
  return {
    onButtonPress (book) {
      dispatch(addToBookList(book))
    }
  }
}

export const SearchResultTile = connect(
  null,
  mapDispatchToProps
)(BookTileWithButton)
