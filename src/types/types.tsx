export type Views = 'chat' | 'discover' | 'settings';

export type UserAuthSchema = {
  username: string,
  loggedIn: boolean,
  userId: string | null,
  userImg: string | null,
};
