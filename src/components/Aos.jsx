import {useEffect} from "react";
import AOS from "aos";


    useEffect(() => {
       AOS.init({
           duration:1200,
           easing: 'ease-in-out',
       });
       AOS.refresh();
   
     }, [])
