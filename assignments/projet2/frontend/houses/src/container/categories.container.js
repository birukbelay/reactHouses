import { connect } from 'react-redux';



import Categories from "../pages/Admin/BodyCenter/mainContent/categories";


const mapStateToProps=(state)=>({
    categories: state.categories

})



export default connect(
    mapStateToProps
    )(Categories)