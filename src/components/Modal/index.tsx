import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types"
import Images from "./Images";

interface Props{
    car: CarType;
    isOpen:boolean;
    close: ()=> void;
}

const Modal = ({car, isOpen, close}:Props) => {
    console.log(isOpen);
    console.log(Object.entries(car));// car objesini diziye cevirir.
    
  return (
    <AnimatePresence>
     {isOpen && (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.4}}
        className="fixed inset-0 bg-black bg-opacity-70 z-20 grid place-items-center "> 
            <motion.div 
            initial={{scale:0.5 , opacity: 0 }} 
            animate={{scale:1 , opacity: 1 }}
            exit={{ scale : 0 ,  opacity: 0 }}
            transition={{duration: 0.4}}

            className="bg-white  relative p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto" >
                <button className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
                 onClick={close}>
                    <img src="/close.svg" alt="close" />
                </button>
                {/* fotolar */}
                <Images car={car}/>

                {/* bilgiler */}
               {Object.entries(car).map(([key,value ]) =>(
                 <div className="flex justify-between">
                <h1 className="capitalize font-semibold">{key.split("_").join(" ")}</h1>
                <p className="capitalize">{value}</p>
               </div>
               ))}


            </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
  )
}

export default Modal
