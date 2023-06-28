from rest_framework import serializers
from police.models import Log,user,policestation,crimereport,criminalsrecord,Complaints



class LoginSerilalizer(serializers.ModelSerializer):
    class Meta:
        model=Log
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=user
        fields = '__all__'
        def create(self,validated_data):
            return user.objects.create(**validated_data)


class policestationSerializers(serializers.ModelSerializer):
    class Meta:
        model=policestation
        fields = '__all__'
        def create(self,validated_data):
            return policestation.objects.create(**validated_data)


class CriminalsrecordSerializer(serializers.ModelSerializer):
    class Meta:
        model=criminalsrecord
        fields = '__all__'
    def create(self,validated_data):
        return criminalsrecord.objects.create(**validated_data)


class crimereportSerializer(serializers.ModelSerializer):
    class Meta:
        model=crimereport
        fields = '__all__'
        def create(self,validated_data):
            return crimereport.objects.create(**validated_data)            




class complaintsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaints
        fields = '__all__'
        def create(self,validated_data):
            return Complaints.objects.create(**validated_data)             