#!/usr/bin/python3
""" Starts a Flash Web Application """
from models import storage
from models.state import State
from models.city import City
from models.amenity import Amenity
from models.place import Place
from os import environ
from flask import Flask, render_template
import uuid
app = Flask(__name__)
# app.jinja_env.trim_blocks = True
# app.jinja_env.lstrip_blocks = True


@app.teardown_appcontext
def close_db(error):
    """ Remove the current SQLAlchemy Session """
    storage.close()


@app.route('/3-hbnb/', strict_slashes=False)
def hbnb():
    """ HBNB is alive! """

    all_states = storage.all(State).values()
    all_amenities = storage.all(Amenity).values()

    places = storage.all(Place).values()
    places = sorted(places, key=lambda k: k.name)

    return render_template('3-hbnb.html',
                           states=all_states,
                           amenities=all_amenities,
                           places=places, cache_id=uuid.uuid4()) 


if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)
