import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql:///photo2code_dev')
    DEBUG = True
    TESTING = True
    CSRF_ENABLED = True
    ##TODO: Change this!!
    SECRET_KEY = 'app secret'
    # SECRET_KEY = os.urandom(24)  

class ProductionConfig(Config):
    DEBUG = False


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
