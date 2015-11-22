"""
Django settings for beaconfoodforest project.

Generated by 'django-admin startproject' using Django 1.8.4.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'i3zc+lymkle=d00x1l4d$w2mp7jidk%x^tb*wlmh2h%ee8o^y6'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
print "Preparing Production config, setting DEBUG to False"

ALLOWED_HOSTS = [
    '.beaconfoodforest.org',  # Allow domain and subdomains
]


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


# Going to try in-memory cacheing on server.  The site isn't terribly big so going to see
# if we can get away with it in production.  Note that Bluehost could end up killing the 
# Django processes if memory gets too big.  This is probably the fastest solution we have
# since we can't use Memcached... because of long running processes.  Next step would be 
# Database cacheing.

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}



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


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = 'http://beaconfoodforest.org/s/'
# This the place locally where static files will be collected for transfer.
STATIC_ROOT = '/home3/beaconf2/public_html/s'

# Import local settings per environment in settings_local.py
# try:
#     from settings_local import *
# except:
#     print "settings_local not found, proceeding"
#     pass
