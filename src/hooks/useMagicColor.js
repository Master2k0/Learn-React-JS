import {useRef,useState,useEffect} from 'react';

function randomColor(currentColor){

    const Color_List = ['red', 'green', 'blue'];
    const currentIndex = Color_List.indexOf(currentColor);

    let newIndex = currentIndex;
    while(currentIndex === newIndex){
        newIndex = Math.trunc(Math.random() *3);
    }
    return Color_List[newIndex]
}


function useMagicColor() {
    
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    //Change color every 1 second
    useEffect(()=>{
        const colorInterval = setInterval(()=>{
            console.log("Color2:" ,color )

            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            console.log("Color3:", color)


            colorRef.current = newColor;

        },1000)

        return ()=>{
            clearInterval(colorInterval);
        }
    },[])
    console.log("Color4:", color)

    return {color};
}

export default useMagicColor;