export type TTingkatan = 'Pemula' | 'Menengah' | 'Sulit';
export type TListMateri = {
  materiID: number,
  alatMusik: string,
  owner: string,
  data: {
    nama: string,
    deskripsi: string,
    tingkatan: TTingkatan,
    rating: [string, number][],
    pengunjung: number,
    createdAt: Date,
    daftarMateri: TDaftarMateri[]
  }
}
export type TMateriToPost = {
  nama: string,
  deskripsi: string,
  tingkatan: string,
  daftarMateri: TDaftarMateri[]
}
export type TDaftarMateri = {
  id: number,
  judul: string,
  materi: string,
}
export type TUser = {
  email: string,
  password: string,
  username: string,
  terimaEmail: boolean,
  img: string
}
export type IErrSuccessMsg = {
  type: 'error' | 'success' | '',
  message: string
}
export type TListPost = {
  postID: number,
  owner: string,
  createdAt: Date,
  title: string,
  description: string,
  upvotes: string[],
  downvotes: string[],
  comments: {
    owner: string,
    createdAt: Date,
    content: string
  }[]
}
export type TProfileUser = {
  UUID: string,
  username: string,
  email: string,
  img: string,
  createdAt: string
}
export type TFilterBy = {
  alatMusik: string
  date_newest: boolean,
  date_oldest: boolean,
  rating_highest: boolean,
  rating_lowest: boolean,
  pengunjung_most: boolean,
  pengunjung_least: boolean,
  kesulitan: string[]
}