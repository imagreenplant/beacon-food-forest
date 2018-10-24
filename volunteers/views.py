from django.shortcuts import render


def index(request):
    page_title = "Tools For Volunteers"

    return render(request, 'volunteers/volunteers_hub.html', {'title': page_title})


def individual(request):
    page_title = "Log Your Volunteer Hours"

    return render(request, 'volunteers/individual_hours.html', {'title': page_title})


def group(request):
    page_title = "Log Your Group Meeting Hours"

    return render(request, 'volunteers/group_hours.html', {'title': page_title})
