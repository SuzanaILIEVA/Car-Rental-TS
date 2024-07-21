import ReactSelect from "react-select";
import { OptionType } from "../types";
import { useSearchParams } from "react-router-dom";

type Props = {
  options: OptionType[];
  name: string;
};

const Filter = ({ options, name }: Props) => {
  const [params, setParams] = useSearchParams();

  const handleChange = (e: OptionType | null) => {
    // console.log(e?.value);
    params.set(name, e?.value as string);
    
    setParams(params);
  };

  //ulr'den parametreyi alip select bileseninin istedigi(label,value) formata cevirecegiz
  const selected = {
    label: params.get(name) || options[0].label,
    value: params.get(name) || options[0].value,
  };

  return (
    <div className="text-black">
      <ReactSelect
        defaultValue={selected}
        onChange={handleChange}
        options={options}
        className="min-w-[100px]"
      />
    </div>
  );
};

export default Filter;
