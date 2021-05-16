from flask import jsonify, make_response, request
from flask_cors import cross_origin
from flask_restplus import Namespace, Resource, fields
from model.classifier import QueryClassifier
from src.logger.logger import logger
from urllib.parse import unquote
from src.database.connector import User


users_controller = Namespace('api')
qc = QueryClassifier()
user = User()


@users_controller.route('/users/<username>', methods=['GET'], strict_slashes=False)
class Users(Resource):    
    @users_controller.doc(params={'username': 'The Username for retrieval.'})
    @cross_origin()
    def get(self, username):
        try:
            username = unquote(username)
            query_type = qc.predict([username])[0]   
            user_info = user.getByUsername(username)
            if query_type == 0:
                logger.critical(f"An XSS attack detected in the following query {username}")
            elif query_type == 1:
                logger.critical(f"An SQLi attack detected in the following query {username}")

            return make_response(jsonify({
                                "user_info": user_info
                            }), 200)
        except:
             return make_response(jsonify({
                                "status": "A problem occured"
                            }), 500)


