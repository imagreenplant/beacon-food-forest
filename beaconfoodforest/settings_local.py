#Settings for Local environment
import os

DEBUG = True
print "Overriding production config to local, Setting DEBUG to True"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ALLOWED_HOSTS = [
    '*',  # Allow all domains
]

STATIC_URL = '/static/'
# STATIC_ROOT = os.path.join(BASE_DIR, 'local-static')

STATIC_ROOT = None