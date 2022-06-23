import jwt from 'jsonwebtoken';

const KEY = 'sjfslakdfjl;askfujeso;jfmes;lgfhjseo;lifjs;'

export default function handler(req, res){
    if(req.method === 'POST'){
        const { username, password } = req.body;

        res.json({
            token: jwt.sign({
                username: username,
                password: password
            }, KEY)
        })

    } else {
        res.status(400);
    }

    
}