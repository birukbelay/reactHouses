import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {CreateItem, getHouses, updateCategory, deleteCategory } from '../../../../store/category/category.actions'
import NoItems from './dumb.components/noContent'

function Category({category}) {
    const dispatch = useDispatch()
    const handleDelete=()=> {
        dispatch(deleteCategory(category.id))
    }
    const handleUpdate=()=> {
        dispatch(updateCategory(category.id))

    }
    return <tr>
        <th scope="row">{category.id}</th>
        <td className="text-center">{category.name}</td>
        <td className="text-center">
            <button
                disabled={false}
                onClick={handleUpdate}
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-outline-warning btn-sm"
            >
                Update
            </button>
        </td>
        <td className="text-center">
            <button
                disabled={false}
                onClick={handleDelete}
                type="button"
                id="PopoverCustomT-1"
                className="btn btn-outline-danger btn-sm"
            >
                Delete
            </button>
        </td>
    </tr>;
}

const Categories =()=>{

    const categories = useSelector(state => state.categories.categoriesList)
   const dispatch = useDispatch();
    const [name, setName]= useState();

    useEffect(() => {
        dispatch(getHouses())
    }, []);

    const upload=(event)=>{
        event.preventDefault();

        dispatch(CreateItem(name))
    }

    const hasCategories= categories!==undefined &&categories.length>0;


    const nodes = hasCategories ? (
        categories.map(category=>
            <Category key={category.id} category={category}/>

        )

    ) : (
        <NoItems/>
    )
return(
    <>
        <div className="row">
            <div className="col-md-6">
                <div className="main-card mb-3 card">
                    <div className="card-body"><h5 className="card-title">Create a Category</h5>
                        <form  onSubmit={upload}>
                            <div className="position-relative form-group"><label htmlFor="exampleEmail"
                                                                                 className="">Category Name</label>
                                <input
                                    onChange={(e) => { setName(e.target.value )}}
                                    name="name"
                                    id=""
                                    placeholder="category name" type="text"
                                    className="form-control"/></div>

                            <button className="mt-1 btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="main-card mb-3 card">
                    <div className="card-body"><h5 className="card-title">Categories List</h5>
                        <table className="mb-0 table table-striped">
                            <thead>
                            <tr>
                                <th># id</th>
                                <th> Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                nodes
                            }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Categories