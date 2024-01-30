import { isValidEmail } from "./register";

const loginValidate = async (req) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return { error: "Vui lòng điền đầy đủ thông tin người dùng." };
   }

   if (!isValidEmail(email)) {
      return { error: `Email không đúng định dạng.` };
   }
};

export const loginService = async (req, res) => {
   try {
      const validationError = await loginValidate(req);

      if (validationError) {
         return res.status(400).json(validationError);
      }

      // Thực hiện chức năng đăng nhập

      res.status(201).json({
         message: "Đăng nhập thành công.",
      });
   } catch (err) {
      res.status(500).json({
         error: "Đã xảy ra lỗi trong quá trình tạo người dùng.",
      });
   }
};
