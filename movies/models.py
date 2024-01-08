from django.db import models
from django.contrib.auth.models import User

class Director(models.Model):
    name = models.CharField(max_length =255)
    
    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField()
    director = models.ForeignKey(Director, on_delete = models.SET_NULL, null = True) #ha rendező törölve lesz a filmek még maradnak
    description = models.TextField(null = True, blank = True)
    poster_image = models.ImageField(upload_to='static/images/posters', blank=True, null=True)
    average_rate = models.FloatField(default = 0)

    def __str__(self):
        return self.name

class Rating(models.Model):
    movie = models.ForeignKey(Movie , on_delete= models.CASCADE) # ha törlik a filmet törlődik az értékelés
    user = models.ForeignKey(User, on_delete =models.CASCADE ) 

    
