import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
            <div className="header">
                <ul className="main-nav">
                    <li><NavLink >Klámvísur</NavLink></li>
                    <li><NavLink >A til Ö</NavLink></li>
                    <li><NavLink >Ástarvísur</NavLink></li>
                    <li><NavLink >Leita</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Header;