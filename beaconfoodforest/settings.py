"""
Django settings for beaconfoodforest project.

Generated by 'django-admin startproject' using Django 1.8.4.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


try:
    ENVIRONMENT = os.environ['DJANGO_ENVIRONMENT']
except KeyError:
    ENVIRONMENT = "local"

# SECURITY WARNING: keep the secret key used in production secret!
try: 
    os.environ['DJANGO_KEY']
    print "Local key exists"
except KeyError:
    SECRET_KEY = 'i3zc+lymkle=d00x1l4d$w2mp7jidk%x^tb*wlmh2h%ee8o^y6'
    print "No local key exists, using ",SECRET_KEY

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False


# Application definition
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'base',
    'education',
    'home',
    'infopages',
    'maps'
)
MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'beaconfoodforest.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.static',
            ],
            'loaders': [
                ('django.template.loaders.cached.Loader', [
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
            ]),
        ],
        },
    },
]

# Adding Logging.  This should be set to "WARNING" or "ERROR" for some time after we've deployed.
# LOGGING = {
#     'version': 1,
#     'disable_existing_loggers': False,
#     'handlers': {
#         'file': {
#             'level': 'DEBUG',
#             'class': 'logging.FileHandler',
#             'filename': '../bff-django-error.log',
#         },
#     },
#     'formatters': {
#         'verbose': {
#             'format': '%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s'
#         },
#     },
#     'loggers': {
#         'django.request': {
#             'handlers': ['file'],
#             'level': 'DEBUG',
#             'propagate': True,
#         },
#     },
# }

WSGI_APPLICATION = 'beaconfoodforest.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'beacondb',
    },
    # 'mysql': {
    #     'ENGINE': 'django.db.backends.mysql',
    #     'NAME' : "beacon_food_forest",
    #     'USER': 'mlapora',
    #     'PASSWORD': 'greens',
    #     'HOST': '127.0.0.1',
    # },
    # 'postgres': {
    #     'ENGINE': 'django.db.backends.postgresql_psycopg2',
    #     'NAME' : "beacon_food_forest",
    #     'USER': 'mlapora',
    #     'PASSWORD': 'greens',
    #     'HOST': '127.0.0.1',
    # }
}


# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True


ENVIRONMENTS = {
    'local':{
        'STATIC_ROOT': None
        'ALLOWED_HOSTS': ['*',],  # Allow all domains
        'DEBUG': True,
        'STATIC_URL':'/static/',
        'CACHES': { 'default': {'BACKEND': 'django.core.cache.backends.dummy.DummyCache',} },
    },
    'testing':{
    },
    'production':{
        'STATIC_ROOT': '/home3/beaconf2/public_html/s', # This the place on the live server where static files will be collected for delivery.
        'ALLOWED_HOSTS': ['.beaconfoodforest.org',], # Allows domain and subdomains
        'DEBUG': False,
        'STATIC_URL':'http://beaconfoodforest.org/s/'
        'CACHES': { 'default': {'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',} },
    },
}


# =====================================
#    Environment specific settings
# =====================================
DEBUG = ENVIRONMENTS[ENVIRONMENT]['DEBUG']
ALLOWED_HOSTS = ENVIRONMENTS[ENVIRONMENT]['ALLOWED_HOSTS']

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/
STATIC_ROOT = ENVIRONMENTS[ENVIRONMENT]['STATIC_ROOT']
STATIC_URL = ENVIRONMENTS[ENVIRONMENT]['STATIC_URL']

# Going to try in-memory cacheing on server.  The site isn't terribly big so going to see
# if we can get away with it in production.  Note that Bluehost could end up killing the 
# Django processes if memory gets too big.  This is probably the fastest solution we have
# since we can't use Memcached... because of long running processes.  Next step would be 
# Database cacheing.
CACHES = ENVIRONMENTS[ENVIRONMENT]['CACHES']



if DEBUG:
    print "============================================"
    print "           Alert, DEBUG is ON"
    print "============================================"
