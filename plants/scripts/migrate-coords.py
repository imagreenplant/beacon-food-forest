# from plants.models import Plant
from plants.models import Location
from geoposition import Geoposition


# def run():
#     a = Plant.objects.all()

#     for item in a:
#         if item.coordinates:
#             item.geo_location = Geoposition(latitude=item.coordinates.latitude,
#                                             longitude=item.coordinates.longitude)
#             item.save()
#         else:
#             pass

def run():
    a = Location.objects.all()

    for item in a:
        if item.gps_latitude and item.gps_longitude:
            item.geo_location = Geoposition(latitude=item.gps_latitude,
                                            longitude=item.gps_longitude)
            item.save()
        else:
            pass
