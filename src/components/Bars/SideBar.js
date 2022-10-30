import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import '../../css/sidebar.css'

const Side = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };


const SideBar = withRouter(Side);

  export default SideBar;