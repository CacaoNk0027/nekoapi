const { client } = require('../../../index');

const router = require('express').Router();

router.get('/', async (req, res) => {
    let { user } = req.query;
    if (!user) return res.json({
        users: {
            avatars: 'users/avatars?user=thisuser',
            user: '?thisuser'
        }
    });
    switch (user) {
        case "cacao":
            res.json(await client.users.fetch('801603753631285308'));
            break;
        case "jim":
            res.json(await client.users.fetch('514588697807814687'));
            break;
        case "friner":
            res.json(await client.users.fetch('854425004485771284'));
            break;
        case "client":
            res.json(await client.users.fetch('821452429409124451'));
            break;
        default: res.status(404).json({ status: res.statusCode, message: 'usuario no encontrado' })
    }
})

exports.router = router;