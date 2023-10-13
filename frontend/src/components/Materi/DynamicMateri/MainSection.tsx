import { TListMateri } from "../../../types/Types"
import TransitionIn from "../../_shared/TransitionIn"

interface TProps {
  materi: TListMateri
};
const MainSection = (props: TProps) => {
  const { materi } = props;

  // handler untuk konversi string ke html
  const handleMateriHTMLInject = (materi: string) => {
    const materiPerLine = materi.split('\n');
    const URLRegex = /\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/;
    for (let item in materiPerLine) {
      materiPerLine[item] = materiPerLine[item].trim();
      const URLMatch: string[] = materiPerLine[item].match(URLRegex) || [];
      if (materiPerLine[item].startsWith('<img>') && materiPerLine[item].endsWith('</img>')) {
        const link = materiPerLine[item].split('<img>')[1].split('</img>')[0];
        materiPerLine[item] = `<img src="${link}" class="w-40" />`
      } else if (materiPerLine[item].startsWith('<video>') && materiPerLine[item].endsWith('</video>')) {
        const link = materiPerLine[item].split('<video>')[1].split('</video>')[0];
        let proceededLink = '';
        if (link.includes('?v=')) {
          proceededLink = link.split('?v=')[1];
        } else if (link.includes('youtu.be/')) {
          proceededLink = link.split('youtu.be/')[1];
        };
        materiPerLine[item] = `<iframe src="https://www.youtube.com/embed/${proceededLink}" allowFullScreen></iframe>`
      } else if (URLMatch.length > 0) {
        materiPerLine[item] = `<a class="MateriURL" href="${URLMatch[2]}" target="_blank" rel="noopener noreferrer">${URLMatch[1]}</a>`;
      };
      if (!materiPerLine[item].includes('<li>')) {
        materiPerLine[item] += '<br />';
      };
    };
    return materiPerLine.join('');
  };

  return materi?.data && (
    <div>
      <TransitionIn from="bottom">
        <div className="mt-3 py-3 border-y border-gray-300">
          <div className="text-2xl mb-2 font-medium text-gray-800">
            Deskripsi
          </div>
          <div>
            {materi.data.deskripsi}
          </div>
        </div>
      </TransitionIn>
      {materi.data.daftarMateri.map((item, index) => (
        <TransitionIn from="bottom" delay={index * 200} key={index}>
          <div className="mt-3 pb-3 border-b border-gray-300">
            <div className="text-2xl mb-2 font-medium text-gray-800">
              {item?.judul}
            </div>
            <div dangerouslySetInnerHTML={{ __html: handleMateriHTMLInject(item?.materi) }} />
          </div>
        </TransitionIn>
      ))}
    </div>
  )
}

export default MainSection