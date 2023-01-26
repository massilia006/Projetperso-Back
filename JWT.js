const {sign, verify}=require('jsonwebtoken')
const createToken=(user=>{
    const accesToken=sign ({username:user.name, id:user.id}, "SECRET")
    return accesToken;
})

const validateToken=(req,res,next)=>{
const accessToken=req.cookies['access-token'];
console.log(accessToken);

if(!accessToken){
    return res.status(400).json({err:"User not Authentificated"})
}

try{
    const validToken=verify(accessToken, "SECRET");
    if(validToken){
        req.authenticated=true;
        return next();
    }
}
catch(err){
    return res.status(400).json({err:err.message});
}
}
module.exports={createToken,validateToken};