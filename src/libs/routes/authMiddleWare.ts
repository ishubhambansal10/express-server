import * as jwt from "jsonwebtoken";
import hasPermission from "../../../extraTs/utils/permissions";
import config from "../../config/configuration";

export default (module, permissionType) => async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return next({
      error: "Authentication Failed",
      message: "Token not found",
      status: 403,
    });
  }
  const { secret } = config;

  let user: any = {};

  try {
    user = jwt.verify(token, secret);
  } catch (err) {
    console.log(err);
    next({ error: "Authentication failed", message: "User not Authorized", status: 403 });
  }
  if (!user) {
    next({error: 'Authentication failed', message: 'User not found', status: 403});
  }
  if (!hasPermission(module, user.role, permissionType)) {
        next({ error: 'Unauthorized', message: 'Permission Denied', status: 403});

  }
  req.user = user;
  next()
};
