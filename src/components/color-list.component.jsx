import React from 'react';
import Color from "./color.jsx";
import { useColors } from "/home/christopher/book/src/components/color-provider.jsx";

export default function ColorList () {
    const { colors } = useColors();

    if (!colors.length) return <div>No colors listed. Add a color.</div>;

    return (
        <div>
            {colors.map(color => (
                <Color key={color.id} {...color}/>
            ))}
        </div>
    );
}