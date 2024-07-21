import Button from "./Button"

type Props={
    limit:number;
    handleClick:()=> void;
}

const LoadMore = ({limit , handleClick}:Props) => {
    console.log(limit);
    
  return (
    <div className="w-full my-10 flex-center">
        {limit < 30 &&   <Button
        title="Daha Fazla"
        handleClick={handleClick}
        />
         }

      
    </div>
  )
}

export default LoadMore
