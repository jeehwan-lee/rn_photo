import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from "firebase/auth";

export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(getAuth(), email, password);

  return user;
};

export const getAuthErrorMessages = (errorCode) => {
  return "아이디와 비밀번호를 확인해주세요.";
};
