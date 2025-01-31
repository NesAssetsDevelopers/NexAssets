const properties = [];

exports.getProperties = (req, res) => {
    res.json(properties);
};

exports.addProperty = (req, res) => {
    const { name, location, value } = req.body;
    properties.push({ name, location, value });
    res.status(201).send('Property added');
};
