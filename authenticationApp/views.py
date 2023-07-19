from django.shortcuts import render , redirect
from django.http import HttpResponse
from django.contrib.auth.models import Group
from django.contrib.auth import authenticate , login , logout
from .forms import CreateUserForm
from .functions import userCreationChecker
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from .models import UserProfile
from django.contrib.auth.decorators import login_required
from .decorators import *



@userAuthenticated
def registerPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        userEmail = request.POST.get('useremail')
        password = request.POST.get('password')
        input_processRight = userCreationChecker(username , userEmail ,password)
        username_list = username.split(" ")
        if (input_processRight):
            try:
                new_user = User.objects.create_user(username=username, email = userEmail , password=password)
                if (len(username_list) > 1):
                    user_profile = UserProfile.objects.create(user=new_user,fname=username_list[0],lname=username_list[1], emailAddress= userEmail)
                else:
                    user_profile = UserProfile.objects.create(user=new_user,fname=username_list[0],lname="", emailAddress= userEmail)
                clientGroup = Group.objects.get(name='clients')
                clientGroup.user_set.add(new_user)
                user_profile.save()
                return HttpResponse("user created successfully")
            except:
                return HttpResponse("User created unsuccessfully")    
        else:
            return HttpResponse("User Not Created Successfully Form Input Not Valid")    
    return render(request,'homePage.html')



@userAuthenticated
def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            return HttpResponse("Connect Successfully")
        else:
            return HttpResponse("Authenticated unSuccefully")
    return render(request,'homePage.html')



@login_required(login_url='loginPage')
def logoutPage(request):
    logout(request)
    return redirect('loginPage')    



@login_required(login_url='loginPage')
def homePage(request):
    return HttpResponse("Home page lmao")    