import ReactStars from 'react-stars'
import { Dispatch, SetStateAction} from "react";

type Props ={
    defaultValue: number;
    setRate: Dispatch<SetStateAction<number>>;
}

export function StarRate({defaultValue, setRate} : Props) {
  return (
    <ReactStars
  count={5} size={30} 
  color1={'black'}
  color2={'#ffc107'}
  value={defaultValue}
  edit={true}
  half={true}
  onChange={(newRating: number) => {setRate(newRating)}}
  />
  )
}