import * as authService from '../services/auth.js';

export const loginWithGoogle = async (req, res) => {
  const redirectUrl = await authService.loginWithGoogle();
  res.redirect(redirectUrl, 301);
};

export const handleGoogleResponse = async (req, res) => {
  const { query } = req;
  const redirectUrl = await authService.handleGoogleResponse(query);
  res.redirect(redirectUrl, 301);
};
