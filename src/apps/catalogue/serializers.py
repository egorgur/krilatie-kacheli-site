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
        fields = ["url", "name", "image"]


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    group = serializers.PrimaryKeyRelatedField(queryset=ItemGroup.objects.all())

    class Meta:
        model = Item
        fields = ["id", "title", "body", "group", "image"]


class ItemGroupSerializer(serializers.HyperlinkedModelSerializer):
    theme = serializers.PrimaryKeyRelatedField(queryset=GroupTheme.objects.all())

    class Meta:
        model = ItemGroup
        fields = ["id", "title", "theme", "image"]


class ItemGroupDetailedSerializer(serializers.HyperlinkedModelSerializer):
    theme = serializers.PrimaryKeyRelatedField(queryset=GroupTheme.objects.all())
    items = ItemSerializer(many=True, read_only=True)  # Добавляем вложенные items

    class Meta:
        model = ItemGroup
        fields = ["id", "title", "theme", "image", "items"]


class GroupThemeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GroupTheme
        fields = ["id", "title", "image"]


class GroupThemeDetailedSerializer(serializers.HyperlinkedModelSerializer):
    groups = ItemGroupDetailedSerializer(many=True, read_only=True)  # Добавляем вложенные группы

    class Meta:
        model = GroupTheme
        fields = ["id", "title", "image", "groups"]
