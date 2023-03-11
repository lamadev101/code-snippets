from django.contrib import admin
from api.models import *
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

# from django.contrib.sites.models import Site
# from django.contrib.admin.sites import site

# # # unregister the existing SiteAdmin
# site.unregister(Site)

# Register your models here.
class ApiInline(admin.StackedInline):
    model = Programmer
    can_delete = False
    verbose_name_plural = 'Programmers'

class CustomizedUserAdmin(UserAdmin):
    inlines = (ApiInline,)

admin.site.unregister(User)
admin.site.register(User, CustomizedUserAdmin)

class ProgrammerAdmin(admin.ModelAdmin):
    list_display = ['dev', 'email', 'name', 'level', 'gUrl']
    
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(dev=request.user)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "dev":
            kwargs['queryset'] = User.objects.filter(username = request.user.username)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

admin.site.register(Programmer, ProgrammerAdmin)

class SnippetAdmin(admin.ModelAdmin):
    list_display = ('slug','dev', 'title', 'category')
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(dev=request.user.id)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "dev":
            kwargs['queryset'] = Programmer.objects.filter(dev=request.user.id)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

admin.site.register(Snippet, SnippetAdmin)

admin.site.register(Category)


# admin.site.site_url = 'https://www.onlinekhabar.com'

