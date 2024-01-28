import express from "express";
const app = express();

app.use(express.json());

let users = [];

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    
    const capitalLetterRegex = /[A-Z]/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!capitalLetterRegex.test(password) || !symbolRegex.test(password)) {
        return res.status(400).send({ message: 'Password must contain at least one capital letter and one symbol' });
    }

    const existingUsername = users.find(user => user.username === username)
    const existingEmail = users.find(user => user.email === email)

    if (existingUsername) {
        return res.status(200).send({ message: 'Username already exists' })
    }

    if (existingEmail) {
        return res.status(200).send({ message: 'Email already exists' })
    }

    users.push({ username, email, password });
    res.status(200).send({ message: 'User created successfully' })
})

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email)

    if (!user || password !== user.password) {
        return res.status(200).send({ error: 'Invalid email or password' })
    }

    return res.status(200).send({ message: 'Sign-in successful' })
})

app.get('/users', (req, res) => {
    res.send({ users })
});

app.listen(9000, () => {
    console.log("Server is running on port 9000")
});
