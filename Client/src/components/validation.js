
const validation = (userData) =>{

    const errores = {}

if(!/\S+@\S+\.\S+/.test(userData.email)){
    errores.email = "Must be an email"
} else if (!userData.email){
    errores.email = "Cannot be empty"
} else if (userData.email.length > 35){
    errores.email = "Can contain no more than 35 characters"
}
if (!/.*\d+.*/.test(userData.password)){
    errores.password = "Must contain at least one number"
}
if (userData.password.length < 6 || userData.password.length >  10){
    errores.password = "Must contain between 6 and 10 characters"
}
return errores

}

export default validation