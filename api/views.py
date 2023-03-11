from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import *
from api.serializers import *
from api.renderers import UserRenderer
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView
from .pagination import MyPagination



class ProgrammerViewSet(viewsets.ModelViewSet):
    renderer_classes = [UserRenderer]
    queryset = Programmer.objects.all()
    serializer_class = ProgrammerSerializer
    if queryset.count() > 0:
        pagination_class = MyPagination


class SnippetViewSet(viewsets.ModelViewSet):
    renderer_classes = [UserRenderer]
    queryset = Snippet.objects.all().order_by('-updated_at')
    serializer_class = SnippetSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category__name']
    search_fields = ['^category__name', 'title']
    if queryset.count() > 0:
        pagination_class = MyPagination

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
