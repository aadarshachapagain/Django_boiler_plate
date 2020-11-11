##Working with environment variable using Third party package.

Django-environ.
Step 1: Install Django-environ.
    pip install django-environ OR Directly Install package from IDE Setting > Package Interpreter . 
Step 2: Create .env file in same directory as Setting.py 
    Now add key variable with secret key or password you want to keep away from setting.py

    For example:
        SECRET_KEY=sdjflkasjdflkj3r34343 

Step 3. In Setting.py add following code which allow us to call variable from .env file.

    import environ
    root = environ.Path(__file__) - 3  # get root of the project
    env = environ.Env()
    environ.Env.read_env() 

Step 4: TO call any variable use
    For example
    SECRET_KEY=env.str('SECRET_KEY')

Step 5: Run Python manage.py runserver. It should work.