import React from 'react';
import { Link } from "gatsby"
import ReactDOM from 'react-dom';
import HamburgerMenu from 'react-hamburger-menu'

class MobileMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
  }

	handleClick() {
		
    this.setState({
			open: !this.state.open
		});
    }
    
	render() {
		return (
			<div className='mobile-menu'>
				<HamburgerMenu
					isOpen={this.state.open}
					menuClicked={this.handleClick.bind(this)}
					width={30}
					height={30}
					strokeWidth={2}
					rotate={0}
					color='black'
					borderRadius={0}
					animationDuration={0.5}
				/>

               


                {this.state.open && (

                    <div className="mobile-menu-links">


                    <Link to="/" style={{textDecoration:"none", display:"block"}} >
                    Home</Link>
                    <Link to="/about/"  style={{textDecoration:"none", display:"block"}} >About</Link>
                    <Link to="/page-2/"  style={{textDecoration:"none", display:"block"}} >Projects</Link>
                    <Link to="/page-2/"  style={{textDecoration:"none", display:"block"}}  >Contact</Link>
    
                    </div>

                )}


			</div>
		);
	}
};

export default MobileMenu;