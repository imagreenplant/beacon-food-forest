#Settings for Local environment

DEBUG = True
print "Overriding production config to local, Setting DEBUG to True"

ALLOWED_HOSTS = [
    '*',  # Allow all domains
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static-collector')