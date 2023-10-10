import { getAlatMusikImg } from "../../utils/AlatMusikList"
import TransitionIn from "../_shared/TransitionIn"
const MusicianCarousel = () => {

  const alatMusikList = [
    { nama: 'bass', img: getAlatMusikImg('bass') },
    { nama: 'biola', img: getAlatMusikImg('biola') },
    { nama: 'cello', img: getAlatMusikImg('cello') },
    { nama: 'drum', img: getAlatMusikImg('drum') },
    { nama: 'gitar', img: getAlatMusikImg('gitar') },
  ]

  const alatMusikList2 = [
    { nama: 'gitar listrik', img: getAlatMusikImg('gitar listrik') },
    { nama: 'piano', img: getAlatMusikImg('piano') },
    { nama: 'trompoet', img: getAlatMusikImg('trompoet') },
    { nama: 'ukulele', img: getAlatMusikImg('ukulele') },
  ]


  const imgClass = 'w-[15rem] h-[10rem] object-cover rounded shadow-xl'

  return (
    <TransitionIn from="bottom" delay={1500}>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] border-t border-gray-300 pt-10"
      >
        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
          {alatMusikList.map((item, index) => (
            <li key={index}>
              <img className={`${imgClass}`} src={item.img} />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {alatMusikList.map((item, index) => (
            <li key={index}>
              <img className={`${imgClass}`} src={item.img} />
            </li>
          ))}
        </ul>
      </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        className="mt-5 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
          {alatMusikList2.reverse().map((item, index) => (
            <li key={index}>
              <img className={`${imgClass} ms-10`} src={item.img} />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {alatMusikList2.map((item, index) => (
            <li key={index}>
              <img className={`${imgClass} ms-10`} src={item.img} />
            </li>
          ))}
        </ul>
      </div>
    </TransitionIn>

  )
}
export default MusicianCarousel