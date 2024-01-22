import {useState} from "react";
import Button from "../Button/Button";
import Header from "./Header";
import classes from "./MainForm.module.css";

const MainForm=()=>{
const[medicineName,setMedicineName]=useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");

const medicineNameHandler=(e)=>{
setMedicineName(e.target.value);
}

const descriptionHandler=(e)=>{
    setDescription(e.target.value);
    }

    const priceHandler=(e)=>{
        setPrice(e.target.value);
        }

        const submitHandler=(e)=>{
            e.preventDefault();
            setMedicineName("");
            setDescription("");
            setPrice("");
            console.log(`${medicineName}-${description}-${price}`);
        }

return(
<>
<Header/>
<form onSubmit={submitHandler} className={classes.form}>
    <label>Medicine Name: &nbsp;</label>
    <input type="text" value={medicineName} onChange={medicineNameHandler}/> &nbsp;
    <label>Description: &nbsp;</label>
    <input type="text" value={description} onChange={descriptionHandler}/> &nbsp;
    <label>Price: &nbsp;</label>
    <input type="number" value={price} onChange={priceHandler}/> &nbsp;
    <Button>Add Product</Button> &nbsp;
    </form>
</>
);
}

export default MainForm;