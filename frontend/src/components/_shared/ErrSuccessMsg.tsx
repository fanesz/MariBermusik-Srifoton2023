import { Alert } from "@material-tailwind/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
type IErrSuccessMsg = {
  type: 'error' | 'success' | '',
  message: string
}
interface IProps {
  errSuccessMsg: IErrSuccessMsg;
  setErrSuccessMsg: Dispatch<SetStateAction<IErrSuccessMsg>>;
  className?: string;
}
const ErrSuccessMsg = (props: IProps) => {
  const { errSuccessMsg, setErrSuccessMsg, className } = props;
  const [errmsg, setErrmsg] = useState("");
  const [successmsg, setSuccessmsg] = useState("");

  useEffect(() => {
    if (errSuccessMsg.type === 'error') {
      setErrmsg(errSuccessMsg.message);
      setTimeout(() => {
        setErrmsg("");
        setErrSuccessMsg({ type: '', message: '' });
      }, 3000);
    } else if (errSuccessMsg.type === 'success') {
      setSuccessmsg(errSuccessMsg.message);
      setTimeout(() => {
        setSuccessmsg("");
        setErrSuccessMsg({ type: '', message: '' });
      }, 3000);
    }
  }, [errSuccessMsg]);

  return (
    <div className={`${className}`}>
      {errmsg.length > 0 && <Alert className='w-full p-0 bg-transparent text-red-400 text-sm'>{errmsg}</Alert>}
      {successmsg.length > 0 && <Alert className='w-full p-0 bg-transparent text-green-500 text-sm'>{successmsg}</Alert>}
    </div>
  )
}

export default ErrSuccessMsg