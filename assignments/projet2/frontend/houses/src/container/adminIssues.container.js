import { connect } from 'react-redux';


import {setApproval} from '../store/issues/issues.actions'
import Issues from "../pages/Admin/BodyCenter/mainContent/Issues";

const mapStateToProps=(state)=>({
    issues: state.issues,


})

const mapActionsToProps = { setApproval };
export default connect(
    mapStateToProps,
    mapActionsToProps)(Issues)