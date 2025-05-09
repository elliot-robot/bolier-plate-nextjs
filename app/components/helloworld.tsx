
import Counter from './count';
//import Image from 'next/image';

export default function HelloWorld(props: { peru : string ; num: number ; sport : string ; imagepath: string }) {

    console.log("I'm saikiran"+ {props});

return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <body>
        <img src="IMG_0602.jpg" alt="saikiran's picture" width={200} height={200}  />
         <h1> <b>Hello World {props.peru} {props.num} {props.sport} 
         <Counter /> 
         </b>
        </h1>

        
        </body>
      </main>
   </div>
);

}
