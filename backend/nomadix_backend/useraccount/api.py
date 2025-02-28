from .serializers import UserDetailSerializer
from .models import User
from django.http import JsonResponse, Http404

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from property.serializers import ReservationsListSerializer


@api_view(['GET'])
@authentication_classes([])  
@permission_classes([])
def landlord_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
        serializer = UserDetailSerializer(user)
        return JsonResponse(serializer.data, safe=False)
    except User.DoesNotExist:
        raise Http404("Landlord not found")
    
    
@api_view(['GET'])
def reservations_list(request):
    reservations = request.user.reservations.all()
    serializer = ReservationsListSerializer(reservations, many= True)
    return JsonResponse(serializer.data, safe=False)