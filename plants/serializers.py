from rest_framework import serializers
from plants.models import Plant


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = ('name', 'latin_name', 'friendly_name', 'text', 'primary_picture',
                  'year_planted', 'site_code', 'url_slug', 'last_modified', 'created', 'alive',
                  'published', 'category', 'subcategory', 'location', 'geo_location')
