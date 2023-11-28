const list = async (req, res) => { 
	try {
	let users = await User.find().select('name email 	updated created’) 
	res.json(users)
	} catch (err) {
	return res.status(400).json({
	error: errorHandler.getErrorMessage(err) 
	})
	} 
	}