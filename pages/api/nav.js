
const navInfo = {
    whatsapp:"91-7303256619",
    email:"yashp241195@gmail.com"
}

export default (req, res) => {
    res.status(200).json(navInfo)
};