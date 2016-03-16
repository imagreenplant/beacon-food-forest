from django.db import models
from django_markdown.models import MarkdownField
import django.utils.timezone as timezone
import datetime

class Plant(object):
	"""Represents a single plant"""
	def __init__(self):
		super(Plant, self).__init__()

	friendly_name
	latin_name
	name 
	text 
	main_picture
	year_planted
	site_code
	url_slug
	last_modified
	created

class Maintenance(object):
	"""An object that keeps track of maintenance events on plants"""
	def __init__(self):
		super(Maintenance, self).__init__()
		
	description
	date
	username

class Harvest(object):
	"""Harvest Event"""
	def __init__(self):
		super(Harvest, self).__init__()

	date
	amount_lbs
	
		