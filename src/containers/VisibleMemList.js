import {connect} from 'react-redux'
import MemList from  '../components/MemList'
import {removePerson} from "../actions/index";

const mapStateToProps= state => ({
    members : state.members,
    expenses: state.expenses
})

const mapDispatchToProps= dispatch => ({
    removeMem : id => dispatch(removePerson(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemList)