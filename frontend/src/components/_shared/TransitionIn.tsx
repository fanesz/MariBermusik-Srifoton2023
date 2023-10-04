import { Transition as HuiTransition } from "@headlessui/react"
import { useEffect, useState } from "react";

const TransitionIn = (props: { children: any, type: string, from?: string, duration?: number, length?: string, onScreen?: number }) => {
  const { children, type, from } = props;
  const { length = '28' } = props
  const { duration = 1500 } = props
  const { onScreen = 0 } = props


  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    setIsShowing(true);
  }, []);

  const [isShowingOnScroll, setIsShowingOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > onScreen) {
        setIsShowingOnScroll(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const direction =
    from === 'bottom' ? 'translate-y' :
      from === 'top' ? '-translate-y' :
        from === 'left' ? '-translate-x' :
          from === 'right' ? 'translate-x' : '';

  if (type === 'fade') {
    return (
      <HuiTransition
        show={onScreen == 0 ? isShowing : isShowingOnScroll}
        enter={`transition-all duration-[${duration}ms]`}
        enterFrom={`opacity-0 ${direction}-${length}`}
        enterTo="opacity-100"
      >
        {children}
      </HuiTransition>
    )
  } else if (type === 'slide') {
    return (
      <HuiTransition
        show={isShowing}
        enter={`transition-all duration-[${duration}ms]`}
        enterFrom={`opacity-0 ${direction}-full`}
        enterTo="opacity-100"
      >
        {children}
      </HuiTransition>
    )
  }


}

export default TransitionIn