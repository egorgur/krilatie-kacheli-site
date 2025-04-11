from django.contrib import admin

from .models import GroupTheme, ItemGroup, Item

# Register your models here.
admin.site.register(GroupTheme)
admin.site.register(ItemGroup)
admin.site.register(Item)