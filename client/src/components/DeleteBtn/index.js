// File derived from 20-MERN\01-Activities\02-Stu_Recipes\Solved\client\src\components\Button\index.js
// This file crates the button for deleting books
import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function DeleteBtn({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}

export default DeleteBtn;