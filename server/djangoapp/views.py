import json

from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def register_user(request):
    if request.method != "POST":
        return JsonResponse(
            {"status": False, "message": "POST request required"},
            status=405
        )

    try:
        data = json.loads(request.body)

        username = data.get("username")
        password = data.get("password")
        email = data.get("email")
        first_name = data.get("first_name")
        last_name = data.get("last_name")

        if User.objects.filter(username=username).exists():
            return JsonResponse({
                "status": False,
                "message": "Username already exists"
            })

        User.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )

        return JsonResponse({
            "status": True,
            "message": "User registered successfully"
        })

    except Exception as e:
        return JsonResponse({
            "status": False,
            "message": str(e)
        })


@csrf_exempt
def login_user(request):
    if request.method != "POST":
        return JsonResponse(
            {"status": False, "message": "POST request required"},
            status=405
        )

    try:
        data = json.loads(request.body)

        username = data.get("username")
        password = data.get("password")

        user = authenticate(
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)

            return JsonResponse({
                "status": True,
                "message": "Login successful",
                "username": user.username
            })

        return JsonResponse({
            "status": False,
            "message": "Invalid username or password"
        })

    except Exception as e:
        return JsonResponse({
            "status": False,
            "message": str(e)
        })


@csrf_exempt
def logout_user(request):
    logout(request)

    return JsonResponse({
        "status": True,
        "message": "Logout successful"
    })