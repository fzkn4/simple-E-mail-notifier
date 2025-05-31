# 📧 Email Notifier Webapp

This is a simple web application that allows you to send HTML-formatted emails to specified recipients. It uses Node.js, Express.js, and the [Brevo](https://www.brevo.com/) (formerly Sendinblue) transactional email API. The app includes a clean frontend form and backend API for sending emails.

---

## 🚀 Features

✅ User-friendly interface for sending emails  
✅ HTML email body support  
✅ Status message after sending  
✅ Environment-based configuration

---

## 💻 Technologies

- Node.js
- Express.js
- Vanilla JavaScript (frontend)
- Brevo transactional email API
- HTML & CSS

---

## ⚙️ Project Structure
```
my-email-webapp/
├── public/
│ ├── index.html
│ ├── script.js
│ └── style.css
├── server.js
├── package.json
├── .env
└── .gitignore
```

---

## 📝 Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Brevo (Sendinblue)](https://www.brevo.com/) account

---

## 🛠️ Setup & Installation

1️⃣ **Clone the repository**  
```
git clone https://github.com/yourusername/email-notifier-webapp.git
cd email-notifier-webapp
```
2️⃣ **Install dependencies**
```
npm install
```

3️⃣ **Configure environment variables**
Create a .env file in the root directory and add your Brevo API key:
```
BREVO_API_KEY=your_api_key
SENDER_EMAIL=your_e-mail
SENDER_NAME="your_name"
PORT=3000
```
✅ Replace your_brevo_api_key_here with your Brevo API key.

4️⃣ **Verify your domain in Brevo**
 - Log into Brevo and verify your sending domain.
 - Add SPF, DKIM, and DMARC records in your domain’s DNS as recommended by Brevo.

## 🏃 Running the Application
```
node server.js
```
Then, open your browser and navigate to:
```
http://localhost:3000
```
