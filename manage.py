#!/usr/bin/env python
import os
import sys

# Adds static file hack from this:  
# http://stackoverflow.com/questions/7013735/turn-off-caching-of-static-files-in-django-development-server
if '--nostatic' not in sys.argv:
    sys.argv.append('--nostatic')

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "beaconfoodforest.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
