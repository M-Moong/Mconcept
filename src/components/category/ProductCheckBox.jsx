/**
 *  ProductCheckBox component
 * */

function ProductCheckBox({isPacked = false, children}){
    return(
        <li className="list-none">
            <label>
                {isPacked ? (
                    <ProductCheck>{children}</ProductCheck>
                ):(
                    <UnProductCheck>{children}</UnProductCheck> 
                )}
            </label>
        </li>
    );
}

function ProductCheck({children}){
    return(
        <>
            <input type="checkbox" defaultChecked /> <del>{children}</del>
        </>
    );
}

function UnProductCheck({children}){
    return(
        <>
            <input type="checkbox" defaultChecked /> {children}
        </>
    );
}

export default ProductCheckBox;