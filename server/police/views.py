from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from .models import policestation,user,crimereport,criminalsrecord

# Create your views here.

def login_page(request):
    return render(request,'login.html')

def dash_page(request):
    return render(request,'dash.html')

def managepolicestation_page(request):
    data=policestation.objects.all()
    return render(request,'managepolicestation.html',{'data':data}) 

def approved_page(request,id):
    data=policestation.objects.get(id=id)
    data.policestatus=1
    data.save()
    return redirect('managepolicestation_approved')

def managepolicestation_approved(request):
      data=policestation.objects.all()
      return render(request,'approved.html',{'data':data})

def admin_delete_policestation(request,id):
    data=policestation.objects.get(id=id)
    print(data)
    data.delete()
    return redirect('managepolicestation_page')

def manageruser_page(request):
      data=user.objects.all()
      return render(request,'manageruser.html',{'data':data})

def approveuser_page(request,id):
    data=user.objects.get(id=id) 
    data.userstatus=1
    data.save()
    return redirect('manageruser_approve')


def manageruser_approve(request):
      data=user.objects.all()
      return render(request,'approveuser.html',{'data':data})

      
def admin_delete_user(request,id):
    data=user.objects.get(id=id)
    print(data)
    data.delete()
    return redirect('manageruser_page')


def usercrimereport_page(request):
    data=crimereport.objects.all()
    return render(request,'usercrimereport.html',{'data':data})

def criminalrecord_page(request):
    data=criminalsrecord.objects.all()
    return render(request,'criminalrecord.html',{'data':data})

def login_admin(request):
    if request.method=='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username,password=password)

        if user is not None:
            auth_login(request,user)
            return render(request,'dash.html')

        else:
            message.info(request,'Invalid credentials')
            return redirect('login_admin')

    else:
        return render(request,'login.html')        
