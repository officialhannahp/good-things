import React, { useRef, useEffect } from "react";
import css from '../css/cart.css'


export default function Paypal() {
    const paypal = useRef();

    useEffect(() => {
    window.paypal
        .Buttons({
        createOrder: (data, actions, err) => {
            return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                description: "Cool looking nacklace",
                amount: {
                    currency_code: "USD",
                    value: 68,
                },
                },    
            ],
            });
        },
        onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
        },
        onError: (err) => {
            console.log(err);
        },
        })
        .render(paypal.current);
    }, []);

    return (
    <div>
        <div ref={paypal} className="paypal"></div>
    </div>
    );
}