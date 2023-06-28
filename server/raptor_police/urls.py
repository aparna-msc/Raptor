from django.urls import path
from raptor_police import views


urlpatterns = [
        path("UserRegister",views.UserSerializersAPIView.as_view(),name="UserRegister"),
        path("policestation",views.policestationSerializersAPIView.as_view(),name="policestation"),
        path("crimereport",views.crimereportSerializersAPIView.as_view(),name="crimereport"),
        path("Log",views.LoginAPIView.as_view(),name="Log"),
        path("criminalsrecord",views.CriminalsrecordSerializerAPIView.as_view(),name="criminalsrecord"),
       
        path("singleuser/<int:id>",views.SingleUserAPIView.as_view(),name="singleuser"),
        path("alluser",views.Get_alluserAPIView.as_view(),name="alluser"),
      
        path("usercrimereport",views.Get_crimereportAPIView.as_view(),name="usercrimereport"),
        path("allpoicestation",views.Get_allpolicestationAPIView.as_view(),name="allpoicestation"),
        path("complaint",views.complaintsSerializersAPIView.as_view(),name="complaint"),
        path("singlecrimereport/<int:id>",views.SinglecrimereportAPIView.as_view(),name="singlecrimereport"),
        path("Replay/<int:id>",views.ReplayAPIView.as_view(),name="Replay"),
        path("viewcomplaint",views.Get_complaintsAPIView.as_view(),name="viewcomplaint"),
        path("singlereplay/<int:id>",views.SinglereplayAPIView.as_view(),name="singlereplay"),
        path("crimestatus/<int:id>",views.CrimestatusAPIView.as_view(),name="crimestatus"),
        path("crimestatus/<int:id>",views.CrimestatusAPIView.as_view(),name="crimestatus"),
     
       
]