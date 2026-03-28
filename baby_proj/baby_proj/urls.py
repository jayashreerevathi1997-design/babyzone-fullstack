from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.views.static import serve
from pathlib import Path

# React build directory
FRONTEND_BUILD = Path(settings.BASE_DIR).parent / 'frontend' / 'build'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('by.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Serve React build assets (images, logos, etc.)
for folder in ['banners', 'categories', 'products', 'brands', 'avatars', 'classes', 'forum']:
    urlpatterns += [re_path(rf'^{folder}/(?P<path>.*)$', serve, {'document_root': FRONTEND_BUILD / folder})]

# Serve root-level files (logo.png, favicon.ico, etc.)
urlpatterns += [re_path(r'^(?P<path>[\w-]+\.(png|jpg|svg|ico|json|txt))$', serve, {'document_root': FRONTEND_BUILD})]

# Serve React frontend for all non-API routes
urlpatterns += [re_path(r'^(?!api|admin|media|static).*$', TemplateView.as_view(template_name='index.html'))]
