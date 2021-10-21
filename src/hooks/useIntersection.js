import {useEffect, useRef, useState} from "react";

// Custom hook to test if users see a specific component
export const useIntersection = () => {

    // 1. Start with a reference to the element I want to observe, use the React hook useRef
    const ref = useRef(null);

    // 2. Create a state variable inView, I will use it to display a message whenever a target box is in the viewport.
    const [inView, setInView] = useState(false);


    useEffect(() => {
        // 3. Declare a callback function that receives an array of IntersectionObserverEntries as a parameter.
        // Inside this function, I take the entry and check if is intersecting with the viewport and
        // if it is then I call setInView with the value of entry.isIntersecting (true/false).
        const callback = (entries) => {
            entries.forEach(entry => {
                setInView(entry.isIntersecting)
            });
        };

        // 4. I can created the options object.
        // A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
        const options = {
            // threshold:0.7
        }

        // 5. I creatd observer object to use related methods
        let observer = new IntersectionObserver(callback, options);

        // 6. when ref.current is true, then start observing
        // observe의 parameter : target
        if (ref.current) {
            observer.observe(ref.current);
        }

        // 7. I can return a cleanup function to unobserve my target when the component unmounts.
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [])  // end of useEffect

    return [inView, ref]

};

// 8. I can set the useRef variable on the element I want to observe.