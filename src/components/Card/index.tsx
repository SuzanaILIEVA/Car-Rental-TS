import { motion } from "framer-motion";
import { CarType } from "../../types";
import Button from "../Button";
import Info from "./Info";
import { useState } from "react";
import Modal from "../Modal";
import generateImage from "../../utils/generateImage";


interface Props {
  car: CarType;
}

const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <motion.div
    initial={{scale:0.5 , opacity :0}}
    whileInView={{scale:1 , opacity:1}}
    transition={{duration:0.2 }}
    className="car-card group">
    
      {/* araba ismi  */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyati */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">
          {/* 1500-8500 arasi random sayi  */}
          {Math.round(Math.random() * 7000) + 1500}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      {/* resim alani   */}
      <div className="relative w-full h-40 my-3">
        <img className="w-full h-full object-contain" src={generateImage(car)} alt="" />
      </div>

      {/* alt kisim   */}
      <div className="w-full">
        <Info car={car} />

        <div  className="hidden group-hover:grid mt-[4px]">
          <Button
            title="Daha Fazla"
            designs="py-[25px] w-full"
            icon="right-arrow.svg"
            handleClick={()=> setIsOpen(true)}
          />
        </div>
      </div>

      <Modal car={car} isOpen={isOpen} close={()=> setIsOpen(false)}/>
    </motion.div>
  );
};

export default Card;
