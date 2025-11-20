from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

from barbershop.views import index
from setup import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])