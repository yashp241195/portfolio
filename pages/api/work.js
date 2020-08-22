
const profileInfo = {
    name:"Yash Pratap",
    social:
    {
        whatsapp:"91-7303256619",
        email:"yashp241195@gmail.com"
    }
    
}

const data = (req, res) => {
    res.status(200).json(profileInfo)
};

export default data;