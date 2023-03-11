from django.urls import path, include
from rest_framework import routers
from api.views import *

router = routers.DefaultRouter()

router.register(r'programmer', ProgrammerViewSet)
router.register(r'snippet', SnippetViewSet)
router.register(r'category', CategoryViewSet)


urlpatterns = [
    path('', include(router.urls)),
]