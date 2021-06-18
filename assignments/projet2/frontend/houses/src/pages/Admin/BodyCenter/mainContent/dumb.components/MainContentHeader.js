import React from "react";
import { useSelector } from 'react-redux'
const MainContentHeader =({error})=> {

  const networkError = useSelector(state => state.issues.networkError)

    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon">
              <i className="pe-7s-info icon-gradient bg-mean-fruit"/>
            </div>

            <div>
              Users Issues
              <div className="page-title-subheading">
                These are users issues
              </div>
              {error&& <li className="list-group-item-danger list-group-item">There is some Error <br/> Please try again</li>}
            </div>


          </div>

          <div>


          </div>


          {" "}
        </div>
      </div>
    );

}

export default MainContentHeader;
