import { Transition as HuiTransition } from "@headlessui/react"
import { useEffect, useState } from "react";

const TransitionIn = (props: { children: any, from?: string, length?: string, onScreen?: number, delay?: number }) => {
  const { children, from, delay } = props;
  const { length = '28' } = props;
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
    from === 'bottom' ? 'translate-y' :
      from === 'top' ? '-translate-y' :
        from === 'left' ? '-translate-x' :
          from === 'right' ? 'translate-x' : '';

  const classDirection = direction + '-' + length;

  return (
    <HuiTransition
      show={onScreen === 0 ? isShowing : isShowingOnScroll}
      enter={`transition-all duration-1000`}
      enterFrom={`opacity-0 ${classDirection}`}
      enterTo="opacity-100"
    >
      {children}
    </HuiTransition>
  )


}

export default TransitionIn