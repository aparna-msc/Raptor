from django.db import models

# Create your models here.
class Log(models.Model):
    username=models.CharField(max_length=30,unique=True)
    password=models.CharField(max_length=40,unique=True)
    role=models.CharField(max_length=20)
    def __str__(self):
         return self.username

class policestation(models.Model):
    name=models.CharField(max_length=100)
    place=models.CharField(max_length=500)
    email=models.EmailField(max_length=400)
    phone_number=models.CharField(max_length=40)
    Log_id=models.ForeignKey(Log,on_delete=models.CASCADE)
    role=models.CharField(max_length=10)
    # password=models.CharField(max_length=20)
    policestatus=models.CharField(max_length=10)
    def __str__(self):
         return self.name


class user(models.Model):
    fullname=models.CharField(max_length=200)
    place=models.CharField(max_length=600)
    phone_number=models.CharField(max_length=10)
    Log_id=models.ForeignKey(Log,on_delete=models.CASCADE)
    role=models.CharField(max_length=20)
    # password=models.CharField(max_length=20)
    email=models.EmailField(max_length=40)
    userstatus=models.CharField(max_length=20)
    def __str__(self):
         return self.fullname

class crimereport(models.Model):
    incidenttype=models.CharField(max_length=500)
    date=models.DateField(max_length=20)
    location=models.CharField(max_length=1000)
    describe=models.CharField(max_length=8000)
    involvedpeople=models.CharField(max_length=300)
    userid=models.ForeignKey(user,on_delete=models.CASCADE)
    image=models.ImageField(upload_to='images')
    status=models.CharField(max_length=30)
    def __str__(self):
         return self.incidenttype


class criminalsrecord(models.Model):
    name=models.CharField(max_length=200)
    address=models.CharField(max_length=600)
    age=models.CharField(max_length=500)
    gender=models.CharField(max_length=20)
    dateofbirth=models.CharField(max_length=300)
    hight=models.CharField(max_length=200)
    weight=models.CharField(max_length=200)
    nationality=models.CharField(max_length=600)
    occuption=models.CharField(max_length=600)
    placeofarrest=models.CharField(max_length=400)
    dateofarrest=models.DateField(max_length=200)
    time=models.CharField(max_length=200)
    scarsandmark=models.CharField(max_length=500)
    typeofcrime=models.CharField(max_length=500)
    image=models.ImageField(upload_to='images')
  
    policestation_id=models.ForeignKey(policestation,on_delete=models.CASCADE)
    status=models.CharField(max_length=40)
    def __str__(self):
         return self.name






class Complaints(models.Model):
    name=models.CharField(max_length=500)
    Complaints=models.CharField(max_length=500)
    date=models.DateField(max_length=20)
    replay=models.CharField(max_length=500,default='No replay')
    userid=models.ForeignKey(user,on_delete=models.CASCADE)
    status=models.CharField(max_length=20)
    def __str__(self):
        return self.Complaints
