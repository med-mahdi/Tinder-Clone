from django.shortcuts import render , redirect




#> This Decorator prevent authenticated user to access the login and register page 
def userAuthenticated(view_func):
    def inside(request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect("homePage")
        return view_func(request, *args, **kwargs)
    return inside