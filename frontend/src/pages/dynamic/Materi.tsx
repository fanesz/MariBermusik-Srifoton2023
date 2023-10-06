import { useNavigate, useParams } from "react-router-dom";
import { getMateriByAlatMusik, getUserByParams } from "../../api/services";
import { useEffect, useState } from "react";
import { TListMateri, TUser } from "../../types/Types";
import { convertCreatedAt, ratingAverage } from "../../utils/utils";
import { EyeIcon, StarIcon } from "@heroicons/react/24/solid";
import TransitionIn from "../../components/_shared/TransitionIn";
import profile from "../../assets/profile.png";

const Materi = () => {

  const navigate = useNavigate();
  const { alatmusik, id } = useParams();
  const [materi, setMateri] = useState<TListMateri>({} as TListMateri);
  const [materiOwner, setMateriOwner] = useState<TUser>({} as TUser);

  const fetchMateriAndOwner = async () => {
    const res = await getMateriByAlatMusik(alatmusik, id);
    if (res.status) {
      setMateri(res.data);
      const res2 = await getUserByParams(null, null, res.data.owner);
      if (res2.status) {
        setMateriOwner(res2.data);
      }
    }
  }
  useEffect(() => {
    fetchMateriAndOwner();
  }, []);


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
        }
        materiPerLine[item] = `<iframe src="https://www.youtube.com/embed/${proceededLink}" allowFullScreen></iframe>`
      } else if (URLMatch.length > 0) {
        materiPerLine[item] = `<a class="MateriURL" href="${URLMatch[2]}" target="_blank" rel="noopener noreferrer">${URLMatch[1]}</a>`;
      }
      if (!materiPerLine[item].includes('<li>')) {
        materiPerLine[item] += '<br />';
      }
    }
    return materiPerLine.join('');
  }


  // Components
  const title_section = materi?.data && (
    <div className="text-center flex justify-center gap-3">
      <div className="text-2xl font-semibold text-gray-700">
        {materi?.data?.nama}
      </div>
      <div className="my-auto">
        {materi?.data?.tingkatan && (
          <div className={`text-sm ${{ pemula: 'bg-green-300', menengah: 'bg-orange-300', sulit: 'bg-red-300', }[materi.data.tingkatan]} w-fit px-2 pt-0.5 rounded-md text-white`}>
            {{ pemula: 'Pemula', menengah: 'Menengah', sulit: 'Sulit', }[materi.data.tingkatan]}
          </div>
        )}
      </div>
    </div>
  )
  const owner_section = materi?.data && (
    <TransitionIn from="right">
      <div className="flex gap-3 text-gray-600">
        <div className="flex gap-3 mt-auto pb-1">
          <div className="flex gap-1">
            {materi.data.pengunjung}
            <EyeIcon className="h-3.5 w-3.5 mt-auto mb-auto" />
          </div>
          <div className="font-extrabold">·</div>
          <div className="flex gap-0.5">
            {ratingAverage(materi.data.rating) | 0}
            <StarIcon className="h-3.5 w-3.5 mt-auto mb-auto fill-yellow-900" />
            <span className="text-xs mt-auto mb-auto text-gray-500">({materi.data.rating.length})</span>
          </div>
          <div className="font-extrabold">·</div>
          <div>
            {convertCreatedAt(materi.data.createdAt)}
          </div>
        </div>
        <div
          className="flex gap-3 border border-gray-400 w-fit px-3 py-1 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
          onClick={() => navigate(`/profile/${materiOwner.username}`)}>
          <div>
            <img src={materiOwner?.img || profile} className="w-10 h-10 rounded-full object-cover" />
          </div>
          <div className="my-auto">
            {materiOwner?.username}
          </div>
        </div>
      </div>
    </TransitionIn>

  )
  const materi_section = materi?.data && (
    <div>
      <TransitionIn from="bottom">
        <div className="mt-3 pb-3 border-b border-gray-300">
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

  return (
    <div className="w-full max-w-7xl transform ms-auto me-auto mt-20 lg:px-12 px-5">
      
      <div>
        {title_section}
      </div>
      <div className="pb-3 border-b border-gray-300 flex justify-end">
        <div>
          {owner_section}
        </div>
      </div>
      <div>
        {materi_section}
      </div>
    </div>
  )
}

export default Materi