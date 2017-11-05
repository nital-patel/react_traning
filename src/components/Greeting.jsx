import React from 'react';

export function Greeting({name}) {
    return (
    <p>{ "hello " + (name ? name : 'Stranger')}</p>
);
}

export default Greeting;