const router = require('express').Router();
const { ClientData } = require('../../mongoose/models/client');

router.get('/', async (req, res) => {
    let client = await ClientData.findOne({ clientId: "821452429409124451" }).exec();
    if(client == null) {
        res.status(204).json(new ClientData({ clientId: null, clientCommands: [], clientGuilds: undefined, clientMembers: undefined, clientVotes: undefined }))
    } else {
        res.json(client)
    }
})

router.post('/', async (req, res) => {
    let obj = req.body
    if(obj.clientId !== "821452429409124451") return res.status(403).json({
        status: res.statusCode, message: "forbbiden" 
    });
	if(await ClientData.findOne({ clientId: "821452429409124451" }) == null) {
		try {
			let clientDB = new ClientData(obj)
			await clientDB.save()
			res.json({ statusCode: 200, data: "Accepted" })
		} catch (err) {
			res.status(400).json({ statusCode: 400, data: "invalid request", error: err })
		}
	} else {
		try {
			await ClientData.updateOne({ clientId: "821452429409124451" }, obj, { useFindAndModify: false })
			res.json({ statusCode: 200, data: "Accepted" })
		} catch (err) {
			res.status(400).json({ statusCode: 400, data: "invalid request", error: err })
		}
	}
})

exports.router = router;