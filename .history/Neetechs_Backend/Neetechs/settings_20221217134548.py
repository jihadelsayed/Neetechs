"""
Django settings for Neetechs project.

Generated by 'django-admin startproject' using Django 4.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""
import os
from datetime import timedelta
from pathlib import Path

from decouple import config
from firebase_admin import credentials, initialize_app
from rest_framework.settings import api_settings

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-21gq37$c05r)+*@_ss4l(axwdfjnr4v8i^7+*j4@hs@1eu#-b5'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# this choese will allow access to admin page but lets not activated it
#CSRF_TRUSTED_ORIGINS = ['https://server.neetechs.com/']

#ALLOWED_HOSTS = ['neetechs.azurewebsites.net']
ALLOWED_HOSTS = ['server.neetechs.com','.azurewebsites.net','neetechs.azurewebsites.net','.herokuapp.com','127.0.0.1','api.neetechs.com','neetechs.com']
CHAT_WS_SERVER_HOST = 'localhost' or 'neetechs.com' or 'www.neetechs.com'
CHAT_WS_SERVER_PORT = 5002
CHAT_WS_SERVER_PROTOCOL = 'ws' or 'wss'
CORS_ORIGIN_ALLOW_ALL = True # If this is used then `CORS_ORIGIN_WHITELIST` will not have any effect
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = [
    'www.neetechs.azurewebsites.net',
    'neetechs.azurewebsites.net',
    'https://www.neetechs.com',
    'https://neetechs.com',
    'http://127.0.0.1:8000',
    'http://localhost:8000',
    'http://127.0.0.1:4200',
    'http://localhost:4200',
    'http://127.0.0.1:8100',
    'http://localhost:8100',
]
# If this is used, then not need to use `CORS_ORIGIN_ALLOW_ALL = True`
CORS_ORIGIN_REGEX_WHITELIST = [
    'neetechs.azurewebsites.net',
    'www.neetechs.azurewebsites.net',
    'https://www.neetechs.com',
    'https://neetechs.com',
    'http://127.0.0.1:8000',
    'http://localhost:8000',
    'http://127.0.0.1:4200',
    'http://localhost:4200',
    'http://127.0.0.1:8100',
    'http://localhost:8100',
    ]
"""
CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]
"""

# Application definition

INSTALLED_APPS = [
    # main
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # json converter
    'rest_framework',
    'rest_framework.authtoken',
    # authontication
    #'dj_rest_auth',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.twitter',
    'knox',
    'knox_allauth.apps.KnoxAllauthConfig',
    # websocket
    'channels',
    "fcm_django",
    # app
    'chat',
    'stripe',
    'Profile',
    'Service',
    'Checkout',
    'home',
    'report', 
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'Neetechs.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'knox.auth.TokenAuthentication',
    ),    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 17,
}
#ASGI_APPLICATION = "routing.application"

ASGI_APPLICATION = 'Neetechs.routing.application'
#WSGI_APPLICATION = 'Neetechs.wsgi.application'


REST_AUTH_TOKEN_MODEL = 'knox.models.AuthToken'
REST_AUTH_TOKEN_CREATOR = 'knox_allauth.utils.create_knox_token'


REST_AUTH_SERIALIZERS = {
    'USER_DETAILS_SERIALIZER': 'knox_allauth.serializer.UserSerializer',
    'TOKEN_SERIALIZER': 'knox_allauth.serializer.KnoxSerializer',
}

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

#CHANNEL_LAYERS = {
 #   "default": {
  #      "BACKEND": "channels_redis.core.RedisChannelLayer",
   #     "CONFIG": {
    #        "hosts": [os.environ.get("REDIS_URL", 'redis://localhost:6379')],
     #   },
      #  "OPTIONS": {
       #     "CLIENT_CLASS":"django_redis.client.DefaultClient"
        #}
# },
#}

CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer"
    }
}

DATABASES = {
   # 'default': {
    #    'ENGINE': 'django.db.backends.sqlite3',
   #     #'NAME': BASE_DIR / 'db.sqlite3',#django 3
    #    'NAME': str(os.path.join(BASE_DIR, "db.sqlite3"))

    #}
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'neetechsdb',
        'USER': 'postgres',
        'PASSWORD': 'bipMGU7DajN2Sfn#1996',
        'HOST': 'db.neetechs.com',
        'PORT': '5432'
        #'OPTIONS': {
         #   'driver': 'ODBC Driver 17 for SQL Server',
        #},
    }
}
# set this to False if you want to turn off pyodbc's connection pooling
DATABASE_CONNECTION_POOLING = False

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/


#STATICFILES_DIRS = [
#    os.path.join(BASE_DIR, 'static'),
#    os.path.join(BASE_DIR, 'media'),
#]

##########static##########################
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "staticss"),
)
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

############media###############    #
MEDIA_ROOT = os.path.join(BASE_DIR, 'media_cdn')
MEDIA_URL = '/media/'

#TEMP = os.path.join(BASE_DIR, 'temp')

#os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"

#os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="credentials.json"


SITE_ID = 1
AUTH_USER_MODEL = 'knox_allauth.CustomUser'
AUTH_USERName_MODEL = 'knox_allauth.CustomUser.username'
AUTH_SiteId_MODEL = 'knox_allauth.CustomUser.site_id'

ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_USERNAME_REQUIRED = False

if DEBUG:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend' # During development only
else:
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend' 

DATE_INPUT_FORMATS = ['%Y-%m-%d %I:%M %p']

AWS_S3_HOST = "s3.eu-north-1.amazonaws.com" 
AWS_S3_REGION_NAME="eu-north-1"
AWS_ACCESS_KEY_ID = 'AKIAXKYIZE7KCBD2Y3YD'
AWS_SECRET_ACCESS_KEY = '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'
AWS_STORAGE_BUCKET_NAME = 'neetechss3'
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3StaticStorage'

# stops IK checking S3 all the time - main reason to use IK v2 for me
IMAGEKIT_DEFAULT_IMAGE_CACHE_BACKEND = 'imagekit.imagecache.NonValidatingImageCacheBackend' 

EMAIL_USE_TLS = False
EMAIL_HOST = 'smtp.titan.email'
EMAIL_HOST_USER = 'noreply@neetechs.com'
DEFAULT_FROM_EMAIL = 'noreply@neetechs.com'
SERVER_EMAIL = 'noreply@neetechs.com'
EMAIL_HOST_PASSWORD = 'Free48palestine#'
EMAIL_PORT = 465

EMAIL_USE_SSL = True

STRIPE_PUBLIC_KEY = "pk_test_51IwTvvIR19rXEZpRWoj9M4BGNy5nJ1GQOsXUZXHRD0PS3QGexQQSVNQR0vMB8jMoONQtO4RNQ30pC3N5BdgiGstB00shA8ejRI"
STRIPE_SECRET_KEY = "sk_test_51IwTvvIR19rXEZpRwwwDByofI7ZaWyPsGUW5hGIWKxdtD3Mg2ZAmM9xBvZ1kptffFUQSX0Lp6rW9US3EIz37A9tl00HcDB0vJz"
STRIPE_WEBHOOK_SECRET = ""
#STRIPE_LIVE_MODE = False  # Change to True in production
#DJSTRIPE_WEBHOOK_SECRET = ""
#DJSTRIPE_FOREIGN_KEY_TO_FIELD = "id"
#STRIPE_TEST_SECRET_KEY = "sk_test_51IwTvvIR19rXEZpRwwwDByofI7ZaWyPsGUW5hGIWKxdtD3Mg2ZAmM9xBvZ1kptffFUQSX0Lp6rW9US3EIz37A9tl00HcDB0vJz"
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=604800',
}

REST_KNOX = {
  #'SECURE_HASH_ALGORITHM': 'cryptography.hazmat.primitives.hashes.SHA512',
  #'AUTH_TOKEN_CHARACTER_LENGTH': 64,
  'TOKEN_TTL': timedelta(hours=100),
  #'USER_SERIALIZER': 'knox.serializers.UserSerializer',
  #'TOKEN_LIMIT_PER_USER': None,
  #'AUTO_REFRESH': False,
 # 'EXPIRY_DATETIME_FORMAT': api_settings.DATETME_FORMAT,
}

DRF_RECAPTCHA_SECRET_KEY = "6LcCZTkbAAAAAJZgnFuDO8LOv9YyXtXuAhORmZdl"

SOCIAL_AUTH_TWITTER_KEY = 'gS3cTehMYgqyaGM8XRzmn7hzs'
SOCIAL_AUTH_TWITTER_SECRET = '7G45UCpjFZOYEK916Vd6GjSpewVCMM4Xd58g9vE1Qdn32vBG9q'
SOCIAL_AUTH_TWITTER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAIgHRAEAAAAACRBSw%2BqI7jZrGPcqLixn481Y1wo%3D6wvAJYwtlIplhHxJFLDL0zuvje8nEq6LTEsuAtVAlNuu151opP'

DEFAULT_AUTO_FIELD='django.db.models.AutoField' 
#6LcCZTkbAAAAAP-DG83osmudRcjDkVGVdC08pega
#6LcCZTkbAAAAAJZgnFuDO8LOv9YyXtXuAhORmZdl