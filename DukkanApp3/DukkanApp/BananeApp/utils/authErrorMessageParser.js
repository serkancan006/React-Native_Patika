export default function(errorCode){
    switch (errorCode) {
        case 'auth/invalid-email':
            return "geçersiz e-posta adresi";
        case 'auth/email-already-exists':
            return "Kullanıcı zaten kayıtlı";
        case 'auth/user-not-found':
            return "Kullanıcı Bulunamadı";  
        case 'auth/weak-password':
            return "parola Zayıf";  
        case 'auth/wrong-password':
            return "parola geçersiz"; 

        default:
            return errorCode;
    }
}