export type TListMateri = {
  materiID: number,
  alatMusik: string,
  owner: string,
  data: {
    nama: string,
    deskripsi: string,
    tingkatan: string,
    rating: number[],
    pengunjung: number,
    createdAt: Date,
    daftarMateri: {
      id: number,
      judul: string,
      materi: string,
      link: string[]
    }[]
  }
}

