import Image from "next/image";


export default function DayState({day}: {day: boolean | undefined}) {
   let image: [string, string, number?] = 
   ["/images/icons/gray.png", "gray mark", 12];

   if(day === true) image = ["/images/icons/check.png", "gray mark", 12];
   if(day === false) image = ["/images/icons/del.png", "red x mark", 12];

   const [src, alt, size] = image;
   return (
      <div className="flex items-center justify-center h-9">
         <Image 
            src={src}
            width={size}
            height={size}
            alt={alt}
         />
      </div>
   )
}