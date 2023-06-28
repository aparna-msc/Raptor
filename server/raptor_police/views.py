from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from police.models import  Log,user,policestation,crimereport,criminalsrecord,Complaints
from .serializers import LoginSerilalizer,UserSerializer,policestationSerializers,crimereportSerializer,CriminalsrecordSerializer,complaintsSerializer
# Create your views here.
class UserSerializersAPIView(GenericAPIView):
    serializer_class = UserSerializer
    serializer_class_login = LoginSerilalizer


    def post(self,request):


        login_id=''
        fullname=request.data.get('fullname')
        place=request.data.get('place')
        email=request.data.get('email')
        phone_number=request.data.get('phone_number')
        username=request.data.get('username')
        password=request.data.get('password')
        role='user'
        userstatus='0'


        if(Log.objects.filter(username=fullname)):
            return Response({'message':'Duplicate User Found'},status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
        if serializer_login.is_valid():
            log=serializer_login.save()
            login_id=log.id
            print(login_id)
        serializer=self.serializer_class(data={'Log_id':login_id,'username':username,'fullname':fullname,'email':email,'place':place,'phone_number':phone_number,'password':password,'role':role,'userstatus':userstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'User registered Successfully','Success':True},status=status.HTTP_201_CREATED)
        else:
            return Response({'data':serializer.errors,'message':"False"},status=status.HTTP_400_BAD_REQUEST)   
    
    
class LoginAPIView(GenericAPIView):
    
    serializer_class = LoginSerilalizer
    
    def post(self,request):
        u_id=""
        l_status=""
        fullname=""
        username=request.data.get('username')
        password=request.data.get('password')
        logreg=Log.objects.filter(username=username,password=password)
        if(logreg.count()>0):
            read_serlizer=LoginSerilalizer(logreg,many=True)
            for i in read_serlizer.data:
                id=i['id']
                print(id)
                role=i['role']
                regdata=user.objects.all().filter(Log_id=id).values()
                print(user)
                for i in regdata:
                    u_id=i['id']
                    l_status=i['userstatus']
                    fullname=i['fullname']
                    print(u_id)
                regdata=policestation.objects.all().filter(Log_id=id).values()
                print(policestation)
                for i in regdata:
                    u_id=i['id']
                    l_status=i['policestatus']
                    fullname=i['name']
                    print(u_id)
            return Response({'data':{'login_id':id,'username':username,'password':password,'role':role,'user_id':u_id,'l_status':l_status,'fullname':fullname},'success':True,'message':'logged in successfully'},status=status.HTTP_201_CREATED)
        else:
            return Response({'data':'username or password is invalied','sucess':False,},status=status.HTTP_400_BAD_REQUEST)
        


class policestationSerializersAPIView(GenericAPIView):
    serializer_class = policestationSerializers
    serializer_class_login = LoginSerilalizer


    def post(self,request):


        login_id=''
        name=request.data.get('name')
        place=request.data.get('place')
        email=request.data.get('email')
        phone_number=request.data.get('phone_number')
        # log_id=request.data.get('log_id')
        username=request.data.get('username')
        password=request.data.get('password')
        role='police'
        policestatus='0'


        if(Log.objects.filter(username=name)):
            return Response({'message':'Duplicate User Found'},status = status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':name,'password':password,'role':role})
        if serializer_login.is_valid():
            log=serializer_login.save()
            login_id=log.id
            print(login_id)
        serializer=self.serializer_class(data={'Log_id':login_id,'username':username,'name':name,'place':place,'email':email,'phone_number':phone_number,'password':password,'role':role,'policestatus':policestatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'policestation registered Successfully','Success':True},status=status.HTTP_201_CREATED) 
        else:
            return Response({'data':serializer.errors,'message':"failed",'success':False},status=status.HTTP_400_BAD_REQUEST)   




class crimereportSerializersAPIView(GenericAPIView):
    serializer_class = crimereportSerializer



    def post(self,request):


        
        incidenttype=request.data.get('incidenttype')
        date=request.data.get('date')
        location=request.data.get('location')
        describe=request.data.get('describe')
        involvedpeople=request.data.get('involvedpeople')
        userid=request.data.get('userid')
        # log_id=request.data.get('log_id')
        image=request.data.get('image')
    
        crimestatus='0'


       
        serializer=self.serializer_class(data={'incidenttype':incidenttype,'date':date,'location':location,'describe':describe,'involvedpeople':involvedpeople,'userid':userid,'image':image,'status':crimestatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'Successfully','Success':True},status=status.HTTP_201_CREATED) 
        return Response({'data':serializer.errors,'message':"failed",'success':False},status=status.HTTP_400_BAD_REQUEST)   
    




class CriminalsrecordSerializerAPIView(GenericAPIView):
    serializer_class = CriminalsrecordSerializer

    def post(self,request):


        
        name=request.data.get('name')
        address=request.data.get('address')
        age=request.data.get('age')
        gender=request.data.get('gender')
        dateofbirth=request.data.get('dateofbirth')
        hight=request.data.get('hight')
        weight=request.data.get('weight')
        nationality=request.data.get('nationality')
        occuption=request.data.get('occuption')
        placeofarrest=request.data.get('placeofarrest')
        dateofarrest=request.data.get('dateofarrest')
        time=request.data.get('time')
        scarsandmark=request.data.get('scarsandmark')
        typeofcrime=request.data.get('typeofcrime')
       
        policestation_id=request.data.get('policestation_id')
        # log_id=request.data.get('log_id')
        image=request.data.get('image')
        # role='user'
        criminalstatus='0'


       
        serializer=self.serializer_class(data={'name':name,'address': address,'age': age,'gender':gender,'dateofbirth':dateofbirth,'hight':hight,'weight':weight,'nationality':nationality,'placeofarrest':placeofarrest,'dateofarrest':dateofarrest,'scarsandmark':scarsandmark,'typeofcrime':typeofcrime,'policestation_id':policestation_id,'time':time,'occuption':occuption,'image':image,'status':criminalstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'Successfully','Success':True},status=status.HTTP_201_CREATED) 
        return Response({'data':serializer.errors,'message':"failed",'success':False},status=status.HTTP_400_BAD_REQUEST)   

class SingleUserAPIView(GenericAPIView):
    def get(self,request,id):
        queryset=user.objects.get(pk=id)
        serializer=UserSerializer(queryset)
        return Response({'data':serializer.data,'message':'single user data','success':True},status=status.HTTP_200_OK)

class Get_alluserAPIView(GenericAPIView):
    serializer_class=UserSerializer   
    def get(self,request):
        queryset=user.objects.all()
        if queryset.count()>0:
            serializer=UserSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'single user data','success':True},status=status.HTTP_200_OK)
        else:
             return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)


      
        
