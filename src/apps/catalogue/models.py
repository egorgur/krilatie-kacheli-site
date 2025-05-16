from django.db import models


class Item(models.Model):
    title = models.CharField(max_length=100, blank=True, default="")
    body = models.TextField(blank=True, default="")
    group = models.ForeignKey("ItemGroup", related_name="items", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="item_images/", blank=True, null=True)

    def __str__(self):
        return self.title


class ItemGroup(models.Model):
    title = models.CharField(max_length=100, blank=True, default="")
    theme = models.ForeignKey("GroupTheme", related_name="groups", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="group_images/", blank=True, null=True)

    def __str__(self):
        return self.title


# Create your models here.
class GroupTheme(models.Model):
    title = models.CharField(max_length=100, blank=True, default="")
    image = models.ImageField(upload_to="theme_images/", blank=True, null=True)

    def __str__(self):
        return self.title
