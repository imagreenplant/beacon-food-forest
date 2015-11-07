#!/home3/beaconf2/python2.7/bin/python2.7
import sys, os

# Add a custom Python path.
sys.path.insert(0, "/home3/beaconf2/python27")
sys.path.insert(13, "/home3/beaconf2/public_html/django/beacon-food-forest-main")

os.environ['DJANGO_SETTINGS_MODULE'] = 'beaconfoodforest.settings'
from django.core.servers.fastcgi import runfastcgi
runfastcgi(method="threaded", daemonize="false")
