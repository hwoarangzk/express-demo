
exports.postProcess = function(req, res) {
	var body = req.body,
        name = body.name,
        age = body.age;
    res.render('thanks', {
        name: name
    });
};