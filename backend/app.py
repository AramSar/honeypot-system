import argparse
from flask import Flask
from flask_cors import CORS
from flask_restplus import Api

from src.logger.logger import logger
from src.api.controllers.users_controller import users_controller
from gevent.pywsgi import WSGIServer
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)
api = Api(app)
CORS(app)

api.add_namespace(users_controller)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("port", help="The port on which the server is going to run", type=int)
    args = parser.parse_args()

    logger.info('Application is running...')
    WSGIServer(('0.0.0.0', args.port), app).serve_forever()

