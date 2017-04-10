from django.shortcuts import render_to_response, get_object_or_404
from .models import Committee, Meeting
from django.template import RequestContext

def index(request):
    committees = Committee.objects.all()
    page_title = "Committees"

    return render_to_response(
        'committee/committee_hub.html', 
        {'title': page_title, 'committees': committees},
        context_instance=RequestContext(request))


def past_meetings():
    pass

def upcoming_meetings():
    pass

def committee_detail():
    pass

def meeting():
    pass
