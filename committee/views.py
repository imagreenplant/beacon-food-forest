from django.shortcuts import render, get_object_or_404
from .models import Committee, Meeting

def index(request):
    committees = Committee.objects.all().order_by('name')
    page_title = "Committees"

    return render(request, 'committee/committee_hub.html', 
        {'title': page_title, 'committees': committees})

# def past_meetings():
#     pass

# def upcoming_meetings():
#     pass

def committee_detail(request, slug):
    committee = get_object_or_404(Committee, slug=slug)
    page_title = " ".join([committee.name, "Committee"])
    meetings = Meeting.objects\
        .filter(committee__slug=slug)\
        .exclude(override=False)\
        .order_by('-date')

    return render(request, 'committee/committee_detail.html',
        {'title': page_title, 'committee': committee, 'meetings': meetings})

def meeting(request, id):
    meeting = get_object_or_404(Meeting, pk=id)
    page_title = " ".join([meeting.__str__(), "Meeting"])

    return render(request, 'committee/meeting_detail.html',
        {'title': page_title, 'meeting': meeting})

