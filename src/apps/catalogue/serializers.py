from django.contrib.auth.models import Group, User

from rest_framework import serializers

from .models import GroupTheme, Item, ItemGroup


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class GroupThemeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GroupTheme
        fields = ["id", "title"]


class ItemGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ItemGroup
        fields = ["id", "title", "theme"]


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ["id", "title", "body", "group"]
