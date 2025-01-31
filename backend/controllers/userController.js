const users = [];

exports.getUsers = (req, res) => {
    res.json(users);
};

exports.addUser = (req, res) => {
    const { name, email } = req.body;
    users.push({ name, email });
    res.status(201).send('User added');
};
