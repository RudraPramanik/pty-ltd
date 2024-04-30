import AllPages from "@/components/AllPages";
import Buttons from "@/components/Buttons";
import CheckboxGrid from "@/components/CheckBox";
import Pages from "@/components/pages";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-16" >
   <div className="flex flex-row space-x-6  "  >
    <div>
    <Buttons/>
    </div>
    <div>
    <CheckboxGrid/>

    </div>
    <div>
    <Pages/>

    </div>
    <div>
      <AllPages/>
    </div>
   </div>
   
 
   </div>

  );
}
