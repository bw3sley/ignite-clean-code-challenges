async function registerNewUserInDatabase(user) {
    const { email, name, avatar } = user;
  
    const doesUserHaveAvatar = avatar; 
    
    if (!doesUserHaveAvatar) return { error: 'avatar is required' }
  
    const hasUserName = name;

    if(!hasUserName) return { error: 'name is required' }
  
    const isEmailAlreadyTaken = getUserByEmail(email);
  
    if (isEmailAlreadyTaken) {
      return { error: 'email already used' }
    }
  
    // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
    // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
    const convertedUserAvatar = convertImageToJPG(avatar);
  
    const user = await createUserInDatabase({ email, name, avatar: convertedUserAvatar })
  
    return { user }
}