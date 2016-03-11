#!/home3/beaconf2/.python-environments/bff-py3.5/bin/python
# The line above points to a python 3.5 virtualenv

import sys, os

# Add a custom Python path.
sys.path.insert(0, "/home3/beaconf2/.python-environments/bff-py3.5")
sys.path.insert(13, "/home3/beaconf2/django-projects/beacon-food-forest-main")

os.environ['DJANGO_SETTINGS_MODULE'] = 'beaconfoodforest.settings'
from django.core.servers.fastcgi import runfastcgi
runfastcgi(method="threaded", daemonize="false")
