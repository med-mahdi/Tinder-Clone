from django.test import TestCase




#> This Function Take Handle of password matching and check password Length
def userCreationChecker(username ,email,password):
    username_length = len(username) >= 5
    passwordLength = len(password) >= 8
    if (username_length and email and passwordLength):
        return True
    return False