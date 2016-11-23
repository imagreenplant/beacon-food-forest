from plants.models import Plant
from geoposition import Geoposition


def run():
    a = Plant.objects.all()

    for item in a:
        if item.coordinates:
            item.geo_location = Geoposition(latitude=item.coordinates.latitude, longitude=item.coordinates.longitude)

            item.save()
        else:
            pass
