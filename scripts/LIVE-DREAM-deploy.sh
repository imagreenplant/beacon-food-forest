cd ~/lapora.net/beacon-food-forest/scripts/
echo "============ Fetching new code from git =============="
git fetch
git rebase
echo "============ Applying virtual environment =============="
export WORKON_HOME=$HOME/.python-environments
export PROJECT_HOME=$HOME/django-projects
export VIRTUALENVWRAPPER_PYTHON=$HOME/python3.5/bin/python3.5
source $HOME/bin/virtualenvwrapper.sh
workon bff-py3.5
cd $HOME/django-projects/beacon-food-forest-main/
echo "============ Installing new requirements =============="
pip install --upgrade pip
pip install -r requirements.txt
echo "============ Collecting new static files =============="
python manage.py collectstatic --noinput
echo "============ Migrating database schema =============="
python manage.py migrate
echo "============ Finished Deployment =============="