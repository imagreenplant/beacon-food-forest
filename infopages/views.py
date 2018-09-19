from django.shortcuts import render


def faq(request):
    return render(request, 'infopages/faq.html', {})


def permaculture(request):
    return render(request, 'infopages/permaculture.html', {})


def project(request):
    return render(request, 'infopages/project.html', {})


def howWeStarted(request):
    return render(request, 'infopages/howwestarted.html', {})


def getInvolved(request):
    return render(request, 'infopages/get-involved.html', {})


def codeOfConduct(request):
    return render(request, 'infopages/code-of-conduct.html', {})
