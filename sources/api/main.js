const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        categories: {
            action: 'api/action',
            reaction: 'api/reaction',
            nsfw: 'api/nsfw',
            rolplay_nsfw: 'api/rolplay_nsfw',
            anime: 'api/anime'
        }
    })
})

router.use('/users', require('./users/users').router)
router.use('/client', require('./client/client').router)

exports.router = router;