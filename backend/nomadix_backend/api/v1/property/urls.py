from django.urls import path

from api.v1.property import views


urlpatterns = [
    path('', views.properties_list, name='api_properties_list'),
    path('create/', views.create_property, name='api_create_property'),
    path('<uuid:pk>', views.properties_detail, name='api_properties_detail'),
    path('<uuid:pk>/book/', views.book_property, name='api_book_property'),
    path('<uuid:pk>/reservations/', views.property_reservations, name='api_property_reservations'),
    path('<uuid:pk>/toggle_favorite/', views.toggle_favorite, name='api_toggle_favorite'),
]