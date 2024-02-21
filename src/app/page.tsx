import Censorted from "@/components/Censored/Censored";
import HitCounter from "@/components/HitCounter";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Censorted> 
        <HitCounter/>
      </Censorted>
    </div>
  );
}

export default Home;
