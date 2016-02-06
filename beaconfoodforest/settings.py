"""
Django settings for beaconfoodforest project.

Generated by 'django-admin startproject' using Django 1.8.4.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

try:
    import psycopg2
except ImportError:
    print "Please install the PostGresSQL lib:  pip install psycopg2"

# Added libs
# pip install django-markdown
# pip install psycopg2
# pip install markdown
# pip install django-admin-bootstrapped
# pip install django-simple-captcha


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

import socket
print("Machine hostname is %s, this will determine the environment setting." % socket.gethostname())

if socket.gethostname() == "opal.local":
    ENVIRONMENT = "local"
elif socket.gethostname().find("bluehost") > -1 and BASE_DIR.find("test") > -1:
    ENVIRONMENT = "testing"
elif socket.gethostname().find("bluehost") > -1:
    ENVIRONMENT = "production"
else:
    ENVIRONMENT = "local"

print "ENVIRONMENT is set to %s" % ENVIRONMENT


# SECURITY WARNING: keep the secret key used in production secret!
try: 
    SECRET_KEY = os.environ['DJANGO_KEY']
    print "Local key exists"
except KeyError:
    SECRET_KEY = 'i3zc+lymkle=d00x1l4d$w2mp7jidk%x^tb*wlmh2h%ee8o^y6'
    print "No local key exists, using ",SECRET_KEY

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Application definition
INSTALLED_APPS = (
    # Bootstrap design for admin interface
    'django_admin_bootstrapped',

    # Default django apps, mostly for admin site
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',

    # Staticfiles app for serving static files in different environments
    'django.contrib.staticfiles',

    # The base of the site, header, footer, sidebar
    'base',
    'education',

    # The home page -- this might be combined with info pages
    'home',

    # Added markdown capability for announcements
    'django_markdown',

    # Subpages for the site, like FAQ, permaculture info, etc
    'infopages',

    # The maps app for trees etc
    'maps',

    # To protect forms with Captcha
    'captcha',
    # Helper apps for design -- probably don't need in production
    'django.contrib.webdesign',
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
    'production': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME' : "beaconf2_django_main",
        'USER': 'beaconf2_django_user',
        'PASSWORD': 'V4ADbu{UwWV,@o^lSL',
        'HOST': '66.147.244.132',
    },
    # This is the default testing database
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME' : "beaconf2_django_testing",
        'USER': 'beaconf2_tester',
        'PASSWORD': 'tester123',
        'HOST': '66.147.244.132',
    },
    'local': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME' : "beaconf2_django_testing",
        'USER': 'beaconf2_tester',
        'PASSWORD': 'tester123',
        'HOST': '66.147.244.132',
    },
    'testing': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME' : "beaconf2_django_testing",
        'USER': 'beaconf2_tester',
        'PASSWORD': 'tester123',
        'HOST': 'localhost',
    },
    'lite':{
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Email settings
EMAIL_HOST = 'mail.beaconfoodforest.org'
EMAIL_PORT = 465
EMAIL_HOST_USER = 'sender@beaconfoodforest.org'  
EMAIL_HOST_PASSWORD = 'l.$R5=Fh"@U()d'
EMAIL_USE_SSL = True

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Captcha settings
CAPTCHA_CHALLENGE_FUNCT = 'captcha.helpers.math_challenge'
CAPTCHA_NOISE_FUNCTIONS = ()
CAPTCHA_LETTER_ROTATION = None
CAPTCHA_TEXT_FIELD_TEMPLATE = 'base/captcha_field_override.html'



ENVIRONMENTS = {
    'local':{
        'STATIC_ROOT': None,
        'ALLOWED_HOSTS': ['*',],  # Allow all domains
        'DEBUG': True,
        'STATIC_URL':'/static/',
        'MEDIA_ROOT':'/Users/mlapora/media',
        'MEDIA_URL':'/media/',
        'CACHES': { 'default': {'BACKEND': 'django.core.cache.backends.dummy.DummyCache',} },
        'DATABASE':'lite',
        'TEMPLATE_LOADERS':['django.template.loaders.filesystem.Loader','django.template.loaders.app_directories.Loader',],
        'DONATE_EMAIL':'matt@lapora.org',
    },
    'testing':{
        'STATIC_ROOT': '/home3/beaconf2/public_html/s-test', # This the place on the live test server where static files will be collected for delivery.
        'ALLOWED_HOSTS': ['.beaconfoodforest.org',],
        'DEBUG': False,
        'STATIC_URL':'http://beaconfoodforest.org/s-test/',
        'CACHES': { 'default': {'BACKEND': 'django.core.cache.backends.dummy.DummyCache',} },
        'DATABASE':'testing',
        'MEDIA_ROOT': '/home3/beaconf2/public_html/m-test',
        'MEDIA_URL': 'http://beaconfoodforest.org/m-test/',
        'TEMPLATE_LOADERS':['django.template.loaders.filesystem.Loader','django.template.loaders.app_directories.Loader',],
        'DONATE_EMAIL':'matt@lapora.org',
    },
    'production':{
        'STATIC_ROOT': '/home3/beaconf2/public_html/s', # This the place on the live server where static files will be collected for delivery.
        'ALLOWED_HOSTS': ['.beaconfoodforest.org',], # Allows domain and subdomains
        'DEBUG': False,
        'STATIC_URL':'http://beaconfoodforest.org/s/',
        'CACHES': { 'default': {'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',} },
        'DATABASE':'production',
        'MEDIA_ROOT': '/home3/beaconf2/public_html/media',
        'MEDIA_URL': 'http://beaconfoodforest.org/media/',
        'TEMPLATE_LOADERS':[('django.template.loaders.cached.Loader', 
            [
            'django.template.loaders.filesystem.Loader',
            'django.template.loaders.app_directories.Loader',
            ]),
        ],
        'DONATE_EMAIL':'donate@beaconfoodforest.org',
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

# Media uploads https://docs.djangoproject.com/en/1.9/topics/files/
MEDIA_ROOT = ENVIRONMENTS[ENVIRONMENT]['MEDIA_ROOT']
MEDIA_URL = ENVIRONMENTS[ENVIRONMENT]['MEDIA_URL']

# Added this line to remove annoying template cacheing when developing
TEMPLATES[0]['OPTIONS']['loaders'] = ENVIRONMENTS[ENVIRONMENT]['TEMPLATE_LOADERS']

# Going to try in-memory cacheing on server.  The site isn't terribly big so going to see
# if we can get away with it in production.  Note that Bluehost could end up killing the 
# Django processes if memory gets too big.  This is probably the fastest solution we have
# since we can't use Memcached... because of long running processes.  Next step would be 
# Database cacheing.
CACHES = ENVIRONMENTS[ENVIRONMENT]['CACHES']

DATABASES['default'] = DATABASES[ ENVIRONMENTS[ENVIRONMENT]['DATABASE'] ]

# For material donation page
DONATE_EMAIL = ENVIRONMENTS[ENVIRONMENT]['DONATE_EMAIL']


if DEBUG:
    print "============================================"
    print "           Alert, DEBUG is ON"
    print "============================================"
else:
    print "++++++++++++++++ DEBUG is OFF ++++++++++++++++++"
