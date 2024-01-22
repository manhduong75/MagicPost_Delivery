const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/googleAuth");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "magic_post",
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql1 = "SELECT * from admin where username = ?";
  const sql2 = "SELECT * from staff where username = ?";
  db.query(sql1, [username], (err, data) => {
    if (err) throw new Error(err);
    if (data.length > 0) {
      const match = bcrypt.compare(password, data[0].password);
      if (match) {
        const token = jwt.sign({ username }, "secret", { expiresIn: "1d" });
        res.cookie("token", token);
        return res.json({ message: "Login successful!", user: data[0] });
      } else return res.json({ message: "Wrong username/password!" });
    } else {
      db.query(sql2, [username], (err, data) => {
        if (err) throw new Error(err);
        if (data.length > 0) {
          const match = bcrypt.compare(password, data[0].password);
          if (match) {
            const token = jwt.sign({ username }, "secret", { expiresIn: "1d" });
            res.cookie("token", token);
            return res.json({ message: "Login successful!", user: data[0] });
          } else return res.json({ message: "Wrong username/password!" });
        } else {
          return res.json({ message: "Wrong username/password!" });
        }
      });
    }
  });
});

app.use((req, res, next) => {
  // Decode the JWT from the cookies
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, "secret");
      req.user = decoded;
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

app.post("/admin-create", async (req, res) => {
  const { email, username, password, role } = req.body;
  const dbRole =
    role === "Trưởng điểm tập kết" ? "HEAD_GATHERING" : "HEAD_TRANSACTION";
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql1 = "SELECT * FROM admin WHERE username = ?";
  db.query(sql1, [username], (err, data) => {
    if (err) throw new Error(err);
    if (data.length > 0)
      return res.json({ message: "Trùng tên đăng nhập với tài khoản khác!" });
    else {
      const sql2 = `INSERT INTO admin(role, username, password, email) 
                    VALUES(?, ?, ?, ?)`;
      db.query(sql2, [dbRole, username, hashedPassword, email], (err, data) => {
        if (err) throw new Error(err);
        else return res.json({ message: "Đăng ký thành công!" });
      });
    }
  });
});

app.get("/user", (req, res) => {
  return res.json({ user: req.user });
});

app.listen(8081, () => {
  console.log("Server is running on 8081");
});

// const db = async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: '',
//       database: 'magic_post'
//     });
//     console.log("Connected to MagicPost");
//     return connection;
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// }

// db();

// app.post("/login", async(req, res) => {
//   const {username, password} = req.body;

//   try {
//     const conn = await db();

//     const results = await conn.execute(
//       "SELECT * FROM staff WHERE username = ?",
//       "SELECT * FROM admin WHERE username = ?",
//       [username]
//     );

//     if (results.length === 0) {
//       res.status(401).json("Username is incorrect!");
//     } else {
//       const account = results[0];

//       const match = await bcrypt.compare(password, account.password);

//       if (!match) {
//         res.status(401).json("Password is incorrect!");
//       } else {
//         res.status(200).json("Login successful!")
//       }
//     }

//     await conn.end();
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json("Internet Server Error")
//   }
// });

// // app.post("/register", async(req, res) => {
// //   const { role, username, email, password } = req.body;

// //   try {
// //     const conn = await db();

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     await conn.execute(
// //       "INSERT INTO admin (role, username, email, password) VALUES (?, ?, ?, ?)",
// //       [role, username, email, hashedPassword]
// //     );

// //     res.json("Account registed succesfully!");

// //     console.log("Account registed succedfully!");

// //     await conn.end();
// //   } catch (error) {
// //     console.log(error.message);
// //     res.status(500).json("Internet Server Error");
// //   }
// // });

// app.use(
//   cookieSession({
//     secret: "secret",
//     resave: "true",
//     saveUninitialized: true,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.json());

// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// //app.use("/auth", authRoute);

// app.listen(8081, () => {
//   console.log("Server is running!");
// });
