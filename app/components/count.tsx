'use client';

import { useState } from 'react';

export default function Counter(){
    // var count = 0
    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count+1);
    }
    const decrement=() =>{
        setcount(count-1);
    }

    const set0 = () => {
        setcount(0);
    }
return (

<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
         <body>
         <input type="number" value={count} onChange={(e) => setcount(Number(e.target.value))} />

<button onClick ={increment} className="button"> Increment </button>

<button onClick ={decrement} className="button"> decrement </button>

<button onClick ={set0} className="button"> Set Zero </button>

         </body>
       </main>
    </div>



);
}