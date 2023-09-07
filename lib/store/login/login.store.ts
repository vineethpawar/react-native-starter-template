import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as login from './types/login.payload.type';

const initialState: login.LoginState = {
  status: {
    isLoggedIn: false,
    revalidate: false,
  },
  progressValue: 0,
  selectedInterests: [],
  searchInterestText: '',
  otpStates: {loading: false, error: false, errorMessage: '', success: false},
  loginStates: {loading: false, error: false, errorMessage: '', success: false},
  userDetailStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  profileNameStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  userNameStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  genderStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  dobStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  emailAddressStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  usernameAvailabilityStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  userDetails: {
    id: null,
    uid: '',
    username: '',
    firstName: '',
    lastName: '',
    displayPicture: null,
    email: '',
    gender: null,
    dateOfBirth: null,
    phone: '',
    isEmailVerified: false,
    country: '',
    contactsSynced: false,
    contactsSyncedAt: null,
    interests: [],
  },
  allInterests: [],
  interestsStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  updateContactsStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  displayPictureStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
  userInterestStates: {
    loading: false,
    error: false,
    errorMessage: '',
    success: false,
  },
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setSelectedInterests: (
      state: login.LoginState,
      action: PayloadAction<Array<number>>,
    ) => {
      state.selectedInterests = action.payload;
    },
    setSearchInterestText: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.searchInterestText = action.payload;
    },
    setProgressValue: (
      state: login.LoginState,
      action: PayloadAction<number>,
    ) => {
      state.progressValue = action.payload;
    },
    otpReset: (state: login.LoginState) => {
      state.loginStates.loading = false;
      state.loginStates.success = false;
      state.loginStates.error = false;
      state.loginStates.errorMessage = '';
    },
    otpLoading: (state: login.LoginState) => {
      state.otpStates.loading = true;
      state.otpStates.success = false;
      state.otpStates.error = false;
    },
    otpSuccess: (state: login.LoginState) => {
      state.otpStates.loading = false;
      state.otpStates.success = true;
      state.otpStates.error = false;
    },
    otpFailed: (state: login.LoginState, action: PayloadAction<string>) => {
      state.otpStates.loading = false;
      state.otpStates.success = false;
      state.otpStates.error = true;
      state.otpStates.errorMessage = action.payload;
    },
    verifyOtpLoading: (state: login.LoginState) => {
      state.loginStates.loading = true;
      state.loginStates.success = false;
      state.loginStates.error = false;
    },
    verifyOtpSuccess: (state: login.LoginState) => {
      state.loginStates.loading = false;
      state.loginStates.success = true;
      state.loginStates.error = false;
    },
    verifyOtpFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.loginStates.loading = false;
      state.loginStates.success = false;
      state.loginStates.error = true;
      state.loginStates.errorMessage = action.payload;
    },

    verifyUsernameAvailabilityLoading: (state: login.LoginState) => {
      state.usernameAvailabilityStates.loading = true;
      state.usernameAvailabilityStates.success = false;
      state.usernameAvailabilityStates.error = false;
    },
    verifyUsernameAvailabilitySuccess: (state: login.LoginState) => {
      state.usernameAvailabilityStates.loading = false;
      state.usernameAvailabilityStates.success = true;
      state.usernameAvailabilityStates.error = false;
    },
    verifyUsernameAvailabilityFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.usernameAvailabilityStates.loading = false;
      state.usernameAvailabilityStates.success = false;
      state.usernameAvailabilityStates.error = true;
      state.usernameAvailabilityStates.errorMessage = action.payload;
    },
    updateDetailsLoading: (state: login.LoginState) => {
      state.userDetailStates.loading = true;
      state.userDetailStates.success = false;
      state.userDetailStates.error = false;
    },
    resetUserDetailStates: (state: login.LoginState) => {
      state.userDetailStates.loading = false;
      state.userDetailStates.success = false;
      state.userDetailStates.error = false;
      state.userDetailStates.errorMessage = '';
    },
    updateDetailsSuccess: (state: login.LoginState) => {
      state.userDetailStates.loading = false;
      state.userDetailStates.success = true;
      state.userDetailStates.error = false;
    },
    updateDetailsInfo: (
      state: login.LoginState,
      action: PayloadAction<login.TUser>,
    ) => {
      state.userDetails = action.payload;
    },
    updateDetailsFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.userDetailStates.loading = false;
      state.userDetailStates.success = false;
      state.userDetailStates.error = true;
      state.userDetailStates.errorMessage = action.payload;
    },
    fetchUserDetailsLoading: (state: login.LoginState) => {
      state.userDetailStates.loading = true;
      state.userDetailStates.success = false;
      state.userDetailStates.error = false;
    },
    fetchUserDetailsSuccess: (state: login.LoginState) => {
      state.userDetailStates.loading = false;
      state.userDetailStates.success = true;
      state.userDetailStates.error = false;
    },
    fetchUserDetailsFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.userDetailStates.loading = false;
      state.userDetailStates.success = false;
      state.userDetailStates.error = true;
      state.userDetailStates.errorMessage = action.payload;
    },

    // Profile Name update
    updateProfileNameDetailsFailed: (
      state: login.LoginState,
      action: PayloadAction<string | Array<login.TUser>>,
    ) => {
      state.profileNameStates.loading = false;
      state.profileNameStates.success = false;
      state.profileNameStates.error = true;
      state.profileNameStates.errorMessage = action.payload;
    },
    updateProfileNameDetailsLoading: (state: login.LoginState) => {
      state.profileNameStates.loading = true;
      state.profileNameStates.success = false;
      state.profileNameStates.error = false;
    },
    updateProfileNameDetailsSuccess: (state: login.LoginState) => {
      state.profileNameStates.loading = false;
      state.profileNameStates.success = true;
      state.profileNameStates.error = false;
    },

    // User Name updates
    updateUserNameDetailsFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.userNameStates.loading = false;
      state.userNameStates.success = false;
      state.userNameStates.error = true;
      state.userNameStates.errorMessage = action.payload;
    },
    updateUserNameDetailsLoading: (state: login.LoginState) => {
      state.userNameStates.loading = true;
      state.userNameStates.success = false;
      state.userNameStates.error = false;
    },
    updateUserNameDetailsSuccess: (state: login.LoginState) => {
      state.userNameStates.loading = false;
      state.userNameStates.success = true;
      state.userNameStates.error = false;
    },

    // DOB updates

    updateDOBFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.dobStates.loading = false;
      state.dobStates.success = false;
      state.dobStates.error = true;
      state.dobStates.errorMessage = action.payload;
    },
    updateDOBLoading: (state: login.LoginState) => {
      state.dobStates.loading = true;
      state.dobStates.success = false;
      state.dobStates.error = false;
    },
    updateDOBSuccess: (state: login.LoginState) => {
      state.dobStates.loading = false;
      state.dobStates.success = true;
      state.dobStates.error = false;
    },

    // Email states
    updateEmailFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.emailAddressStates.loading = false;
      state.emailAddressStates.success = false;
      state.emailAddressStates.error = true;
      state.emailAddressStates.errorMessage = action.payload;
    },
    updateEmailLoading: (state: login.LoginState) => {
      state.emailAddressStates.loading = true;
      state.emailAddressStates.success = false;
      state.emailAddressStates.error = false;
    },
    updateEmailSuccess: (state: login.LoginState) => {
      state.emailAddressStates.loading = false;
      state.emailAddressStates.success = true;
      state.emailAddressStates.error = false;
    },

    // Gender states
    updateGenderFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.genderStates.loading = false;
      state.genderStates.success = false;
      state.genderStates.error = true;
      state.genderStates.errorMessage = action.payload;
    },
    updateGenderLoading: (state: login.LoginState) => {
      state.genderStates.loading = true;
      state.genderStates.success = false;
      state.genderStates.error = false;
    },
    updateGenderSuccess: (state: login.LoginState) => {
      state.genderStates.loading = false;
      state.genderStates.success = true;
      state.genderStates.error = false;
    },

    // Interest states
    updateInterestsFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.userInterestStates.loading = false;
      state.userInterestStates.success = false;
      state.userInterestStates.error = true;
      state.userInterestStates.errorMessage = action.payload;
    },
    updateInterestsLoading: (state: login.LoginState) => {
      state.userInterestStates.loading = true;
      state.userInterestStates.success = false;
      state.userInterestStates.error = false;
    },
    updateInterestsSuccess: (state: login.LoginState) => {
      state.userInterestStates.loading = false;
      state.userInterestStates.success = true;
      state.userInterestStates.error = false;
    },

    fetchInterestsLoading: (state: login.LoginState) => {
      state.interestsStates.loading = true;
      state.interestsStates.success = false;
      state.interestsStates.error = false;
    },
    fetchInterestsSuccess: (
      state: login.LoginState,
      action: PayloadAction<any>,
    ) => {
      state.interestsStates.loading = false;
      state.interestsStates.success = true;
      state.interestsStates.error = false;
      state.allInterests = action.payload;
    },
    fetchInterestsFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.interestsStates.loading = false;
      state.interestsStates.success = false;
      state.interestsStates.error = true;
      state.interestsStates.errorMessage = action.payload;
    },
    updateContactsLoading: (state: login.LoginState) => {
      state.updateContactsStates.loading = true;
      state.updateContactsStates.success = false;
      state.updateContactsStates.error = false;
    },
    updateContactsSuccess: (state: login.LoginState) => {
      state.updateContactsStates.loading = false;
      state.updateContactsStates.success = true;
      state.updateContactsStates.error = false;
    },
    updateContactsFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.updateContactsStates.loading = false;
      state.updateContactsStates.success = false;
      state.updateContactsStates.error = true;
      state.updateContactsStates.errorMessage = action.payload;
    },
    uploadImageLoading: (state: login.LoginState) => {
      state.userDetailStates.loading = true;
      state.userDetailStates.success = false;
      state.userDetailStates.error = false;
    },
    uploadImageSuccess: (state: login.LoginState) => {
      state.userDetailStates.loading = false;
      state.userDetailStates.success = true;
      state.userDetailStates.error = false;
    },
    uploadImageFailed: (
      state: login.LoginState,
      action: PayloadAction<string>,
    ) => {
      state.userDetailStates.loading = false;
      state.userDetailStates.success = false;
      state.userDetailStates.error = true;
      state.userDetailStates.errorMessage = action.payload;
    },
    updateLoginStatus: (
      state: login.LoginState,
      action: PayloadAction<boolean>,
    ) => {
      state.status.isLoggedIn = action.payload;
    },
    revalidateUserInfo: (
      state: login.LoginState,
      action: PayloadAction<boolean>,
    ) => {
      state.status.revalidate = action.payload;
    },
  },
});

export const {actions: loginActions, reducer: loginReducer} = loginSlice;
