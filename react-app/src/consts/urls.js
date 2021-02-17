export const photo2codeAPI = process.env.REACT_APP_PHOTO2CODE_API || 'http://127.0.0.1:5000'

export const PHOTO2CODE_ROUTES = {
  DELETE: '/delete_file',
  GOOGLE_SIGN_IN: '/googleSignin',
  UPLOAD: '/upload',
  GET_FILES: '/get_files',
  PROFILE: '/profile',
}
