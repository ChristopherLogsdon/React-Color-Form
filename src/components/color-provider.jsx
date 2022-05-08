import { v4 } from "uuid";
import React, { createContext, useState, useContext } from "react";
import colorData from "/home/christopher/book/src/color-organizer/color-date.json";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider ({children}) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) => 
    setColors([
        ...colors,
        {
            id: v4(),
            title,
            color,
            rating: 0
        }
      ]);
    
      const rateColor = (id, rating) => 
        setColors(
            colors.map(color => (color.id === id ? { ...color, rating } : color))
        );

        const removeColor = id => setColors(colors.filter(color => color.id !== id));

        return (
            <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
                {children}
            </ColorContext.Provider>
        )
    
    
};