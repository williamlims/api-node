exports.get = (req, res) => {
    const id = req.params.id;
    console.log("Get");
    res.send(`OK GET id = ${id}`);
}

exports.getAll = (req, res) => {
    console.log("Get All");
}

exports.add = (req, res) => {
    console.log("Add");
}

exports.update = (req, res) => {
    console.log("Update");
}

exports.delete = (req, res) => {
    console.log("Delete");
}