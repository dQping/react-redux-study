import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { setFilterAction } from '../action'

const mapStateToProps = state => ({
    filter: state.filter
})
const mapDispatchToProps = dispatch => ({
    setFilterAction: filter => dispatch(setFilterAction(filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)
