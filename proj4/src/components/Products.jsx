import Card from "./Card"
import "./Products.css"

function Products() {

    return(
        <>
        <div className="Products">
            <Card cardname="Logitech MX Master" />
            <Card cardname="Apple Pencil(2nd gen)"/>
            <Card cardname="Zebronics"/>
            <Card cardname="Petronics Toad"/>
        </div>
        </>
    )
}

export default Products