from django.db import models


class Item(models.Model):
    title = models.CharField(max_length=100, blank=True, default="")
    body = models.TextField(blank=True, default="")
    group = models.ForeignKey("ItemGroup", related_name="ItemGroup", on_delete=models.CASCADE)



class ItemGroup(models.Model):
    title = models.CharField(max_length=100, blank=True, default="")
    theme = models.ForeignKey("GroupTheme", related_name="GroupTheme", on_delete=models.CASCADE)

# Create your models here.
class GroupTheme(models.Model):
    title = models.CharField(max_length=100, blank=True, default="")

