import Button from "../Button/Button"
import classes from "./Header.module.css"
const Header=props=>{
    return(
        <header className={classes.header}>
<h1 className={classes.h1}>Medicine Shop</h1>
<Button>Cart{0}</Button>
        </header>
    );
};

export default Header;