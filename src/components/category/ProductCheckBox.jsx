
/**
 *  ProductCheckBox component
 * */

function ProductCheckBox({isPacked = false, children}){
    return(
        <ul className="list-none">
            <li>
                {isPacked ? (
                    <ProductCheck>{children}</ProductCheck>
                ):(
                    <UnProductCheck>{children}</UnProductCheck> 
                )}
            </li>
        </ul>
    );
}

function ProductCheck({children}){
    return(
        <>
            <input type="checkbox" className="custom-checkbox" defaultChecked /> <del>{children}</del>
        </>
    );
}

function UnProductCheck({children}){
    return(
        <>
            <input type="checkbox" className="custom-checkbox" defaultChecked /> {children}
        </>
    );
}

export default ProductCheckBox;