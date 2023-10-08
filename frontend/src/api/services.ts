import api from ".";
import { TMateriToPost } from "../types/Types";
import { getLocalStorage } from "../utils/LocalStorage";

const ENDPOINT = {
  user: '/user',
  materi: '/materi',
  login: '/login',
  forgetPass: '/forgetPass',
  forum: '/forum',
}

const param = (paramArr: string[][]) => {
  let params = "";
  for (let i = 0; i < paramArr.length; i++) {
    if (paramArr[i][1] === '') continue;
    params += `${i === 0 ? '?' : '&'}${paramArr[i][0]}=${paramArr[i][1]}`
  }
  return params;
}

// === USER ===
export const getUser = async () => {
  try {
    const res = await api.get(ENDPOINT.user);
    return res.data;
  } catch (err) {
    return false;
  }
}

export const getUserByParams = async (loginID?: boolean | null, username?: string | null, UUID?: string | null) => {
  try {
    let params = '';
    if (loginID) {
      const loginID = getLocalStorage("loginID") || '';
      if (loginID.length < 1) return false;
      params = param([['loginID', loginID]]);
    } else if (username) {
      params = param([['username', username]]);
    } else if (UUID) {
      params = param([['UUID', UUID]]);
    }
    const res = await api.get(ENDPOINT.user + "/id" + params);
    return res.data;
  } catch (err) {
    return false;
  }
}

export const createUser = async (email: string, password: string, username: string, terimaEmail: boolean) => {
  try {
    const res = await api.post(ENDPOINT.user, {
      email: email,
      password: password,
      username: username,
      terimaEmail: terimaEmail
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

export const updateUser = async (email: string, username: string, terimaEmail: boolean, img: string) => {
  try {

    const res = await api.patch(ENDPOINT.user, {
      email: email,
      username: username,
      terimaEmail: terimaEmail,
      img: img
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

// === MATERI ===
export const getMateriByAlatMusik = async (alatMusik?: string, materiID?: string) => {
  try {
    const res = await api.get(ENDPOINT.materi + param([['alatMusik', alatMusik || ''], ['materiID', materiID || '']]));
    return res.data;
  } catch (err) {
    console.log(err);

    return false;
  }
}

export const getAlatMusikList = async () => {
  try {
    const res = await api.get(ENDPOINT.materi + "/alatmusik");
    return res.data;
  } catch (err) {
    return false;
  }
}

export const getMateriByID = async (id: string) => {
  try {
    const res = await api.get(ENDPOINT.materi + '/user' + param([['id', id]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const createMateri = async (alatMusik: string, materi: TMateriToPost) => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.post(ENDPOINT.materi, {
      loginID: loginID,
      alatMusik: alatMusik,
      materi: materi
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

export const editMateriByID = async (alatMusik: string, materiID: number, materi: TMateriToPost) => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.patch(ENDPOINT.materi, {
      loginID: loginID,
      alatMusik: alatMusik,
      materiID: materiID,
      materi: materi
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

export const deleteMateriByID = async (alatMusik: string, materiID: string) => {
  try {
    const res = await api.delete(ENDPOINT.materi + param([['alatMusik', alatMusik], ['materiID', materiID]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const updateRating = async (alatMusik: string, materiID: string, UUID: string, rating: string) => {
  try {
    const res = await api.patch(ENDPOINT.materi + '/rating' + param([['alatMusik', alatMusik], ['materiID', materiID], ['UUID', UUID], ['rating', rating]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const getRatingList = async (alatMusik: string, materiID: string) => {
  try {
    const res = await api.get(ENDPOINT.materi + '/rating' + param([['alatMusik', alatMusik], ['materiID', materiID]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const addPengunjung = async (alatMusik: string, materiID: string) => {
  try {
    const res = await api.get(ENDPOINT.materi + '/pengunjung' + param([['alatMusik', alatMusik], ['materiID', materiID]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

// === LOGIN ===
export const getLoginUser = async () => {
  try {
    const res = await api.get(ENDPOINT.login);
    return res.data;
  } catch (err) {
    return false;
  }
}

export const setLogin = async (email: string, password: string) => {
  try {
    const res = await api.post(ENDPOINT.login, {
      email: email,
      password: password
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

export const setLogout = async () => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.delete(ENDPOINT.login + param([['loginID', loginID]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const userIsLogin = async () => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.get(ENDPOINT.login + "/islogin" + param([['loginID', loginID]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

// === FORGETPASS ===
export const sendVerificationCode = async (email: string) => {
  try {
    const res = await api.post(ENDPOINT.forgetPass, {
      email: email
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

export const validatorVerificationCode = async (id: string) => {
  try {
    const res = await api.get(ENDPOINT.forgetPass + param([['id', id]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const resetPassword = async (email: string, newPassword: string) => {
  try {
    const res = await api.post(ENDPOINT.forgetPass + "/newPassword", {
      email: email,
      newPassword: newPassword
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

// === FORUM ===
export const getPost = async () => {
  try {
    const res = await api.get(ENDPOINT.forum);
    return res.data;
  } catch (err) {
    return false;
  }
}

export const getPostByOwner = async () => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.get(ENDPOINT.forum + param([['loginID', loginID]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const createPost = async (title: string, description: string) => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.post(ENDPOINT.forum, {
      loginID: loginID,
      title: title,
      description: description
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

export const editPost = async (postID: string, title: string, description: string) => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.patch(ENDPOINT.forum, {
      loginID: loginID,
      postID: postID,
      title: title,
      description: description
    });
    return res.data;
  } catch (err) {
    return false;
  }
}

export const deletePost = async (postID: string) => {
  try {
    const loginID = getLocalStorage("loginID") || '';
    if (loginID.length < 1) return false;
    const res = await api.delete(ENDPOINT.forum + param([['loginID', loginID], ['postID', postID]]));
    return res.data;
  } catch (err) {
    return false;
  }
}

export const updateVote = async (ownerUUID: string, postID: string, voterUUID: string, voteType: string) => {
  try {
    const res = await api.patch(ENDPOINT.forum + "/vote",
      {
        ownerUUID: ownerUUID,
        postID: postID,
        voterUUID: voterUUID,
        voteType: voteType
      });
    return res.data;
  } catch (err) {
    return false;
  }
}