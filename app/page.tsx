import Image from "next/image";
import Footer from "./components/footer";
import HelloWorld from "./components/helloworld";
import favicon from "./favicon.ico";
import Counter from "./components/count";

export default function Home() {
  const name = "Saikiran";
  const number = 7;
  const sport="Chess"
  const imagepath="/Users/challa/AUS/Ausbiz-FS-AWS bootcamp/bolier-plate-nextjs/app/Cybersecurity.png";
  return (
   <div>
    <HelloWorld peru={name} num={number} sport={sport} imagepath={imagepath}/> 

   
    </div>

  );
}
