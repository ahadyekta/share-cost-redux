import {connect} from 'react-redux'
import ExpList from  '../components/ExpList'
import {removeExp} from "../actions/index";

const mapStateToProps= state => ({
    members : state.members,
    expenses: state.expenses
})

const mapDispatchToProps= dispatch => ({
    removeExp : id => dispatch(removeExp(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpList)