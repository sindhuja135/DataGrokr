
const bankAccount = (bankAccount) => {
    const bankAccountregex = /^[0-9]{9,18}$/
    return bankAccountregex.test(bankAccount);
}

const email = (email) => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
}

const firstname = (firstname) => {
    const firstnameregex = /^[a-zA-Z]*$/
    return firstnameregex.test(firstname);
}
const lastname = (lastname) => {
    const lastnameregex = /^[a-zA-Z]*$/
    return lastnameregex.test(lastname);
}
const mobileno = (mobileno) => {
    const mobilenoPattern = /^[6-9][0-9]{9}$/;
    return mobilenoPattern.test(mobileno);
}
const pincode = (pincode) => {
    const pincoderegex = /^[1-9][0-9]{5}$/
    return pincoderegex.test(pincode)
}
const validation = {
    bankAccount, email, firstname, lastname, mobileno, pincode
}
export default validation;