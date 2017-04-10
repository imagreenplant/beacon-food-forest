from django.shortcuts import render_to_response, get_object_or_404
from .models import Committee, Meeting
from django.template import RequestContext

def index(request):
    committees = Committee.objects.all().order_by('name')
    page_title = "Committees"

    return render_to_response(
        'committee/committee_hub.html', 
        {'title': page_title, 'committees': committees},
        context_instance=RequestContext(request))


def past_meetings():
    pass

def upcoming_meetings():
    pass

def committee_detail(request, name):
    committee = get_object_or_404(Committee, name=name)
    page_title = " ".join([name, "Committee"])
    meetings = Meeting.objects.filter(committee__name=name).order_by('-date')

    return render_to_response('committee/committee_detail.html',
        {'title': page_title, 'committee': committee, 'meetings': meetings},
        context_instance=RequestContext(request))

def meeting(request, id):
    meeting = get_object_or_404(Meeting, pk=id)
    page_title = " ".join([meeting.__str__(), "Meeting"])

    return render_to_response('committee/meeting_detail.html',
        {'title': page_title, 'meeting': meeting},
        context_instance=RequestContext(request))

