import { get, post } from "../util/requests";

export const SIGNUP_STATUS = {
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
  OK: "OK",
  EMAIL_ALREADY_EXISTS: "EMAIL_ALREADY_EXISTS",
};

export async function signup(email, password) {
  const response = await post("http://localhost:8080/auth/signup", {
    email,
    password,
  });
  switch (response.status) {
    case 200:
      return {
        status: SIGNUP_STATUS.OK,
        data: response.content,
      };
    case -1:
      return {
        status: SIGNUP_STATUS.UNKNOWN_ERROR,
        data: null,
      };
    case 400:
      switch (parseInt(response.content.data)) {
        case 40001:
          return {
            status: SIGNUP_STATUS.EMAIL_ALREADY_EXISTS,
            data: null,
          };
      }
    case 500:
      return {
        status: SIGNUP_STATUS.SERVER_ERROR,
        data: null,
      };
  }
}

export const LOGIN_STATUS = {
  OK: "OK",
  USER_DOES_NOT_EXIST: "USER_DOES_NOT_EXIST",
  USER_HAS_NO_PROFILE: "USER_HAS_NO_PROFILE",
  USER_INACTIVE: "USER_INACTIVE",
  INCORRECT_PASSWORD: "INCORRECT_PASSWORD",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
};

export async function login(email, password) {
  const response = await post("http://localhost:8080/auth/login", {
    email,
    password,
  });
  switch (response.status) {
    case 200:
      return {
        status: LOGIN_STATUS.OK,
        data: response.content,
      };
    case 400:
      switch (parseInt(response.content.data)) {
        case 40001:
          return {
            status: LOGIN_STATUS.USER_DOES_NOT_EXIST,
            data: null,
          };
        case 40002:
          return {
            status: LOGIN_STATUS.USER_INACTIVE,
            data: null,
          };
        case 40003:
          return {
            status: LOGIN_STATUS.INCORRECT_PASSWORD,
            data: null,
          };
        case 40004:
          return {
            status: LOGIN_STATUS.USER_HAS_NO_PROFILE,
            data: null,
          };
      }
    case -1:
      return {
        status: LOGIN_STATUS.UNKNOWN_ERROR,
        data: null,
      };
    case 500:
      return {
        status: LOGIN_STATUS.SERVER_ERROR,
        data: null,
      };
  }
}

export const PROFILE_UPDATE_STATUS = {
  OK: "OK",
  PROFILE_ALREADY_EXISTS: "PROFILE_ALREADY_EXISTS",
  USERNAME_ALREADY_EXISTS: "USERNAME_ALREADY_EXISTS",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
};

export async function profile_update(
  first_name,
  last_name,
  username,
  phone_number,
  bio,
) {
  const response = await post("http://localhost:8080/api/profile", {
    first_name,
    last_name,
    username,
    phone_number,
    bio,
  });
  switch (response.status) {
    case 200:
      return {
        status: PROFILE_UPDATE_STATUS.OK,
        data: response.content,
      };
    case 400:
      switch (parseInt(response.content.data)) {
        case 40001:
          return {
            status: PROFILE_UPDATE_STATUS.PROFILE_ALREADY_EXISTS,
            data: null,
          };
        case 40002:
          return {
            status: PROFILE_UPDATE_STATUS.USERNAME_ALREADY_EXISTS,
            data: null,
          };
      }
    case -1:
      return {
        status: PROFILE_UPDATE_STATUS.UNKNOWN_ERROR,
        data: null,
      };
    case 500:
      return {
        status: PROFILE_UPDATE_STATUS.SERVER_ERROR,
        data: null,
      };
  }
}

export const SESSION_STATUS = {
  OK: "OK",
  USER_DOES_NOT_EXIST: "USER_DOES_NOT_EXIST",
  USER_IS_DISABLED: "USER_IS_DISABLED",
  USER_DOES_NOT_HAVE_A_PROFILE: "USER_DOES_NOT_HAVE_A_PROFILE",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
  INVALID_COOKIE: "INVALID_COOKIE",
};

export async function session_check() {
  const response = await get("http://localhost:8080/api/session");
  switch (response.status) {
    case 200:
      return {
        status: SESSION_STATUS.OK,
        data: null,
      };
    case 401:
      return {
        status: SESSION_STATUS.INVALID_COOKIE,
        data: null,
      };
    case 400:
      switch (parseInt(response.content.data)) {
        case 40001:
          return {
            status: SESSION_STATUS.USER_DOES_NOT_EXIST,
            data: null,
          };
        case 40002:
          return {
            status: SESSION_STATUS.USER_IS_DISABLED,
            data: null,
          };
        case 40003:
          return {
            status: SESSION_STATUS.USER_DOES_NOT_HAVE_A_PROFILE,
            data: null,
          };
      }
    case -1:
      return {
        status: SESSION_STATUS.UNKNOWN_ERROR,
        data: null,
      };
    case 500:
      return {
        status: SESSION_STATUS.SERVER_ERROR,
        data: null,
      };
  }
}
