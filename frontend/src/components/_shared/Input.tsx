import { Input as MaterialInput } from "@material-tailwind/react"
import { Dispatch, SetStateAction } from "react"

const Input = (props: { className?:string, type: string, label: string, icon: any, value: string, onChange?: Dispatch<SetStateAction<any>>, onKeyDown?: any, disabled?: boolean }) => {
  const { className, type, label, icon, value, onChange, onKeyDown, disabled } = props

  const handleKeyboardEvent = (e: any, action: Function) => {
    if (e.key === 'Enter') {
      action();
    }
  }
  
  return (
    <MaterialInput
      className={`focus:outline-none focus:ring-0 ${className}`}
      type={type}
      spellCheck={false}
      label={label}
      icon={icon}
      value={value}
      onChange={onChange}
      onKeyDown={(e: any) => handleKeyboardEvent(e, onKeyDown)}
      disabled={disabled}
      crossOrigin='' />
  )
}

export default Input