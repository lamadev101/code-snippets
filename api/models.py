import os
from django.db import models
from django.db import connection
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from PIL import Image
from autoslug import AutoSlugField
from django.core.files.storage import default_storage
from django_ckeditor_5.fields import CKEditor5Field


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="category/", blank=True, null=True)
    icon = models.ImageField(upload_to="icon/", blank=True, null=True, default="lama")
    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.image.path:
            img = Image.open(self.image.path)

            if img.width > 1280 or img.height > 720:
                output_size = (1280, 720)
                img.thumbnail(output_size)
                img.save(self.image.path)
                img.close()

class Programmer(models.Model):
    dev = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(verbose_name='Email', max_length=255, unique=True)
    name = models.CharField(verbose_name='Full Name', max_length=255)
    bio = models.TextField(max_length=500, blank=True, null=True)
    gUrl = models.CharField("Github",max_length=255, null=True, blank=True)
    fUrl = models.CharField("Facebook",max_length=255, null=True, blank=True)
    tUrl = models.CharField("Twitter", max_length=255, null=True, blank=True)
    iUrl = models.CharField("Instagram", max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='profile/', null=True, blank=True)
    level = models.CharField("Level", max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)

        if img.height > 400 or img.width > 400:
            output_size = (400, 400)
            img.thumbnail(output_size)
            img.save(self.image.path)
            img.close()

    def __str__(self):
        return self.dev.username

class Snippet(models.Model):
    dev = models.ForeignKey(Programmer, on_delete=models.CASCADE, default="")
    title = models.TextField()
    slug = AutoSlugField(populate_from='title', primary_key=True)
    category = models.ForeignKey(Category, on_delete=models.SET_DEFAULT,  default="uncategorize")
    content = CKEditor5Field('Description/Steps', config_name='extends')
    code = models.TextField('Code Snippet', default="lama")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



@receiver(post_delete, sender=Programmer)
def delete_file(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)

@receiver(post_delete, sender=Category)
def delete_file(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)