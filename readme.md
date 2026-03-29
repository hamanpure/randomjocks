# 😂 Joke Generator Web App

A fun and simple web application built using **Node.js**, **Express**, and **EJS** that generates random jokes using a public API. Users can enter their name and receive a personalized joke instantly.

---

## 🚀 Features

- 🎭 Fetches random jokes from an external API  
- 👤 Personalized joke display using user input  
- 🔄 Supports both single and two-part jokes  
- ⚡ Fast and lightweight Express server  
- 🎨 Dynamic rendering using EJS templates  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Templating Engine:** EJS  
- **HTTP Client:** Axios  
- **Middleware:** Body-parser  
- **Frontend:** HTML, CSS  

---

## 📂 Project Structure


project-root/
│── public/
│ └── main.css
│── views/
│ └── index.ejs
│── index.js
│── package.json
│── README.md


---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/hamanpure/randomjocks.git

cd randomjocks


### 2. Install dependencies

npm install


### 3. Run the server

node index.js


### 4. Open in browser

http://localhost:3000


---

## 🔌 API Used

This project uses the free Joke API:

https://v2.jokeapi.dev/joke/Any?safe-mode

---

## 🧠 How It Works

1. User enters their name and clicks **"Get Joke"**  
2. A POST request is sent to the server  
3. Server fetches a random joke using Axios  
4. The joke is rendered dynamically using EJS  

- **Single type joke:** Displayed directly  
- **Two-part joke:** Setup + Delivery format  

---

## 🧪 Future Improvements

- 🎨 Improve UI/UX design  
- 🔁 Add "Next Joke" button without page reload  
- 📱 Make the application fully responsive  
- 🌍 Add joke categories (Programming, Dark, etc.)  
- 💾 Save favorite jokes  

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Push and create a Pull Request  

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgements

- Joke API for providing free jokes  
- Express & EJS community  

---

## 💬 Author

**Vaibhav Hamanpure**  