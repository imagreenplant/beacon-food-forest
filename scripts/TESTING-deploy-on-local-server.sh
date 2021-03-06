cd $HOME/django-projects/test/beacon-food-forest-main/
echo "============ Fetching new code from git =============="
git fetch
echo "Checking out branch $1 to test.beaconfoodforest.org"
git checkout $1
git rebase
echo "============ Applying virtual environment =============="
export WORKON_HOME=$HOME/.python-environments
export PROJECT_HOME=$HOME/django-projects
export VIRTUALENVWRAPPER_PYTHON=$HOME/python3.5/bin/python3.5
source $HOME/bin/virtualenvwrapper.sh
workon bff-test-py3.5
cd $HOME/django-projects/test/beacon-food-forest-main/
echo "============ Installing new requirements =============="
pip install --upgrade pip
pip install -r requirements.txt
echo "============ Collecting new static files =============="
python manage.py collectstatic --noinput
echo "============ Migrating database schema =============="
python manage.py migrate
echo "============ Finished Deployment =============="