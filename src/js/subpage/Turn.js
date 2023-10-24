import React, { useRef, useEffect } from 'react';
import $ from 'jquery';

const Turn = (props) => {
    // let fadeClass = useRef('');
    let fadeClass = useRef(null);

    // useEffect(() => {
    //     if (fadeClass) {
    //         console.log($(fadeClass).turn);
    //         $(fadeClass).turn(Object.assign({}, props.options));
    //     }
    //     // document.addEventListener('keydown', handleKeyDown, false);
    // }, [props.options]);
    useEffect(() => {
        if (fadeClass.current) {
            $(fadeClass.current).turn(Object.assign({}, props.options));
        }
    }, [props.options]);

    // return (
    //     <div
    //         className={props.className}
    //         style={Object.assign({}, props.style)}
    //         ref={(el) => {
    //             fadeClass = el;
    //         }}
    //     >
    //         {props.children}
    //     </div>
    // );
    return (
        <div className={props.className} style={Object.assign({}, props.style)} ref={fadeClass}>
            {props.children}
        </div>
    );
};

export default Turn;
