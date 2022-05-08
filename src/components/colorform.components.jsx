import React, { useState } from "react";
import { useInput } from "/home/christopher/book/src/components/useinput.hook.jsx";
import { useColors } from "/home/christopher/book/src/components/color-provider.jsx";

export default function AddColorForm() {
    const [titleProps, setTitle ] = useInput("");
    const [colorProps, setColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => { 
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        setTitle();
        setColor();
    };

    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text"
                placeholder="color title..." 
                required 
            />
            <input 
                {...colorProps}
                type="color"
                required 
            />
            <button>ADD</button>
        </form>
    )


}