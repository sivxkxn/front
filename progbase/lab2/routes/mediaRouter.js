const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const mediaController = require('../controllers/mediaController');

/**
 * Returns media by id
 * @route GET /api/media/{mediaId}
 * @param {integer} mediaId.path.required
 * @group Media
 * @returns {file} 200
 * @returns {Error} 404
 */
router.get('/:id', mediaController.getMediaById);
/**
 * Save a media to storage
 * @route POST /api/media/
 * @group Media
 * @consumes multipart/form-data
 * @param {file} media.formData.required  - file
 * @returns {integer} 200                 - id of file
 * @returns {Error} 400                   - Bad Request
 */
router.post('/', upload.single('media'), mediaController.addMedia);

module.exports = router;