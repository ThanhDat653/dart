import { createUserService } from "../services/auth/register.js";

export const createUser = (req, res) => createUserService(req, res);
// export const login = (req, res) => createUserService(req, res);
