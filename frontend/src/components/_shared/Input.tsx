import { Input as MaterialInput } from "@material-tailwind/react"
import { Dispatch, SetStateAction } from "react"

type TVariant = 'static' | 'standard' | 'outlined'
interface IProps {
  className?: string,
  type?: string,
  label: string,
  icon?: any,
  value: string,
  onChange?: Dispatch<SetStateAction<any>>,
  onKeyDown?: any,
  disabled?: boolean,
  variant?: TVariant
}

const Input = (props: IProps) => {
  const { className, type, label, icon, value, onChange, onKeyDown, disabled, variant } = props

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
      variant={variant}
      onChange={onChange}
      onKeyDown={(e: any) => handleKeyboardEvent(e, onKeyDown)}
      disabled={disabled}
      crossOrigin='' />
  )
}

export default Input