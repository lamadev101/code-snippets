from rest_framework import serializers
from api.models import *

class ProgrammerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Programmer
        fields = ["id","name", "level", "bio", "image", "email", "gUrl", "fUrl", "tUrl", "iUrl"]
        
class SnippetSerializer(serializers.ModelSerializer):
    slug=serializers.ReadOnlyField()
    class Meta:
        model=Snippet
        depth=1 
        fields="__all__"

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields="__all__"

