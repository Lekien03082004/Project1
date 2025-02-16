from xmlrpc.client import ResponseError
from django.shortcuts import render
from .models import Blog
from .serializers import BlogSerializer, UpdateUserProfileSerializer, UserRegistrationSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from blogapp import serializers
from rest_framework.pagination import PageNumberPagination

# Create your views here.
class BlogListPagination(PageNumberPagination):
    page_size=3

@api_view(["GET"])
def blog_list(request):
    blogs = Blog.objects.all()
    paginator = BlogListPagination()
    paginated_blog = paginator.paginate_queryset(blogs, request)
    serializer = BlogSerializer(paginated_blog, many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(["POST"])
def regrister_user(request):
    serializer = UserRegistrationSerializer(data= request.data)
    if(serializer.is_valid()):
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_user(request):
    user = request.user
    serializers = UpdateUserProfileSerializer(user,data = request.data)
    if(serializers.is_valid()):
        serializers.save()
        return Response(serializers.data)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_blog(request):
    user = request.user
    serializers = BlogSerializer(data = request.data)
    if serializers.is_valid():
        serializers.save(author = user)
        return Response(serializers.data)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_blog(request, pk):
    user = request.user
    blog = Blog.objects.get(id = pk)
    if blog.author != user:
        return Response({"error": "You are you not the author of this blog"}, status=status.HTTP_403_FORBIDDEN)
    serializers = BlogSerializer(blog, data=request.data)
    if serializers.is_valid():
        serializers.save()
        return Response(serializers.data)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def delete_blog(request, pk):
    blog = Blog.objects.get(id = pk)
    user = request.user
    if(blog.author != user):
        return Response({"error": "You are you not the author of this blog"}, status=status.HTTP_403_FORBIDDEN)
    blog.delete()
    return Response({"message": "Blog deleted successfuly"}, status=status.HTTP_204_NO_CONTENT)