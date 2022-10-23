export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isMember: boolean;
  memberSince: Date;
  acceptPrivacyPolicy: boolean;
  email: string;
  role: string;
  username: string;
}

export interface IUserAuthorization {
  accessToken: string;
  refreshToken: string;
  isAuthorized: boolean;
}
