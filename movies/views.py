from django.shortcuts import render

from .models import Movie
from .serializers import MovieSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])  #decorator
def getMovies(request):
    movies = Movie.objects.all()
    serialized = MovieSerializer(movies, many = True) # összes film visszadadádsa True-val

    return Response(serialized.data)


