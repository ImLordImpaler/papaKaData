from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField()

    picture1 = models.ImageField(null=True , blank=True , upload_to= 'media'  )
    picture2 = models.ImageField(null=True , blank=True )
    picture3 = models.ImageField(null=True , blank=True )
    picture4 = models.ImageField(null=True , blank=True )
    picture5 = models.ImageField(null=True , blank=True )

    def __str__(self):
        return self.name


    