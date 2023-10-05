import { Transition as HuiTransition } from "@headlessui/react"
import { useEffect, useState } from "react";

interface IProps {
  children: any,
  from?: string,
  onScreen?: number,
  delay?: number
}
const TransitionIn = (props: IProps) => {
  const { children, from, delay } = props;
  const { onScreen = 0 } = props;

  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    onScreen === 0 && setTimeout(() => {
      setIsShowing(true);
    }, delay || 0);
  }, []);
  const [isShowingOnScroll, setIsShowingOnScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > onScreen) {
        setIsShowingOnScroll(true);
      }
    };
    onScreen > 0 && window.addEventListener('scroll', handleScroll);
    return () => {
      onScreen > 0 && window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const direction =
    from === 'bottom' ? 'translate-y-28' :
      from === 'top' ? '-translate-y-28' :
        from === 'left' ? '-translate-x-28' :
          from === 'right' ? 'translate-x-28' : '';


  return (
    <HuiTransition
      show={onScreen === 0 ? isShowing : isShowingOnScroll}
      enter={`transition-all duration-1000`}
      enterFrom={`opacity-0 ${direction}`}
      enterTo="opacity-100"
    >
      {children}
    </HuiTransition>
  )


}

export default TransitionIn