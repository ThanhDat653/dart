export const postCreateUser = (req, res) => {
   console.log("req body > ", req.body);
   const { username, email, password } = req.body;

   // Kiểm tra xem các trường thông tin có đầy đủ không
   if (!username || !email || !password) {
      return res
         .status(400)
         .json({ error: "Vui lòng điền đầy đủ thông tin người dùng." });
   }

   // Trả về thông báo thành công
   res.status(201).json({ message: "Người dùng đã được tạo mới thành công." });
};
