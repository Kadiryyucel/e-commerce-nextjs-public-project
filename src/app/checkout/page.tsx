import ShippingAddress from "../components/ShippingAddress";
import ValidPayMethods from "../components/ValidPayMethods";


export default function Checkout() {


    return (
        <>
            <div className="w-1/2">
                <ValidPayMethods payMethods={undefined} />
                <ShippingAddress />
            </div>
        </>
    )
} 