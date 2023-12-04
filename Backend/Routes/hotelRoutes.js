import express from 'express'
import {
  createHotel,
  deleteHotel,
  getHotel,
  updateHotel
} from '../Controllers/hotelController.js'
const router = express.Router()

//CREATE HOTEL
router.post('/createHotel', createHotel)

// UPADTE HOTEL
router.put('/updateHotel/:id', updateHotel)

// DELETE SPECIFIC HOTEL
router.delete('/deleteHotel/:id', deleteHotel)

// GET ALL HOTELS
router.get('/getHotels', getHotel)

export default router