class Get_crimereportAPIView(GenericAPIView):
    serializer_class=crimereportSerializer   
    def get(self,request):
        queryset=crimereport.objects.all()
        if queryset.count()>0:
            serializer=crimereportSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'single user data','success':True},status=status.HTTP_200_OK)
        else:
             return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST) 

class CrimestatusAPIView(GenericAPIView):
    def post(self,request,id):
        serializer_class=crimereportSerializer 
        user=crimereport.objects.get(pk=id)
        user.status=1
        user.save()
        serializer=serializer_class(user)
        return Response({'data':serializer.data,'message':'approve crime status','success':True},status=status.HTTP_200_OK)



class CrimestatusAPIView(GenericAPIView):
    def post(self,request,id):
        serializer_class=crimereportSerializer 
        user=crimereport.objects.get(pk=id)
        user.status=2
        user.save()
        serializer=serializer_class(user)
        return Response({'data':serializer.data,'message':'completed crime status','success':True},status=status.HTTP_200_OK)

class SinglecrimereportAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = crimereport.objects.get(pk=id)
        serializer = crimereportSerializer(queryset)
        return Response({'data':serializer.data,'message':'crimereport recieved','success':True},status=status.HTTP_200_OK)





class Get_allpolicestationAPIView(GenericAPIView):
    serializer_class=policestationSerializers   
    def get(self,request):
        queryset=policestation.objects.all()
        if queryset.count()>0:
            serializer=policestationSerializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'single user data','success':True},status=status.HTTP_200_OK)
        else:
             return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)

class complaintsSerializersAPIView(GenericAPIView):
    serializer_class = complaintsSerializer
  

    def post(self,request):

        name=request.data.get('name')
        Complaints=request.data.get('Complaints')
        date=request.data.get('date')
        userid=request.data.get('userid')
        # replay=request.data.get('replay')
        # role='user'
        complaints_status='0'
        serializer = self.serializer_class(data={'name':name,'Complaints':Complaints,'date':date,'userid':userid,'status':complaints_status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)        


class Get_complaintsAPIView(GenericAPIView):
    serializer_class = complaintsSerializer
    def get(self,request):
        queryset = Complaints.objects.all()
        if(queryset.count()>0):
            serializer =complaintsSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'complaints of all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)  

class SinglecomplaintsAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = Complaints.objects.get(pk=id)
        serializer = complaintsSerializer(queryset)
        return Response({'data':serializer.data,'message':'complaints recieved','success':True},status=status.HTTP_200_OK)



class ReplayAPIView(GenericAPIView):
    serializer_class = complaintsSerializer
    def post(self,request,id):
        queryset=Complaints.objects.get(pk=id)
        print(queryset)
        serializer=complaintsSerializer(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'Update data Successfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'Something went wrong','success':False},status=status.HTTP_400_BAD_REQUEST)




class SinglereplayAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = Complaints.objects.filter(userid=id).values()
        # serializer = complaintsSerializer(queryset)
        return Response({'data':queryset,'message':'complaints recieved','success':True},status=status.HTTP_200_OK)


# class Update_UserAPIView(GenericAPIView):
#     serializer_class=UserSerializer
#     def put(self, request,id):
#         queryset=brookuser.objects.get(pk=id)
#         print(queryset)
#         serializer=UserSerializer(instance=queryset,data=request.data,partial=True)
#         print(serializer)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'data':serializer.data,'message':'update Successfully','success':True},status=status.HTTP_200_OK)
#         else:
#             return Response({'data':'Something went wrong','success':False},status=status.HTTP_400_BAD_REQUEST)


# class Get_ProductAPIView(GenericAPIView):
#     serializer_class=ProductSerializer
#       def get(self, request):
#           queryset=Product.objects.all()
#           if(queryset.count()>0):
#             serializer=ProductSerializer(queryset,many=True)
#               return Response({'data':serializer.data,'message':'Product all data','Success':True},status=status.HTTP_200_OK)
#         else:
#              return Response({'data':'No data available':'success':False},status=status.HTTP_400_BAD_REQUEST)
           
