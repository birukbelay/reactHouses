// import React, {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {deleteComments} from "../../../../store/comments/comments.actions";
// import NoItems from "./dumb.components/noContent";
// import comments from "../../../../store/comments/comments.reducer";
//
// function Comment({comment}) {
//     const dispatch = useDispatch()
//     const handleDelete=()=> {
//         dispatch(deleteComments(comment.id))
//     }
//
//     return <tr>
//         <th scope="row">{comment.id}</th>
//         <td className="text-center">{comment.user_id}</td>
//         <td className="text-center">{comment.comment}</td>
//         <td className="text-center">
//             <button
//                 disabled={false}
//                 onClick={handleDelete}
//                 type="button"
//                 id="PopoverCustomT-1"
//                 className="btn btn-outline-danger btn-sm"
//             >
//                 delete
//             </button>
//         </td>
//
//     </tr>;
// }
//
//  const Comments=({display, setDisplay})=>{
//
//
//
//      const Style={
//      display: display?`block`:'',
//          top: '25%',
//
//          // left: '50%'
//      }
//      const comments = useSelector(state => state.comments.commentsList)
//      const hasComments= comments!==undefined &&comments.length>0;
//
//
//      const nodes = hasComments ? (
//          comments.map(comment=>
//              <Comment key={comment.id} comment={comment}  />
//
//          )
//
//      ) : (
//          <NoItems/>
//      )
//
//     return(
//         <div className="modal fade show" id="exampleModalLong" tabIndex="-1" role="dialog"
//              aria-labelledby="exampleModalLongTitle" style={Style} aria-modal="true">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalLongTitle">Comments</h5>
//                         <button onClick={()=>setDisplay(false)} type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">×</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="col-md-12">
//                             <div className="">
//                                 <div className="">
//                                     <table className="mb-0 table table-striped">
//                                         <thead>
//                                         <tr>
//                                             <th># id</th>
//                                             <th> user Id</th>
//                                             <th>comment</th>
//                                             <th>Delete</th>
//                                         </tr>
//                                         </thead>
//                                         <tbody>
//                                         {
//                                             nodes
//                                         }
//
//
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Comments