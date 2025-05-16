from django.contrib.auth.models import Group, User
from django.shortcuts import render

from rest_framework import generics, permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import GroupTheme, Item, ItemGroup
from .serializers import (
    GroupSerializer,
    GroupThemeDetailedSerializer,
    GroupThemeSerializer,
    ItemGroupDetailedSerializer,
    ItemGroupSerializer,
    ItemSerializer,
    UserSerializer,
)

# Create your views here.



def test(request):
    return render(
            request=request,
            template_name="catalogue/index.html",
            context={}
        )



class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


# Items

class ItemsList(generics.ListCreateAPIView):
    queryset = Item.objects.all().order_by('id')
    serializer_class = ItemSerializer


class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all().order_by('id')
    serializer_class = ItemSerializer

# ItemsGroups

class ItemGroupList(generics.ListCreateAPIView):
    queryset = ItemGroup.objects.all().order_by('id')
    serializer_class = ItemGroupSerializer


class ItemGroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemGroup.objects.all().order_by('id')
    serializer_class = ItemGroupDetailedSerializer

    @action(detail=True, methods=['get'])
    def with_items(self, request, pk=None):
        group = self.get_object()
        items = group.items.all()
        serializer = ItemSerializer(items, many=True, context={'request': request})
        return Response(serializer.data)

# GroupThemes

class GroupThemeList(generics.ListCreateAPIView):
    queryset = GroupTheme.objects.all().order_by('id')
    serializer_class = GroupThemeSerializer


class GroupThemeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = GroupTheme.objects.all().order_by('id')
    serializer_class = GroupThemeDetailedSerializer
    
    @action(detail=True, methods=['get'])
    def with_groups(self, request, pk=None):
        theme = self.get_object()
        groups = theme.groups.all()
        serializer = ItemGroupSerializer(groups, many=True, context={'request': request})
        return Response(serializer.data)