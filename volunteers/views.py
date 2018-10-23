from django.shortcuts import render


def index(request):
    page_title = "For Volunteers"

    return render(request, 'volunteers/volunteers_hub.html', {'title': page_title})
