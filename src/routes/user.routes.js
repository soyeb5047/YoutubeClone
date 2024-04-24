import { Router } from "express";
import { registerUser, loginUser, logoutUser, generateAccessToken } from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1
        },
        {
            name: 'coverImage',
            maxCount: 1
        }
    ])
    , registerUser)

router.route('/login').post(loginUser)

// special routes
router.route('/logout').get(verifyJWT, logoutUser)
router.route('/refresh-token').post(generateAccessToken)

export default router