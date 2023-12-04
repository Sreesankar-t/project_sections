import Hotel from '../Modals/hotelModal.js'

const createHotel = async (req, res) => {
  const newHotel = await new Hotel(req.body)
  try {
    const savedHotel = newHotel.save()
    res.status(200).json(savedHotel)
  } catch (error) {
    res.status(500).json('internal server error')
  }
}

const updateHotel = async (req, res) => {
  console.log(req.params.id)
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedHotel)
  } catch (error) {
    res.status(500).json('internal server error')
  }
}

const deleteHotel = async (req, res) => {
  console.log(req.params.id)
  try {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json('hotel has been delete')
  } catch (error) {
    res.status(500).json('internal server error')
  }
}

const getHotel = async (req, res, next) => {
  try {
    const hotlels = await Hotel.findById(45452)
    res.status(200).json(hotlels)
  } catch (error) {
    next(error)
  }
}

export { createHotel, updateHotel, deleteHotel, getHotel }
