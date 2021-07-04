import {useEffect, useRef, useState} from "react";

export const useIntersection = () => {

    const ref = useRef(null);
    const [inView, setInView] = useState(false);    // to check DOMs are on screen

    useEffect(() => {
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                setInView(entry.isIntersecting)
            });
        };

        const options = {
            //threshold:0.7   // over 80%
        }

        let observer = new IntersectionObserver(callback, options);

        if (ref.current) {
            observer.observe(ref.current);  // observe의 parameter : 관찰대상
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [])  // end of useEffect

    return [inView, ref]
};