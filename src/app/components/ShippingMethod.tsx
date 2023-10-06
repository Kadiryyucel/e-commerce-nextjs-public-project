"use client"
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function ShippingMethod() {

    return (
        <FormControl>
            <h2 className="font-700">Shipping Method</h2>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Free" control={<Radio />} label="Free ShFipping" />
                <FormControlLabel value="DHL" control={<Radio />} label="DHL with price" />
            </RadioGroup>
        </FormControl>
    )
}