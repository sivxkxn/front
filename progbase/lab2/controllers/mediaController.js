const MediaRepository = require('./../repositories/mediaRepository');
const mediaRepository = new MediaRepository("./data/media")
const Media = require('../models/media')
const multer = require('multer')

module.exports = {

    getMediaById(req, res) {
        let media = mediaRepository.getMediaById(parseInt(req.params.id))
        if (media) {
            res.sendFile(media.path)
            res.end()
        }
        else res.sendStatus(404)
    },
    addMedia(req, res) {
      try{
          const id = mediaRepository.addMedia(parseInt(req.file.path))
          res.status(201).json(id).end()
      }
      catch(e)
      {
        // res.sendStatus(404)
      }
    }

}