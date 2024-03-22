import * as googleApi from '../helpers/google-apis.js';
import * as config from '../utils/config.js';
import * as jwt from '../utils/jwt.js';
import * as userService from '../repositories/user.js';

const frontendRedirectUrl = config.get('FRONTEND_REDIRECT_URL');

export const loginWithGoogle = async () => {
  return googleApi.getAuthorizationUrl();
};

export const handleGoogleResponse = async ({ code }) => {
  try {
    const userInfo = await googleApi.getUserInfo(code);

    const userEmail = userInfo.email; // Extract email directly
    const existingUser = await userService.getUserByEmail(userEmail);

    if (!existingUser) {
      const { name, picture } = userInfo;
      const userId = await userService.createUser({ name, email: userEmail, picture });
      const newUser = { name, email: userEmail, _id: userId };
      return generateRedirectUrlWithToken(newUser); // Reuse function for clarity
    } else {
      return generateRedirectUrlWithToken(existingUser); // Reuse function for clarity
    }
  } catch (error) {
    console.error('Error handling Google response:', error); // Log error for debugging
    return frontendRedirectUrl;
  }
};

const generateRedirectUrlWithToken = async (user) => {
  const token = await getJwtToken(user);
  console.log('LOGGEDDD');
  console.log(`${frontendRedirectUrl}?token=${token}`);
  return `${frontendRedirectUrl}?token=${token}`;
};

const getJwtToken = async (user) => {
  const { _id, name, email } = user;
  console.log(jwt.createToken({ _id, name, email }));
  return jwt.createToken({ _id, name, email }); // Redirect URL generation moved here for clarity
};
