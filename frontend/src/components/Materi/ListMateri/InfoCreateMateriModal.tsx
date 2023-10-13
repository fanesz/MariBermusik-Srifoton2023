import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment } from "react"

interface IProps {
  isOpen: boolean,
  setModal: Dispatch<boolean>
};
const InfoCreateMateriModal = (props: IProps) => {
  const { isOpen, setModal } = props;

  const main_section = (
    <div>
      Gunakan fitur ini untuk membuat materi baru. <br />
      Anda dapat menggunakan sintaks dasar HTML untuk memperbagus tampilan materi. <br />
      Contoh: <br />
      <li>&lt;li&gt;Untuk membuat list seperti ini&lt;/li&gt;</li>
      <li>&lt;b&gt;<b>Untuk teks menjadi Bold</b>&lt;/b&gt;</li>
      <li>&lt;i&gt;<i>Untuk teks menjadi italic</i>&lt;/i&gt;</li>
      <li>&lt;img&gt;https://i.imgur.com/S4oLE4z.jpeg&lt;/img&gt;, untuk menyematkan gambar</li>
      <li>&lt;video&gt;https://www.youtube.com/watch?v=JbuZGT8XKhM&lt;/video&gt;, untuk menyematkan video</li>
      <li>[Click Me!](https://id.wikipedia.org/wiki/Gitar), untuk membuat clickable link seperti ini <a className="MateriURL" href="https://id.wikipedia.org/wiki/Gitar">Click Me!</a></li>
      <li>Dan lain-lain!</li><br />

      Pada menu Buat Materi, anda diminta untuk mengisi judul, deskripsi, alat musik, dan tingkatan materi.<br />
      Lalu dibawahnya, anda dapat menambahkan daftar materi yang akan anda buat.<br />
      Gunakan tombol + untuk menambahkan daftar materi, dan - untuk menghapus daftar materi.<br />
      Setelah selesai, klik tombol Simpan Materi untuk membuat menyimpan materi.<br />

      Materi yang telah anda buat dapat dilihat di halaman Materi dan Profile.<br />
      Dan jika ingin mengedit materi, anda dapat mengklik tombol Edit di halaman Materi.<br /><br />
      Note: Materi yang kalian buat, akan tersimpan sebagai draft bila secara tidak sengaja menutup halaman/menu Buat Materi, dan dapat dibuka kembali kapan saja.<br />
    </div>
  );

  return (
    <Transition
      appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { setModal(false) }}>
        <Transition.Child as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-4xl h-fit transform overflow-hidden rounded-2xl bg-gray-200 px-5 py-4 text-left align-middle shadow-xl transition-all">

                <Dialog.Title className="text-lg text-center font-semibold text-gray-600">
                  <div className="flex justify-between">
                    <div className='w-full'>
                      Informasi Buat Materi
                    </div>
                    <div className='mt-auto mb-auto'>
                      <XMarkIcon className="h-5 cursor-pointer hover:bg-gray-300 rounded" onClick={() => setModal(false)} />
                    </div>
                  </div>
                </Dialog.Title>

                <div className="rounded-md mt-2 bg-white bg-opacity-70 p-5">
                  <div>
                    {main_section}
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default InfoCreateMateriModal