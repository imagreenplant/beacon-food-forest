"""
Django settings for beaconfoodforest project.

Generated by 'django-admin startproject' using Django 1.8.4.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

import socket
import pathlib
import json


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

print("Machine hostname is %s, this will determine the environment setting." %
      socket.gethostname())

if socket.gethostname().find("bluehost") > -1 and BASE_DIR.find("test") > -1:
    ENVIRONMENT = "testing"
elif socket.gethostname().find("bluehost") > -1:
    ENVIRONMENT = "production"
else:
    ENVIRONMENT = "local"

print("ENVIRONMENT is set to %s" % ENVIRONMENT)


# Store the secrets.json file in the ~/.beaconfoodforest directory.
if not ENVIRONMENT == "local":
    try:
        DATA_DIR = pathlib.Path('~/.beaconfoodforest/secrets.json')
        with DATA_DIR.open() as handle:
            SECRETS = json.load(handle)
    except IOError:
        SECRETS = {
            'secret_key': 'a',
        }
else:
    try:
        DATA_DIR = pathlib.Path('./secrets.json')
        with DATA_DIR.open() as handle:
            SECRETS = json.load(handle)
    except IOError:
        SECRETS = {
            'secret_key': 'a',
        }

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = SECRETS.get('secret_key', 'a')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Site id is for the .sites installed package.  Differs if using for multiple sites.
# In our case just defaulting to 1
SITE_ID = 1

# Application definition
INSTALLED_APPS = [
    # Bootstrap design for admin interface
    'django_admin_bootstrapped',

    # Default django apps, mostly for admin site
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',

    # Flatpages
    'django.contrib.sites',
    'django.contrib.flatpages',

    # Staticfiles app for serving static files in different environments
    'django.contrib.staticfiles',

    # Creates a sitemap
    'django.contrib.sitemaps',

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

    # The plants app for tracking individual plants
    'plants',

    # Helper apps for design -- probably don't need in production
    'django.contrib.webdesign',
    # To protect forms with Captcha
    'captcha',

    # Adding a tagging library for plant models
    'taggit',
]
MIDDLEWARE_CLASSES = [
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.flatpages.middleware.FlatpageFallbackMiddleware',
]

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

# Adding Logging.  This should be set to "WARNING" or "ERROR" for some
# time after we've deployed.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'file': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': 'logs/request.log',
            'maxBytes': 1024 * 1024 * 5,  # 5 MB
            'backupCount': 5,
            'formatter': 'verbose',
        },
        'console': {
            'level': 'DEBUG',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
    },
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'formatters': {
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s \
                       %(process)d %(thread)d %(message)s'
        },
    },
    'loggers': {
        'django.request': {
            'handlers': ['file'],
            'level': 'DEBUG',
            'propagate': True,
        },
        'django': {
            'handlers': ['console'],
            'propagate': True,
            'level': 'INFO',
        },
    },

}

WSGI_APPLICATION = 'beaconfoodforest.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases
DATABASES = {
    'lite': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Email settings
EMAIL_HOST = SECRETS.get('email_host', 'example.com')
EMAIL_PORT = 465
EMAIL_HOST_USER = SECRETS.get('email_host_user', 'fakeuser')
EMAIL_HOST_PASSWORD = SECRETS.get('email_host_password', 'fakepassword')
EMAIL_USE_SSL = True

# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'America/Los_Angeles'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Captcha settings
CAPTCHA_CHALLENGE_FUNCT = 'captcha.helpers.math_challenge'
CAPTCHA_NOISE_FUNCTIONS = ()
CAPTCHA_LETTER_ROTATION = None
CAPTCHA_TEXT_FIELD_TEMPLATE = 'base/captcha_field_override.html'

# Taggit Settings
TAGGIT_CASE_INSENSITIVE = True


ENVIRONMENTS = {
    'local': {
        'STATIC_ROOT': None,
        'ALLOWED_HOSTS': ['*', ],  # Allow all domains
        'DEBUG': True,
        'STATIC_URL': '/static/',
        'MEDIA_ROOT': '/Users/mlapora/media',
        'MEDIA_URL': '/media/',
        'CACHES': {'default': {'BACKEND': 'django.core.cache.backends.dummy.DummyCache', }},
        'DATABASE': 'lite',
        'TEMPLATE_LOADERS': [
            'django.template.loaders.filesystem.Loader',
            'django.template.loaders.app_directories.Loader',
        ],
        'DONATE_EMAIL': SECRETS.get('donate_email').get('testing'),
        'LOG_FILE': 'logs/request.log',
    },
    'testing': {
        # This the place on the live test server where static files will be
        # collected for delivery.
        'STATIC_ROOT': '/home3/beaconf2/public_html/s-test',
        'ALLOWED_HOSTS': ['.beaconfoodforest.org', ],
        'DEBUG': True,
        'STATIC_URL': 'http://beaconfoodforest.org/s-test/',
        'CACHES': {'default': {'BACKEND': 'django.core.cache.backends.dummy.DummyCache', }},
        'DATABASE': 'testing',
        'MEDIA_ROOT': '/home3/beaconf2/public_html/m-test',
        'MEDIA_URL': 'http://beaconfoodforest.org/m-test/',
        'TEMPLATE_LOADERS': [
            'django.template.loaders.filesystem.Loader',
            'django.template.loaders.app_directories.Loader',
        ],
        'DONATE_EMAIL': SECRETS.get('donate_email').get('testing'),
        'LOG_FILE': '/home3/beaconf2/django-projects/test/beacon-food-forest-main/logs/request.log',
    },
    'production': {
        # This the place on the live server where static files will be collected
        # for delivery.
        'STATIC_ROOT': '/home3/beaconf2/public_html/s',
        'ALLOWED_HOSTS': ['.beaconfoodforest.org', ],  # Allows domain and subdomains
        'DEBUG': False,
        'STATIC_URL': 'http://beaconfoodforest.org/s/',
        'CACHES': {'default': {'BACKEND': 'django.core.cache.backends.locmem.LocMemCache', }},
        'DATABASE': 'production',
        'MEDIA_ROOT': '/home3/beaconf2/public_html/media',
        'MEDIA_URL': 'http://beaconfoodforest.org/media/',
        'TEMPLATE_LOADERS': [('django.template.loaders.cached.Loader',
                              [
                                  'django.template.loaders.filesystem.Loader',
                                  'django.template.loaders.app_directories.Loader',
                              ]),
                             ],
        'DONATE_EMAIL': SECRETS.get('donate_email').get('live'),
        'LOG_FILE': '/home3/beaconf2/django-projects/beacon-food-forest-main/logs/request.log',
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

LOGGING['handlers']['file']['filename'] = ENVIRONMENTS[ENVIRONMENT]['LOG_FILE']

DATABASES['default'] = DATABASES[ENVIRONMENTS[ENVIRONMENT]['DATABASE']]

# For material donation page
DONATE_EMAIL = ENVIRONMENTS[ENVIRONMENT]['DONATE_EMAIL']

if ENVIRONMENT == 'local':
    try:
        import debug_toolbar
    except ImportError:
        pass
    else:
        INSTALLED_APPS.append('debug_toolbar')
        INTERNAL_IPS = ['127.0.0.1', ]
        MIDDLEWARE_CLASSES.insert(
            MIDDLEWARE_CLASSES.index('django.middleware.common.CommonMiddleware') + 1,
            'debug_toolbar.middleware.DebugToolbarMiddleware')


if DEBUG:
    print("============================================")
    print("           Alert, DEBUG is ON")
    print("============================================")
else:
    print("++++++++++++++++ DEBUG is OFF ++++++++++++++++++")
