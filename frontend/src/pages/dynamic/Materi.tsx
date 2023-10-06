import { useNavigate, useParams } from "react-router-dom";
import { deleteMateriByID, getLoginUser, getMateriByAlatMusik, getUserByParams, userIsLogin } from "../../api/services";
import { useEffect, useState } from "react";
import { TListMateri, TUser } from "../../types/Types";
import { convertCreatedAt, ratingAverage } from "../../utils/utils";
import { EyeIcon, PencilIcon, StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import TransitionIn from "../../components/_shared/TransitionIn";
import profile from "../../assets/profile.png";
import CreateMateriModal from "../../components/Materi/CreateMateriModal";

const Materi = () => {

  const navigate = useNavigate();
  const { alatmusik, id } = useParams();
  const [materi, setMateri] = useState<TListMateri>({} as TListMateri);
  const [materiOwner, setMateriOwner] = useState<TUser>({} as TUser);
  const [createMateriModal, setCreateMateriModal] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  // fetch data materi dan owner
  const fetchMateriAndOwner = async () => {
    const resMateri = await getMateriByAlatMusik(alatmusik, id);
    if (resMateri.status) {
      setMateri(resMateri.data);
      const resOwner = await getUserByParams(null, null, resMateri.data.owner);
      if (resOwner.status) setMateriOwner(resOwner.data);
      const isLogin = await userIsLogin();
      if (isLogin.status) {
        const UUID = await getLoginUser();
        if (UUID.status) {
          const currentUserUUID = UUID.data[0].value.id;
          if (currentUserUUID === resMateri.data.owner) setIsOwner(true);
        }
      }

    }
  }
  useEffect(() => {
    fetchMateriAndOwner();
  }, []);


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


  // handler delete dan edit materi
  const handleDeleteMateri = async () => {
    const res = await deleteMateriByID(alatmusik || '', id || '');
    if (res.status) {
      navigate(`/materi`);
    }
  }
  const handleEditMateri = () => {
    setCreateMateriModal(true);
  }


  // Components
  const title_section = materi?.data && (
    <div className="text-center flex justify-center gap-3">
      <div className="text-2xl font-semibold text-gray-700">
        {materi?.data?.nama}
      </div>
      <div className="my-auto">
        {materi?.data?.tingkatan && (
          <div
            className={`text-sm ${{ Pemula: 'bg-green-300', Menengah: 'bg-orange-300', Sulit: 'bg-red-300' }[materi.data.tingkatan]} w-fit px-2 pt-0.5 rounded-md text-white`}>
            {materi.data.tingkatan}
          </div>
        )}
      </div>
    </div>
  )
  const owner_section = materi?.data && (
    <TransitionIn from="right">
      <div className="flex md:gap-3 mt-4 text-gray-600">
        <div className="mt-auto">
          <div className="md:hidden block text-right h-fit ms-auto">
            {convertCreatedAt(materi.data.createdAt)}
          </div>

          <div className="flex gap-3 mt-auto pb-1 ">

            <div className="flex gap-1">
              {materi.alatMusik[0].toUpperCase() + materi.alatMusik.slice(1)}
            </div>

            <div className="font-extrabold">·</div>

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

            <div className="md:block hidden">
              {convertCreatedAt(materi.data.createdAt)}
            </div>
          </div>
        </div>


        <div
          className="flex gap-3 md:border border-gray-400 w-fit my-auto px-3 py-1 rounded-xl md:shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
          onClick={() => navigate(`/profile/${materiOwner.username}`)}>
          <div>
            <img src={materiOwner?.img || profile} className="w-10 h-10 rounded-full object-cover" />
          </div>
          <div className="my-auto md:block hidden">
            {materiOwner?.username}
          </div>
        </div>
      </div>
    </TransitionIn>

  )
  const edit_delete_section = materi?.data && (
    <TransitionIn from="left">
      <div className="flex gap-3">
        <div
          className="p-2 bg-yellow-700 hover:bg-yellow-800 cursor-pointer rounded-md"
          onClick={handleEditMateri}>
          <PencilIcon className="w-5 h-5 my-auto fill-white" />
        </div>
        <div
          className="p-2 bg-red-400 hover:bg-red-600 cursor-pointer rounded-md"
          onClick={handleDeleteMateri}>
          <TrashIcon className="w-5 h-5 my-auto fill-white" />
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
    <div className="w-full max-w-7xl transform ms-auto me-auto md:mt-20 mt-10 lg:px-12 px-5">
      <CreateMateriModal isOpen={createMateriModal} setModal={setCreateMateriModal} prevMateri={materi} />
      <div>
        {title_section}
      </div>
      <div className={`pb-3 border-b border-gray-300 flex ${isOwner ? 'justify-between' : 'justify-end'}`}>
        <div className={`mt-auto ${isOwner ? 'block' : 'hidden'}`}>
          {edit_delete_section}
        </div>
        <div className="">
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