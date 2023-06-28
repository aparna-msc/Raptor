from django.contrib import admin
from .models import Log,user,policestation,crimereport,criminalsrecord
# Register your models here.


admin.site.register(Log)
admin.site.register(user)
admin.site.register(policestation)
admin.site.register(crimereport)
admin.site.register(criminalsrecord)


