export default function handler(req, res){
    if(req.method === 'POST'){
        const { title, date, content } = req.body;

        if(!title){
            return res.status(200).json({
                error: 'A title must be included'
            })
        } 
        
        if (!content){
            return res.status(200).json({
                error: 'A content must be included'
            })
        }
        
        if (!date){
            return res.status(200).json({
                error: 'A date must be included'
            })
        }

        res.status(200).json({
            title: title,
            date: date,
            content: content
        })
        
    } else {
        res.status(400);
    }
}