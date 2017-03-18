from django.contrib import admin
from tours.models import AudioTourModel


@admin.register(AudioTourModel)
class AudioTourModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'index')
