import Image from "next/image";

export default function Header() {
   return (      
      <header className="flex h-16 items-center justify-center bg-gray-900">
         <Image  
            src={'/images/logo.png'}
            width={150}
            height={75}
            alt="meta diária"
         /> 
      </header>     
   )
}