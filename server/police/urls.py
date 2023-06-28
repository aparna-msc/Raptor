from django.urls import path
from police import views

urlpatterns = [
    path("",views.login_page,name="login_page"),
    path("dash",views.dash_page,name="dash_page"),
    path("login_admin",views.login_admin,name="login_admin"),
    path("managepolicestation",views.managepolicestation_page,name="managepolicestation_page"),
    path("manageruser",views.manageruser_page,name="manageruser_page"),
    path("usercrimereport",views.usercrimereport_page,name="usercrimereport_page"),
    path("criminalrecord",views.criminalrecord_page,name="criminalrecord_page"),
    path("manageruser_approve",views.manageruser_approve,name="manageruser_approve"),
    path("approveuser_page/<int:id>",views.approveuser_page,name="approveuser_page"),
    path("reject_user/<int:id>",views.admin_delete_user,name="reject_user"),
    path("approved_page/<int:id>",views.approved_page,name="approved_page"),
    path("managepolicestation_approved",views.managepolicestation_approved,name="managepolicestation_approved"),
    path("reject_policestation/<int:id>",views.admin_delete_policestation,name="reject_policestation"),
]