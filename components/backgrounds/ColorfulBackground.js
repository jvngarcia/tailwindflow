import Image from "next/image";



export default function ColorfulBackground(){
    return (
        <div className="-z-50 absolute w-full top-0 left-0 right-0 bottom-0">
          <Image src="/images/main-background.png" width={100} height={100} className="object-fill w-full max-h-full" alt="background image" />
        </div>
    )
}